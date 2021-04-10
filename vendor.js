// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDn0EKe-H4zcRafFVmIjmoYNJK9-NuPxCY",
    authDomain: "vendor-e33b1.firebaseapp.com",
    projectId: "vendor-e33b1",
    storageBucket: "vendor-e33b1.appspot.com",
    messagingSenderId: "120889196753",
    appId: "1:120889196753:web:0784914b5a44ce781605f0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('vendorForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var email = getInputVal('email');
  var select= getInputVal('select')
  var price = getInputVal('price');
  var place = getInputVal('place');
  var file = getInputVal('file');

  // Save message
  saveMessage( email, select,place, price,file);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('vendorForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage( email, select,place, price,file){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    
    email:email,
    select:select,
    place: place, 
    price: price,
    file :file,
  });
}