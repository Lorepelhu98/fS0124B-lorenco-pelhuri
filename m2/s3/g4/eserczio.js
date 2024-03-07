

async function chiamata(query){
    const apiKey = 'ZlR8r0wOI7HzGnQI5xtzrkRM0KL4fgvOHC6BuEGWRnPqaSqtWX4nGCLf';
    
    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        method: 'GET',
        headers: {
            Authorization: apiKey
        }
    });
    const dati = await response.json();
    return dati;
}

chiamata('gatti').then(gatti => {
  console.log(gatti);
});

document.getElementById('loadImagesButton').addEventListener('click', async () => {
    const images = await chiamata('gatti');
    console.log(images);
});