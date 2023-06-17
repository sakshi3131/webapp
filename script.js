function registerUser() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm_password").value;

  // Validate input
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Prepare data to send to the server
  var data = {
    username: username,
    email: email,
    password: password,
  };

  // Send data to the server using AJAX
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText); // Display the server response
    }
  };
  xhttp.open("POST", "register.php", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(data));
}
