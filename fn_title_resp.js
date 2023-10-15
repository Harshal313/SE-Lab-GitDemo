function fn() {
  var topic1 = document.getElementById("topic1");
  var topic2 = document.getElementById("topic2");
  var topic3 = document.getElementById("topic3");
  var topic4 = document.getElementById("topic4");
  var topic5 = document.getElementById("topic5");

  var events = document.getElementById("event-text");
  var structure = document.getElementById("structure-text");
  var rules = document.getElementById("rules-text");
  var faqs = document.getElementById("FAQs-text");
  var register = document.getElementById("register-text");

  var myDiv = document.getElementById("text");
  myDiv.scrollTop = 0;

  var Event = document.getElementById("Event");
  var Structure = document.getElementById("Structure");
  var Rules = document.getElementById("Rules");
  var FAQs = document.getElementById("FAQs");
  var Register = document.getElementById("Register");

  function elargeImg() {}
  function resetImg() {}
  if (Event.checked == true) {
    events.style.display = "block";
    // var img=document.getElementById("icon1");
    // img.style.transform= "scale(1.1)";
    // img.style.transition = "transform 0.25s ease";
    // topic1.style.background = ""
  } else {
    events.style.display = "none";
    // var img=document.getElementById("icon1");
    // img.style.transform = "scale(1)";
    // img.style.transition = "transform 0.25s ease";
    topic1.style.background = "none";
  }

  if (Structure.checked == true) {
    structure.style.display = "block";
    // var img=document.getElementById("icon2");
    // img.style.transform= "scale(1.1)";
    // img.style.transition = "transform 0.25s ease";
  } else {
    structure.style.display = "none";
    // var img=document.getElementById("icon2");
    // img.style.transform = "scale(1)";
    // img.style.transition = "transform 0.25s ease";
  }

  if (Rules.checked == true) {
    rules.style.display = "block";
    // var img=document.getElementById("icon3");
    // img.style.transform= "scale(1.1)";
    // img.style.transition = "transform 0.25s ease";
  } else {
    rules.style.display = "none";
    // var img=document.getElementById("icon3");
    // img.style.transform = "scale(1)";
    // img.style.transition = "transform 0.25s ease";
  }

  if (FAQs.checked == true) {
    faqs.style.display = "block";
    // var img=document.getElementById("icon4");
    // img.style.transform= "scale(1.1)";
    // img.style.transition = "transform 0.25s ease";
  } else {
    faqs.style.display = "none";
    // var img=document.getElementById("icon4");
    // img.style.transform = "scale(1)";
    // img.style.transition = "transform 0.25s ease";
  }

  if (Register.checked == true) {
    register.style.display = "block";
    // var img=document.getElementById("icon5");
    // img.style.transform= "scale(1.1)";
    // img.style.transition = "transform 0.25s ease";
  } else {
    register.style.display = "none";
    // var img=document.getElementById("icon5");
    // img.style.transform = "scale(1)";
    // img.style.transition = "transform 0.25s ease";
  }
}
