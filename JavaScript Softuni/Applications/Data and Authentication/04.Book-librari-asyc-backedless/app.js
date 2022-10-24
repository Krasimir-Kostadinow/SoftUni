import * as api from './data.js';
const buttonLoad = document.querySelector('#loadBooks');

window.addEventListener('load', () => {

    buttonLoad.addEventListener('click', async () => {
        let body = {
            title: 'pinocio',
            author: 'zzzzz'
        };

        let request = await api.deleteBook('', 'EFAC9517-4C97-4C3F-B7F0-85937B5B62DE');

        console.log(request);
    });





});



