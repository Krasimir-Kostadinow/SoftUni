function solveComments(input) {
    let listComments = {};
    let listArticle = [];
    let listUser = [];
    for (const element of input) {

        if (element.includes(':')) {
            let el = element.split(': ');
            let firstInfo = el[0].split(' ');
            let user = firstInfo.shift();
            let article = firstInfo.pop();
            let secondInfo = el[1].split(', ');
            let title = secondInfo.shift();
            let content = secondInfo.join('');

            if (listArticle.includes(article) && listUser.includes(user)) {
                if (listComments.hasOwnProperty(article)) {
                    listComments[article].push([user, title, content]);
                } else {
                    listComments[article] = [[user, title, content]];
                }
            }
        } else if (element.includes('article')) {
            let articleName = element.split(' ')[1];
            listArticle.push(articleName);
        } else if (element.includes('user')) {
            let userName = element.split(' ')[1];
            listUser.push(userName);
        }

    }

    let sorted = Object.entries(listComments);

    sorted.sort((a, b) => {
        return b[1].length - a[1].length;
    });

    sorted.sort((a, b) => {
        a[1].forEach(e => {
            
        });
        return b[1][2].length - a[1][2].length;
    });
  
    for (const el of sorted) {
        console.log(`Comments on ${el[0]}`);
        for (const info of el[1]) {
            console.log(`--- From user ${info[0]}: ${info[1]} - ${info[2]}`);
        }
    }

}
solveComments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']);