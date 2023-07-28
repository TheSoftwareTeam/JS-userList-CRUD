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

function AddUser() {
  let kulVarmi = false;

  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let job = document.getElementById("job").value;

  if (firstname != "" && lastname != "") {
    for (let i = 0; i < dizi.length; i++) {
      if (dizi[i].ad == firstname && dizi[i].soyad == lastname) {
        window.alert("Bu kullanici zaten var.");
        cleanInput();

        kulVarmi = true;
      }
    }
    if (kulVarmi == false) {
      dizi.push({ id: dizi.length, ad: firstname, soyad: lastname, job: job });
      window.alert("Kullanıcı eklendi.");
      cleanInput();
    }
  } else {
    window.alert("Boş girilemez.");
  }
}

function userShow() {
  document.getElementById("userList").innerHTML = "";

  for (let name of dizi) {
    let kullaniciDivi = document.createElement("div");

    kullaniciDivi.classList = "userCard";

    kullaniciDivi.setAttribute("id", name.id);
    kullaniciDivi.setAttribute("onClick", `userUpdate(${name.id})`);

    document.getElementById("userList").appendChild(kullaniciDivi);

    let textH2 = document.createElement("h2");
    textH2.classList = "isimh2";
    textH2.setAttribute("id", "isimh2");
    kullaniciDivi.appendChild(textH2);

    textH2.innerHTML = name.ad + " " + name.soyad;
    kullaniciDivi.innerHTML += "<h5>" + name.job + "</h5>";
  }
}

function cleanInput() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("job").value = "";
  document.getElementById("btnAdd").innerHTML = "Add User";
  document.getElementById("btnAdd").setAttribute("onClick", `AddUser()`);
}

function userUpdate(id) {
  document.getElementById("firstname").value = dizi[id].ad;
  document.getElementById("lastname").value = dizi[id].soyad;
  document.getElementById("job").value = dizi[id].job;

  document.getElementById("btnAdd").innerHTML = "Güncelle";

  document
    .getElementById("btnAdd")
    .setAttribute("onClick", `newUserUpdate(${id})`);
}

function newUserUpdate(id) {
  dizi[id].ad = document.getElementById("firstname").value;
  dizi[id].soyad = document.getElementById("lastname").value;
  dizi[id].job = document.getElementById("job").value;
  window.alert("Kullanıcı güncellendi.");
  userShow();
}
