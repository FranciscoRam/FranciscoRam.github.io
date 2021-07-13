import * as FUNCTIONS from "./resources/imports/functions.js";
import * as PAGES from "./resources/imports/pages.js"

const objNav = {
  id: "nav-header", 
  main: "Francisco Ramirez Garnica", 
  type: "dark", 
  class: "test", 
  list: {
    id: "", 
    class: "", 
    type: "navbar",
    items: [ 
      {
        id: "",
        class: "test",
        name: "Projects",
        href: "#projects",
        title: ""
      }
    ]
  }
};
const objSection = [
  {
    id: "projects",
    class: "section-project",
    content: "<h1>Proyectos</h1>"
  },
  {
    id: "experience",
    class: "section-experience", 
    page: {
      title: "Experiencia",
      name: "experience",
      file: "es_experience.json"
    }
  }
];
FUNCTIONS.innerTag.InnerTag("header", "nav_component", objNav);
FUNCTIONS.innerTag.InnerTag("root", "section_component", objSection);

// FUNCTIONS.database.ReadJson("es_experience.json");
// .then(res => {
//   PAGES["experience"].InnerContent();
// })
// .catch(err =>{
//   console.log(err);
// });