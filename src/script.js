const modal = document.getElementById("my_modal");
const btn = document.getElementById("calendar");
const X = document.getElementsByClassName("btn-close")[0];

btn.onclick = function(){
    modal.style.display = "flex";
}

X.onclick = function(){
    modal.style.display = "none";
}

