class card {
  constructor(id, image, name, isRotate = false) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.isRotate = isRotate;
  }
  render() {
    return (`
        <div class="card" data-id='${this.id}'>
            <div class="card-inner">
                <div class="${this.isRotate ? 'card-front isRotated' : 'card-front'}">
                    <img src="image/${this.image}" alt="card image">
                </div>
                <div class="card-back"> </div>
            </div>
        </div>
    `)
  }
}

const cards = [
  new card(1, 'naruto.png', 'nartuo'),
  new card(2, 'sakura.png', 'sakura'),
  new card(3, 'sasuke.png', 'sasuke'),
  new card(4, 'itachi.png', 'itachi'),
  new card(5, 'kakashi.png', 'kakashi'),
  new card(6, 'obito.png', 'obito'),
]

let playTime = cards.length * 5;
let isRotated = false;
let isLocked = false;
let firstCard, nextCard;
let progress = 100;
let startCount = true;
let allMatch = 0;

function renderCard() {
  let content = ''
  const body = document.getElementById('memory-cards')
  let shuffledCards = shuffleCard(cards)
  shuffledCards.forEach((data, index) => {
    content += data.render()
  })
  body.innerHTML = content
}

function shuffleCard(originArr) {
  let fullCard = [...originArr, ...originArr];
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  return shuffle(fullCard)
}

function rotateCard() {
  if (isLocked) {
    return
  }
  this.classList.add("isRotated");
  if (!isRotated) {
    isRotated = true;
    firstCard = this
    return
  }
  if (firstCard === this) {
    return
  }
  nextCard = this
  isRotated = false
  isLocked = true
  checkMatch()
  if (allMatch === cards.length) {
    stopCountDown()
    stopBackgroudSound()
    setTimeout(() => {
      toggleModal('congratulation', 'show')
      playSound(handClap)
    }, 1000)
  }
}

function checkMatch() {
  if (firstCard.dataset.id === nextCard.dataset.id) {
    disableCards()
    playSound(great)
    allMatch += 1;
    return
  }
  reRotateCards()
  playSound(wrong)
}

function playSound(sound) {
  let great = document.getElementById('great')
  let wrong = document.getElementById('wrong')
  let handClap = document.getElementById('handClap')
  let timeOut = document.getElementById('timeOut')
  let background = document.getElementById('background')
  setTimeout(() => {
    switch (sound) {
      case great:
        great.play()
        break;
      case wrong:
        wrong.play()
        break;
      case handClap:
        handClap.play()
        break;
      case background:
        background.play()
        break;
      default:
        timeOut.play()
    }
  }, 400);
}

function stopBackgroudSound() {
  let background = document.getElementById('background')
  background.pause()
}

function replayBackgroundSound() {
  let background = document.getElementById('background')
  background.currentTime = 0;
  background.play();
}

function disableCards() {
  firstCard.removeEventListener('click', rotateCard);
  nextCard.removeEventListener('click', rotateCard);
  hideCard()
  setTimeout(() => {
    isLocked = false
  }, 1000)
}

function hideCard() {
  setTimeout(() => {
    firstCard.classList.add('hide')
    nextCard.classList.add('hide')
  }, 1000);
}

function reRotateCards() {
  setTimeout(() => {
    firstCard.classList.remove('isRotated');
    nextCard.classList.remove('isRotated');
    isLocked = false;
  }, 1000);
}

function cardActions() {
  const rederedCards = document.querySelectorAll('.card')
  rederedCards.forEach(card => {
    card.addEventListener('click', rotateCard)
  });
}

function countDown(time = playTime) {
  const progressBar = document.getElementById('current')
  toggleModal('play-again', 'hide')
  let timer = setInterval(() => {
    --progress
    progressBar.style.width = progress + '%'
    changeBarColor(50, 'orange')
    changeBarColor(10, 'red')
    if (progress === 0) {
      stopBackgroudSound()
      progressBar.removeAttribute("style")
      toggleModal('play-again', 'hide')
      playSound()
      clearInterval(timer)
    }
    if (!startCount) {
      clearInterval(timer)
    }
  }, (time * 10));

  function changeBarColor(time, color) {
    if (progress === time) {
      progressBar.style.backgroundColor = color
    }
  }
}

function toggleModal(modal, state) {
  const selectedModal = document.getElementById(modal)
  if (state === 'hide') {
    selectedModal.style.display = 'none'
    return
  }
  selectedModal.style.display = 'block'
}

function playAgain() {
  const playAgainBtn = document.getElementById('play-again')
  playAgainBtn.addEventListener('click', replay)
}

function replay() {
  toggleModal('play-again', 'hide')
  restartLevel()
  replayBackgroundSound()
}

function resetDefault() {
  isRotated = false;
  isLocked = false;
  firstCard = null, nextCard = null;
  progress = 100;
  allMatch = 0;
}

function stopCountDown() {
  startCount = false
  countDown()
}

function startCountDown() {
  startCount = true
  countDown()
}

function startPlay(button, modal) {
  let playBtn = document.getElementById(button)
  let playModal = document.getElementById(modal)
  playBtn.addEventListener('click', (e) => {
    button === 'play-btn' ? playSound(background) : replayBackgroundSound()
    playModal.style.display = 'none';
    restartLevel()
  })
}

function restartLevel() {
  resetDefault()
  renderCard()
  startCountDown()
  cardActions()
}

document.addEventListener('DOMContentLoaded', function () {
  renderCard()
  cardActions()
  toggleModal('play-again', 'hide')
  toggleModal('congratulation', 'hide')
  startPlay('play-btn', 'play')
  startPlay('congratulation-btn', 'congratulation')
  playAgain()
})

