const baseUrl = 'https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app/messsages';

export async function requests(method, body) {

    let typeRequest = {
        method: method, 
        body: JSON.stringify(body),
        headers: {
            'content-type': 'applications/json'
        }
    }

    const response = await fetch(`${baseUrl}.json`, typeRequest);
    const data = await response.json();

    return data;
    
}