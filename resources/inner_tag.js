import * as COMPONENT from "./imports.js";

function FncInnerTag(id, component, data){
  let request = new XMLHttpRequest();
  const route = `./resources/views/components/${component}/${component}.html` 
  request.open("GET", route, true);
  request.send();
  request.onreadystatechange = () => {
    if(request.readyState === 4)
      if(request.status === 200)
      {
        document.getElementById(id).innerHTML = request.responseText;
        FncComponentName(component, data)
      }else
        document.getElementById(id).innerHTML = `<h1>NOT FOUND route ${route}</h1>`;
      // document.getElementById(id).innerHTML = (request.status === 200) ? request.responseText : `<h1>NOT FOUND route ${route}</h1>`;    
  };
}

function FncComponentName(component, data, id = ""){
  switch(component){
    case "nav_component":
      COMPONENT.navComponent.FncInnerContent(data);
      break;
    case "list_component":
      COMPONENT.listComponent.FncInnerContent(id, data);
      break;
    default:
      break;
  }
}

export { FncInnerTag, FncComponentName }