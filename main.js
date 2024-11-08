
const image = document.body.querySelector("#animal-image")



function handleRandomImage(){
    let randomNumber = Math.floor(Math.random() * 9);
    randomNumber = handleUnexpectedNumbers(randomNumber);

    image.src = `/assets/images/${randomNumber}.jpg`;
    console.log(randomNumber)
}

function handleUnexpectedNumbers(selectedNumber) {
    if(selectedNumber < 1) return 1
    if(selectedNumber > 8) return 8
    return selectedNumber
}

window.onload = () => {
    handleRandomImage();
    console.log("woorks")
}