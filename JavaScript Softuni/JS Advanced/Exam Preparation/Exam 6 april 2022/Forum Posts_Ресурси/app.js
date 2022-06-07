window.addEventListener("load", solve);

function solve() {

  function edit(e) {
    let $li = e.target.parentElement;
    let $article = $li.children;
    let $inputsEdit = $article[0].children;
    $inputs[0].value = $inputsEdit[0].innerText;
    let valueCategory = $inputsEdit[1].innerText.split('Category: ');
    $inputs[1].value = valueCategory[1];
    let valueContent = $inputsEdit[2].innerText.split('Content: ');
    $textArea.value = valueContent[1];
    $li.remove();
  }

  function approve(e) {
    let $li = e.target.parentElement;
    $li.getElementsByTagName('button')[1].remove();
    $li.getElementsByTagName('button')[0].remove();
    let $ulPost = document.getElementById('published-list');
    $ulPost.appendChild($li);
  }

  let $inputs = document.getElementsByTagName('input');
  let $textArea = document.getElementsByTagName('textarea')[0];
  let $publish = document.getElementById('publish-btn');
  let $ulList = document.getElementById('review-list');
  let $clearButton = document.getElementById('clear-btn');

  $clearButton.addEventListener('click', function (event) {
    let $deleteList = (event.target.parentElement).children;
    let $publishedList = $deleteList[1];
    let arr = $publishedList.children;
    while (arr.length > 0) {
      let del = $publishedList.getElementsByTagName('li')[0];
      del.remove();
    }


  });


  $publish.addEventListener('click', function (event) {
    event.preventDefault();
    if ($inputs[0].value !== '' && $inputs[1].value !== '' && $textArea.value !== '') {
      let $li = document.createElement('li');
      $li.setAttribute('class', 'rpost');

      let $article = document.createElement('article');

      let $h4 = document.createElement('h4');
      $h4.innerText = $inputs[0].value;
      $article.appendChild($h4);

      let $firstP = document.createElement('p');
      $firstP.innerText = `Category: ${$inputs[1].value}`;
      $article.appendChild($firstP);

      let $secondP = document.createElement('p');
      $secondP.innerText = `Content: ${$textArea.value}`;
      $article.appendChild($secondP);

      let $buttonEdit = document.createElement('button');
      $buttonEdit.innerText = 'Edit';
      $buttonEdit.addEventListener('click', edit);
      $buttonEdit.setAttribute('class', 'action-btn edit');

      let $buttonApprove = document.createElement('button');
      $buttonApprove.innerText = 'Approve';
      $buttonApprove.addEventListener('click', approve);
      $buttonApprove.setAttribute('class', 'action-btn approve');

      $li.appendChild($article);
      $li.appendChild($buttonEdit);
      $li.appendChild($buttonApprove);
      $ulList.appendChild($li);

      $inputs[0].value = '';
      $inputs[1].value = '';
      $textArea.value = '';
    }
  })



}
