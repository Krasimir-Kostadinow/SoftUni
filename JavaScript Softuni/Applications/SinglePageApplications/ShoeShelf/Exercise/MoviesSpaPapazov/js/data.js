
function host(url) {
    const apiKey = 'AIzaSyAClDSbq3bjaJZmbGgsk_Xmw-fu9cinEB8';
    return `${url}${apiKey}`;
}

function request(url, methods, body) {
    if (methods === 'GET' || methods === 'DELETE') {
        return fetch(host(url))
            .then((res) => res.json());
    }
    return fetch(host(url), {
        method: methods,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then((res) => res.json());

}