function FncHeaderInner(){
  let request = new XMLHttpRequest();
  const fileRoute = './views/components/items_nav/items_nav_component.html';
  request.open("GET", fileRoute, true);
  request.send();
  request.onreadystatechange = () => {
    if(request.readyState === 4)
      document.getElementById("header").innerHTML = (request.status === 200) ? request.responseText : `<h1>NOT FOUND route ${fileRoute}</h1>`;
        
  };
}

FncHeaderInner();