import * as api from './data.js';
window.addEventListener('load', async () => {
    // let newData = {
    //     angler: 'Pesho',
    //     weight: '2',
    //     species: 'sea fish',
    //     location: 'black sea',
    //     bait: 'bread',
    //     captureTime: '30' 

    // };
    // let result = await api.editData('-NG10tBEjmhEVAmk_n1e ', newData);
    // console.log(result);

    const formEl = document.querySelector('#addForm');
    const mainEl = document.querySelector('#main');
    const { angler, weight, species, location, bait, captureTime } = formEl.elements;
    const btnLoad = document.querySelector('.load');
    const btnAdd = formEl.elements[7];
    let inputs = [angler, weight, species, location, bait, captureTime];

    function checkInput() {
        inputs.forEach((input) => {
            input.addEventListener('input', function (event) {
                for (const input of inputs) {
                    if (input.value === '') {
                        btnAdd.disabled = true;
                        break;
                    } else {
                        btnAdd.disabled = false;
                    }
                }
            });
        });

    }
    checkInput();

    async function loadData() {
        let dataFire = api.getData();

        let [data, catchHbs, catchesHbs] = [await dataFire, await (await fetch('./catch.hbs')).text(), await (await fetch('./catches.hbs')).text()];
        Handlebars.registerPartial('catch', catchHbs);
        let template = Handlebars.compile(catchesHbs);
        if (data === null) {
            return;
        }
        let newData = Object.entries(data).reduce((acc, [k, v]) => {
            v._id = k;
            acc.push(v);
            return acc;
        }, []);

        let resultHtml = template({ newData });
        mainEl.innerHTML = resultHtml;

    };

    async function createCatchFish(event) {
        event.preventDefault();
        const newCatch = {
            angler: angler.value,
            weight: weight.value,
            species: species.value,
            location: location.value,
            bait: bait.value,
            captureTime: captureTime.value
        }
        await api.createData(newCatch);
        loadData();
    }

    async function deleteFish(event) {
        let id = event.target.dataset.id;
        let result = await api.deleteData(id);
        if (result === null) {
            let divCatch = event.target.parentElement;
            divCatch.remove();
        }
    }

    async function editFish(event) {
        let id = event.target.dataset.id;
        let divCatch = event.target.parentElement;
        let [angler, weight, species, location, bait, captureTime] = divCatch.querySelectorAll('input');

        let newData = {
            angler: angler.value,
            weight: weight.value,
            species: species.value,
            location: location.value,
            bait: bait.value,
            captureTime: captureTime.value
        }
        await api.editData(id, newData);

        loadData();
    }


    btnLoad.addEventListener('click', loadData);
    btnAdd.addEventListener('click', createCatchFish);



    mainEl.addEventListener('click', (event) => {

        if (event.target.tagName !== 'BUTTON') {
            return;
        } else {
            if (event.target.className === 'delete') {
                deleteFish(event);
            }
            if (event.target.className === 'update') {
                editFish(event);

            }

        }
    });




});

