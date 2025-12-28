#! /bin/bash


VARS=./sitevars.sh # user-supplied vars for SITE, APP, and FOLDER



if [ ! -f "$VARS" ]; then
   echo "You must supply app environment variables in $VARS to deploy"
   exit 2
fi

source "$VARS"

if [ -z "$SITE" ]; then
    echo "no SITE"
    exit 4
fi
if [ -z "$APP" ]; then
    echo "no APP"
    exit 4
fi
if [ -z "$FOLDER" ]; then
    echo "no FOLDER"
    exit 4
fi

tools=("zip" "scp" "ssh" "npm" "npx" "sed")

for tool in "${tools[@]}"; do
    if ! which "$tool" >/dev/null; then
        echo "$tool" not found
        exit 3
    fi
done

rm -rf build # Remove old build
rm -rf chess # Remove old build
rm -rf chess # Remove old build
rm chess.zip
rm chess.zip

# build

bun run build 

mv build "$APP"

# compress output
zip -vr "$APP".zip "$APP"

# copy zip to site
scp "$APP".zip "$SITE":public_html

# unzip zip at site, exit
export SHELL_COMMAND="cd public_html; rm -rf $APP; unzip $APP.zip; rm $APP.zip; exit; bash"
echo "$SHELL_COMMAND"
ssh -t "$SITE" "$SHELL_COMMAND"
cd ../
echo $(pwd)
rm -rf "$APP"