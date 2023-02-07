
export async function home(context) {

    this.partials = {
        'header': await this.load('./templates/header.hbs'),
        'footer': await this.load('./templates/footer.hbs')
    }

    this.partial('./templates/home.hbs')
};
