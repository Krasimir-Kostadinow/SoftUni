function host(endPoint) {
    if (endPoint === undefined) {
        return 'https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app/catch-fish.json';
    } else {
        return `https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app/catch-fish/${endPoint}.json`;
    }
}

export async function getData() {
    return await (await fetch(host())).json();
}

export async function createData(newData) {
    let typeRequest = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    }
    return await (await fetch(host(), typeRequest)).json();

}

export async function deleteData(id) {
    return await fetch(host(id), { method: 'DELETE' });
}

export async function editData(id, newData) {
    let typeRequest = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    }
    return await (await fetch(host(id), typeRequest)).json();
}