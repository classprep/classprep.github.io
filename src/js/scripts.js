// Empty JS for your own code to be here

document.addEventListener('click', doThing);

function doThing(event) {
  var el;

  // we can check the tag type, and if it's not the <a>, move up.
  if (event.target.tagType == "rect") {
    // move up TWICE
    el = event.target.parentElement.parentElement;
  } else if (event.target.tagType == "svg") {
    // move up ONCE
    el = event.target.parentElement;
  } else {
    el = event.target;
  }
  console.log(el.getAttribute("data-data"));
}


$(function(){
    $("#logosvg").click(function(){
        console.log("click logo");
        location.href="./index.html";
    });
});
