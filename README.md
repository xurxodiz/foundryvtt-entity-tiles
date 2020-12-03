# FoundryVTT Entity Tiles

This module automatically creates a tile when pressing a key (by default: shift) while drag-dropping an entity with an associated image (such as a journal entry, actor or item) to the canvas, therefore saving you the trouble of having to find that picture again through the file picker.

**Author**: Xurxo Diz Pico (xurxodiz#5885)

## Installation

You can search for it in the module browser (recommended), or install manually using the manifest URL:

- https://github.com/xurxodiz/foundryvtt-entity-tiles/releases/latest/download/module.json

## Usage

Drag and drop an entity to the canvas while pressing shift. If it has an image associated, a tile will be created from that image. The key itself can be changed in the module settings menu: `alt`, `meta`, `shift` and `control` are currently supported.

Dragging and dropping without pressing the key, or when an image is not associated with the entity, will carry on with the usual default behaviour expected.

Entities currently supported:
- Actors
- Items
- Journal entries
- Rollable tables
- Scenes

### Compatibility

**Firefox macOS**:
- _Control_ brings up the contextual menu if you press it before you click to drag, so first click and drag, then press the key
- Any other key works fine regardless of when you press the key

**Chrome macOS**:
- _Meta_ does not work
- _Control_ brings up the contextual menu if you press it before you click to drag, so first click and drag, then press the key
- _Shift_ is not registered properly if you press it before you click to drag, so first click and drag, then press the key
- _Alt_ works fine regardless of when you press the key

**Safari macOS**:
- Known to be wholly incompatible with FoundryVTT

Reports of compatibility in other platforms are much appreciated! (you can open up an issue to let me know, or reach me in Discord)

## Acknowledgements

Born trying to update [ImageDrop](https://gitlab.com/mesfoliesludiques/foundryvtt-image-drop/), from which only the tile creation code remains.
Hooks and drag-drop code based on [FateX](https://github.com/anvil-vtt/FateX) and [DragUpload](https://github.com/cswendrowski/FoundryVTT-Drag-Upload).

### License

The content in this repository is covered by a [CC-BY 4.0 license](https://creativecommons.org/licenses/by/4.0/)
(do what you want with it as long as you add a line saying where you got it from.)

