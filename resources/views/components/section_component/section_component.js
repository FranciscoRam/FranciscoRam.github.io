import * as functions  from "../../../imports/functions.js";

export { InnerContent }

function InnerContent(data){
  functions.createElement.CreateContent("section", data, "cnt-section");
}