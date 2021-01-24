#! /bin/bash
rm -rf build
rm -rf chess

yarn build

mv build chess
