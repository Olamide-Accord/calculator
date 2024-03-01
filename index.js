let display = document.querySelector('.input-display')
let calculatorContainer = document.querySelector('.calculator')
let slider = document.querySelector('.slider')
let numbers = document.querySelectorAll('.numbers')
let operators = document.querySelectorAll('.operators')
let equal = document.querySelector('.equal')
let reset = document.querySelector('.reset')
let deleteBtn = document.querySelector('.delete')
let buttons = document.querySelectorAll('button')

document.addEventListener('DOMContentLoaded', () => {
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      if (e.target) {
        let identifier = e.target.innerHTML
        if (identifier === 'RESET') {
          display.value = '0'
        } else if (identifier === 'DEL') {
          if (display.value.length > 0) {
            display.value = display.value.substring(0, display.value.length - 1)
          } else {
            display.value = ''
          }
        } else if (identifier === '=') {
          let evalValue = eval(display.value)
          display.value = evalValue
        } else {
          if (
            display.value == '0' &&
            identifier !== '.' &&
            identifier !== '+' &&
            identifier !== '-' &&
            identifier !== '*' &&
            identifier !== '/'
          ) {
            display.value = identifier
          } else {
            display.value += identifier
          }
        }
      }
    })
  })

  let updateColorScheme = value => {
    document.body.setAttribute('data-theme', value)
  }
  updateColorScheme(1)

  window.changeColorScheme = () => {
    let rangeValue = document.getElementById('myRange').value
    switch (rangeValue) {
      case '1':
        display.style.backgroundColor = 'var(--screenBackgroundTheme1)'
        display.style.color = 'var(--white)'
        slider.style.backgroundColor = 'var(--screenBackgroundTheme1)'
        calculatorContainer.style.backgroundColor =
          'var(--toggleBackgroundTheme1)'
        numbers.forEach(item => {
          item.style.backgroundColor = 'var(--keyShadow3Theme1)'
          item.style.color = 'var(--white)'
        })
        operators.forEach(item => {
          item.style.backgroundColor = 'var(--screenBackgroundTheme1)'
          item.style.color = 'var(--white)'
        })
        equal.style.backgroundColor = 'var(--keyBackground2Theme1)'
        reset.style.backgroundColor = 'var(--keyBackground1Theme1)'
        reset.style.boxShadow = '0 3px 0 0 var(--keyBackground1Theme1)'
        deleteBtn.style.boxShadow = '0 3px 0 0 var(--keyBackground1Theme1)'
        deleteBtn.style.backgroundColor = 'var(--keyBackground1Theme1)'
        break
      case '2':
        display.style.backgroundColor = 'var(--screenBackgroundTheme2)'
        display.style.color = 'var(--text4)'
        slider.style.backgroundColor = 'var(--toggleBackgroundTheme2)'
        calculatorContainer.style.backgroundColor =
          'var(--toggleBackgroundTheme2)'
        numbers.forEach(item => {
          item.style.backgroundColor = 'var(--screenBackgroundTheme2)'
          item.style.color = 'var(--text4)'
        })
        operators.forEach(item => {
          item.style.backgroundColor = 'var(--screenBackgroundTheme2)'
          item.style.color = 'var(--text4)'
        })
        equal.style.backgroundColor = 'var(--keyBackground2Theme2)'
        reset.style.backgroundColor = 'var(--keyBackground1Theme2)'
        reset.style.boxShadow = '0 3px 0 0 var(--keyBackground1Theme2)'
        deleteBtn.style.boxShadow = '0 3px 0 0 var(--keyBackground2Theme2)'
        deleteBtn.style.backgroundColor = 'var(--keyBackground2Theme2)'

        break
      case '3':
        display.style.backgroundColor = 'var(--screenBackgroundTheme3)'
        display.style.color = 'var(--text3)'
        slider.style.backgroundColor = 'var(--screenBackgroundTheme3)'
        calculatorContainer.style.backgroundColor =
          'var(--toggleBackgroundTheme3)'
        numbers.forEach(item => {
          item.style.backgroundColor = 'var(--keyBackground3Theme3)'
          item.style.color = 'var(--text3)'
          item.style.boxShadow = '0 5px 0 0 var(--keyBackground1Theme3)'
        })
        operators.forEach(item => {
          item.style.backgroundColor = 'var(--keyBackground3Theme3)'
          item.style.color = 'var(--text3)'
          item.style.boxShadow = '0 3px 0 0 var(--keyBackground1Theme3)'
        })
        equal.style.backgroundColor = 'var(--keyBackground2Theme3)'
        reset.style.backgroundColor = 'var(--keyBackground1Theme3)'
        reset.style.boxShadow = '0 3px 0 0 var(--keyBackground3Theme3)'
        deleteBtn.style.boxShadow = '0 3px 0 0 var(--keyBackground3Theme3)'
        deleteBtn.style.backgroundColor = 'var(--keyBackground1Theme3)'
        break
      default:
        console.log(display)
        break
    }
    updateColorScheme(rangeValue)
  }
})
