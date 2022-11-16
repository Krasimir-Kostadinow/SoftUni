import home from './controlers/home.js';
import about from './controlers/about.js';
import register, { registerPost } from './controlers/register.js';
import login from './controlers/login.js';
import catalog from './controlers/catalog.js';
import details from './controlers/details.js';
import create from './controlers/create.js';
import edit from './controlers/edit.js';
$(() => {
    const app = Sammy('#main', function (context) {
        this.use('Handlebars', 'hbs');
        this.userData = {
            loggedIn: false,
            hasTeam: false
        }
        this.get('/', home);
        this.get('index.html', home);

        this.get('#/home', home);

        this.get('#/about', about);

        this.get('#/register', register);

        this.get('#/login', login);

        this.get('#/catalog', catalog);

        this.get('#/catalog', catalog);

        this.get('#/catalog/:id', details);

        this.get('#/create', create);

        this.get('#/edit/:idEdit', edit);

        this.post('#/register', (ctx) => { registerPost.call(ctx); });

    });


    app.run();
}); 