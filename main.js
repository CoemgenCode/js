  function maFonction(){
    let para = document.querySelector("body");
    para.style.color="red";
    para.style.backgroundColor="rgb(0,121,143)";
  }

  document.querySelector("#bouton").addEventListener("click",maFonction);


// const valuesUser = Object.values(userData);
// const keyUser = Object.keys(userData);
// console.log("les valeur de l'objet converties en array : ",valuesUser);



// document.getElementById("name").innerHTML=keyUser[0] + ": " + valuesUser[0];
// document.getElementById("mail").innerHTML=keyUser[1] + ": " + valuesUser[1];
// document.getElementById("age").innerHTML=keyUser[2] + ": " + valuesUser[2];
// document.getElementById("dob").innerHTML=keyUser[3] + ": " + valuesUser[3];




// const div = document.querySelector('h2');



// const divContent = (obj) => {
//     for (const elem in obj) {
//         div.innerText +=`\n ${elem} : ${obj[elem]}`;
//         div.style.textDecoration="underline";
//         div.style.margin="auto";
//         div.style.marginTop="30px";
//         div.style.marginBottom="300px";
//         div.style.height="100%";
//         div.style.display="flex";
//         div.style.padding="2rem"



//     }

// };

// divContent(userData);

let pseudo = {
    pseudo1: 'José',
    pseudo2: 'Grigny',
    pseudo3: 'Roi',
    pseudo4: 'Dongue'
}

let text = {
text1: 'Gracia',
text2: 'La grande borne',
text3: 'Heenok',
text4:'Rodrigue'
}


let divProfil = document.querySelector('.pseudo');
divProfil.style.backgroundColor = `background-color: #4158D0`;
divProfil.style.backgroundImage = `linear-gradient(43deg, #046380 0%, #002F2F 46%, #BD8D46 100%)`;
divProfil.style.color = `white`;
divProfil.style.width = '500px';
divProfil.style.margin = 'auto';
divProfil.style.padding = '2rem';


const paraPseudo1 = document.createElement('p');
paraPseudo1.innerHTML = pseudo['pseudo1'] + " " + text['text1'];
divProfil.append(paraPseudo1);


const paraPseudo2 = document.createElement('p');
paraPseudo2.innerHTML = pseudo['pseudo2'] + " " + text['text2'];
divProfil.append(paraPseudo2);


const paraPseudo3 = document.createElement('p');
paraPseudo3.innerHTML = pseudo['pseudo3'] + " " + text['text3'];
paraPseudo3.style.fontWeight="bold";
divProfil.append(paraPseudo3);



const addText = (pseudo, text) =>{
    let para = document.createElement('p');
    para.innerHTML = `<strong>${pseudo}</strong> ${text} `;
    divProfil.append(para);
}

addText("José", "Gracia");
addText("José", "Paldir");
addText("José", "Fine");






const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://idealogeek.fr/wp-content/uploads/2022/07/top-memes-populaires-internet.jpg'
  };

// JS qui va customiser la div du profile utilisateur
let divUser = document.querySelector('.userProfile');
divUser.style.backgroundColor = `background-color: #4158D0`;
divUser.style.backgroundImage = `linear-gradient(43deg, #046380 0%, #002F2F 46%, #BD8D46 100%)`;divUser.style.color = `white`;
divUser.style.width = '500px';
divUser.style.margin = 'auto';
divUser.style.padding = '2rem';

//JS crée une image, renseigne la src , modif taille
const imgTemplate = document.createElement('img');
imgTemplate.src = userData.img;
imgTemplate.style.height = '400px';
imgTemplate.style.width = '500px';
divUser.append(imgTemplate);

// JS crée le titre du name
const nameTemplate = document.createElement('h1');//phase 1 creation
nameTemplate.innerText = userData['name'];
divUser.append(nameTemplate);

// JS crée le titre du email
const emailTemplate = document.createElement('h2');//phase 1 creation
emailTemplate.innerText = userData.email;
divUser.append(emailTemplate);

// JS crée le titre du age
const ageTemplate = document.createElement('h2');//phase 1 creation
ageTemplate.innerText = userData.age;
divUser.append(ageTemplate);

// JS crée le titre du dob
const dobTemplate = document.createElement('h2');//phase 1 creation
dobTemplate.innerText = userData.dob;
divUser.append(dobTemplate);

// JS crée le titre du active
const activeTemplate = document.createElement('h2');//phase 1 creation
activeTemplate.innerText = userData.active;
divUser.append(activeTemplate);