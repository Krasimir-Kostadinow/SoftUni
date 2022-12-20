function register(context) {
    this.loadPartials({
        'header': './templates/partials/header.hbs',
        'footer': './templates/partials/footer.hbs'
    }).then(function () {
        this.partial('./templates/register.hbs');
    })
};

function validation(email, password, rePassword) {
    let isValid = true;
    if (email.length <= 0) {
        isValid = false;
        return isValid;
    }
    if (password.length < 6) {
        isValid = false;
        return isValid;
    }
    if (password !== rePassword) {
        isValid = false;
        return isValid;
    }

    return isValid;

}

function postRegister(context) {

    const { email, password, rePassword } = context.params;
    if (!validation(email, password, rePassword)) {
        return;
    }

console.log('I`m here');


}

export { register, postRegister }