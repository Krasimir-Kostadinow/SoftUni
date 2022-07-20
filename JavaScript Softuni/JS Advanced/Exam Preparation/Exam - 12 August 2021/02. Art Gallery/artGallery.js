class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticle = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        if (this.possibleArticles.hasOwnProperty(articleModel)) {
            let isExists = false;
            for (let i = 0; i < this.listOfArticle.length; i++) {
                let el = this.listOfArticle[i];
                if (el.articleName === articleName) {
                    el.quantity = quantity;
                    isExists = true;
                    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;

                }
            }
            if (!isExists) {
                this.listOfArticle.push({ articleModel: articleModel, articleName: articleName, quantity: quantity });
                return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
            }

        } else {
            throw new Error('This article model is not included in this gallery!');
        }


    }

    inviteGuest(guestName, personality) {

    }

    buyArticle(articleModel, articleName, guestName) {

    }

    showGalleryInfo(criteria) {

    }


}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
