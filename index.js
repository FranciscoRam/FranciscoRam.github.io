import * as innerTag from "./resources/inner_tag.js";

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
    content: "<h2>Projectos</h2>"
  }
];

innerTag.InnerTag("header", "nav_component", objNav);
innerTag.InnerTag("root", "section_component", objSection);