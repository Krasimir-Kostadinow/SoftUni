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

        for (let obj of this._likes) {
            if (obj[this.title].includes(username)) {
                let index = obj[this.title].indexOf(username);
                obj[this.title].splice(index, 1);
                return `${username} disliked ${this.title}`;
            } else {
                throw new Error("You can't dislike this story!");
            }
        }

    }

    comment(username, content, id) {
        let idExists = false;
        for (const comment of this.comments) {
            if (comment.Id === id) {
                idExists = true;
                break;
            }
        }
        if (id === undefined && !idExists) {
            let newId;
            if (this.comments.length === 0) {
                newId = 1;
            } else {
                newId = this.comments[this.comments.length - 1].Id + 1;
            }



            this.comments.push({ Id: newId, Username: username, Content: content, Replies: [] });
            return `${username} commented on ${this.title}`;

        } else if (idExists) {
            for (const comment of this.comments) {

                if (comment.Id === id) {
                    let newReplyId;
                    if (comment.Replies.length === 0) {
                        newReplyId = Number(`${id}.1`);
                    } else {
                        let newReplyId = comment.Replies[comment.Replies.length - 1].Id + 0.1;
                        newReplyId = newReplyId.toFixed(1);
                        newReplyId = Number(newReplyId);
                    }
                    comment.Replies.push({ Id: newReplyId, Username: username, Content: content })
                    return 'You replied successfully';
                }
            }
        }

    }



}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()




   