import * as innerTag from "./../../../inner_tag.js";
import * as setAttributes from "./../../../set_attributes.js";

export { FncInnerContent };

function FncInnerContent(data){
  const navComponent = document.querySelector("nav");
  const dataComponent = JSON.parse(JSON.stringify(data));
  if(data.main)
    document.getElementById("main").innerText = data.main;
  const classList = (!data.type || data.type != "dark") ? ["navbar-light", "bg-light"]: ["navbar-dark", "bg-dark"];
  if(data.class)
    if(typeof data.class == "string")
      classList.push(data.class); 
    else
      classList.push(...data.class);
  dataComponent.class = classList;
  setAttributes.SetAttributes(navComponent, dataComponent);
  if(data.list?.items?.length > 0)
    innerTag.FncComponentName("list_component", data.list, "navbarNavDropdown");
}