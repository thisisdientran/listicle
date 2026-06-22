console.log('header.js loaded')

const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const heroBanner = document.createElement('div')
heroBanner.className = 'hero-banner'

const heroTitle = document.createElement('h2')
heroTitle.textContent = 'AI Stocks Earning Date'

const heroDescription = document.createElement('p')
heroDescription.textContent = 'The list of the earning date of the top AI companies'

const heroButton = document.createElement('button')
heroButton.textContent = 'See all stocks'
heroButton.addEventListener('click',function handleClick(event){
    window.location = '/'
})

heroBanner.appendChild(heroTitle)
heroBanner.appendChild(heroDescription)
heroBanner.appendChild(heroButton)

header.append(headerContainer)
headerContainer.appendChild(heroBanner)