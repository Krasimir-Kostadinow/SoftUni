import home from './controlers/home.js';
import about from './controlers/about.js';
$(() => {
    const app = Sammy('#main', function (context) {
        this.use('Handlebars', 'hbs');
        this.userData = {
            loggedIn: false,
            hasTeam: false
        }
        this.get('index.html', home);
        this.get('#/home', home);
        this.get('/', home);
        this.get('#/about', about);

    });


    app.run();
}); 