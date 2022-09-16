function getInfo() {

    let $stopId = document.getElementById('stopId');
    let $stopName = document.getElementById('stopName');
    let $ulBuses = document.getElementById('buses');
    let validId = ['1287', '1308', '1327', '2334'];

    const url = 'http://localhost:3000/busInfo';

    $ulBuses.textContent = '';

    fetch(url)
        .then(response => response.json())
        .then(data => {   
            if (validId.includes($stopId.value)) {
                $stopName.textContent = data[$stopId.value].name;
                let buses = data[$stopId.value].buses;
                Object.entries(buses).forEach(bus => {
                    let $li = document.createElement('li');
                    $li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes.`;
                    $ulBuses.appendChild($li);
                });
            } else {
                $stopName.textContent = 'Error';
            }
            $stopId.value = '';
        
        }
        ).catch(message => $stopName.textContent = 'Error');
      

}