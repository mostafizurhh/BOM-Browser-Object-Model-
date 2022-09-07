document.getElementById('inputField').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        addName()
    }
})
document.getElementById('inputFieldAge').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        addAge()
    }
})

addName = () => {
    const input = document.getElementById('inputField');
    const inputValue = input.value;
    localStorage.setItem('name', inputValue);
    input.value = '';
}
removeName = () => {
    localStorage.removeItem('name');
}

addAge = () => {
    const input = document.getElementById('inputFieldAge');
    const inputValue = input.value;
    localStorage.setItem('age', inputValue);
    input.value = '';
}
removeAge = () => {
    localStorage.removeItem('age');
}

clearAll = () => {
    localStorage.clear()
}