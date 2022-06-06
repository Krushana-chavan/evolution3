// fill in javascript code here=
document.querySelector("from").addEventListener("submit", myFunction);
function myFunction(event) {
    event.preventDefault()
    
    let name = document.querySelector("#name").value;
    let employid = document.querySelector("#employeeID").value;
    let Department = document.querySelector("#department").value;
    let expirence = document.querySelector("#exp").value;
    let emailid = document.querySelector("#email").value;
    let mobileno = document.querySelector("#mbl").value;

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerText = name;

    let td2 = document.createElement('td');
    td2.innerText = employid;

    let td3 = document.createElement('td');
    td3.innerText = Department;
    
    let td4 = document.createElement('td');
    td4.innerText = expirence;

    let td5 = document.createElement('td');
    td5.innerText = emailid;

    let td6 = document.createElement('td');
    td6.innerText = mobileno;

    let td7 = document.createElement('td');
    if (expirence > 5) {
        td7.innerText = "Senior"
    }
    else if (expirence > 2 && expirence < 5) {
        td7.innerText = "Junior"
    }
    else if (expirence > 1) {
        td7.innerText = "Fresher"
    }
    td8.addEventListener("click", deleteRow);
    td8.innerText='DELETE'
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8)
    document.querySelector("tbody".append(tr))

}
function deleteRow() {
   tr.remove();
}
