function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comemnt) {
            this.comments.push(comemnt);
        }

        toString() {
            let output = `${super.toString()}\nRating: ${this.likes - this.dislikes}`
            if (this.comments.length !== 0) {
                output += '\nComments:';
                for (let i = 0; i < this.comments.length; i++) {
                    let comment = this.comments[i];
                    output += `\n * ${comment}`;
                }
            }
            return output;
        }
    }

    return {
        Post,
        SocialMediaPost

    }
}

const classes = solution();
// let post = new classes.Post("Post", "Content");

// console.log(post.toString());

// // Post: Post
// // Content: Content
let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

