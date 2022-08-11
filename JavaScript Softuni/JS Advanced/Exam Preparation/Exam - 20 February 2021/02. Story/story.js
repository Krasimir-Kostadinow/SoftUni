class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this._likes = [];
    }


    get likes() {


        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }



    }


    like(username) {


        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        } else if (username === this.creator) {
            throw new Error("You can't like your own story!");
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;


    }

    dislike(username) {

        if (this._likes.includes(username)) {
            let index = this._likes.indexOf(username);
            this._likes.splice(index, 1);
            return `${username} disliked ${this.title}`;
        } else {
            throw new Error("You can't dislike this story!");
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
        if (id === undefined || !idExists) {
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
                        newReplyId = comment.Replies[comment.Replies.length - 1].Id + 0.1;
                        newReplyId = newReplyId.toFixed(1);
                        newReplyId = Number(newReplyId);
                    }
                    comment.Replies.push({ Id: newReplyId, Username: username, Content: content })
                    return 'You replied successfully';
                }
            }
        }

    }

    toString(sortingType) {
        let output = [];

        output.push(`Title: ${this.title}`);
        output.push(`Creator: ${this.creator}`);
        output.push(`Likes: ${this._likes.length}`);
        output.push('Comments:');

        if (this.comments.length > 0) {

            if (sortingType === 'asc') {
                this.comments.sort((a, b) => {
                    return a.Id - b.Id;
                });
                for (const comment of this.comments) {
                    comment.Replies.sort((a, b) => {
                        return a.Id - b.Id;
                    })
                }
            } else if (sortingType === 'desc') {

                this.comments.sort((a, b) => {
                    return b.Id - a.Id;
                });
                for (const comment of this.comments) {
                    comment.Replies.sort((a, b) => {
                        return b.Id - a.Id;
                    })
                }
            } else if (sortingType === 'username') {
                this.comments.sort((a, b) => a.Username.localeCompare(b.Username));
                for (const comment of this.comments) {
                    comment.Replies.sort((a, b) => a.Username.localeCompare(b.Username));
                }
            }

            for (const comment of this.comments) {
                output.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`)
                if (comment.Replies.length > 0) {
                    for (const reply of comment.Replies) {
                        output.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`);
                    }
                }
            }

        }

        return `${output.join('\n')}`;

    }



}


let art = new Story("My Story", "Anny");
console.log(art.like("John"));// "John liked My Story!");
console.log(art.likes);// "John likes this story!");
// console.log(art.dislike("Sally")); //throw "You can't dislike this story!");
console.log(art.like("Ivan"));//"Ivan liked My Story!");
console.log(art.like("Steven"));// "Steven liked My Story!");
console.log(art.likes);// "John and 2 others like this story!");???
console.log(art.comment("Anny", "Some Content"));//"Anny commented on My Story");
console.log(art.comment("Ammy", "New Content", 1));//"You replied successfully");
console.log(art.comment("Zane", "Reply", 2));//"Zane commented on My Story");
console.log(art.comment("Jessy", "Nice :)"));// "Jessy commented on My Story");
console.log(art.comment("SAmmy", "Reply@", 2));// "You replied successfully");
console.log(art.toString('asc'));//`Title: My Story
// Creator: Anny
// Likes: 3
// Comments:
// -- 1. Anny: Some Content
// --- 1.1. Ammy: New Content
// -- 2. Zane: Reply
// --- 2.1. SAmmy: Reply@
// -- 3. Jessy: Nice :)`);






