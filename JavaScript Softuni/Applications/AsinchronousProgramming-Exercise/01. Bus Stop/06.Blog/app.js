function attachEvents() {
    let $buttonLoad = document.getElementById('btnLoadPosts');
    let $buttonView = document.getElementById('btnViewPost');
    let $posts = document.getElementById('posts');
    let $h1 = document.getElementById('post-title');
    let $p = document.getElementById('post-body');
    let $ul = document.getElementById('post-comments');
    let url = 'https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app/';

    $buttonLoad.addEventListener('click', () => {
        $posts.textContent = '';

        fetch(`${url}posts.json`)
            .then(response => response.json())
            .then(data => {
                let arrData = Object.entries(data);
                arrData.forEach(el => {
                    let [key, obj] = el;
                    let $option = document.createElement('option');
                    $option.setAttribute('value', key);
                    $option.textContent = obj.title;
                    $posts.appendChild($option);
                });
            });

    });

    $buttonView.addEventListener('click', () => {

        fetch(`${url}comments.json`)
            .then(response => response.json())
            .then(data => {
                let arrData = Object.entries(data);
                $ul.textContent = '';
                arrData.forEach(el => {
                    let [key, obj] = el;
                    let keyOption = $posts.value;
                    if (keyOption === obj.postId) {

                        fetch(`${url}posts/${obj.postId}.json`)
                            .then(res => res.json())
                            .then(data => {
                                $h1.textContent = data.title;
                                $p.textContent = data.body;
                            });

                            let $li = document.createElement('li');
                            $li.setAttribute('id', obj.id);
                            $li.textContent = obj.text; 
                            $ul.appendChild($li);

                    }

                    

                })

            });


    });

}

attachEvents();