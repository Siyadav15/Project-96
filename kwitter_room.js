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
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room_names-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"Adding Room Name"
    });
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}
