fetch("http://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }
    // Examine the text in the response
    response.json().then(function (myTypiCode) {
      console.log("Here is my data", myTypiCode);

      let table = document.querySelector("#TCTable");
      let data = Object.keys(myTypiCode[0]);

      generateTableHead(table, data);
      generateTable(table, myTypiCode);
    });
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });

function generateTableHead(table,data){
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
    let th = document.createElement("th");
    let text = document.createTextNode("View Record");
    th.appendChild(text);
    row.appendChild(th);
    let th2 = document.createElement("th");
    let text2 = document.createTextNode("View Form");
    th2.appendChild(text2);
    row.appendChild(th2);
}

function generateTable(table, myTypiCode){
    for(let element of myTypiCode){
        let row = table.insertRow();
        for(key in element){
            let cell =row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
        let newCell = row.insertCell();
        let myButt = document.createElement("a");
        myButt.classList.add("btn");
        myButt.classList.add("btn-warning");
        myButt.classList.add("submit-button");
        myButt.innerHTML="View"
        myButt.href= "readme.html?"+element.id
        newCell.appendChild(myButt)

        let newCell2 = row.insertCell();
        let myButt2 = document.createElement("a");
        myButt2.classList.add("btn");
        myButt2.classList.add("btn-warning");
        myButt2.classList.add("submit-button");
        myButt2.innerHTML="Form"
        myButt2.href= "form.html?"+element.id
        newCell2.appendChild(myButt2)
    }
}

