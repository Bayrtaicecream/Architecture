let textName = document.getElementById("textName");
let textId = document.getElementById("textId");
let SignBtn = document.querySelector('#signBtn');

// Үндсэн шалгах эвент
SignBtn.addEventListener('click', () => {
    let enteredUsername = textName.value.trim();
    let enteredPassword = textId.value.trim();

    if (enteredUsername === "1" && enteredPassword === "1") {
        // Хэрэв таарвал дараагийн хуудас руу шилжинэ (жишээ нь: home.html)
        window.location.href = "main.html"; 
    } else {
        // Таарахгүй бол анхааруулга харуулна
        alert("Нэвтрэх нэр эсвэл нууц үг буруу байна!");
    }
});
