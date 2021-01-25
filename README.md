# Chess Puzzles

Version 0.1.0

Copyright 2021 Steven Mycynek

Live demo: https://stevenvictor.net/chess

There are a million chess front-ends, back-ends,
and component libraries out there, but I wanted
my own for fun.  In particular, I wanted to view
and share chess puzzles, as I enjoyed them in
**Bobby Fischer Teaches Chess**.

Eventually, I'd like to support a back-end to store user-submitted puzzles
and create an authoring tool in the UI, but one thing at a time :)

I looked at the FEN-string notation as well as PGN (Portable Game Notation),
but they both seemed to be not quite what I wanted for a simple position setup,
so I store the puzzles in a hard-coded array, each puzzle being a map of maps.
I may switch over to something more universal or flexible in the future.

## Usage

yarn install
yarn start
