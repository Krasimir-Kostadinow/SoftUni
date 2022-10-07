function lockedProfile() {

    const url = 'https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app/profiles';

    const domElements = {
        profile: document.querySelector('.profile'),
        main: document.querySelector('#main')
    }

    // fetch(`${url}.json`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         Object.values(data).forEach(el => {
    //             let cloneProfile = domElements.profile.cloneNode(true);
    //             const { _id, age, email, username } = el;
    //             console.log(el);
    //             let elementsProfile = {
    //                 userName: cloneProfile.querySelectorAll('input')[2],
    //                 email: cloneProfile.querySelectorAll('input')[3],
    //                 age: cloneProfile.querySelectorAll('input')[4],
    //                 infoUser: cloneProfile.querySelector('.user1Username'),
    //                 button: cloneProfile.querySelector('button'),
    //                 checkLock: cloneProfile.querySelectorAll('input')[0],
    //                 checkUnlock: cloneProfile.querySelectorAll('input')[1]
    //             }

    //             cloneProfile.setAttribute('id', _id);
    //             elementsProfile.userName.value = username;

    //             elementsProfile.infoUser.style.display = 'none';
    //             elementsProfile.button.addEventListener('click', (event) => {

    //                 if (elementsProfile.checkUnlock.checked === true) {
    //                     if (elementsProfile.button.textContent === 'Show more') {
    //                         let id = event.target.parentElement.getAttribute('id');
    //                         console.log(id);
    //                         fetch(`${url}/${id}.json`)
    //                             .then((res) => res.json())
    //                             .then((data) => {
    //                                 console.log(data);
    //                                 elementsProfile.email.value = data.email;
    //                                 elementsProfile.age.value = data.age;
    //                             })
    //                         elementsProfile.infoUser.style.display = 'block';
    //                         elementsProfile.button.textContent = 'Hide it';
    //                     } else if (elementsProfile.button.textContent === 'Hide it') {
    //                         elementsProfile.infoUser.style.display = 'none';
    //                         elementsProfile.button.textContent = 'Show more';
    //                     }

    //                 }

    //             });




    //             domElements.main.append(cloneProfile);

    //         });
    //         domElements.profile.remove();
    //     })
    //     .catch((e) => console.log(e.message));

    async function request() {
        let response = await fetch(`${url}.json`);
        let data = await response.json();
        Object.values(data).forEach(el => {
            let cloneProfile = domElements.profile.cloneNode(true);
            const { _id, age, email, username } = el;
            console.log(el);
            let elementsProfile = {
                userName: cloneProfile.querySelectorAll('input')[2],
                infoUser: cloneProfile.querySelector('.user1Username'),
                button: cloneProfile.querySelector('button'),
       
            }

            cloneProfile.setAttribute('id', _id);
            elementsProfile.userName.value = username;
            elementsProfile.infoUser.style.display = 'none';
            elementsProfile.button.addEventListener('click', requestInfoProfile);
            domElements.main.append(cloneProfile);
        });

        domElements.profile.remove();

    }

    async function requestInfoProfile(event) {
        let $divProfile = event.target.parentElement;
        let $button = event.target;
        let $domElements = {
            checkUnlock: $divProfile.querySelectorAll('input')[1],
            email: $divProfile.querySelectorAll('input')[3],
            age: $divProfile.querySelectorAll('input')[4],
            infoUser: $divProfile.querySelector('.user1Username'),
        }

        if ($domElements.checkUnlock.checked === true) {
            if ($button.textContent === 'Show more') {
                let id = event.target.parentElement.getAttribute('id');
                console.log(id);
                let response = await fetch(`${url}/${id}.json`);
                let data = await response.json();
                console.log(data);
                $domElements.email.value = data.email;
                $domElements.age.value = data.age;

                $domElements.infoUser.style.display = 'block';
                $button.textContent = 'Hide it';
            } else if ($button.textContent === 'Hide it') {
                $domElements.infoUser.style.display = 'none';
                $button.textContent = 'Show more';
            }

        }
    }
    request();

}