let dizi = [
  {
    ad: "Murat",
    soyad: "OKUR",
    job: "Design",
  },

  {
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
        document.getElementById("firstname").value = "";

        document.getElementById("lastname").value = "";
        document.getElementById("job").value = "";
        

        kulVarmi = true;
      }
    }
    if (kulVarmi == false) {
      dizi.push({ ad: firstname, soyad: lastname,job:job });
      window.alert("Kullanıcı eklendi.");
      document.getElementById("firstname").value = "";

      document.getElementById("lastname").value = "";
      document.getElementById("job").value = "";
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

    kullaniciDivi.setAttribute("id", "userCard");

    document.getElementById("userList").appendChild(kullaniciDivi);

    let textH2 = document.createElement("h2");
    textH2.classList = "isimh2";
    textH2.setAttribute("id", "isimh2");
    kullaniciDivi.appendChild(textH2);

    textH2.innerHTML = name.ad + " " + name.soyad;
    kullaniciDivi.innerHTML+="<h5>"+name.job+"</h5>";
  }
}
