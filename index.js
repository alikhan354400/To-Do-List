var maincontent = document.getElementById("maincontent")
var input = document.getElementById("input")
var addbtn = document.getElementById("addbtn")
var deletebtn = document.getElementById("deletebtn")
var updatebtn = document.getElementById("updatebtn")
var currentTask = null; // Store the task being edited

// Add new task
addbtn.addEventListener("click", function () {
    if (input.value) {
        var li = document.createElement("li");

        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.style.margin = "10px";

        var b = document.createElement("b");
        b.innerText = input.value;
        b.style.display = "inline-block";
        b.style.margin = "10px";
        b.style.width = "400px";
        b.style.overflow = "hidden";

        var editbtn = document.createElement("button");
        var editicon = document.createElement("i");
        editicon.classList.add("fa-pen");
        editicon.classList.add("fa-solid");
        editbtn.appendChild(editicon);
        editbtn.setAttribute("onclick", 'edittext(this)');

        var deletebtn = document.createElement("button");
        var deleteicon = document.createElement("i");
        deleteicon.classList.add("fa-trash-can");
        deleteicon.classList.add("fa-solid");
        deletebtn.appendChild(deleteicon);
        deletebtn.setAttribute("onclick", 'deletetext(this)');

        li.appendChild(checkBox);
        li.appendChild(b);
        li.appendChild(editbtn);
        li.appendChild(deletebtn);
        maincontent.appendChild(li);
        input.value = "";
    }
});

// Delete single task
function deletetext(e) {
    e.parentNode.remove();
}

// Edit task
function edittext(e) {
    currentTask = e.parentNode; // Store the current task element
    input.value = currentTask.childNodes[1].innerText; // Fill the input with the current task's text
    addbtn.style.display = "none";
    deletebtn.style.display = "none";
    updatebtn.style.display = "inline";
    input.focus();
}

// Update task
updatebtn.addEventListener("click", function () {
    if (currentTask && input.value) {
        currentTask.childNodes[1].innerText = input.value; // Update the task's text
        input.value = ""; // Clear input field
        addbtn.style.display = "inline";
        deletebtn.style.display = "inline";
        updatebtn.style.display = "none";
        currentTask = null; // Reset the current task
    }
});

// Select all tasks
function selectAllTasks() {
    const checkboxes = document.querySelectorAll('#maincontent input[type="checkbox"]');
    const selectAllCheckbox = document.getElementById("selectAll");

    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
}

// Delete all selected tasks
deletebtn.addEventListener("click", function () {
    const checkboxes = document.querySelectorAll('#maincontent input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.parentNode.remove(); // Remove the task if the checkbox is checked
        }
    });
});





























// var maincontent = document.getElementById("maincontent")
// var input = document.getElementById("input")
// var addbtn = document.getElementById("addbtn")
// var deletebtn = document.getElementById("deletebtn")
// var updatebtn = document.getElementById("updatebtn")
// // var changetheme = document.getElementById("changetheme")

// addbtn.addEventListener("click",function(){
//     if(input.value){
//     var li = document.createElement("li")

//     var checkBox = document.createElement("input")
//     checkBox.type = "checkbox"
//     checkBox.style.margin="10px"

//     var b = document.createElement("b")
//     b.innerText = input.value
//     b.style.display="inline-block"
//     b.style.margin= "10px"
//     b.style.width="400px"
//     b.style.overflow="hidden"

    
  
//     var editbtn = document.createElement("button")

//     var editicon = document.createElement("i")
//     editicon.classList.add("fa-pen")
//     editicon.classList.add("fa-solid")

//     editbtn.appendChild(editicon)
//     editbtn.setAttribute("onclick",'edittext(this)')


//     var deletebtn = document.createElement("button")
//     var deleteicon = document.createElement("i")
//     deleteicon.classList.add("fa-trash-can")
//     deleteicon.classList.add("fa-solid")
//     deletebtn.appendChild(deleteicon)
//     deletebtn.setAttribute("onclick",'deletetext(this)')
  


//     li.appendChild(checkBox)
//     li.appendChild(b)
//     li.appendChild(editbtn)
//     li.appendChild(deletebtn)
//     maincontent .appendChild(li)
//     input.value=""


   




//     }
// })

// function deletetext(e){
//     console.log(e.parentNode)
//     e.parentNode.remove()

// }

// function edittext(e){
//     console.log(e.parentNode.childNodes[1])
//     input.value = e.parentNode.childNodes[1].innerText
//     addbtn.style.display="none"
//     deletebtn.style.display="none"
//     updatebtn.style.display="inline"
//     input.focus()

//     // var inputfield  = document.createElement("input")
//     // e.parentNode.childNodes[1].remove()
//     // e.parentNode.childNodes[1].appendChild(inputfield)



// }
// // changetheme.addEventListener("click",function(){
// //     document.body.classList.toggle("showdark")
// // })