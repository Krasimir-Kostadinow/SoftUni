import { errorBoxEl, infoBoxEl } from "./helper.js";
import { infoAndErrorBox } from "./helper.js";
const baseUrl = 'https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team';

function host(endPoint) {
    if (endPoint === undefined) {
        return `${baseUrl}.json`;
    }
    return `${baseUrl}/${endPoint}.json`;
}

export function dataRequest(method, path, body) {
    if (method === 'GET' || method === 'DELETE') {
        return fetch(host(path))
            .then((res) => res.json())
            .catch((error) => {
                errorBoxEl.textContent = `Problem with database. ${error.message}`;
                infoAndErrorBox();
            });

    } else {
        return fetch(host(path),
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            .then((res) => res.json())
            .catch((error) => {
                errorBoxEl.textContent = `Problem with database. ${error.message}`;
                infoAndErrorBox();
            });
    }

}