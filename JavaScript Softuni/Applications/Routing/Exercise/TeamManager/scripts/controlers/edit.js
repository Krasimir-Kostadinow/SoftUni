
export default async function () {
    console.log(this);
    this.partials = {
        footer: await this.load('./templates/common/footer.hbs'),
        header: await this.load('./templates/common/header.hbs'),
        editForm: await this.load('./templates/edit/editForm.hbs')
        
    }
    this.partial('./templates/edit/editPage.hbs');
};