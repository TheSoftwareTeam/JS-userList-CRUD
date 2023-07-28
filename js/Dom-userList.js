let users = [
  {
    id: 0,
    ad: "Murat",
    soyad: "OKUR",
    job: "Design",
  },

  {
    id: 1,
    ad: "Mahir",
    soyad: "KURŞUN",
    job: "Software",
  },
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

  if (firstname != "" && lastname != "") {
    control();

    if (kulVarmi == true) {
      window.alert("Bu kullanici zaten var.");
      cleanInput();
    } else {
      users.push({ id: users.length, ad: firstname, soyad: lastname, job: job });
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

  for (let name of users) {
    let kullaniciDivi = document.createElement("div");

    kullaniciDivi.classList = "userCard";

    kullaniciDivi.setAttribute("id", name.id);
    kullaniciDivi.setAttribute("onClick", `getUser(${name.id})`);

    document.getElementById("userList").appendChild(kullaniciDivi);

    let textH2 = document.createElement("h2");
    textH2.classList = "isimh2";
    textH2.setAttribute("id", "isimh2");
    kullaniciDivi.appendChild(textH2);

    textH2.innerHTML = name.ad + " " + name.soyad;
    kullaniciDivi.innerHTML += "<h5>" + name.job + "</h5>";

    let btnSil=document.createElement("a");
    btnSil.classList="btnDelete";
    btnSil.setAttribute("id",name.id);
    btnSil.setAttribute("onClick", `userDelete(${name.id})`);
    kullaniciDivi.appendChild(btnSil);
    btnSil.innerHTML="sil";

}
 }



function userDelete(id)
{
  
    users.splice(id,1);
    console.log(users);
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
