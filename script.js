let users = [
  {
    id: 0,
    firstName: "Mahir",
    lastName: "KURŞUN",
    job: "Software Engineer",
    isActive: true,
    proflieImagePath: "/images/013.png",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`,
  },
  {
    id: 1,
    firstName: "Murat",
    lastName: "OKUR",
    job: "The Analist",
    isActive: false,
    proflieImagePath: "/images/09.png",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`,
  },
  {
    id: 2,
    firstName: "Saide Nur",
    lastName: "OKUR",
    job: "Barista",
    isActive: true,
    proflieImagePath: "/images/07.png",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`,
  },
  {
    id: 3,
    firstName: "Zeki",
    lastName: "OKUR",
    job: "UX Designer",
    isActive: true,
    proflieImagePath: "/images/08.png",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`,
  },
  {
    id: 4,
    firstName: "Hülya",
    lastName: "ÇELEBİ",
    job: ".Net Dveloper",
    isActive: true,
    proflieImagePath: "/images/06.png",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`,
  },
  {
    id: 5,
    firstName: "Canbulat",
    lastName: "ONAROK",
    job: "React",
    isActive: true,
    proflieImagePath: "/images/015.png",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`,
  },
  {
    id: 6,
    firstName: "Ertan",
    lastName: "ERÖKSÜZ",
    job: "Front-End Developer",
    isActive: true,
    proflieImagePath: "/images/010.png",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`,
  },
  {
    id: 7,
    firstName: "Fatih",
    lastName: "OKUR",
    job: "Student",
    isActive: true,
    proflieImagePath: "/images/011.png",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`,
  },
  {
    id: 8,
    firstName: "Mehmet",
    lastName: "KAYA",
    job: "Engineer",
    isActive: true,
    proflieImagePath: "/images/04.png",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`,
  },
  {
    id: 9,
    firstName: "Derya",
    lastName: "DENİZ",
    job: "Software Engineer",
    isActive: true,
    proflieImagePath: "/images/014.png",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`,
  },
  ,
  {
    id: 10,
    firstName: "Ramazan",
    lastName: "YULCA",
    job: "Student",
    isActive: true,
    proflieImagePath: "/images/016.png",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`,
  },
  ,
  {
    id: 11,
    firstName: "Deniz",
    lastName: "YAZAR",
    job: "prof",
    isActive: true,
    proflieImagePath: "/images/02.png",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`,
  },
];

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const job = document.getElementById("job");
const image = document.getElementById("btn-select-image");
const userList = document.getElementById("user-list");
const btnAdd = document.getElementById("btn-add");

const imageBox = document.getElementById("images-box");

function control() {
  var kulVarmi = false;
  users.forEach((user) => {
    if (
      user.firstName === firstname.value &&
      user.lastName === lastname.value &&
      user.job === job.value
    ) {
      kulVarmi = true;
    }
  });
  return kulVarmi;
}

function AddUser() {
  if (firstname.value != "" && lastname.value != "") {
    if (control()) {
      alert("Bu kullanici zaten var.");
    } else {
      users.push({
        id: users.length,
        firstName: firstname.value,
        lastName: lastname.value,
        job: job.value,
        isActive: true,
        proflieImagePath: image.value,
        detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatum vitae officia voluptates ipsa veniam! Numquam ratione voluptas praesentium maxime quam ad assumenda eum non voluptates. Aut nihil cumque reiciendis!`,
      });
      alert("Kullanıcı eklendi.");
      userShow(users);
    }
    cleanInput();
  } else {
    alert("Boş girilemez.");
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function userShow(dizi) {
  userList.innerHTML = "";

  let activeUsers = dizi.filter((user) => user.isActive);

  activeUsers.forEach((user) => {
    let userCard = document.createElement("div");
    userCard.classList = "user-card";
    userCard.setAttribute("id", user.id);
    userCard.style.backgroundColor = getRandomColor();
    userList.appendChild(userCard);

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

    userDetailText.innerText = user.detail;

    let btnUbdate = document.createElement("a");
    btnUbdate.classList = "btn-ubdate";
    btnUbdate.setAttribute("id", user.id);
    btnUbdate.setAttribute("onClick", `getUser(${user.id})`);
    userDetails.appendChild(btnUbdate);
    btnUbdate.innerHTML = ` <i class="fa-solid fa-pen-to-square fa-xs" style="color: #d95000;"> U b d a t e</i>`;

    let btnSil = document.createElement("a");
    btnSil.classList = "btnDelete";
    btnSil.setAttribute("id", user.id);
    btnSil.setAttribute("onClick", `userDelete(${user.id})`);
    userDetails.appendChild(btnSil);
    btnSil.innerHTML = `<i class="fa-solid fa-trash-can fa-xs" style="color: #831100;"> D e l e t e</i> `;
  });
}

function userDelete(id) {
  
  users.map((user) => {
    if (user.id == id) {
      user.isActive = false;
    }
  });

  userShow(users);
  cleanInput();
}

function cleanInput() {
  firstname.value = "";
  lastname.value = "";
  job.value = "";
  image.src = "/images/user.png";
  btnAdd.innerText = "Add User";
  btnAdd.setAttribute("onClick", `AddUser()`);
}

function getUser(id) {
  firstname.value = users[id].firstName;
  lastname.value = users[id].lastName;
  job.value = users[id].job;
  image.src = users[id].proflieImagePath;
  btnAdd.innerText = "Ubdate";
  btnAdd.setAttribute("onClick", `userUpdate(${id})`);
}

function userUpdate(id) {
  users[id].ad = firstname.value;
  users[id].lastName = lastname.value;
  users[id].job = job.value;
  users[id].proflieImagePath = image.value;
  window.alert("Kullanıcı Güncellendi.");
  userShow(users);
  cleanInput();
}

const openImageSelectDiv = () => {
  imageBox.style.visibility == "hidden"
    ? (imageBox.style.visibility = "visible")
    : (imageBox.style.visibility = "hidden");
};

const selectImage = (selectted) => {
  image.setAttribute("value", selectted.name);
  imageBox.style.visibility = "hidden";
  image.src = selectted.name;
  image.value = selectted.name;
};

const searchUser = () => {
  userList.innerHTML = "";
  let searchCategorie = document.getElementById("filter").value;
  let searchText = document.getElementById("search-input").value;
  let searchList = users.filter(
    user =>{if(user[searchCategorie].includes(searchText)){return true}}
  );
  console.log(searchList);
  userShow(searchList)
};




// const listeyilogla = () => {
//   console.log(users);
// };
