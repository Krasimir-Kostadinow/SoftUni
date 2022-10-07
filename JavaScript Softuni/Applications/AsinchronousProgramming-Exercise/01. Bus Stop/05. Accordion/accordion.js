(() => {

    const baseUrl = 'https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app/articles';

    function createElement(typeTag, content, attribute, valueAttribute) {
        let element = document.createElement(typeTag);
        if (content) {
            element.textContent = content;
        }
        if (attribute) {
            element.setAttribute(attribute, valueAttribute);
        }

        return element;
    }

    async function requestMoreInfo(event) {
        let $button = event.target;
        let $divAccordion = $button.parentElement.parentElement;

        try {
            if ($button.textContent === 'MORE') {
                let id = $button.getAttribute('id');
                let isEsistsExtra = $divAccordion.querySelector('.extra');
                if (!isEsistsExtra) {
                    let response = await fetch(`${baseUrl}/details/${id}.json`);
                    let data = await response.json();
    
                    let $divExtra = createElement('div', false, 'class', 'extra');
                    let $p = createElement('p', data.content);
    
                    $divAccordion.appendChild($divExtra);
                    $divExtra.appendChild($p);
                }
               
                $divAccordion.querySelector('.extra').style.display = 'block';
                $button.textContent = 'LESS';

            } else if ($button.textContent === 'LESS') {
                let $divExtra = $divAccordion.querySelector('.extra');
                $divExtra.style.display = 'none';
                $button.textContent = 'MORE';

            }
        } catch (error) {
            $divAccordion.textContent = error.message;
            $divAccordion.style.color = 'red';
        }




    }


    async function requestData() {
        try {
            let response = await fetch(`${baseUrl}/list.json`);
            let data = await response.json();

            data.forEach(el => {
                let section = document.querySelector('#main');
                let divAccordion = createElement('div', false, 'class', 'accordion');
                let divHead = createElement('div', false, 'class', 'head');
                let span = createElement('span', el.title, false);
                let button = createElement('button', 'MORE', 'class', 'button');
                button.setAttribute('id', el._id);
                button.addEventListener('click', requestMoreInfo);


                divAccordion.appendChild(divHead);
                section.appendChild(divAccordion);
                divHead.appendChild(span);
                divHead.appendChild(button);

            });



        } catch (error) {
            let errorMessage = document.querySelector('#main');
            errorMessage.textContent = error.message;
            errorMessage.style.color = 'red';
        }
    }

    requestData();

})();