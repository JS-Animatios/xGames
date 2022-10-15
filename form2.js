// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDqVHIod2bLGuswj3gc6eh0mo0HKLLfmnA",

  authDomain: "embedssisys.firebaseapp.com",

  databaseURL: "https://embedssisys-default-rtdb.firebaseio.com",

  projectId: "embedssisys",

  storageBucket: "embedssisys.appspot.com",

  messagingSenderId: "29133273766",

  appId: "1:29133273766:web:eff88b7a0b4e7848389267",

  measurementId: "G-WQS1C8BPC2"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      //user is signed in

    }else{
      alert("No Active user Found")
      window.location.href="signout.html"
    }
  })