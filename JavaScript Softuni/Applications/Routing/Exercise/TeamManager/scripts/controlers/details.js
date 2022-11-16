export default async function () {
    console.log(this);
    this.partials = {
        footer: await this.load('./templates/common/footer.hbs'),
        header: await this.load('./templates/common/header.hbs'),
        teamMember: await this.load('./templates/catalog/teamMember.hbs'),
        teamControls: await this.load('./templates/catalog/teamControls.hbs')

    }

    const data = {
        objectId: 1111,
        name: 'Cherry',
        comment: 'Some Comment',
        members: [
            { username: 'Pesho' },
            { username: 'Alex' },
            { username: 'Krasi' }
        ],
        isAuthor: true,
        isOnTeam: true

    };

    Object.assign(data, this.app.userData);

    this.partial('./templates/catalog/details.hbs', data);
};