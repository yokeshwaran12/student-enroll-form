var selectedRow = null;
let formSubmit=()=>{
    event.preventDefault();
    let user = readFormData();
    if(selectedRow === null){
        insertNewRecord(user);
    }
    else{
         updateRecord(user);
    }
    resetForm();
}

//Retrive the data
function readFormData(){
    let formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Website"] = document.getElementById("Website").value;
    formData["Gender"] = document.getElementById("Gender").value;
    formData["Skills"] = document.getElementById("Skills").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    let table = document.getElementById("StudentList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.Name;
    let cell2  = newRow.insertCell(1);
        cell2.innerHTML = data.Email;
    let cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Website;
    let cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Gender;
    let cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.Skills;
    let cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick= 'onDelete(this)'>Delete</button>`;
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Email').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Website').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Gender').value = selectedRow.cells[3].innerHTML;
    document.getElementById('Skills').value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.Email;
    selectedRow.cells[2].innerHTML = formData.Website;
    selectedRow.cells[3].innerHTML = formData.Gender;
    selectedRow.cells[4].innerHTML = formData.Skills;

}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('StudentList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data 
function resetForm(){
    document.getElementById('Name').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Website').value = '';
    document.getElementById('Gender').value = '';
    document.getElementById('Skills').value = '';
   
}