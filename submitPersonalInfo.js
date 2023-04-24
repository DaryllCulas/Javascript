function submitInfo() {
 
  // initializing this object's properties and values
    const personalInfo = {
      Firstname: document.getElementById("First_name").value,
      Lastname: document.getElementById("Last_name").value,
      Age: document.getElementById("aGe").value,
      Gender: document.getElementById("gender").value,
      Course: document.getElementById("course").value,
      Email: document.getElementById("emailAdd").value,
  
    };
  
    // if these textfields and lists has whitespace or unfilled by user then it returns true and it will require the user to fill these up
    if(personalInfo.Firstname === "" || personalInfo.Lastname === "" || personalInfo.Age === "" || personalInfo.Gender === "" || personalInfo.Course === "" || personalInfo.Email === "") {
      alert("Please Fill up your textfields!");
  
      // This will execute here when the expression is true, the following textfields and lists will be forcibly blanked because it needs user's input
      document.getElementById("First_name").value = "";
      document.getElementById("Last_name").value = "";
      document.getElementById("aGe").value = "";
      document.getElementById("gender").value = "";
      document.getElementById("course").value = "";
      document.getElementById("emailAdd").value = "";
    
    }
    // If these textfields and lists has no whitespace or filled by the user's input, then it will execute inside this else's statement
    else {
  
      // Alert here first then...
      alert("Nice");
  
      // Display here
      document.write(`<p><strong>First Name: </strong> ${personalInfo.Firstname}</p>`);
      document.write(`<p><strong>Last Name: </strong> ${personalInfo.Lastname}</p>`);
      document.write(`<p><strong>Age: </strong> ${personalInfo.Age}</p>`);
      document.write(`<p><strong>Gender </strong> ${personalInfo.Gender}</p>`);
      document.write(`<p><strong>Course </strong> ${personalInfo.Course}</p>`);
      document.write(`<p><strong>Email </strong> ${personalInfo.Email}</p>`);
  
  
      // For another webpage when the output has been showed, the user can click below the output to redirect onto another webpage
        let btn = document.createElement("button");
        btn.innerHTML = "Click Me";
        document.body.appendChild(btn);
  
  
          btn.onclick = function () {
            alert(`Very good, ${personalInfo.Firstname}!`);
            window.location.href = "Act1.3.html";
          }
      
      }
      
  
  
  }
