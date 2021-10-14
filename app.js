const square = document.querySelector('#square');
const lista = document.querySelector('.lista');
const text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aspernatur voluptatem doloribus accusamus eligendi sed.';

const fetchData = async () => {

    const res = await fetch('https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=50d1e27317722c6d444caed9935fc912&gallery_id=72157719791154473&format=json&nojsoncallback=1');
    
    const result = await res.json();

    renderData(result.photos.photo);
}


const renderData = data => {
    data.map(value =>  {
        console.log(value);
        const item = document.createElement('li');
        item.innerHTML = `<img src="https://live.staticflickr.com/${value.server}/${value.id}_${value.secret}_w.jpg"> <h2>${value.title}</h2> <p>${text}</p> <p>${text}</p>`;
        lista.appendChild(item);
    });
}

fetchData();