function addComment(button){

    var box = button.parentElement;

    var name = box.querySelector(".name").value;
    var message = box.querySelector(".message").value;

    if(name === "" || message === ""){
        alert("Please enter name and comment");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = "<b>" + name + ":</b> " + message;

    box.querySelector(".comments").appendChild(li);

    box.querySelector(".name").value = "";
    box.querySelector(".message").value = "";
}