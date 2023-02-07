import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

export function logout(context) {
    const auth = getAuth();
    signOut(auth).then(() => {
        localStorage.removeItem('userInfo');
        this.redirect('#/login');
    }).catch((error) => {
        console.log(error.message);
    });
};

