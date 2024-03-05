let captcha;
const alphabets = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

function init() {
  const first = alphabets[Math.floor(Math.random() * alphabets.length)];
  const second = Math.floor(Math.random() * 10);
  const third = alphabets[Math.floor(Math.random() * alphabets.length)];
  const fourth = Math.floor(Math.random() * 10);
  const fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
  const sixth = Math.floor(Math.random() * 10);
  captcha =
    first.toString() +
    second.toString() +
    third.toString() +
    fourth.toString() +
    fifth.toString() +
    sixth.toString();
  document.getElementById('generatedCaptcha').innerHTML = captcha;
  document.getElementById('enteredCaptcha').value = '';
}

init();

function handleCheckCaptcha() {
  const userValue = document.getElementById('enteredCaptcha').value;
  if (userValue == captcha) {
    alert('Correct!!');
  } else {
    alert('Try Again!!');
    document.getElementById('enteredCaptcha').value = '';
  }
}
