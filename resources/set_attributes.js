export { SetAttributes };

function SetAttributes(element, data){
  if(data.id)
    element.id = data.id;
  element.setAttribute("class", element.getAttribute("class") + data.class?.join(" "));
}