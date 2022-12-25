function Brown(){

    document.getElementById("fotojaKryesore").src = 'images/jacket2.jpg';
    document.getElementById("jacketdesc").innerHTML = "Double faced jacked Black & Brown";
}

function Black(){

    document.getElementById("fotojaKryesore").src = 'images/jacket1.jpg';
    document.getElementById("jacketdesc").innerHTML = "Double faced jacked Black & Black";

}

function White(){

    document.getElementById("fotojaKryesore").src = 'images/jacket3.jpg';
    document.getElementById("jacketdesc").innerHTML = "Double faced jacked White & Cream";
    
}



function btnS(){

    document.getElementById("M").style.color="black";
    document.getElementById("M").style.backgroundColor = "white";

    document.getElementById("L").style.color="black";
    document.getElementById("L").style.backgroundColor = "white";

    document.getElementById("XL").style.color="black";
    document.getElementById("XL").style.backgroundColor = "white";
    
    document.getElementById("S").style.color="white";
    document.getElementById("S").style.backgroundColor = "black";
}

function btnM(){

    document.getElementById("S").style.color="black";
    document.getElementById("S").style.backgroundColor = "white";

    document.getElementById("L").style.color="black";
    document.getElementById("L").style.backgroundColor = "white";

    document.getElementById("XL").style.color="black";
    document.getElementById("XL").style.backgroundColor = "white";

    document.getElementById("M").style.color="white";
    document.getElementById("M").style.backgroundColor = "black";
}

function btnL(){

    document.getElementById("S").style.color="black";
    document.getElementById("S").style.backgroundColor = "white";

    document.getElementById("M").style.color="black";
    document.getElementById("M").style.backgroundColor = "white";

    document.getElementById("L").style.color="white";
    document.getElementById("L").style.backgroundColor = "black";

    document.getElementById("XL").style.color="black";
    document.getElementById("XL").style.backgroundColor = "white";
}

function btnXL(){
    document.getElementById("S").style.color="black";
    document.getElementById("S").style.backgroundColor = "white";

    document.getElementById("M").style.color="black";
    document.getElementById("M").style.backgroundColor = "white";

    document.getElementById("L").style.color="black";
    document.getElementById("L").style.backgroundColor = "white";

    document.getElementById("XL").style.color="white";
    document.getElementById("XL").style.backgroundColor = "black";

}

function order(){

    alert("Your order is in, Thanks for shopping at our site!");
    location.href = "index.html";
}

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const submit= document.getElementById("submit");
const form= document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", (e)=>{
    let messages = [];
    if(fname.value.trim() === '' || fname.value == null){
        messages.push('Firstname is required');
    }

    if(lname.value.trim() === '' || lname.value == null){
        messages.push('Lastname is required');
    }

    if(!email.value.includes('@') || !email.value.endsWith('.com') || !email.value.endsWith('.net') || !email.value.endsWith('.org')){
        messages.push("This isn't a valid email");
    }

    if(messages.length > 0){
        e.preventDefault();
        error.innerText = messages.join(', ');
    }
    

})


console.log(fname);
console.log(lname);
console.log(email);
console.log(form);
