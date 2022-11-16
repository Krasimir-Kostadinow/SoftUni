
export default async function () {
    this.partials = {
        footer: await this.load('./templates/common/footer.hbs'),
        header: await this.load('./templates/common/header.hbs'),
        registerForm: await this.load('./templates/register/registerForm.hbs')
    }
    this.partial('./templates/register/registerPage.hbs');
};

export async function registerPost() {
    console.log(this.params);

    this.app.userData.loggedIn = true;
    this.app.userData.username = this.params.username;

    this.redirect('#/home');
}