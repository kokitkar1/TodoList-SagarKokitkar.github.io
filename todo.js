function getAndUpdate() {
    title = document.getElementById('title').value;
    description = document.getElementById('description').value;
    
    if (localStorage.getItem('itemJson') == null){
        itemJsonArray = []
        itemJsonArray.push([title,description])
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
        itemJsonArray.push([title,description])
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    update()
}




function update() {

    if (localStorage.getItem('itemJson') == null){
        itemJsonArray = []
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
    }

    let tableBody = document.getElementById('tableBody')
    let str = ''

    itemJsonArray.forEach((element, index) => {
        str += 
        `<tr>
            <th scope="row">${index +1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td> <button class="btn btn-sm btn-danger btn-primary" onclick="deleted(${index})" >Delete</button> </td>
        </tr>`
    });

    tableBody.innerHTML = str;
    }


function deleted(itemIndex,element) {
    if(confirm(`You Want To Delete the Sr.no ${itemIndex +1} Todo ?`)){
        itemJsonArrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
        itemJsonArray.splice(itemIndex,1);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
        update();
    }
    }


function clearStorage() {
    let clearTodo = prompt("Do you really want to clear all TODO's ?", "Yes Or No");

    if(clearTodo == "Yes"){
        if(confirm("Warning.... You will lost your all TODO's !!!")){
            localStorage.clear()
            update()
        }
    }else{
        update()
    }
    
}






add = document.getElementById("add");
        
add.addEventListener("click", getAndUpdate)
update();



