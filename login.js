function checkForm() {

  // Get username and password values
  const username = document.getElementById("userName").value;
  const password = document.getElementById("passWord").value; 

  //Get elements error message
  const usererror = document.getElementById("usernameError");
  const passworderror = document.getElementById("passwordError");

  // if username has whitespace, it returns true and will display block (error message) of its style of username's span tag
    if(username.trim() === "" ) {
        usererror.style.display = "block";
        return false; // Prevent default submission
        alert("Please fill up your username!");

    }
    else {
    // This will hide its display of span tag (error message) 
        usererror.style.display = "none";
    }

    // If password has whitespace, it returns true and will display block (error message) of its style of password's span tag
    if(password.trim()=== "") {
        passworderror.style.display = "block";
        return false; // Prevent default submission
        alert(`Please fill your up password! ${username}`); // We use `string template` here to display the username's value
    }
    else {
        passworderror.style.display = "none";
    }


    
        // If username and password has no whitespace, it return true and the next block will execute its another if-else statement 
        if(username.trim() !== "" && password !== "") { 
          // if username and password are matched then it returns true.
            if(username === "admin" && password === "admin123") {
              // If they match, it returns true and it will show alert and also, it will redirect to the another location
              alert("Login Successfully");
              alert(`Welcome, ${username}`); // we use string template here to display the value of username
              window.location.href = "Act1.2.html"; // redirect to another webpage
            }
            else {
              alert("Login failed Successfully!! ");
              document.getElementById("userName").value = ""; // The username's textfield will be blanked
              document.getElementById("passWord").value = ""; // The password's textfield will be blanked
            }
        }

}