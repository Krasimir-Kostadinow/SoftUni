
import notificationBox from '../helper.js'
export default async function register(context) {

    this.partials = {
        'header': await this.load('./templates/header.hbs'),
        'notifications': await this.load('./templates/notifications.hbs'),
        'footer': await this.load('./templates/footer.hbs')
    }

    this.partial('./templates/register.hbs')
};



export async function postRegister(context) {
    const errorBoxEl = document.getElementById('errorBox');
    const successBoxEl = document.getElementById('successBox');
    const { email, password, repeatPassword } = this.params;

    function validation(email, password, rePassword) {
        let isValid = true;
        let content = '';
        if (email.length <= 0) {
            isValid = false;
            content = 'The email field must be filled.';
            return { isValid, content };
        }
        if (password.length < 6) {
            isValid = false;
            content = 'Password must be longer than 6 characters.';
            return { isValid, content };
        }
        if (password !== rePassword) {
            isValid = false;
            content = 'Password and repeat Password not match.';
            return { isValid, content };
        }

        return { isValid, content };

    }

    const { isValid, content } = validation(email, password, repeatPassword);
    console.log(isValid, content);
    if (!isValid) {
        notificationBox(content, errorBoxEl);
        return;
    }

    console.log('Request Data');
}