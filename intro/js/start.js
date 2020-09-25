// // let ListNum = document.getElementById("number").value;
// // let hello = document.querySelector("number").getAttribute("value");


// // console.log(hello)

document.querySelector("form.getid").addEventListener("submit", function (stop) {
    stop.preventDefault();
    let x = document.querySelector("form.getid").elements;
    let idTONum= x["form-number"].value;
    console.log(idTONum)
    
    document.getElementById("readone").setAttribute("href","readme.html?"+idTONum)


});