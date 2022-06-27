window.addEventListener('load', solve);

function solve() {
    let $inputGenre = document.getElementById('genre');
    let $inputName = document.getElementById('name');
    let $inputAuthor = document.getElementById('author');
    let $inputDate = document.getElementById('date');
    let $addButton = document.getElementById('add-btn')
    let $collectionSong = document.getElementsByClassName('all-hits-container')[0];
    let $saveSong = document.getElementsByClassName('saved-container')[0];
    let $likesSongs = document.getElementsByClassName('likes')[0];

    function like(event) {
        let $p = $likesSongs.getElementsByTagName('p')[0];
        let [name, counter] = $p.textContent.split('Total Likes: ');
        $p.textContent = `Total Likes: ${Number(counter) + 1}`;        
        let $button = event.target;
        $button.disabled = true;
    }
    function save(event) {
        let $div = event.target.parentElement;
        $div.getElementsByClassName('save-btn')[0].remove();
        $div.getElementsByClassName('like-btn')[0].remove();
        $saveSong.appendChild($div);
    }

    function deleteSong(event) {
        let $div = event.target.parentElement;
        $div.remove();

    }
    $addButton.addEventListener('click', function (event) {
        event.preventDefault();
        if ($inputGenre.value !== '' && $inputName.value !== '' && $inputAuthor.value !== '' && $inputDate.value !== '') {

            let $div = document.createElement('div');
            $div.setAttribute('class', 'hits-info');

            let $img = document.createElement('img');
            $img.setAttribute('src', './static/img/img.png');
            $div.appendChild($img);

            let $h2Genre = document.createElement('h2');
            $h2Genre.textContent = `Genre: ${$inputGenre.value}`;
            $div.appendChild($h2Genre);

            let $h2Name = document.createElement('h2');
            $h2Name.textContent = `Name: ${$inputName.value}`;
            $div.appendChild($h2Name);

            let $h2Author = document.createElement('h2');
            $h2Author.textContent = `Author: ${$inputAuthor.value}`;
            $div.appendChild($h2Author);

            let $h3Date = document.createElement('h3');
            $h3Date.textContent = `Date: ${$inputDate.value}`;
            $div.appendChild($h3Date);

            let $saveButton = document.createElement('button');
            $saveButton.setAttribute('class', 'save-btn');
            $saveButton.textContent = 'Save song';
            $saveButton.addEventListener('click', save);
            $div.appendChild($saveButton);

            let $likeButton = document.createElement('button');
            $likeButton.setAttribute('class', 'like-btn');
            $likeButton.textContent = 'Like song';
            $likeButton.addEventListener('click', like);
            $div.appendChild($likeButton);

            let $deleteButton = document.createElement('button');
            $deleteButton.setAttribute('class', 'delete-btn');
            $deleteButton.textContent = 'Delete';
            $deleteButton.addEventListener('click', deleteSong);
            $div.appendChild($deleteButton);

            $collectionSong.appendChild($div);

            $inputAuthor.value = '';
            $inputDate.value = '';
            $inputGenre.value = '';
            $inputName.value = '';

        }
    });



}



