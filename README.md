# FoundryVTT Entity Tiles

This module automatically creates a tile when pressing shift and drag-dropping an entity with an associated image (such as a journal entry, actor, item, scene or rollable table) to the canvas, saving you the trouble of having to find that picture again through the file picker.

**Author**: Xurxo Diz Pico (xurxodiz#5885)

## Installation

You can search for it in the module browser (recommended), or install manually using the manifest URL:

- https://github.com/xurxodiz/foundryvtt-entity-tiles/releases/latest/download/module.json

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

### License

The content in this repository is covered by a [CC-BY 4.0 license](https://creativecommons.org/licenses/by/4.0/)
(do what you want with it as long as you add a line saying where you got it from.)

