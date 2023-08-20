let users = [
  {
    id: 0,
    ad: "Murat",
    soyad: "OKUR",
    job: "The Analist",
    isActive:true,
    proflieImagePath:"/images/02.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  },

  {
    id: 1,
    ad: "Mahir",
    soyad: "KURŞUN",
    job: "Software Engineer",
    isActive:true,
    proflieImagePath:"/images/01.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  },
  {
    id: 2,
    ad: "Ertan",
    soyad: "ERÖKSÜZ",
    job: "Software Dveloper",
    isActive:true,
    proflieImagePath:"/images/08.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  },
  {
    id: 3,
    ad: "Gamze Bakış",
    soyad: "TİRYAKİ",
    job: ".Net Dveloper",
    isActive:true,
    proflieImagePath:"/images/06.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  },
  {
    id: 4,
    ad: "Canbulat",
    soyad: "ONAROK",
    job: "React",
    isActive:true,
    proflieImagePath:"/images/01.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  },
  {
    id: 5,
    ad: "Zeki",
    soyad: "OKUR",
    job: "UX Designer",
    isActive:true,
    proflieImagePath:"/images/02.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  },
  {
    id: 6,
    ad: "Fatih",
    soyad: "OKUR",
    job: "Student",
    isActive:true,
    proflieImagePath:"/images/05.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  }
];

var kulVarmi = false;

function control() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let job = document.getElementById("job").value;

  if (firstname != "" && lastname != "") {
    for (let i = 0; i < users.length; i++) {
      if (users[i].ad == firstname && users[i].soyad == lastname && users[i].job==job) {
        cleanInput();
        kulVarmi = true;
      }
    }
  }
  return kulVarmi;
}

function AddUser() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let job = document.getElementById("job").value;
  let image = document.getElementById("btn-select-images").value;

  if (firstname != "" && lastname != "") {
    control();

    if (kulVarmi == true) {
      window.alert("Bu kullanici zaten var.");
      cleanInput();
    } else {
      users.push({ id: users.length, ad: firstname, soyad: lastname, job: job ,isActive:true,proflieImagePath:image,detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`});
      window.alert("Kullanıcı eklendi.");
      cleanInput();
    }
  } else {
    window.alert("Boş girilemez.");
  }
  userShow();
}

function userShow()
 {
  document.getElementById("userList").innerHTML = "";

let activeUsers=users.filter((user)=>user.isActive)

  activeUsers.forEach((user)=>{

    let userCard = document.createElement("div");
    userCard.classList = "userCard";
    userCard.setAttribute("id", user.id);
    document.getElementById("userList").appendChild(userCard);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

    const randomColor = getRandomColor();
    userCard.style.backgroundColor = randomColor;

    let userProfileImage = document.createElement("img");
    userProfileImage.classList = "profile-image";
    userProfileImage.setAttribute("src", user.proflieImagePath);
    userCard.appendChild(userProfileImage);

    let userDetails = document.createElement("div");
    userDetails.classList = "user-details";
    userDetails.setAttribute("id", user.id);
    userCard.appendChild(userDetails);

    let textH2 = document.createElement("h2");
    textH2.classList = "isimh2";
    textH2.setAttribute("id", "isimh2");
    userDetails.appendChild(textH2);

    textH2.innerHTML = user.ad + " " + user.soyad;
    userDetails.innerHTML += "<h5>" + user.job + "</h5>";

    let userDetailText = document.createElement("p");
    userDetailText.classList = "user-detail";
    userDetails.appendChild(userDetailText);

    userDetailText.innerText=user.detail;

    let btnUbdate=document.createElement("a");
    btnUbdate.classList="btn-ubdate";
    btnUbdate.setAttribute("id",user.id);
    btnUbdate.setAttribute("onClick", `getUser(${user.id})`);
    userDetails.appendChild(btnUbdate);
    btnUbdate.innerHTML=` <i class="fa-solid fa-pen-to-square fa-2xs" style="color: #d95000;"> Ubdate</i>`;

    let btnSil=document.createElement("a");
    btnSil.classList="btnDelete";
    btnSil.setAttribute("id",user.id);
    btnSil.setAttribute("onClick", `userDelete(${user.id})`);
    userDetails.appendChild(btnSil);
    btnSil.innerHTML=`<i class="fa-solid fa-trash-can fa-2xs" style="color: #831100;">Delete</i> `;


  })
 }

function userDelete(id)
{
  
   users.find(user=>{
  if(user.id===id){
    user.isActive=false}
   })
   

    userShow();
    cleanInput();
  
 
}

function cleanInput() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("job").value = "";
  document.getElementById("btnAdd").innerHTML = "Add User";
  document.getElementById("btnAdd").setAttribute("onClick", `AddUser()`);
}

function getUser(id) {
  document.getElementById("firstname").value = users[id].ad;
  document.getElementById("lastname").value = users[id].soyad;
  document.getElementById("job").value = users[id].job;

  document.getElementById("btnAdd").innerHTML = "Güncelle";

  document
    .getElementById("btnAdd")
    .setAttribute("onClick", `userUpdate(${id})`);
}

function userUpdate(id) {
  control();
  if (kulVarmi == true) {
    window.alert("Zaten Güncell");
  } else {
    users[id].ad = document.getElementById("firstname").value;
    users[id].soyad = document.getElementById("lastname").value;
    users[id].job = document.getElementById("job").value;
    window.alert("Kullanıcı Güncellendi.");
    userShow();
    cleanInput();
  }
}



const openImageSelectDiv=()=>{
openimageDiv=document.getElementById("images-box");
openimageDiv.style.visibility=="hidden"?openimageDiv.style.visibility="visible":openimageDiv.style.visibility="hidden"
} 


const selectImage=(selectimage)=>{
 document.getElementById("btn-select-image").setAttribute("value",selectimage.src);
 document.getElementById("images-box").style.visibility="hidden"
}


const searchUser=()=>{
 document.getElementById("userList").innerHTML=""
  let searchCategorie=document.getElementById("filtre").value;
  let searchText=document.getElementById("search-input").value;
let searchList =  users.filter(user=>user[searchCategorie].includes(searchText)&&user.isActive===true)
searchList.forEach(
  (user)=>{

    let userCard = document.createElement("div");
    userCard.classList = "userCard";
    userCard.setAttribute("id", user.id);
    document.getElementById("userList").appendChild(userCard);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

    const randomColor = getRandomColor();
    userCard.style.backgroundColor = randomColor;

    let userProfileImage = document.createElement("img");
    userProfileImage.classList = "profile-image";
    userProfileImage.setAttribute("src", user.proflieImagePath);
    userCard.appendChild(userProfileImage);

    let userDetails = document.createElement("div");
    userDetails.classList = "user-details";
    userDetails.setAttribute("id", user.id);
    userCard.appendChild(userDetails);

    let textH2 = document.createElement("h2");
    textH2.classList = "isimh2";
    textH2.setAttribute("id", "isimh2");
    userDetails.appendChild(textH2);

    textH2.innerHTML = user.ad + " " + user.soyad;
    userDetails.innerHTML += "<h5>" + user.job + "</h5>";

    let userDetailText = document.createElement("p");
    userDetailText.classList = "user-detail";
    userDetails.appendChild(userDetailText);

    userDetailText.innerText=user.detail;


    let btnUbdate=document.createElement("a");
    btnUbdate.classList="btn-ubdate";
    btnUbdate.setAttribute("id",user.id);
    btnUbdate.setAttribute("onClick", `getUser(${user.id})`);
    userDetails.appendChild(btnUbdate);
    btnUbdate.innerHTML=` <i class="fa-solid fa-pen-to-square fa-2xs" style="color: #d95000;"> Ubdate</i>`;

    let btnSil=document.createElement("a");
    btnSil.classList="btnDelete";
    btnSil.setAttribute("id",user.id);
    btnSil.setAttribute("onClick", `userDelete(${user.id})`);
    userDetails.appendChild(btnSil);
    btnSil.innerHTML=`<i class="fa-solid fa-trash-can fa-2xs" style="color: #831100;">Delete</i> `;


  }
)

}













const listeyilogla=()=>{
  console.log(users)
}
