function changeTextmessage() {
  // initializing its variable to get the default value
  const textSpan = document.getElementById("myText");


  //  if the <p> tag value has "This is text" equals to "This is text", it will return true
  if(textSpan.innerHTML === "This is Text") {
    // Assign its textSpan into "New Message"  
    textSpan.innerHTML = "New Message"

    const bodyElement1 = document.querySelector('body');
    bodyElement1.style.backgroundColor = '#FFB266';

  }
  else {
    // it returns false then it will revert into default text of <p> tag 
    textSpan.innerHTML = "This is Text";

    const bodyElement2 = document.querySelector('body');
    bodyElement2.style.backgroundColor = "#FFFFFF";


  }

}