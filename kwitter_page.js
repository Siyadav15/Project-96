var firebaseConfig = {
    apiKey: "AIzaSyANQqMedb8AwvmsiRzyW5GZIo34Ua6dILA",
    authDomain: "project-96-91447.firebaseapp.com",
    projectId: "project-96-91447",
    storageBucket: "project-96-91447.appspot.com",
    messagingSenderId: "278578924404",
    appId: "1:278578924404:web:9576ec3c47850926703a21"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function send(){
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });
 document.getElementById("msg").value="";
}
