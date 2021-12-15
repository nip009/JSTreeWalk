function showJSONOnWebpage(ast){
  // Remove previous 
  const astDiv = document.getElementById("astDiv");
  astDiv.innerHTML = "";

  // Draw JSON
  const str = JSON.stringify(ast, null, 4);
  astDiv.innerHTML += str + "\n\n\n\n";
}

