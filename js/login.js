document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`Login successful! Welcome, ${user.email}`);
      window.location.href = "screen/home/home.html"; // ✅ Redirect to home page
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
