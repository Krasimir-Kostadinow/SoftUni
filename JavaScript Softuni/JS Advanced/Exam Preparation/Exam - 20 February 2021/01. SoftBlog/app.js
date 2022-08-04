function solve() {

   function archive(event) {
      let $article = event.target.parentElement.parentElement;
      let $title = $article.getElementsByTagName('h1')[0];

      let $li = document.createElement('li');
      $li.textContent = $title.textContent;
      let $archiveOl = document.getElementsByTagName('ol')[0];
      $archiveOl.appendChild($li);
      let $list = $archiveOl.getElementsByTagName('li');
      let array = Array.from($list);
      array.sort((a, b) => a.textContent.localeCompare(b.textContent));

      $archiveOl.remove();
      let $ol = document.createElement('ol');
      let $archiveSection = document.getElementsByClassName('archive-section')[0];


      for (let li of array) {
         $ol.appendChild(li);
      }

      $archiveSection.appendChild($ol);

   }

   function deleteArchive(event) {
      let $article = event.target.parentElement.parentElement;
      $article.remove();
   }

   let $creator = document.getElementById('creator');
   let $title = document.getElementById('title');
   let $category = document.getElementById('category');
   let $content = document.getElementById('content');
   let $buttonCreate = document.getElementsByClassName('btn create')[0];
   // let $main = document.getElementsByTagName('main')[0];
   // let $posts = $main.getElementsByTagName('section')[0];
   let $posts = document.querySelector('.site-content>main>section');
   let $archive = document.getElementsByTagName('ol')[0];

   $buttonCreate.addEventListener('click', function (event) {
      event.preventDefault();
      let $article = document.createElement('article');

      let $h1 = document.createElement('h1');
      $h1.textContent = $title.value;
      $article.appendChild($h1);

      let $pCategory = document.createElement('p');
      $pCategory.textContent = 'Category: '
      let $strongCategory = document.createElement('strong');
      $strongCategory.textContent = $category.value;
      $pCategory.appendChild($strongCategory);
      $article.appendChild($pCategory);

      let $pCreator = document.createElement('p');
      $pCreator.textContent = 'Creator: '
      let $strongCreator = document.createElement('strong');
      $strongCreator.textContent = $creator.value;
      $pCreator.appendChild($strongCreator);
      $article.appendChild($pCreator);

      let $pContent = document.createElement('p');
      $pContent.textContent = $content.value;
      $article.appendChild($pContent);

      let $div = document.createElement('div');
      $div.setAttribute('class', 'buttons');

      let $buttonDelete = document.createElement('button');
      $buttonDelete.setAttribute('class', 'btn delete');
      $buttonDelete.textContent = 'Delete';
      $buttonDelete.addEventListener('click', deleteArchive);
      $div.appendChild($buttonDelete);

      let $buttonArchive = document.createElement('button');
      $buttonArchive.setAttribute('class', 'btn archive');
      $buttonArchive.textContent = 'Archive';
      $buttonArchive.addEventListener('click', archive);
      $div.appendChild($buttonArchive);

      $article.appendChild($div);

      $posts.appendChild($article);

   });

}
