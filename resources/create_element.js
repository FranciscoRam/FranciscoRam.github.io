import * as MESSAGE from "./messages.js"

export { CreateElement };

const attributes = [
  {
    att: "id",
    only: true
  },
  {
    att: "class",
    only: false
  },
  {
    att: "title",
    only: true
  }
];

function CreateElement(tag, data, id = ""){
  const contentHTML = data.reduce((prev, item) => {
    const strAtt = attributes.reduce((prev, attribute) => prev + SetAttribute(item, attribute.att, attribute.only), "");
    return prev + `<${tag + strAtt}>${ (item.content) ? item.content :  (item.page) ? "loading..." : MESSAGE.MessageText("NFD002", "content y/o page") }</${tag}>`
  }, "");
  if(id)
    try {
      document.getElementById(id).innerHTML = contentHTML;
    } catch (error) {
      MessageError("ERR020", id);
    }
  else return contentHTML
}
  
function SetAttribute(item, attribute, only = false){
  return (item[attribute]) ? ` ${attribute}="${(typeof item[attribute] == "string") ? item[attribute]: (only) ? MessageError("ERR001", attribute, item) :item[attribute].join(" ")}"` : ""; 
}
function MessageError(code, err = "", element = ""){
  console.log(MESSAGE.MessageText(code, err), element)
  // console.log(MESSAGES.messages);
  // for (let index = 0; index < MESSAGES.messages.length; index++) {
  //   if(code == MESSAGES.messages[index].code)
  //   {
  //     console.log(`${MESSAGES.messages[index].description(err)}`, element);
  //   }
  // }
  return "";
}