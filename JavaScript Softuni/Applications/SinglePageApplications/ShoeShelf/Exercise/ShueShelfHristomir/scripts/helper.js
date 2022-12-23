export function checkForLogged(context) {
    if (localStorage.getItem('userInfo')) {
        context.logged = true;
        console.log(localStorage.getItem('userInfo'));
        const { email, uid } = JSON.parse(localStorage.getItem('userInfo'));
        context.email = email; 
        context.uid = uid;
        console.log(context);
    }

}