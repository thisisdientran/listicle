console.log('gift.js loaded')

const renderStock = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())

    const response = await fetch('/stocks')
    const data = await response.json()

    let stock = data.find(stock => stock.id === requestedID)

    if(stock){
        document.title = `Stock - ${stock.name}`
        document.getElementById('stock-image').src = stock.image
        document.getElementById('stock-name').textContent = `Name: ${stock.name}`
        document.getElementById('stock-earning-date').textContent = `Earning Date: ${stock.earningDate}`
        document.getElementById('stock-description').textContent = `Description: ${stock.description}`
        document.getElementById('stock-submitted-on').textContent = `Submitted On: ${stock.submittedOn}`

        const stockDetails = document.getElementsByClassName('stock-details')
        const stockLink = document.createElement('a')
        stockLink.textContent = '< Back'
        stockLink.setAttribute('role','button')
        stockLink.href = `/`
        stockDetails.appendChild(stockLink)
    } else {
        const stockContent = document.getElementById('stock-content')
        const message = document.createElement('p')
        message.textContent = 'No stock were found :('
        stockContent.appendChild(message)
    }
}

renderStock()