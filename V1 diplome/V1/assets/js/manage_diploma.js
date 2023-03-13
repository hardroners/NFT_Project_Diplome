

function openForm() {
    document.getElementById("popupForm").style.display = "block";
    
  }

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

function ValidForm(){
  const nom = document.getElementById("nom").value
  const prenom = document.getElementById("prenom").value
  const annee = document.getElementById("annee").value
  const filiere = document.getElementById("filiere").value
  const jury = document.getElementById("jury").value
  const diplome = document.getElementById("diplome").value

 
  alert("L'étudiant est créé ! Actualisez votre page dans 30 secondes.");
}

function profile(){
  document.location.href="../../authentification/index.html";
}