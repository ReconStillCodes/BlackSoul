var areaList = [
    ['SEA OF FLAMES', 'A SCORCHING VOLCANIC WASTELAND WHERE FIRE AND ASH CHOKE THE AIR', '1.jpg_large'],

    ['SHRINE OF AMANA', 'A SERENE BUT TREACHEROUS WELAND GUARDED BY DEVOUT WARRIORS', '2.jpg'],

    ['BLIGHT TOWN', 'A DECAYING, TOXIC SHANTYTOWN WHERE HUMANITY CLINGS TO SURVIVAL', '3.jpg'],

    ['LAKE OF DEATH', 'A POISONOUS LAKE RUMORED TO BE THE RESTING PLACE OF A TERRIBLE CURSE', '4.webp']
]

var areaOptionIdx = 0
// document.getElementById('AreaOption0').style.boxShadow = '0px 0px 15px var(--Brown)'


document.getElementById('character2').style.transform = 'translateX(300%)'

document.getElementById('character3').style.transform = 'translateX(350%)'

document.getElementById('CharDesc1').style.visibility = 'visible'


function setArea(i){
    let oldArea = 'AreaOption' + areaOptionIdx

    let newArea = 'AreaOption' + i

    document.getElementById('AreaTitle').innerHTML = areaList[i][0]
    
    document.getElementById('AreaSubtitle').innerHTML = areaList[i][1]

    document.getElementById('AreaImg').style.backgroundImage = `url(assets/images/area/${areaList[i][2]})`

    // document.getElementById(oldArea).style.boxShadow = 'none'

    // document.getElementById(newArea).style.boxShadow = '0px 0px 15px var(--Brown)'

   areaOptionIdx = i
   setCurrArea(i)
}


function carousel(i){
    showCharDesc(i)
    switch(i){
        case 1:
            document.getElementById('character2').style.transform = 'translateX(300%)'

            document.getElementById('character3').style.transform = 'translateX(350%)'
            break

        case 2:
            document.getElementById('character2').style.transform = 'translateX(50%)'

            document.getElementById('character3').style.transform = 'translateX(350%)'
            break;
            
        case 3:
            document.getElementById('character2').style.transform = 'translateX(50%)'

            document.getElementById('character3').style.transform = 'translateX(100%)'
            break;
    } 
}

function showCharDesc(idx){
    
    for(i=1; i<=3; i++){
        let charIdx = 'CharDesc' + i
        
        if(i == idx){
            document.getElementById(charIdx).style.visibility = 'visible'
        }
        else{
            document.getElementById(charIdx).style.visibility = 'hidden'
        }

    }
}

var isPop = 1

document.getElementById('PopContainer').style.translate = '0%  50vh'

function popUp(){
    if(isPop == 1){
        document.getElementById('PopContainer').style.translate = '0% 95vh'

        isPop = 0
    }

    else{
        document.getElementById('PopContainer').style.translate = '0% 50vh'

        isPop = 1
    }

    
}

function redirectToDemo(){
    window.location.href = "Demo.html"
}