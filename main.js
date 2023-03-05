let closedCookie = document.querySelector('.closedCookie'),
    screen1 = document.querySelector('.screen1'),
    screen2 = document.querySelector('.screen2'),
    message = document.querySelector('.message'),
    openedCookie = document.querySelector('.opened-cookie')

let messages = [
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'A vida trará coisas boas se tiver paciência.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'Não há que ser forte. Há que ser flexível.',
    'Siga os bons e aprenda com eles.',
    'O nosso primeiro e último amor é… o amor-próprio.'
]

let p = document.createElement('p')

closedCookie.addEventListener('click', openCookie)

function openCookie(){
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    showMessage()
}

function openOtherCookie(){
    screen2.classList.add('hide')
    screen1.classList.remove('hide')

    p.innerHTML = ''
}

function showMessage(){
    let positionMessage = Math.floor(Math.random() * messages.length)
    
    message.appendChild(p)
    p.innerHTML = messages[positionMessage]
}

