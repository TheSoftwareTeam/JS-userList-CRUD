let users = [
  {
    id: 0,
    firstName: "Mahir",
    lastName: "KURŞUN",
    job: "Software Engineer",
    isActive:true,
    proflieImagePath:"/images/013.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  },{
    id: 1,
    firstName: "Murat",
    lastName: "OKUR",
    job: "The Analist",
    isActive:true,
    proflieImagePath:"/images/09.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  },
  {
    id: 2,
    firstName: "Saide Nur",
    lastName: "OKUR",
    job: "Barista",
    isActive:true,
    proflieImagePath:"/images/07.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  },
  {
    id: 3,
    firstName: "Zeki",
    lastName: "OKUR",
    job: "UX Designer",
    isActive:true,
    proflieImagePath:"/images/08.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  },
  {
    id: 4,
    firstName: "Hülya",
    lastName: "ÇELEBİ",
    job: ".Net Dveloper",
    isActive:true,
    proflieImagePath:"/images/06.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  },
  {
    id: 5,
    firstName: "Canbulat",
    lastName: "ONAROK",
    job: "React",
    isActive:true,
    proflieImagePath:"/images/015.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  },
  {
    id: 6,
    firstName: "Ertan",
    lastName: "ERÖKSÜZ",
    job: "Front-End Developer",
    isActive:true,
    proflieImagePath:"/images/010.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  },
  {
    id: 7,
    firstName: "Fatih",
    lastName: "OKUR",
    job: "Student",
    isActive:true,
    proflieImagePath:"/images/011.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  }
  ,
  {
    id: 8,
    firstName: "Mehmet",
    lastName: "KAYA",
    job: "Engineer",
    isActive:true,
    proflieImagePath:"/images/04.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  }
  ,
  {
    id: 9,
    firstName: "Derya",
    lastName: "DENİZ",
    job: "Software Engineer",
    isActive:true,
    proflieImagePath:"/images/014.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  },
  ,
  {
    id: 10,
    firstName: "Ramazan",
    lastName: "YULCA",
    job: "Student",
    isActive:true,
    proflieImagePath:"/images/016.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  },
  ,
  {
    id: 11,
    firstName: "Deniz",
    lastName: "YAZAR",
    job: "prof",
    isActive:true,
    proflieImagePath:"/images/02.png",
    detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`
  
  }
];

var kulVarmi = false;

function control() {
  

  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let job = document.getElementById("job").value;
  
    users.forEach((user)=>{
      if (user.firstName === firstname && user.lastName === lastname && user.job===job) {
        kulVarmi = true;
      }
    })
      
  return kulVarmi;
}

function AddUser() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let job = document.getElementById("job").value;
  let image = document.getElementById("btn-select-image").value;
  
  if (firstname != "" && lastname != "") {
    control();

    if (kulVarmi) {
      window.alert("Bu kullanici zaten var.");
      
    } else {
      alert(image)
      users.push({ id: users.length, firstName: firstname, lastName: lastname, job: job ,isActive:true,proflieImagePath:image,detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`});
      window.alert("Kullanıcı eklendi.");
      
    }
    cleanInput();
  } else {
    window.alert("Boş girilemez.");
  }
  isListing=false;
  userShow();
}
let isListing=false;
function userShow()
 {
  document.getElementById("userList").innerHTML = "";
  if(!isListing)
  {
    
    isListing=true
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
    
        textH2.innerHTML = user.firstName + " " + user.lastName;
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
        btnUbdate.innerHTML=` <i class="fa-solid fa-pen-to-square fa-xs" style="color: #d95000;"> U b d a t e</i>`;
    
        let btnSil=document.createElement("a");
        btnSil.classList="btnDelete";
        btnSil.setAttribute("id",user.id);
        btnSil.setAttribute("onClick", `userDelete(${user.id})`);
        userDetails.appendChild(btnSil);
        btnSil.innerHTML=`<i class="fa-solid fa-trash-can fa-xs" style="color: #831100;"> D e l e t e</i> `;
    
    
      })
  }
  else{
isListing=false
  }
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
  document.getElementById("btn-select-image").src = "/images/user.png";
  document.getElementById("btnAdd").innerHTML = "Add User";
  document.getElementById("btnAdd").setAttribute("onClick", `AddUser()`);
}

function getUser(id) {
  document.getElementById("firstname").value = users[id].firstName;
  document.getElementById("lastname").value = users[id].lastName;
  document.getElementById("job").value = users[id].job;
  document.getElementById("btn-select-image").src = users[id].proflieImagePath;

  document.getElementById("btnAdd").innerHTML = "Güncelle";

  document
    .getElementById("btnAdd")
    .setAttribute("onClick", `userUpdate(${id})`);
}

function userUpdate(id) {
    users[id].ad = document.getElementById("firstname").value;
    users[id].lastName = document.getElementById("lastname").value;
    users[id].job = document.getElementById("job").value;
    users[id].proflieImagePath=document.getElementById("btn-select-image").value;
  window.alert("Kullanıcı Güncellendi.");
  isListing=false;
    userShow();
    cleanInput();
  
}

const openImageSelectDiv=()=>{
openimageDiv=document.getElementById("images-box");
openimageDiv.style.visibility=="hidden"?openimageDiv.style.visibility="visible":openimageDiv.style.visibility="hidden"
} 


const selectImage=(selectted)=>{
 document.getElementById("btn-select-image").setAttribute("value",selectted.name);
 document.getElementById("images-box").style.visibility="hidden";
 document.getElementById("btn-select-image").src=selectted.name;
 document.getElementById("btn-select-image").value=selectted.name;
}

const searchUser=()=>{
 document.getElementById("userList").innerHTML=""
  let searchCategorie=document.getElementById("filter").value;
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

    textH2.innerHTML = user.firstName + " " + user.lastName;
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
