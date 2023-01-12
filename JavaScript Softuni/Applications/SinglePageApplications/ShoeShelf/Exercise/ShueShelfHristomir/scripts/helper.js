export function checkForLogged(context) {
    if (localStorage.getItem('userInfo')) {
        context.logged = true;
        const { email, uid } = JSON.parse(localStorage.getItem('userInfo'));
        context.email = email; 
        context.uid = uid;
    }

}