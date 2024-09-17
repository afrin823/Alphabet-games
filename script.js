// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection);

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
 
    const Alphabet = alphabets[index];
    console.log(index, Alphabet);

    return Alphabet;
}
function handelKeyboardButtonPress(event){
    const playerKeyPressed = event.key;
    console.log('player pressed:', playerKeyPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const targetAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = targetAlphabet.toLowerCase();
    console.log(playerKeyPressed, targetAlphabet);

    if(playerKeyPressed === expectedAlphabet){
        console.log('you get a point');
        console.log('you have pressed correctly', expectedAlphabet);
        addBackgroundColorById(expectedAlphabet);
        continueGame();
    }else{
        console.log('you missed, you lost life');
    }
}
document.addEventListener('keyup', handelKeyboardButtonPress)

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet:', alphabet);
    //set random alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    addBackgroundColorById(alphabet);
}
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}