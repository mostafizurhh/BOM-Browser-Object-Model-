function showAlert() {
    const num = Math.random() * 10;
    console.log(num)
    if (num < 5) { alert('this is an alert message from browser') }
}

function showConfirm() {
    const num = Math.random() * 100;
    console.log(num);
    if (num < 20) {
        const answer = confirm('do you want to proceed?');
        console.log(answer)
        if (!!answer) {
            const answer2 = confirm('press cancel')
            console.log(answer2)
        }
        return answer;
    }
}

function showPrompt() {
    const ans = prompt('enter your name')
    console.log(ans)
    if (!!ans) {
        const ans1 = prompt('enter your email')
        console.log(ans1)
        if (!!ans1) {
            alert('thanks')
        }
    }
    else {
        alert('please put your info')
        prompt('enter your name')
    }
}