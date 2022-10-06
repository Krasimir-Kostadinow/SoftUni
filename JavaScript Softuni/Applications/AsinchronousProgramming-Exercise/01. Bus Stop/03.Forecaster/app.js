(() => {
    const baseURL = 'https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app';
    const $elements = {
        location: document.querySelector('#location'),
        buttonSubmit: document.querySelector('#submit'),
        divForecast: document.querySelector('#forecast'),
        divCurrent: document.querySelector('#current'),
        divUpcoming: document.querySelector('#upcoming')
    };

    const conditions = {
        Sunny: '&#x2600',
        Partlysunny: '&#x26C5',
        Overcast: '&#x2601',
        Rain: '&#x2614',
        Degrees: '&#176'
    }

    function throwOfError(err) {
        $elements.divCurrent.innerHTML = '';
        $elements.divUpcoming.innerHTML = '';
        let $divLabel = document.createElement('div');
        $divLabel.setAttribute('class', 'label');
        $divLabel.textContent = err.message;
        $elements.divCurrent.appendChild($divLabel);
        $elements.divForecast.style.display = 'block';
    }


    function requestData() {

        fetch(`${baseURL}/locations.json`)
            .then((response) => response.json())
            .then((data) => {
                const currentLocation = $elements.location.value;
                let existsObject = data.find((o) => o.name === currentLocation);
                let code;
                if (existsObject !== undefined) {
                    code = existsObject.code;
                } else {
                    throw new Error('Not found location');
                }


                Promise.all([fetch(`${baseURL}/today/${code}.json`).then((res) => res.json()), fetch(`${baseURL}/upcoming/${code}.json`).then((response) => response.json())])
                    .then(([today, upcoming]) => {
                        console.log(today);
                        console.log(upcoming);
                        function todayData(today) {
                            $elements.divCurrent.innerHTML = '';
                    
                            let $divLabel = document.createElement('div');
                            $divLabel.setAttribute('class', 'label');
                            $divLabel.textContent = 'Current conditions';
                            $elements.divCurrent.appendChild($divLabel);
                    
                    
                            let $divForecasts = document.createElement('div');
                            $divForecasts.setAttribute('class', 'forecasts');
                            $elements.divCurrent.appendChild($divForecasts);
                    
                            let $spanSimbol = document.createElement('span');
                            $spanSimbol.setAttribute('class', 'condition symbol');
                            $spanSimbol.innerHTML = conditions[today.forecast.condition];
                            $divForecasts.appendChild($spanSimbol);
                    
                            let $spanCondition = document.createElement('span');
                            $spanCondition.setAttribute('class', 'condition');
                            $divForecasts.appendChild($spanCondition);
                    
                            let $spanName = document.createElement('span');
                            $spanName.setAttribute('class', 'forecast-data');
                            $spanName.textContent = today.name;
                            $spanCondition.appendChild($spanName);
                    
                            let $spanDegrees = document.createElement('span');
                            $spanDegrees.setAttribute('class', 'forecast-data');
                            $spanDegrees.innerHTML = `${today.forecast.low}${conditions.Degrees}/${today.forecast.high}${conditions.Degrees}`;
                            $spanCondition.appendChild($spanDegrees);
                    
                            let $spanCond = document.createElement('span');
                            $spanCond.setAttribute('class', 'forecast-data');
                            $spanCond.textContent = `${today.forecast.condition}`;
                            $spanCondition.appendChild($spanCond);
                    
                            $elements.divForecast.style.display = 'block';
                        }
                    
                        function upcomingData(upcoming) {
                            $elements.divUpcoming.innerHTML = '';
                    
                            let $divLabel = document.createElement('div');
                            $divLabel.setAttribute('class', 'label');
                            $divLabel.textContent = 'Three-day forecast ';
                            $elements.divUpcoming.appendChild($divLabel);
                    
                    
                            let $divForecastInfo = document.createElement('div');
                            $divForecastInfo.setAttribute('class', 'forecast-info');
                            $elements.divUpcoming.appendChild($divForecastInfo);
                    
                            upcoming.forecast.forEach(el => {
                                let $spanUpcoming = document.createElement('span');
                                $spanUpcoming.setAttribute('class', 'upcoming');
                                $divForecastInfo.appendChild($spanUpcoming);
                    
                                let $spanSymbol = document.createElement('span');
                                $spanSymbol.setAttribute('class', 'symbol');
                                $spanSymbol.innerHTML = conditions[el.condition.split(' ').join('')];
                                $spanUpcoming.appendChild($spanSymbol);
                    
                                let $spanDegrees = document.createElement('span');
                                $spanDegrees.setAttribute('class', 'forecast-data');
                                $spanDegrees.innerHTML = `${el.low}${conditions.Degrees}/${el.high}${conditions.Degrees}`;
                                $spanUpcoming.appendChild($spanDegrees);
                    
                                let $spanCond = document.createElement('span');
                                $spanCond.setAttribute('class', 'forecast-data');
                                $spanCond.textContent = `${el.condition}`;
                                $spanUpcoming.appendChild($spanCond);
                    
                            })
                        }
                        todayData(today);
                        upcomingData(upcoming);

                    })
                    .catch(throwOfError);


            }).catch(throwOfError);

    }

    $elements.buttonSubmit.addEventListener('click', requestData);


})();



