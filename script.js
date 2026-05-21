function showPage(pageId){

  const pages =
    document.querySelectorAll(".page")

  pages.forEach(page=>{
    page.classList.add("hidden")
  })

  document
    .getElementById(pageId)
    .classList.remove("hidden")
}

function addCustomer(){

  const name =
    document.getElementById("name").value

  const email =
    document.getElementById("email").value

  if(name === "" || email === ""){
    alert("Fill all fields")
    return
  }

  const table =
    document.getElementById("customerTable")

  const row =
    table.insertRow()

  row.insertCell(0).innerHTML = name
  row.insertCell(1).innerHTML = email

  document.getElementById("name").value=""
  document.getElementById("email").value=""
}

function saveSettings(){

  document.getElementById("saveMsg")
    .innerHTML =
    "Settings Saved Successfully ✅"
}
