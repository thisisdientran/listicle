console.log('gifts.js loaded')

const renderStocks = async() => {
    const response = await fetch('/stocks')
    const data = await response.json()
    
    const mainContent = document.getElementById('main-content')
    
    if (data) {
        data.map(stock => {
            const card = document.createElement('div')
            card.classList.add('card')
        
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${stock.image})`

            const stockName = document.createElement('h3')
            stockName.textContent = `Name: ${stock.name}`
        
            const stockEarningDate = document.createElement('p')
            stockEarningDate.textContent = `Earning Date: ${stock.earningDate}`

            const stockLink = document.createElement('a')
            stockLink.textContent = 'Read More >'
            stockLink.setAttribute('role','button')
            stockLink.href = `/stocks/${stock.id}`
        
            bottomContainer.appendChild(stockName)
            bottomContainer.appendChild(stockEarningDate)
            bottomContainer.appendChild(stockLink)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
        // console.log('gifts.js body')
    }
    else {
        const message = document.createElement('p')
        message.textContent('No Data were found :(')
        mainContent.appendChild(message)
        console.log('gifts.js error')
    }
}

// console.log('gifts.js ended')
const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderStocks()
}