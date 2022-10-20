const apiKey = 'https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app/book-library';


export function createBook(title, author) {
    return fetch(`${apiKey}.json`,
        { method: 'POST', body: JSON.stringify({ title: title, author: author }) })
        .then((resp) => resp.json());
}

export function getBooks() {
    return fetch(`${apiKey}.json`).then((resp) => resp.json());
}

export function requestDeleteBook(idBook) {
    return fetch(`${apiKey}/${idBook}.json`,
        { method: 'DELETE' })
        .then((resp) => resp.json());
}

export function requestEditBook(idBook, author, title) {
    return fetch(`${apiKey}/${idBook}.json`, {
        method: 'PUT',
        body: JSON.stringify({ author: author, title: title })
    })
        .then((resp) => {resp.json()});
}