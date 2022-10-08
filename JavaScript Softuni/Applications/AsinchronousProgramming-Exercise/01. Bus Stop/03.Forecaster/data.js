const baseURL = 'https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app';



export async function getDataLocation() {
    let data = await (await fetch(`${baseURL}/locations.json`)).json();
    return data;
}


