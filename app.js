const square = document.querySelector('#square');
const lista = document.querySelector('lista');


const fetchData = async () => {
    const res = await fetch(`https://www.flickr.com/explore`);
    
    const result = res.json();

    renderData(result);
}


const renderData = data => {
    data.map(value =>  {

        const li = document.querySelector('li');
        li.innerHTML = `${value.id}`;
        lista.appendChild(li);
    });
}