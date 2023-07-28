let dizi = [
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
    for (let i = 0; i < dizi.length; i++) {
      if (dizi[i].ad == firstname && dizi[i].soyad == lastname) {
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
      dizi.push({ id: dizi.length, ad: firstname, soyad: lastname, job: job });
      window.alert("Kullanıcı eklendi.");
      cleanInput();
    }
  } else {
    window.alert("Boş girilemez.");
  }
  userShow();
}

function userShow() {
  document.getElementById("userList").innerHTML = "";

  for (let name of dizi) {
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
  }
  console.log(dizi);
}

function cleanInput() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("job").value = "";
  document.getElementById("btnAdd").innerHTML = "Add User";
  document.getElementById("btnAdd").setAttribute("onClick", `AddUser()`);
}

function getUser(id) {
  document.getElementById("firstname").value = dizi[id].ad;
  document.getElementById("lastname").value = dizi[id].soyad;
  document.getElementById("job").value = dizi[id].job;

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
    dizi[id].ad = document.getElementById("firstname").value;
    dizi[id].soyad = document.getElementById("lastname").value;
    dizi[id].job = document.getElementById("job").value;
    window.alert("Kullanıcı Güncellendi.");
    userShow();
    cleanInput();
  }
}
