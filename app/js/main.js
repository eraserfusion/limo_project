function autotab(original,destination){
  if (original.getAttribute && original.value.length == original.getAttribute("maxlength"))
    destination.focus();
}

function validateForm() {
  var x = document.forms["LimoForm"]["first"].value;
  var y = document.forms["LimoForm"]["second"].value;
  var z = document.forms["LimoForm"]["third"].value;

  if (/\D/.test(x) || /\D/.test(y) || /\D/.test(z))
    alert("Please only enter numeric characters for your phone number (Allowed input:0-9)");
}