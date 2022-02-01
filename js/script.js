const tabs = document.querySelectorAll('.tabs__toggle'),
  contents = document.querySelectorAll('.tabs__content')

function tabcard() {
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      contents.forEach((content) => {
        content.classList.remove('is-active')
      })
      tabs.forEach((tab) => {
        tab.classList.remove('is-active')
      })
      tabs[index].classList.add('is-active')
      contents[index].classList.add('is-active')
    })
  })
}
tabcard()
