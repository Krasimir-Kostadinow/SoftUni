
import { login } from '../data.js';
export default async function () {
    this.partials = {
        footer: await this.load('./templates/common/footer.hbs'),
        header: await this.load('./templates/common/header.hbs'),
        loginForm: await this.load('./templates/login/loginForm.hbs')

    }
    this.partial('./templates/login/loginPage.hbs');
};

export async function loginPost() {
    const { btnLogin } = this.target.elements;
    // btnLogin.disabled = true;
    try {
        let result = await login(this.params.username, this.params.password);
        console.log(result);
        // if (result.userStatus) {
        //     btnLogin.disabled = false;
        // }

        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw (error);
        }
   
        this.app.userData.loggedIn = true;
        this.app.userData.username = this.params.username;

        this.redirect('#/home');
    } catch (error) {
        // btnRegister.disabled = false;
        alert(error.message);
        console.error(error.message);
    }


}