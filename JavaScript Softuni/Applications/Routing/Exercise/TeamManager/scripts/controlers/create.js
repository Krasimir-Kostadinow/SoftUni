export default async function () {
    this.partials = {
        footer: await this.load('./templates/common/footer.hbs'),
        header: await this.load('./templates/common/header.hbs'),
        createForm: await this.load('./templates/create/createForm.hbs')
    }
    this.partial('./templates/create/createPage.hbs');
};