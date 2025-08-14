document.addEventListener("DOMContentLoaded", () => {
  const user = firebase.auth().currentUser;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.getElementById("userEmail").textContent = user.email;
    } else {
      window.location.href = "/index.html"; // redirect to login
    }
  });

  document.getElementById("logoutBtn").addEventListener("click", () => {
    firebase.auth().signOut().then(() => {
      window.location.href = "/index.html";
    });
  });
});
