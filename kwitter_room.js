var firebaseConfig = {
  apiKey: "AIzaSyCo7cFLKl7rs_R-d2PPz30qRbY6cx7oExg",
  authDomain: "kwitter-14bd6.firebaseapp.com",
  databaseURL: "https://kwitter-14bd6-default-rtdb.firebaseio.com",
  projectId: "kwitter-14bd6",
  storageBucket: "kwitter-14bd6.appspot.com",
  messagingSenderId: "163848614658",
  appId: "1:163848614658:web:ebf1c1b6686fc8731ec81b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
        console.log("Room_names - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("result").innerHTML += row; 
  //End code
  });});}
getData();

username = localStorage.getItem("username");
document.getElementById("username_welcome").innerHTML = "Welcome " + username + "!";

function addRoom()
{
 newRoom = document.getElementById("add_room").value;

 firebase.database().ref("/").child(newRoom).update({
        value: "a new room"
 });

 localStorage.setItem("new_Room", newRoom);

 window.location = "kwitter_message_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_message_page.html";
}

function logout_btn() 
{
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
