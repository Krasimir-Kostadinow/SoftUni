function solve() {

    let $info = document.querySelector('.info');
    let $btnDepart = document.querySelector('#depart');
    let $btnArrive = document.querySelector('#arrive');
    let id = 'depot';




    function depart() {

        fetch(`https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app/schedule/${id}.json`)
            .then(response => response.json())
            .then(data => {
                $info.textContent = `Next stop ${data.name}`;
                $btnDepart.setAttribute('disabled', 'true');
                $btnArrive.removeAttribute('disabled');
    
            });
    }

    function arrive() {
        fetch(`https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app/schedule/${id}.json`)
        .then(response => response.json())
        .then(data => {
            $info.textContent = `Arriving at ${data.name}`;
            id = data.next;
            $btnArrive.setAttribute('disabled', 'true');
            $btnDepart.removeAttribute('disabled');

        });
    }

    return {
        depart,
        arrive
    };
}

let result = solve();