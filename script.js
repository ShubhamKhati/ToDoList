const input=document.getElementById("input");
const toDoItems=document.getElementsByClassName("to-do-items")[0]; 
// const trashIcon=document.getElementById("trash"); 

input.addEventListener("keydown",function(event){
    if(event.key === "Enter")
       addItem();
})
function addItem(){
    var i=0;
    var divParent=document.createElement("div");
    var divChild=document.createElement("div");
    var checkIcon=document.createElement("i");
    var trashIcon=document.createElement("i");
    divParent.className="item";
    divParent.innerHTML='<div>'+ input.value +'</div>';
    checkIcon.className="fas fa-check-square";
    checkIcon.style.color="lightgray";
    checkIcon.addEventListener("click",function(){
        if(i%2==0){
            checkIcon.style.color="limegreen";
            i++;
        }
        else{
            checkIcon.style.color="lightgray";
            i++;
        }
        
    })
    divChild.appendChild(checkIcon);
    trashIcon.className="fas fa-trash";
    trashIcon.style.color="darkgray";
    trashIcon.addEventListener("click",function(){
        divParent.remove();
    })
    divChild.appendChild(trashIcon);
    divParent.appendChild(divChild);
    toDoItems.appendChild(divParent);

    input.value='';

}


