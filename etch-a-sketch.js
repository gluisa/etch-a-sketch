function makeGrid() {
    const container = document.querySelector("#container");
    const box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
}

    /*
    for (i =0; i < 16; i++){
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        row.textContent = i;

        for (j=0; j < 16; j++) {
            const col = document.createElement("div");
            col.className = "col";
            row.appendChild(col);
            col.textContent = j;
        }
    }
}
*/

makeGrid();
