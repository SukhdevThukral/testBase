const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyAQU0Fpr2Df8xOYriMJ7pIlBTgxxdVX2Do",
    authDomain: "nigga-ac4ba.firebaseapp.com",
    databaseURL: "https://nigga-ac4ba-default-rtdb.firebaseio.com",
    projectId: "nigga-ac4ba",
    storageBucket: "nigga-ac4ba.appspot.com",
    messagingSenderId: "118443551963",
    appId: "1:118443551963:web:f82ec26a08cb4ff751f0fe",
    measurementId: "G-529B6E6J34"
    };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };