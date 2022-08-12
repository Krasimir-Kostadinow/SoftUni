class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }
 
    get likes() {


        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;

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
        let comment = {
            Id: id,
            Username: username,
            Content: content,
            Replies: [],
        };
 
        let commentWithId = this._comments.find(c => c.Id === id);
 
        if (commentWithId) {
            let replyID = Number(commentWithId.Id + '.' + (commentWithId.Replies.length + 1));
            let reply = {
                Id: replyID,
                Username: username,
                Content: content,
            };
 
            commentWithId.Replies.push(reply);
 
            return 'You replied successfully';
        }
 
        comment.Id = this._comments.length + 1;
        this._comments.push(comment);
 
        return `${username} commented on ${this.title}`;
    }

    
    toString(sortingType) {
        let output = [];

        output.push(`Title: ${this.title}`);
        output.push(`Creator: ${this.creator}`);
        output.push(`Likes: ${this._likes.length}`);
        output.push('Comments:');

        if (this._comments.length > 0) {

            if (sortingType === 'asc') {
                this._comments.sort((a, b) => {
                    return a.Id - b.Id;
                });
                for (const comment of this._comments) {
                    comment.Replies.sort((a, b) => {
                        return a.Id - b.Id;
                    })
                }
            } else if (sortingType === 'desc') {

                this._comments.sort((a, b) => {
                    return b.Id - a.Id;
                });
                for (const comment of this._comments) {
                    comment.Replies.sort((a, b) => {
                        return b.Id - a.Id;
                    })
                }
            } else if (sortingType === 'username') {
                this._comments.sort((a, b) => a.Username.localeCompare(b.Username));
                for (const comment of this._comments) {
                    comment.Replies.sort((a, b) => a.Username.localeCompare(b.Username));
                }
            }

            for (const comment of this._comments) {
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
