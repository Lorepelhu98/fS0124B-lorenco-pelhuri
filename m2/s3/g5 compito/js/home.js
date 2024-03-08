
const renderProduct = function (everyProduct) {
    const row = document.getElementById('row')

    everyProduct.forEach(product => {
        const newCol = document.createElement('div')
        newCol.classList.add('col', 'col-12', 'col-sm-6', 'col-md-3')
        const randomImageUrl = `https://picsum.photos/200/300`;

        newCol.innerHTML = `
    <div class="card mb-4">
        <img src="${randomImageUrl}" class="card-img-top" alt="product picture">
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">${product.brand}</p>
            <p class="card-text">${product.price}€</p>
            <a href="./details.html?productId=${product._id}" class="btn btn-primary m-2">Scopri di più</a>
            <a href="./backoffice.html?productId=${product._id}" class="btn btn-warning m-2">Modifica</a>
        </div>
    </div>
    `
    
        row.appendChild(newCol)
    })
}

const hideSpinner = function () {
    const spinner = document.getElementById('spin')
    spinner.classList.add('d-none')
}

const sError = function (error) {
    console.Error(error);
    alert("Si è verificato un errore durante il recupero dei prodotti.");
}

const getProduct = function () {
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
            'Content-type':'application/json',
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGU0NTJkN2IxMTAwMTkwZTZlMTMiLCJpYXQiOjE3MDk4OTExNDEsImV4cCI6MTcxMTEwMDc0MX0.FhYObfZ5bJziTTj5NE2M_vUcCZ8nxxHftSKD-vflLWU`
        }
    })
        .then((res) => {
            hideSpinner()

            if (res.ok) {
                return res.json()
            }
            else {
                throw new Error('errore')
            }
        })
        .then(product => {
            renderProduct(product)
        })
        .catch(err => {
            sError(err);
            hideSpinner()
        })
        
}

getProduct()