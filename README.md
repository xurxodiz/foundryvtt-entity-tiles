# FoundryVTT Entity Tiles

This module automatically creates a tile when pressing `Alt` while drag-dropping an entity with an associated image to the canvas (such as a journal entry, actor or item), therefore saving you the trouble of having to find that picture again through the file picker.

## Installation

You can search for it in the module browser (recommended), or install manually using the manifest URL:

- https://github.com/xurxodiz/foundryvtt-entity-tiles/releases/latest/download/module.json

## Usage

Drag and drop an entity to the canvas while pressing `Alt`. If it has an image associated, a tile will be created from that image. The key itself can be changed in the module settings menu: `Alt`, `Meta`, `Shift` and `Control` are currently supported.

Dragging and dropping without pressing the key, or when an image is not associated with the entity, will carry on with the usual default behaviour expected.

Actors, items, journal entries, rollable tables and scenes are currently supported.

## Known issues

`Alt` has no known issues in any platform or browser, that's why it's the default key—but it does conflict with core behaviour as it's the key for dropping hidden actors. If you miss that functionality you can change it to any of the other possible keys, just be aware of the possible issues listed below and take your pick!

### macOS:

Regardless of browser, `Control` will bring up the contextual menu if you press it before you click to drag, so first click and drag, then press the key.

**Chrome**:
- `Meta (Command)` does not work
- `Shift` does not work if you press it before you click to drag, so first click and drag, then press the key before dropping

### Windows:

Regardless of browser, `Meta (Windows)` will also open the Start menu unless you disable it somehow.

**Firefox**:
- `Meta (Windows)` does not work

**Chrome, Edge**
- `Meta (Windows)` does not work if you press it while you drag, so first press it, then click and drag
- `Shift` does not work if you press it before you click to drag, so first click and drag, then press the key before dropping

## Acknowledgements

Born trying to update [ImageDrop](https://gitlab.com/mesfoliesludiques/foundryvtt-image-drop/), from which only the tile creation code remains.
Hooks and drag-drop code based on [FateX](https://github.com/anvil-vtt/FateX) and [DragUpload](https://github.com/cswendrowski/FoundryVTT-Drag-Upload).
Big special thanks to the [FoundryVTT en Español](https://discord.gg/MHCerwd) community for their continued support, suggestions and help.

### Contributors

- Jorge Diz Pico (xurxodiz#5885)

### License

The content in this repository is covered by a [CC-BY 4.0 license](https://creativecommons.org/licenses/by/4.0/)
(do what you want with it as long as you add a line saying where you got it from.)
