import { createTeam } from "../data.js";
export default async function () {
    this.partials = {
        footer: await this.load('./templates/common/footer.hbs'),
        header: await this.load('./templates/common/header.hbs'),
        createForm: await this.load('./templates/create/createForm.hbs')
    }
    this.partial('./templates/create/createPage.hbs');
};


export async function createPost() {
    const newTeam = {
        name: this.params.name,
        comment: this.params.comment
    }

    if (Object.values(newTeam).some((v) => v.length === 0)) {
        alert('All fields are required.');
        return;
    }

    try {
        let result = await createTeam(newTeam);
        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw (error);
        }

        this.redirect(`#/catalog/${objectId}`);
    } catch (error) {
        alert(error.message);
        console.error(error.message);
    }

};