window.onload = initTile

function initTile(){

    // let tileRow = document.createElement("div")
    // tileRow.className = 'TileIMG'
    // tileRow.innerText = 'test'

    // document.getElementById('GameContainer').appendChild(tileRow)

    for( i=0; i<8; i++){

        let rowIdx = 'row' + i

        for(j=0; j<8; j++){
            let tileIdx = 'tileR' + i + 'C' + j
            
            document.getElementById(rowIdx).innerHTML += `<div class="GameTile" id ="${tileIdx}">
                <img class="TileIMG" src="assets/game/tile.png" alt="tile">
            </div>`

        }
        
    }
}



document.getElementById('tileR1C1').innerHTML +=
`<img src="assets/game/bed_of_chaos.png" class="PlayerPos">`



function redirectToHome(){
    window.location.href = "Home.html"
}