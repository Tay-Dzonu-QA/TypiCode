const params = new URLSearchParams(window.location.search);
for (const param of params) {
  console.log(param);
  getOne(param[0]);
}

function getOne(id) {
  fetch("http://jsonplaceholder.typicode.com/posts/" + id)
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
        let data = Object.keys(myTypiCode);

        generateTableHead(table, data);
        generateTable(table, myTypiCode);
        generateReturn();
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, myTypiCode) {
  let row = table.insertRow();
  for (key in myTypiCode) {
    let cell = row.insertCell();
    let text = document.createTextNode(myTypiCode[key]);
    cell.appendChild(text);
  }
}

function generateReturn() {
  let myButt = document.createElement("button");
  myButt.classList.add("btn");
  myButt.classList.add("btn-warning");
  myButt.classList.add("submit-button");
  let myButt2 = document.createElement("a");
  myButt2.innerHTML = "Return To List";
  myButt2.href = "index.html";
  myButt.appendChild(myButt2);
  document.body.appendChild(myButt);
}
