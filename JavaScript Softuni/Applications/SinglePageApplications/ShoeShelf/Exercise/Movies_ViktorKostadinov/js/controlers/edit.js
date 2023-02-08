export default async function edit(context) {

    this.partials = {
        'header': await this.load('./templates/header.hbs'),
        'notifications': await this.load('./templates/notifications.hbs'),
        'footer': await this.load('./templates/footer.hbs')
    }

    this.partial('./templates/editMovie.hbs')
};