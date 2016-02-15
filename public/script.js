document.forms.auth.onsubmit = function() {
  var json = JSON.stringify({
    email: document.forms.auth.email.value,
    password: document.forms.auth.password.value
  });
  // отослать
  var xhr = new XMLHttpRequest();
  xhr.open("POST", '/login', true);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(json);
  return false;
};
