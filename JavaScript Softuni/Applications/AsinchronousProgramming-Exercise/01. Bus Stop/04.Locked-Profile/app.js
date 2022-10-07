function lockedProfile() {

    const url = 'https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app/profiles.json';

    const domElements = {
        profile: document.querySelector('.profile'),
        main: document.querySelector('#main')
    }



    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            Object.values(data).forEach(el => {
                let cloneProfile = domElements.profile.cloneNode(true);
                const { _id, age, email, username } = el;

                let elementsProfile = {
                    userName: cloneProfile.querySelectorAll('input')[2],
                    email: cloneProfile.querySelectorAll('input')[3],
                    age: cloneProfile.querySelectorAll('input')[4],
                    infoUser: cloneProfile.querySelector('.user1Username'),
                    button: cloneProfile.querySelector('button'),
                    checkLock: cloneProfile.querySelectorAll('input')[0],
                    checkUnlock: cloneProfile.querySelectorAll('input')[1]
                }

                cloneProfile.setAttribute('id', _id);
                elementsProfile.userName.value = username;
                elementsProfile.email.value = email;
                elementsProfile.age.value = age;
                elementsProfile.infoUser.style.display = 'none';
                elementsProfile.button.addEventListener('click', (event) => {

                    if (elementsProfile.checkUnlock.checked === true) {
                        if (elementsProfile.button.textContent === 'Show more') {
                            elementsProfile.infoUser.style.display = 'block';
                            elementsProfile.button.textContent = 'Hide it';
                        } else if (elementsProfile.button.textContent === 'Hide it') {
                            elementsProfile.infoUser.style.display = 'none';
                            elementsProfile.button.textContent = 'Show more';
                        }

                    }

                });




                domElements.main.append(cloneProfile);

            });
            domElements.profile.remove();
        })
        .catch((e) => console.log(e.message));

}