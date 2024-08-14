let randomNum = Math.round(Math.random() * 100)
console.log(randomNum);
let scoreMax = 20
let newRandomNum = 0
let inputPath = document.getElementById('input')

document.getElementById('scoreYour').textContent = scoreMax

function rainbowBackGround() {
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'lightBlue', 'violet'];
    let index = 0;

    function changeColor() {
        document.body.style.background = colors[index];
        index = (index + 1) % colors.length;
        setTimeout(changeColor, 300); 
    }

    changeColor(); 
}

function checkForValid() {
    let num = Number(inputPath.value);
    if (isNaN(num)) {
        alert('Введите число!');
        return false;
    }
    return true;
}

function reload(){
    location.reload()
}

function checkNum() {
    if(checkForValid() === true){
        if(Number(inputPath.value) > 100 || Number(inputPath.value) <= 0){
            alert('Введите число от 1 до 100')
            reload()
        } else{
            document.getElementById('number').textContent = randomNum
            if(Number(inputPath.value) != randomNum){
                scoreMax = scoreMax - 1
                if (scoreMax == 0){
                    document.getElementById('number').textContent = 'Ты проиграл!'
                    reload()
                }
                document.getElementById('scoreYour').textContent = scoreMax
                newRandomNum = Math.round(Math.random() * 100)
                document.getElementById('number').textContent = newRandomNum
            } else{
                alert('у тебя получилось!, шанс того что ты угадал 1%')
                rainbowBackGround()
                document.getElementById('scoreMax').textContent = scoreMax
            }
        }
    } else{
        console.log('false value');
        reload()
    }
}

function checkForEnter(e) {
    if (e.keyCode === 13) { 
        document.querySelector(".catch .button").click();
    }
}
