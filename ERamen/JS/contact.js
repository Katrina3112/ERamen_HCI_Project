const formRegister = document.getElementById("form-register");
const inputFullname = document.getElementById("input-fullname");
const inputNoTelphone = document.getElementById("input-telephone");
const inputRamen = document.getElementById("Ramen");
const inputDryRamen = document.getElementById("Dry_Ramen");
const agree = document.getElementById("agree");
const inputEmail = document.getElementById("input-email");

formRegister.onsubmit = function(event){
event.preventDefault();
const fullname = inputFullname.value;
const noTelphone = inputNoTelphone.value;
const email = inputEmail.value;


// validasi 1: nama tidak boleh kosong
if(fullname == ""){
    alert("Full Name must not be empty!");
    return;
}
//validasi 2: nama harus terdiri dari 2 kata
if(fullname.split(" ").length < 2){
    alert("full name must contains more or equal than 2 words!");
    return;
}
//validasi 3: no telphone harus terdiri minimal 12 angka
if(noTelphone.length < 12){
    alert("Phone Number must be more or equal than 12 number!");
    return;
}
//validasi 4: harus pilih salah satu antara dry ramen or ramen
if(!inputRamen.checked && !inputDryRamen.checked){
    alert("Choose your preference!");
    return;
}
//validasi 5: kotak persetujuan harus di checked
if(!agree.checked){
    alert("Please agree to receive newsletter");
    return;
}
// validasi 6: email harus ditulis
if(email == ""){
    alert("Email must not be empty!");
    return;
}

alert("The message has been sent")

}

