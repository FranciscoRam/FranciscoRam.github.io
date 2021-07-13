import * as DB from "./../../../database.js"
export { InnerContent, GeneratePage }

function InnerContent(data) {

  document.getElementById("title").innerHTML = data.page.title;
  // console.log(data.component.title);
  DB.ReadJson(data.page.file, "experience");
}
function GeneratePage(db){
  const pageHTML = db.reduce((prev, obj) => {
    return prev + `
    <p class="date"><b>Fecha: </b>${obj.dateIni} - ${obj.dateFin}</p>
    <p class="direction">${(obj.direction) ? "<b>Dirección:</b> "+obj.direction : '<b>Página:</b> <a href="'+obj.url+'">' + obj.url +"</a>"}</p>
    <p class="info">${obj.position} <span class="point">•<span> ${obj.company}</p>
    <p class="description">${obj.description}</p>`;
  }, "");
  document.getElementById("container-info").innerHTML = pageHTML;
}