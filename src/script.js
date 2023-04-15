import IMask from 'imask';

var element = document.getElementById('phone');
var maskOptions = {
    mask: "+358-0-000-000",
    lazy: false
}

var mask = new IMask(element, maskOptions)

const modal = document.getElementById("my_modal");
const btn = document.getElementById("calendar");
const X = document.getElementsByClassName("btn-close")[0];

btn.onclick = function(){
    modal.style.display = "flex";
}

X.onclick = function(){
    modal.style.display = "none";
}




1
2
3
4
5
6
7

	

$('.art-stranger').mask('+3 8(099) 999-99-99');

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


$('input[type="tel"]').click(function(){
    $(this).setCursorPosition(5);  // set position number
  });
</script>




Перед </body> вставить если номер вводить будут Русский


      <script src="js/maska-nomera.js" type="text/javascript" ></script>

      <script>
$('.art-stranger').mask('+7 (999) 999-99-99');

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


$('input[type="tel"]').click(function(){
    $(this).setCursorPosition(4);  // set position number
  });