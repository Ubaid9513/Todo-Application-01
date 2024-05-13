var inp = document.getElementById("inp");
var list = document.getElementById("list");
function add(){
    if (inp.value === ""){
        alert("Enetr your Task")
    }else {
        var li = document.createElement("li");
        li.innerHTML = `${inp.value}<i class="fa-solid fa-trash"></i>`;
        list.appendChild(li);
        inp.value = "";
        li.querySelector("i").setAttribute("onclick","del(this)");
    }
}
function del(e){
    e.parentNode.remove();
}
function delAll(){
    list.innerHTML = "";
}
