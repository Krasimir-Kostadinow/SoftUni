export default async function () {
    this.partials = {
        footer: await this.load('./templates/common/footer.hbs'),
        header: await this.load('./templates/common/header.hbs'),
        team: await this.load('./templates/catalog/team.hbs')

    }

    let data = Object.assign({}, this.app.userData);
    data.teams = [{
        objectId: 1111,
        name: 'Cherry',
        comment: 'Some Comment'

    }, {
        objectId: 2222,
        name: 'Banana',
        comment: 'Some Comment'

    }, {
        objectId: 3333,
        name: 'Chery',
        // comment: 'Some Comment'

    }
    ];

    this.partial('./templates/catalog/teamCatalog.hbs', data);
};