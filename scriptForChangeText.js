function changeTextmessage() {
  // initializing its variable to get the default value
  const textSpan = document.getElementById("myText");


  //  if the <p> tag value has "This is text" equals to "This is text", it will return true
  if(textSpan.innerHTML === "This is Text") {
    // Assign its textSpan into "New Message"  
    textSpan.innerHTML = "New Message"
  }
  else {
    // it returns false then it will revert into default text of <p> tag 
    textSpan.innerHTML = "This is Text";
  }

}