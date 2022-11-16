
export default async function () {
    this.partials = {
        footer: await this.load('./templates/common/footer.hbs'),
        header: await this.load('./templates/common/header.hbs'),
        loginForm: await this.load('./templates/login/loginForm.hbs')
        
    }
    this.partial('./templates/login/loginPage.hbs');
};