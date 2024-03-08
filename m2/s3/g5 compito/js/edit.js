const productId = new URLSearchParams(window.location.search).get('productId');


const getProductDetails = function () {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
        headers: {
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDJhZDEzOWM0MzAwMTg4MTQ1YjciLCJpYXQiOjE2OTcxODY0NzcsImV4cCI6MTY5ODM5NjA3N30.hZuujHf_b77dfPmoEMyAHf6D_plyV-bQ77ryZnVZ910`
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Il Server non risponde ok');
            }
        })
        .then(product => {
            document.getElementById('name').value = product.name;
            document.getElementById('description').value = product.description;
            document.getElementById('brand').value = product.brand;
            document.getElementById('price').value = product.price;
            document.getElementById('imageUrl').value = product.imageUrl;
        })
        .catch(err => {
            console.error('ERRORE', err);
        })
}


const saveChanges = function (event) {
    event.preventDefault();

    const updatedProduct = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        brand: document.getElementById('brand').value,
        price: document.getElementById('price').value,
        imageUrl: document.getElementById('imageUrl').value
    };

    fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
        method: 'PUT',
        headers: {
            "Authorization": `BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDJhZDEzOWM0MzAwMTg4MTQ1YjciLCJpYXQiOjE2OTcxODY0NzcsImV4cCI6MTY5ODM5NjA3N30.hZuujHf_b77dfPmoEMyAHf6D_plyV-bQ77ryZnVZ910`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
    })
        .then((res) => {
            if (res.ok) {
                alert('Prodotto modificato con successo!');
            } else {
                throw new Error('Il Server non risponde ok');
            }
        })
        .catch(err => {
            console.error('ERRORE', err);
        })
}


const deleteProduct = function () {
    fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
        method: 'DELETE',
        headers: {
            "Authorization": `BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5MDJhZDEzOWM0MzAwMTg4MTQ1YjciLCJpYXQiOjE2OTcxODY0NzcsImV4cCI6MTY5ODM5NjA3N30.hZuujHf_b77dfPmoEMyAHf6D_plyV-bQ77ryZnVZ910`
        }
    })
        .then((res) => {
            if (res.ok) {
                alert('Prodotto eliminato con successo!');
                window.location.href = 'home.html';
            } else {
                throw new Error('Il Server non risponde ok');
            }
        })
        .catch(err => {
            console.error('ERRORE', err);
        })
}


document.getElementById('edit-product-form').addEventListener('submit', saveChanges);
document.getElementById('delete-button').addEventListener('click', deleteProduct);


window.onload = getProductDetails;