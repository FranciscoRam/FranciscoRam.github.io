import * as MESSAGE from "./messages.js";
import * as PAGES from "./imports/pages.js"

export { ReadJson };
// const ReadJson = (file) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     const route = `./resources/DB/${file}`; 
//     request.open("GET", route, true);
//     request.send();
//     request.onreadystatechange = () => {
//       if(request.readyState === 4)
//         if(request.status === 200)
//         {
//           resolve(JSON.parse(request.responseText));
//         }else
//           reject("No se encontro el JSON");
//     };
//   });
// }
const ReadJson = (file, component) => {
  const request = new XMLHttpRequest();
  const route = `./resources/DB/${file}`; 
  request.open("GET", route, true);
  request.send();
  request.onreadystatechange = () => {
    if(request.readyState === 4)
      if(request.status === 200)
      {
        PAGES[component].GeneratePage(JSON.parse(request.responseText));
      }else
        console.log(MESSAGE.MessageText("NFD001", file));
  };
}