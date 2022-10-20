const baseUrl = 'https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app';


export function myFireBaseRequest(id, methodReqest) {
        return fetch(`${baseUrl}${id}`, methodReqest)
            .then((resp) => resp.json())
            .catch((err) => console.log(err.message));
}