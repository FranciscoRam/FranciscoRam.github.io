import * as COMPONENTS from "./imports/components.js";
import * as PAGES from "./imports/pages.js";
import * as MESSAGE from "./messages.js";

function InnerTag(id, component, data, dir = "./resources/views/components"){
  let request = new XMLHttpRequest();
  const route = `${dir}/${component}/${component}.html` 
  request.open("GET", route, true);
  request.send();
  request.onreadystatechange = () => {
    if(request.readyState === 4)
      if(request.status === 200)
      {
        document.getElementById(id).innerHTML = request.responseText;
        ComponentName(component, data);
      }else
        document.getElementById(id).innerHTML = `<h1>NOT FOUND route ${route}</h1>`;
      // document.getElementById(id).innerHTML = (request.status === 200) ? request.responseText : `<h1>NOT FOUND route ${route}</h1>`;    
  };
}

function ComponentName(component, data, id = ""){
  switch(component){
    case "nav_component":
      COMPONENTS.navComponent.InnerContent(data);
      break;
    case "list_component":
      COMPONENTS.listComponent.InnerContent(id, data);
      break;
    case "section_component":
      COMPONENTS.sectionComponent.InnerContent(data);
      break;
    default:
      try {
        PAGES[component].InnerContent(data);
      } catch (error) {
        console.log(MESSAGE.MessageText("NFD003", component));
      }
      break;
  }
}

export { InnerTag, ComponentName }