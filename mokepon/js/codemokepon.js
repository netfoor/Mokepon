function startGame(){

    let buttonPetPlayerOne = document.getElementById('button-pet')
    buttonPetPlayerOne.addEventListener('click', selectPetPlayer)   
}

function selectPetPlayer(){
    let spanPlayerPet = document.getElementById("player-pet")

    if (hipodoge.checked)
    {
        spanPlayerPet.innerHTML = "You selected Hipodoge"
    }
    else if (capipepo.checked)
    {
        spanPlayerPet.innerHTML = "You selected Capipepo"
    } 
    else if (ratiguella.checked)
    {
        spanPlayerPet.innerHTML = "You selected Ratiguella"
    }
    else if (langostelvis.checked)
    {
        spanPlayerPet.innerHTML = "You selected Langostelvis"
    }
    else if (tucapalma.checked)
    {
        spanPlayerPet.innerHTML = "You selected Tucapalma"
    }
    else if (pydos.checked)
    {
        spanPlayerPet.innerHTML = "You selected Pydos"
    }
    else 
    {
        alert("You didn't select any pets")
    }
    selectPetEnemy()
} 

function random(max,min){
    return Math.floor(Math.random() * (max - min + 1)+ min)
}

function selectPetEnemy(){
    let spanEnemyPet = document.getElementById("enemy-pet")
    let petEnemy = random(1,6)
    switch(petEnemy)
    {
        case 1: 
        spanEnemyPet.innerHTML = "PC selected Hipodoge"
        break; 
        case 2: 
        spanEnemyPet.innerHTML = "PC selected Capipepo"
        break; 
        case 3: 
        spanEnemyPet.innerHTML = "PC selected Ratiguella"
        break;
        case 4: 
        spanEnemyPet.innerHTML = "PC selected Langostelvis"
        break; 
        case 5: 
        spanEnemyPet.innerHTML = "PC selected Langostelvis"
        break; 
        case 6:
            spanEnemyPet.innerHTML = "PC selected Tucapalma"
    }
}

window.addEventListener('load', startGame)