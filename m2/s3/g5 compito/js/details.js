const address = new URLSearchParams(location.search)
const productId = address.get('productId')


const deleteProduct = function () {
    fetch('https://striveschool-api.herokuapp.com/api/product/' + productId, {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDJhZDEzOWM0MzAwMTg4MTQ1YjciLCJpYXQiOjE2OTcxODY0NzcsImV4cCI6MTY5ODM5NjA3N30.hZuujHf_b77dfPmoEMyAHf6D_plyV-bQ77ryZnVZ910"
        }
    })
        .then((res) => {
            if (res.ok) {
                if (window.confirm("Vuoi cancellare il prodotto?")) {
                    location.assign('home.html')
                }

                console.log('prodotto eliminato')
            } else {
                throw new Error('errore')
            }
        })
        .catch((err) => {
            console.log('errore', err)
        })
}



const generateProductDetails = function (detail) {
    const row = document.getElementById('product-details')
    row.innerHTML = `
            <div class="col col-12 col-lg-6">
                <img
                src="${detail.randomImageUrl}"
                class="w-100 my-4"
                alt="product img"
                />
                <h3 class="text-center my-4">${detail.name}</h3>
                <p>${detail.brand}</p>
                <p>${detail.description}</p>
                <p>Prezzo: ${detail.price}€</p>
                <a href="#" class="btn btn-danger" id='delete-btn' onclick='deleteProduct()'>ELIMINA</a>
                <a href="home.html?eventId=${detail._id}" class="btn btn-primary">TORNA AI NOSTRI PRODOTTI</a>
                <a class="text-white" style="text-decoration: none;" href="edit.html?eventId=${detail._id}">Modifica</a>
                </button>
            </div>
    `
}


const getProductDetails = function () {
    fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
        headers: {
            'Content-Type':'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDJhZDEzOWM0MzAwMTg4MTQ1YjciLCJpYXQiOjE2OTcxODY0NzcsImV4cCI6MTY5ODM5NjA3N30.hZuujHf_b77dfPmoEMyAHf6D_plyV-bQ77ryZnVZ910"
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Errore nel caricamento dei dettagli')
            }
        })
        .then((productDetail) => {
            generateProductDetails(productDetail)
        })
        .catch((err) => console.log('ERRORE', err))
}

getProductDetails()