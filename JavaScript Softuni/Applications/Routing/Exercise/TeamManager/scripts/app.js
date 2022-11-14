$(() => {
    const app = Sammy('#main', function (context) {
        this.use('Handlebars', 'hbs');
        this.get('index.html', function () {
            console.log(this);
            this.loadPartials({
                footer: './templates/common/footer.hbs',
                header: './templates/common/header.hbs'
            });
            
            this.partial('./templates/home/home.hbs');
            // this.render('./templates/register/registerForm.hbs', function (html) {
            //     this.swap(html);
            // });
        });

    });


    app.run();
}); 