const baseURL = 'https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app';

function host(forecast, endPoint) {

    const api = {
        location: '/locations',
        today: `/today/${endPoint}`,
        upcoming: `/upcoming/${endPoint}`
    };
    return `${baseURL}${api[forecast]}.json`;
}

export async function getDataLocation(currentLocation) {

    let data = await (await fetch(`${host('location')}`)).json();
    let existsObject = data.find((o) => o.name.toLowerCase() === currentLocation.toLowerCase());
    if (existsObject === undefined) {
        throw new Error('Location is not faund');
    }
    return existsObject;

}

export async function getDataToday(endPoint) {
    let url = host(`today`, endPoint);
    let response = await fetch(url);
    let data = await response.json();
    return data;

}

export async function getDataUncoming(endPoint) {
    let data = await (await fetch(host('upcoming', endPoint))).json();
    return data;
}


