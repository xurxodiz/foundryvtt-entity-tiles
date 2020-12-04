// Hook handler into canvas
Hooks.once('ready', async function() {
    new DragDrop({ 
        callbacks: { 
            drop: handleDrop
        } 
    })
    .bind($("#board")[0]);

    game.settings.register("entity-tiles", "requiredKey", {
        name: "EntityTiles.Settings.RequiredKey",
        hint: "EntityTiles.Settings.RequiredKeyHint",
        scope: "client",
        config: true,
        default: "alt",
        type: String,
        choices: {
            "alt": "EntityTiles.Keys.Alt",
            "meta": "EntityTiles.Keys.Meta",
            "shift": "EntityTiles.Keys.Shift",
            "control": "EntityTiles.Keys.Control"
        }
    });

    game.settings.register("entity-tiles", "hiddenByDefault", {
        name: "EntityTiles.Settings.HiddenByDefault",
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    });

    game.settings.register("entity-tiles", "lockedByDefault", {
        name: "EntityTiles.Settings.LockedByDefault",
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    });

    game.settings.register("entity-tiles", "maxWidth", {
        name: "EntityTiles.Settings.MaxWidth",
        scope: "client",
        config: true,
        default: 1000,
        type: Number
    });

        game.settings.register("entity-tiles", "maxHeight", {
        name: "EntityTiles.Settings.MaxHeight",
        scope: "client",
        config: true,
        default: 1000,
        type: Number
    });
});

function isTileIntended(event) {
    switch (game.settings.get("entity-tiles", "requiredKey")) {
        // first check: the user pressed the key before clicking on the entity
        // second check: the user pressed the key mid-drag
        case "alt":
            return game.keyboard._downKeys.has('Alt') || event.altKey;
            break;

        case "meta":
            return game.keyboard._downKeys.has('Meta') || event.metaKey;
            break;

        case "shift":
            return game.keyboard._downKeys.has('Shift') || event.shiftKey;
            break;

        case "control":
            return game.keyboard._downKeys.has('Control') || event.ctrlKey;
            break;

        default:
            return false;
            break;
    }
}

// Try to place a tile or fall back to default behaviour
async function handleDrop(event) {

    if (!isTileIntended(event)) {
        return canvas._onDrop(event);
    }

    try {

        let data = JSON.parse(event.dataTransfer.getData("text/plain"));
        let entity;

        switch (data.type) {
            case "Actor":
                entity = await Actor.fromDropData(data);
                break;

            case "Item":
                entity = await Item.fromDropData(data);
                break;

            case "JournalEntry":
                entity = await JournalEntry.fromDropData(data);
                break;

            case "RollTable":
                entity = await RollTable.fromDropData(data);
                break;

            case "Scene":
                entity = await Scene.fromDropData(data);
                break;
        }

        if (entity && entity.data && entity.data.img) {
            _placeEntityImageTile(event, entity.data.img);
        } else {
            // entity unsupported or doesn't have the parameter we need
            canvas._onDrop(event);
        }

    } catch (err) {
        // any error whatsoever
        console.log("Entity Tiles | Error placing tile for entity");
        console.log(err);
        canvas._onDrop(event);
    }
}

// Create the tile
async function _placeEntityImageTile(event, imgSrc) {

    let maxWidth = game.settings.get("entity-tiles", "maxWidth");
    let maxHeight = game.settings.get("entity-tiles", "maxHeight");

    const tex = await loadTexture(imgSrc);
    let texWidth = tex.width;
    let texHeight = tex.height;

    // first we scale down if needed based on width
    if (texWidth > maxWidth) {
        let widthFactor = maxWidth / texWidth;
        texHeight = Math.round(texHeight * widthFactor);
        texWidth = maxWidth;
    }

    // then, if still necessary, based on height
    if (texHeight > maxHeight) {
        let heightFactor = maxHeight / texHeight;
        texWidth = Math.round(texWidth * heightFactor);
        texHeight = maxHeight;
    }

    let tileData = {
        img: imgSrc,
        width: texWidth,
        height: texHeight,
        hidden: game.settings.get("entity-tiles", "hiddenByDefault"),
        locked: game.settings.get("entity-tiles", "lockedByDefault")
    };
    let t = canvas.tiles.worldTransform;
    tileData.x = (event.clientX - t.tx) / canvas.stage.scale.x,
    tileData.y = (event.clientY - t.ty) / canvas.stage.scale.y,
    Tile.create(tileData);
}
