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

        let form = document.querySelector("#TCForm");
        let data = Object.keys(myTypiCode);

        generateForm(form, data,myTypiCode);
        generateReturn();
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}
function generateForm(form,data, myTypiCode) {
  let fields = document.createElement("fieldset");
  let leg = document.createElement("legend");
  fields.appendChild(leg);
  //leg.textContent("TypiCode Form");
  for (key in myTypiCode) {
    let inputForm = document.createElement("input");
    // inputForm.textContent(key);
    let text = document.createTextNode(myTypiCode[key])
    inputForm.setAttribute("type", data[key]);
    inputForm.setAttribute("name", data[key]);
    inputForm.setAttribute("placeholder", myTypiCode[key]);
    console.log(text)
    fields.appendChild(inputForm);
    fields.appendChild(document.createElement('br'));
    fields.appendChild(document.createElement('br'));
    
  }
  form.appendChild(fields);
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
