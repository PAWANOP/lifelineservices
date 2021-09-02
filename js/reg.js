const myfun=()=>{

    
  let first = document.getElementById("first").value;
  let email=document.getElementById("email").value;
  let services = document.getElementById("services").value;
  let Experience = document.getElementById("Experience").value;
  let Govt =document.getElementById("Govt").value;
  let Contact=document.getElementById("Contact").value;
  let range=document.getElementById("range").value;
  let documents=document.getElementById("document").value;

  if (first=="") {
     alert("Please enter your Name");
     return false;
  }

   if (!isNaN(first)) {
   alert("Enter Alphabets Only");
    return false;
  }

   if (email=="") {
     alert("Please enter your email");
      return false;
   }

    if (services=="") {
     alert("Please enter your services");
      return false;
   }
   
    if (Experience=="") {
     alert("Please enter your Experience");
      return false;
   }
   
    if (Govt=="") {
     alert("Please Add a Govt. Identity File");
      return false;
   }
    if (Contact=="") {
     alert("Please enter Contact Number");
      return false;
   }

   if (isNaN(Contact)) {
    alert("Enter Number Only");
     return false;
   }
   
    if (range=="") {
     alert("Please enter Contact Number");
      return false;
   }
   
    if (documents=="") {
     alert("Please Upload document for experience");
      return false;
   }
   // // --------------------------------------------------------------------------------
  }


  
  