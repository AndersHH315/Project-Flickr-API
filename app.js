const square = document.querySelector('#square');
const lista = document.querySelector('.lista');

const fetchData = async () => {

    const res = await fetch('https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=fae3b5188605557014e24bd343d2256e&gallery_id=72157719791154473&format=json&nojsoncallback=1');
    
    const result = await res.json();

    renderData(result.photos.photo);
}


const renderData = data => {
    data.map(value =>  {
        console.log(value);
        const item = document.createElement('li');
        item.innerHTML = `<img src="https://live.staticflickr.com/${value.server}/${value.id}_${value.secret}_w.jpg">`;
        lista.appendChild(item);
    });
}

fetchData();