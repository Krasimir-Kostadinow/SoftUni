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
                    el.quantity += quantity;
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
        let isExists = false;
        for (let i = 0; i < this.guests.length; i++) {
            let el = this.guests[i];
            if (el.guestName === guestName) {
                isExists = true;
                break;
            }

        }

        if (isExists) {
            throw new Error(`${guestName} has already been invited.`);
        } else {
            let points = 50;
            if (personality === 'Vip') {
                points = 500;
            } else if (personality === 'Middle') {
                points = 250;
            }
            this.guests.push({ guestName: guestName, points: points, purchaseArticle: 0 });
            return `You have successfully invited ${guestName}!`;
        }


    }

    buyArticle(articleModel, articleName, guestName) {
        let isExistsGuest = false;
        for (let i = 0; i < this.guests.length; i++) {
            let el = this.guests[i];
            if (el.guestName === guestName) {
                isExistsGuest = true;
                break;
            }

        }
        let isExists = false;
        let isNotAvilable = false;
        for (let el of this.listOfArticle) {
            if (el.articleName === articleName && el.articleModel === articleModel) {
                isExists = true;
                if (el.quantity === 0) {
                    isNotAvilable = true;
                }
                break;
            }


        }

        if (!isExists) {
            throw new Error('This article is not found.');
        } else if (isNotAvilable) {
            return `The ${articleName} is not available`;
        } 
        
        if (!isExistsGuest) {
            return `This guest is not invited.`;
        } else {
            for (let i = 0; i < this.guests.length; i++) {
                let el = this.guests[i];
                if (el.guestName === guestName) {
                    if (el.points < this.possibleArticles[articleModel]) {
                        return `You need to more points to purchase the article.`;
                    } else {
                        el.points -= this.possibleArticles[articleModel];
                        el.purchaseArticle += 1;
                    }
                    for (let i = 0; i < this.listOfArticle.length; i++) {
                        let el = this.listOfArticle[i];
                        if (el.articleName === articleName) {
                            el.quantity -= 1;
                        }

                    }
                }

            }
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
        }


    }

    showGalleryInfo(criteria) {
        let output = '';
        if (criteria === 'article') {
            output = 'Articles information:';
            for (const el of this.listOfArticle) {
                output += `\n${el.articleModel} - ${el.articleName} - ${el.quantity}`;
            }
            return output;

        } else if (criteria === 'guest') {
            output = 'Guests information:';
            for (const el of this.guests) {
                output += `\n${el.guestName} - ${el.purchaseArticle}`;
            }
            return output;

        }
    }


}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));


