# js13kgames-parcel-starter
This repo uses [Parcel](https://parceljs.org/) to build and zip games created for [js13kgames](http://js13kgames.com/).

## Requirements

The commands assume [Yarn](https://yarnpkg.com/en/docs/install) is installed.

## Commands

### `yarn run serve`

Start the Parcel build server at `http://localhost:1234`.

### `yarn run build`

Build, minify, and inline the game to `./dist/inlined/index.html`.

### `yarn run party`

Build, minify, inline, and zip the game to `./dist/zipped/game.zip`. This command finishes with a log message that says if the zip file is under 13k.
