document.addEventListener("DOMContentLoaded",() => {
    const todoList = document.getElementById("todo-list");
    let completedCount = 0;

    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todos => {
        todos.slice(0,20).forEach(todo => {
            const listItem = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.disabled = todo.completed;
            checkbox.checked = todo.completed;

            checkbox.addEventListener("change", () =>{
                if (checkbox.checked) {
                    completedCount++;
                }
                else {
                    completedCount--;
                }
                checkCompletion();

            });

            listItem.appendChild(checkbox);
            listItem.appendChild(document.createTextNode(" " + todo.title));
            todoList.appendChild(listItem);
        });
    });

//     function checkCompletion() {
//         const promise = new promise((resolve, reject) => {
//             if (completedCount === 5) {
//                 resolve("congrats.you completed 5 Tasks successfully");
//             }
//         });

//         promise.then(message => {
//             alert(message);
//         });
//     }
// });

function checkCompletion() {
        const promise = new Promise((resolve, reject) => {
            if (completedCount === 5) {
                resolve("Congrats. 5 Tasks have been Successfully Completed.");
            }
        });

        promise.then(message => {
            alert(message);
        });
    }
});

