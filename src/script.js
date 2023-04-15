const modal = document.getElementById("my_modal");
const btn = document.getElementById("calendar");
const X = document.getElementsByClassName("btn-close")[0];

btn.onclick = function(){
    modal.style.display = "flex";
}

X.onclick = function(){
    modal.style.display = "none";
}


$('.phone').mask('+358-0-000-000');

$.fn.setCursorPosition = function(pos) {
if ($(this).get(0).setSelectionRange) {
  $(this).get(0).setSelectionRange(pos, pos);
} else if ($(this).get(0).createTextRange) {
  var range = $(this).get(0).createTextRange();
  range.collapse(true);
  range.moveEnd('character', pos);
  range.moveStart('character', pos);
  range.select();
}
};


$('input[type="tel"]').onclick(function(){
  $(this).setCursorPosition(4);  // set position number
})