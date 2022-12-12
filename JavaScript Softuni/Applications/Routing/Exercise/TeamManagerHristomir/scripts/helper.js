
export const infoBoxEl = document.querySelector('#infoBox');
export const errorBoxEl = document.querySelector('#errorBox');

export const firebaseConfig = {
    apiKey: "AIzaSyDb2kAWnz0YbQuYyTXcv3-0N_fbUq2w6lM",
    authDomain: "team-manager-c0884.firebaseapp.com",
    databaseURL: "https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "team-manager-c0884",
    storageBucket: "team-manager-c0884.appspot.com",
    messagingSenderId: "1002511902799",
    appId: "1:1002511902799:web:481c5e058c5538aab3a23a"
};

export function infoAndErrorBox() {
    let contentInfoBox = infoBoxEl.textContent;
    let contentErrorBox = errorBoxEl.textContent;

    if (contentInfoBox !== '') {
        infoBoxEl.style.display = 'block';
        setTimeout(() => {
            infoBoxEl.textContent = '';
            infoBoxEl.style.display = 'none';
        }, 6000);
    }

    if (contentErrorBox !== '') {  
        errorBoxEl.style.display = 'block';
        setTimeout(() => {
            errorBoxEl.textContent = '';
            errorBoxEl.style.display = 'none';
        }, 8000);
    }

}

export function checkForLogged(context) {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
        const { email, uid } = JSON.parse(userInfo);
        context.email = email;
        context.loggedIn = true;
        context.uid = uid;

    }

}

export function checkAuthorAndMember(context, data) {

    if (context.uid === data.uid) {
        context.isAuthor = true;
    }
    if (!data.members) {
        context.isOnTeam = false;
        context.isAuthor = false;
        return;
    }
    data.members.forEach((member) => {
        if (member.email === context.email && member.uid === context.uid) {
            context.isOnTeam = true;
        }
    });

    if (!context.isOnTeam) {
        context.isAuthor = false;
    }



}