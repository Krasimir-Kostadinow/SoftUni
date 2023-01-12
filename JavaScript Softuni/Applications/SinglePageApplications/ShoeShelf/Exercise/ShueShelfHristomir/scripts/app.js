import { home } from './controlers/home.js';
import { register, postRegister } from './controlers/register.js';
import { login, postLogin } from './controlers/login.js';
import { logout } from './controlers/logout.js';
import { create, postCreate } from './controlers/create.js';
import { details, deleteOffer } from './controlers/details.js';
import { edit, postEdit } from './controlers/edit.js';
import { deal } from './controlers/deal.js';

const router = Sammy('main', function (context) {
    this.use('Handlebars', 'hbs');


    //GET
    this.get('#/home', home);
    this.get('#/register', register);
    this.get('#/login', login);
    this.get('#/logout', logout);
    this.get('#/create-offer', create);
    this.get('#/details/:id', details);
    this.get('#/delete/:id', deleteOffer);
    this.get('#/edit/:id', edit);
    this.get('#/buy/:id', deal);
    //POST
    this.post('#/register', postRegister);  
    this.post('#/login', postLogin);
    this.post('#/create', postCreate);
    this.post('#/edit/:id', postEdit);



});

(() => {
    router.run('#/home');
})();