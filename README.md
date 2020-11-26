# FoundryVTT Entity Tiles

This module automatically creates a tile from the image associated with an entity when dropping it into the canvas.

**Author**: Xurxo Diz Pico [Discord: xurxodiz#5885]

## Installation

Go to the module browser and paste this URL:
https://github.com/xurxodiz/foundryvtt-entity-tiles/releases/latest/download/module.json

Pending addition to the searchable list.

## Usage

Drag and drop an entity to the canvas **while pressing shift**. If it has an image associated, a tile will be created from that image.

Dragging and dropping without pressing shift, or when an image is not associated with the entity, will carry on with the usual default behaviour expected.

Entities currently supported:
- Actors
- Items
- Journal entries
- Rollable tables
- Scenes

## Acknowledgements

Born trying to update [ImageDrop](https://gitlab.com/mesfoliesludiques/foundryvtt-image-drop/), from which only the tile creation code remains.
Hooks and drag-drop code based on [FateX](https://github.com/anvil-vtt/FateX) and [DragUpload](https://github.com/cswendrowski/FoundryVTT-Drag-Upload).

