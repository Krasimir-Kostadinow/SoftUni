import { register } from "../data.js";
export default async function () {
    this.partials = {
        footer: await this.load('./templates/common/footer.hbs'),
        header: await this.load('./templates/common/header.hbs'),
        registerForm: await this.load('./templates/register/registerForm.hbs')
    }
    this.partial('./templates/register/registerPage.hbs');
};

export async function registerPost() {

    const { btnRegister } = this.target.elements;
    btnRegister.disabled = true;
    if (this.params.password !== this.params.repeatPassword) {
        alert("Password don't match");
        return;
    }
    try {
        let result = await register(this.params.username, this.params.password);

        if (result.userStatus) {
            btnRegister.disabled = false;
        }

        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw (error);
        }

        this.redirect('#/login');
    } catch (error) {
        btnRegister.disabled = false;
        alert(error.message);
        console.error(error.message);
    }

}