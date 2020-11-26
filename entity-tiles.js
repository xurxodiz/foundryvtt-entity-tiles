// Hook handler into canvas
Hooks.once('ready', async function() {
    new DragDrop({ 
        callbacks: { 
            drop: handleDrop
        } 
    })
    .bind($("#board")[0]);
});

// Try to place a tile or fall back to default behaviour
async function handleDrop(event) {

    if (!event.shiftKey) {
        // only act on shift-drop
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
    const tex = await loadTexture(imgSrc);
    let tileData = {
        img: imgSrc,
        width: tex.width,
        height: tex.height
    };
    let t = canvas.tiles.worldTransform;
    tileData.x = (event.clientX - t.tx) / canvas.stage.scale.x,
    tileData.y = (event.clientY - t.ty) / canvas.stage.scale.y,
    Tile.create(tileData);
}
