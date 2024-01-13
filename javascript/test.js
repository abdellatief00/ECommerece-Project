// function ActiveButton(e){e.classList.toggle("btn-dark");}
function removeItem(itemId) {
    var elementToRemove = document.querySelector('.' + itemId);
    if (elementToRemove) {
        elementToRemove.remove();
    }
}

function incrementValue() {
    var inputElement = document.querySelector('input[type="number"]');
    if (inputElement) {
        inputElement.stepUp();
    }
}

function decrementValue() {
    var inputElement = document.querySelector('input[type="number"]');
    if (inputElement) {
        inputElement.stepDown();
    }
}