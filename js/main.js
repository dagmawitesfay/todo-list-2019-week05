

 document.querySelector("button").addEventListener("click",TodoList)

const clearTodo=document.querySelector(".clear")

const todoList = document.querySelector("ul")

// const totalLength=document.querySelector(".total-length").innerText=`Total Todo : ${todo.length}`

// // populate the stored todoList as a list 
// function populateToDo(){
//       todo.forEach((populateTodo)=>{
//             // create a list for each todo's
//           const list = document.createElement("li")
//           const button = document.createElement("button")

//           // create a checklist input to append whene
//           const checkBox=document.createElement("input")
//           checkBox.type = "checkbox"
      
//         list.textContent = populateTodo
//         todoList.appendChild(list)
//           list.append(checkBox)
//           button.textContent = "Delete"
//           button.classList.add("delete-btn")
//           list.append(button)
//   })  
// }

// function to add Todo
function TodoList(){
  
let input=document.querySelector("input").value

if(input!=""){
 const list = document.createElement("li")

  const button = document.createElement("button")

   const checkBox=document.createElement("input")
      checkBox.type = "checkbox"


      // add event listener when user toggles between the check and uncheck

      checkBox.addEventListener("change",()=>{
         if(checkBox.checked){
        list.classList.add("completed")
      }
      else{
         list.classList.remove("completed")
      }
      })
     


 list.textContent = input

  todoList.append(list)

  // add checkbox for each list created
   list.append(checkBox)
      button.textContent = "Delete"
        button.classList.add("delete-btn")

        // delete a task from the DOM
        button.addEventListener("click",()=>{
            alert("Todo has been deleted")
          list.remove()
        
        })
        list.append(button)


        // clear the whole todo
        clearTodo.addEventListener("click",()=>{
            todoList.innerHTML = ""
        })

}

} 
