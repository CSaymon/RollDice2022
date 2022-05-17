let diceClass = document.querySelectorAll('div')

//console.log(atualClass)

//console.log(diceClass[0])

//diceClass[(0, 1)].classList.remove('one')

function play() {
  let atualClass = document.querySelector('div').classList.value
  for (var i = 0; i < diceClass.length; i++) {
    diceClass[i].classList.remove(atualClass)
  }
  let number = Math.floor(Math.random() * 6 + 1)
  console.log(number)

  if (number == 1) {
    for (var i = 0; i < diceClass.length; i++) {
      diceClass[i].classList.add('one')
    }
  } else if (number == 2) {
    for (var i = 0; i < diceClass.length; i++) {
      diceClass[i].classList.add('two')
    }
  } else if (number == 3) {
    for (var i = 0; i < diceClass.length; i++) {
      diceClass[i].classList.add('three')
    }
  } else if (number == 4) {
    for (var i = 0; i < diceClass.length; i++) {
      diceClass[i].classList.add('four')
    }
  } else if (number == 5) {
    for (var i = 0; i < diceClass.length; i++) {
      diceClass[i].classList.add('five')
    }
  } else if (number == 6) {
    for (var i = 0; i < diceClass.length; i++) {
      diceClass[i].classList.add('six')
    }
  }
}

//console.log(document.querySelectorAll('div').classList)

//console.log(document.getElementById('dice'))

//document.querySelectorAll('div, div').classList.add('two')
