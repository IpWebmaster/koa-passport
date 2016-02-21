function AJAXSubmit (oFormElement) {
  if (!oFormElement.action) {
    return;
  }

  var json = JSON.stringify({
    email: oFormElement.email.value,
    password: oFormElement.password.value,
    passwordConfirm: oFormElement.password_confirm.value
  });

  var xhr = new XMLHttpRequest();
  xhr.onload = ajaxSuccess;
  if (oFormElement.method.toLowerCase() === "post") {
    xhr.open("post", oFormElement.action, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
  }
}

function ajaxSuccess () {
  console.log(this.responseText);
}