const baseUrl = 'https://vocalday.backendless.app/api/data/books';


export async function getBooks() {
    let typeRequest = {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }

    return await(await fetch(baseUrl, typeRequest)).json();
}

export async function createBook(body) {
    let typeRequest = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    }
    let response = await fetch(baseUrl, typeRequest);
    let data = await response.json();
    return data;
}

export async function updateBook(body, objectId) {
    let typeRequest = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    }
    let response = await fetch(`${baseUrl}/${objectId}`, typeRequest);
    let data = await response.json();
    return data;

}

export async function deleteBook(objectId) {
    let typeRequest = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    }
    let resposne = await fetch(`${baseUrl}/${objectId}`, typeRequest);
    let data = await resposne.json();
    return data;
}