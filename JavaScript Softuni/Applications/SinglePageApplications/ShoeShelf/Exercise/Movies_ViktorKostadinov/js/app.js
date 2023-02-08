import home from './controlers/home.js';
import login, { postLogin } from './controlers/login.js';
import register, { postRegister } from './controlers/register.js';
import create from './controlers/create.js';
import details from './controlers/details.js';
import edit from './controlers/edit.js';

window.addEventListener('load', function (e) {
    const router = Sammy('#container', function (context) {
        this.use('Handlebars', 'hbs');

        //GET
        this.get('#/home', home);
        this.get('#/register', register);
        this.get('#/login', login);
        // this.get('#/logout', logout);
        this.get('#/create', create);
        this.get('#/details/:id', details);
        // this.get('#/delete/:id', deleteOffer);
        this.get('#/edit/:id', edit);

        //POST
        this.post('#/register', context => {
            postRegister.call(context);
        });
        this.post('#/login', context => {
            postLogin.call(context);
        });

        // this.post('#/create', postCreate);
        // this.post('#/edit/:id', postEdit);



    });

    (() => {
        router.run('#/home');
    })();
});
