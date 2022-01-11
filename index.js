function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    alert("You have been signed in successfully");
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
}



function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
    });
}

$("#dataTable").ready(function () {
    var tabel = document.getElementById("dataTable")
    getAll().then(response => {
        console.log(response)
        for(var i = 0; i <response.length; i++){
            const tr = tabel.insertRow()
            const td1 = tr.insertCell();
            const td2 = tr.insertCell();
            const td3 = tr.insertCell();
            const td4 = tr.insertCell();
            const td5 = tr.insertCell();
           
            console.log(response[i])
            td1.innerHTML = response[i]['id'];
            td2.innerHTML = response[i]['namaMobil'];
            td3.innerHTML = response[i]['tipeMobil'];
            td4.innerHTML = response[i]['platNomor'];
            td5.innerHTML = `<div class ="justify content-center">
            <a class="btn btn-warning btn-sm text-white" border:none;" href="updateData.html?id=${response[i].id}">Edit</a>
            <button type ="button" class="btn btn-danger btn-sm" onclick="del(${response[i].id});">Delete</button>
            </div>`
            }
        }
    )
});

