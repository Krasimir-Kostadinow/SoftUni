let result = (function () {
    let output = { upvotes: 0, downvotes: 0, score: 0, rating: '' };

    return {
        call: function (post, command) {

            if (command === 'upvote') {
                post['upvotes']++;
            } else if (command === 'downvote') {
                post['downvotes']++;
            } else if (command === 'score') {
                if ((post['upvotes'] + post['downvotes']) > 50) {
                    let maxNum = Math.max(post['upvotes'], post['downvotes']);
                    let addValue = Math.ceil(maxNum * 0.25);
                    output['upvotes'] = post['upvotes'] + addValue;
                    output['downvotes'] = post['downvotes'] + addValue;
                } else {
                    output['upvotes'] = post['upvotes'];
                    output['downvotes'] = post['downvotes'];
                }
                let total = post['upvotes'] + post['downvotes'];
                let balance = post['upvotes'] - post['downvotes'];
                output['score'] = balance;

                function rating(total, balance) {
                    let rating = 'new';

                    if (total < 10) {
                        rating = 'new';
                        return rating;
                    }

                    if (post['upvotes'] > total * 0.66) {
                        rating = 'hot';
                    } else if (balance >= 0 && (post['upvotes'] > 100 || post['downvotes'] > 100)) {
                        rating = 'controversial';
                    } else if (balance < 0) {
                        rating = 'unpopular';
                    }
                    return rating;
                }

                output['rating'] = rating(total, balance);
                return Object.values(output);
            }

        }

    }
})()

var forumPost = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

result.call(forumPost, 'upvote');
result.call(forumPost, 'downvote');

var answer = result.call(forumPost, 'score');
var expected = [127, 127, 0, 'controversial'];


// 50 Downvotes
for (let i = 0; i < 50; i++) {
    result.call(forumPost, 'downvote');
}
answer = result.call(forumPost, 'score');
expected = [139, 189, -50, 'unpopular'];
console.log(answer);




