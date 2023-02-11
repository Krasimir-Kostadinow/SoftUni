const userInfo = JSON.parse(localStorage.getItem('userInfo'));
export default async function home(context) {
    console.log(context);
    if (userInfo) {
        context.userInfo = {isLogged: true, username: userInfo.userName};
    }
    
    this.partials = {
        'header': await this.load('./templates/header.hbs'),
        'notifications': await this.load('./templates/notifications.hbs'),
        'footer': await this.load('./templates/footer.hbs')
    }

    this.partial('./templates/home.hbs')
};
