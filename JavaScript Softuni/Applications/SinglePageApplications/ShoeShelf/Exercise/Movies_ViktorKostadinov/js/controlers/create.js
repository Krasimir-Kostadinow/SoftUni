export default async function create(context) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
        context.userInfo = { isLogged: true, username: userInfo.userName };
    }

    this.partials = {
        'header': await this.load('./templates/header.hbs'),
        'notifications': await this.load('./templates/notifications.hbs'),
        'footer': await this.load('./templates/footer.hbs')
    }

    this.partial('./templates/addMovie.hbs');

};