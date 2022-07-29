window.addEventListener('load', solution);

function solution() {

  let $inputFname = document.getElementById('fname');
  let $inputEmail = document.getElementById('email');
  let $inputPhone = document.getElementById('phone');
  let $inputAddress = document.getElementById('address');
  let $inputPostCode = document.getElementById('code');
  let $buttonSubmit = document.getElementById('submitBTN');
  let $infoPreview = document.getElementById('infoPreview');
  let $buttonEdit = document.getElementById('editBTN');
  let $buttonContinue = document.getElementById('continueBTN');

  $buttonSubmit.addEventListener('click', function (event) {

    if ($inputFname.value && $inputEmail.value) {

      let $liFname = document.createElement('li');
      $liFname.textContent = `Full Name: ${$inputFname.value}`;
      $infoPreview.appendChild($liFname);

      let $liEmail = document.createElement('li');
      $liEmail.textContent = `Email: ${$inputEmail.value}`;
      $infoPreview.appendChild($liEmail);

      if ($inputPhone.value !== '') {
        let $liPhone = document.createElement('li');
        $liPhone.textContent = `Phone Number: ${$inputPhone.value}`;
        $infoPreview.appendChild($liPhone);
      }


      if ($inputAddress.value !== '') {
        let $liAddress = document.createElement('li');
        $liAddress.textContent = `Address: ${$inputAddress.value}`;
        $infoPreview.appendChild($liAddress);
      }

      if ($inputPostCode.value !== '') {
        let $liPostCode = document.createElement('li');
        $liPostCode.textContent = `Postal Code: ${$inputPostCode.value}`;
        $infoPreview.appendChild($liPostCode);
      }



      $inputFname.value = '';
      $inputEmail.value = '';
      $inputPhone.value = '';
      $inputAddress.value = '';
      $inputPostCode.value = '';

      event.target.disabled = true;
      $buttonEdit.disabled = false;
      $buttonContinue.disabled = false;

    }

  });

  $buttonEdit.addEventListener('click', function (event) {

    let $li = $infoPreview.children;

    $inputFname.value = ($li[0].textContent).split(': ')[1];
    $inputEmail.value = ($li[1].textContent).split(': ')[1];
    $inputPhone.value = ($li[2].textContent).split(': ')[1];
    $inputAddress.value = ($li[3].textContent).split(': ')[1];
    $inputPostCode.value = ($li[4].textContent).split(': ')[1];

    let li = $infoPreview.getElementsByTagName('li');
    for (let i = li.length - 1; i >= 0; i--) {
      let el = li[i];
      el.remove();
      
    }

    event.target.disabled = true;
    $buttonContinue.disabled = true;
    $buttonSubmit.disabled = false;
  });

  $buttonContinue.addEventListener('click', function () {
    let h1 = document.getElementsByTagName('h1')[0];
    h1.remove();
    let h4 = document.getElementsByTagName('h4')[0];
    h4.remove();
    let form = document.getElementById('form');
    form.remove();
    let information = document.getElementById('information');
    information.remove();
    let block = document.getElementById('block');
    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    block.appendChild(h3);
  });

}
