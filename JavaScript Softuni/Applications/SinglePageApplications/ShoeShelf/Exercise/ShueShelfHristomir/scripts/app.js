import { home } from './controlers/home.js';
import{ register, postRegister } from './controlers/register.js';
 
const router = Sammy('main', function (context) {
    this.use('Handlebars', 'hbs');


    //GET
    this.get('#/home', home);
    this.get('#/register', register);
    //POST
    this.post('#/register', postRegister);

});

(() => {
    router.run('#/home');
})();