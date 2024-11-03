const errorMsgs = document.getElementById("errorDisplay");

export function displayErrors(messages) {
    if (messages.length > 0) {
      errorMsgs.style.display = "block";
      errorMsgs.style.backgroundColor = "red";
      errorMsgs.style.color = "white";
      errorMsgs.innerHTML = `${messages}`;
    } else {
      let successfulmsg = "Registration successful!";
      console.log("hello");
      errorMsgs.style.display = "block";
      errorMsgs.style.backgroundColor = "green";
      errorMsgs.style.color = "white";
      errorMsgs.innerHTML = `${successfulmsg}`;
  
      registrationForm.elements["username"].value = "";
      registrationForm.elements["email"].value = "";
      registrationForm.elements["password"].value = "";
      registrationForm.elements["passwordCheck"].value = "";
      registrationForm.elements["terms"].checked = false;
    }
  }
  
  export function displayLoginErrors(messages, persist) {
    if (messages.length > 0) {
      errorMsgs.style.display = "block";
      errorMsgs.style.backgroundColor = "red";
      errorMsgs.style.color = "white";
      errorMsgs.innerHTML = `${messages}`;
    } else {
      let successfulmsg = "Login successful!";
      let successfulmsgPersist =
        "Login successful! and you are logged in until you logged out";
  
      console.log("hello");
      errorMsgs.style.display = "block";
      errorMsgs.style.backgroundColor = "green";
      errorMsgs.style.color = "white";
      if (persist.checked) {
        errorMsgs.innerHTML = `${successfulmsgPersist}`;
      } else {
        errorMsgs.innerHTML = `${successfulmsg}`;
      }
  
      loginForm.elements["username"].value = "";
      loginForm.elements["password"].value = "";
    }
  }
  