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
    const btnAdd = formEl.elements[7];
    let inputs = [angler, weight, species, location, bait, captureTime];

    function checkInput(params) {
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






    const btnLoad = document.querySelector('.load');
    btnLoad.addEventListener('click', loadData);

    async function loadData() {
        let dataFire = api.getData();

        let [data, catchHbs, catchesHbs] = [await dataFire, await (await fetch('./catch.hbs')).text(), await (await fetch('./catches.hbs')).text()];
        Handlebars.registerPartial('catch', catchHbs);
        let template = Handlebars.compile(catchesHbs);

        let newData = Object.entries(data).reduce((acc, [k, v]) => {
            v._id = k;
            acc.push(v);
            return acc;
        }, []);

        let resultHtml = template({ newData });
        mainEl.innerHTML = resultHtml;

    };

    async function createNewCatch() {

    }


});

