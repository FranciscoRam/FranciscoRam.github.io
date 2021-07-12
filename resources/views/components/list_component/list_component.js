export { InnerContent };

function InnerContent(id, list){
  const liClass = (list.type == "navbar") ? "nav-item": "";
  const aClass = (list.type == "navbar") ? "nav-link": "";
  // const htmlContent = "hola mundo"
  let htmlContent = list.items.reduce((prev, item) => prev+`<li${(item.id)?' id="'+item.id+'"': ""}
    ${(item.class)
      ?'class="'+liClass+" "+item.class+'"'
      : (liClass) ? 'class="' + liClass + '"' : ""
    }>
    ${(item.href) 
      ? `<a${(item.id)?' id="a-'+item.id+'"': ""}${(aClass) 
        ? ' class="'+aClass+'"' : ""} href="${item.href}"
        >${item.name}
        </a>` 
      : item.name
    }
    </li>`, "");
  htmlContent = `<ul${list.type=="navbar" ? ' class="navbar-nav"': ""}>${htmlContent}</ul>`
  document.getElementById(id).innerHTML = htmlContent;
}