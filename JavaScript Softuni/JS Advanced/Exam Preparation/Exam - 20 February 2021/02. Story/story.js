class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this._likes = [];
    }


    get likes() {
        for (let obj of this._likes) {

            if (obj[this.title]) {


                if (obj[this.title].length === 0) {
                    return `${this.title} has 0 likes`;
                } else if (obj[this.title].length === 1) {
                    return `${this._likes[this._likes.length - 1][this.title][(this._likes[this._likes.length - 1][this.title].length) - 1]} likes this story!`;
                } else {
                    return `${this._likes[this._likes.length - 1][this.title][0]} and ${this._likes[this._likes.length - 1][this.title].length - 1} others like this story!`;
                }

            }
        }
    }


    like(username) {
        let isExists = false;
        for (const obj of this._likes) {
            if (obj[this.title].includes(username)) {
                isExists = true;
                break;
            }

        }

        if (isExists) {
            throw new Error("You can't like the same story twice!");
        } else if (username === this.creator) {
            throw new Error("You can't like your own story!");
        } else {
            let isExistsTitle = false;
            for (const obj of this._likes) {
                if (obj.hasOwnProperty(this.title)) {
                    obj[this.title].push(username);
                    isExistsTitle = true;
                    break;
                }
            }
            if (!isExistsTitle) {
                let obj = {};
                obj[this.title] = [username];
                this._likes.push(obj);
            }

            return `${username} liked ${this.title}!`;
        }

    }

    dislike(username) {
        //     let isExists = false;
        //     for (const obj of this._likes) {
        //         if (this._likes[0][]) {
        //             throw new Error("You can't dislike this story!");
        //         }
        //         if (obj[this.title].includes(username)) {
        //             isExists = true;
        //             let index = obj[this.title].indexOf(username);
        //             obj[this.title].splice(index, 1);
        //             return `${username} disliked ${this.title}"`;
        //         }

        //     }
        //     if (!isExists) {

        //     }
        //???????????????
    }
}

let art = new Story('My Story', 'Anny');
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);

