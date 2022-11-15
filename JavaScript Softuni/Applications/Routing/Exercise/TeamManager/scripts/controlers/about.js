export default async function () {
    this.partials = {
        footer: await this.load('./templates/common/footer.hbs'),
        header: await this.load('./templates/common/header.hbs')
    }
    this.partial('./templates/about/about.hbs', this.app.userData);
};