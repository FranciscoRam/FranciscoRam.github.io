import * as MESSAGES from "./data/es_messages.js";

export { CreateContent };

const attributes = ["id", ""];

function CreateContent(tag, data, id = ""){
  const contentHTML = data.reduce((prev, item) => {
    return prev + `<${tag + SetAttribute(item, "id", true)+ SetAttribute(item, "class") + SetAttribute(item, "title")}>${ item.content }</${tag}>`
  }, "");
  if(id)
    try {
      document.getElementById(id).innerHTML = contentHTML;
    } catch (error) {
      MessageError("ERR-020", id);
    }
  else return contentHTML
}
  
function SetAttribute(item, attribute, only = false){
  return (item[attribute]) ? ` ${attribute}="${(typeof item[attribute] == "string") ? item[attribute]: (only) ? MessageError("ERR-001", attribute, item) :item[attribute].join(" ")}"` : ""; 
}
function MessageError(code, err = "", element = ""){
  console.log(MESSAGES.messages);
  for (let index = 0; index < MESSAGES.messages.length; index++) {
    if(code == MESSAGES.messages[index].code)
    {
      console.log(`${MESSAGES.messages[index].description(err)}`, element);
    }
  }
  return "";
}