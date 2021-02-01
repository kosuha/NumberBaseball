/*
TODO
입력에 중복된 숫자가 있는 경우(완료)
10회 안에 정답을 못 맞춘 경우
정답 맞춘 경우
CSS
ok
*/

const countText = document.querySelector('#countText')
const input = document.querySelector('#input')
const enter = document.querySelector('#enter')
const logs = document.querySelector('#logs')
const wrongInputAlert = document.querySelector('#wrongInputAlert')

let count = 10
const numbers = getRandomNumber()
countText.textContent = '도전 가능 횟수가 ' + count + '회 남았습니다.'

enter.addEventListener('click', () => {
    if (isValidNumber(input.value)) {
        compare(input.value)
        let newLog = document.createElement('div')
        logs.prepend(newLog)
        if (compare(input.value)[0] === 4) {
            newLog.textContent = '승리!'
        } else {
            newLog.textContent = compare(input.value)[0] + 'S' + compare(input.value)[1] + 'B'
        }
        wrongInputAlert.textContent = ''

    } else {
        wrongInputAlert.textContent = '잘못된 입력입니다.'
    }

    count--
    countText.textContent = '도전 가능 횟수가 ' + count + '회 남았습니다.'
    
    if (count === 0) {
        countText.textContent = '패배...'
    }
})

function getRandomNumber() {
    let resultNumbers = ''
    while (resultNumbers.length < 4) {
        const temp = String(Math.floor(Math.random() * 10))
        if (resultNumbers.includes(temp)) {
            continue
        }
        resultNumbers = resultNumbers + temp
    }
    return resultNumbers
}

function compare(inputValue) {
    let strike = 0
    let ball = 0

    for (let index = 0; index < inputValue.length; index++) {
        if (inputValue.indexOf(numbers[index]) === index) {
            strike++
        } else if (inputValue.indexOf(numbers[index]) !== -1) {
            ball++
        } else {
            //nothing
        }
    }

    return [strike, ball]
}

function isValidNumber(value) {
    if (!value) {
        return false
    }
    if (value.length !== 4) {
        return false
    }
    for (let index = 0; index < value.length; index++) {
        const regexp = new RegExp(value[index], 'g')
        if (value.match(regexp).length > 1) {
            console.log(value.match(regexp));
            return false
        }
    }
    return true
}
