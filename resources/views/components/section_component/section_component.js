import * as functions  from "../../../imports/functions.js";

export { InnerContent }

function InnerContent(data){
  functions.createElement.CreateElement("section", data, "cnt-section");
  data.map(section => {
    if(section.page)
      functions.innerTag.InnerTag(section.id, section.page.name, section, "./resources/views/pages");
  });
}