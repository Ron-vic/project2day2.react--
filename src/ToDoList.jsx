import React,  {useState}from 'react'

function ToDoList() {

    const [tasks, setTasks]= useState ([]);
    const [newTask,setNewTask] = useState ("")

    function hundleInputChange (event){
     setNewTask(event.target.value);
    }

    function addTask(){
     if(newTask.trim() !== "")//used to prevent an empty task from being added
     {
       setTasks(t =>[...t,newTask]);
       setNewTask("");
     }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !==index); // Using filter  for deletion
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
 if(index > 0){
 const updatedTasks = [...tasks];
 [updatedTasks[index],updatedTasks[index - 1]] = 
 [updatedTasks[index -1 ],updatedTasks[index]];
 setTasks(updatedTasks);

 }
    }

    function moveTaskDown(index){
    if(index < tasks.length -1){
     const updatedTasks = [...tasks];
     [updatedTasks[index],updatedTasks[index + 1]] = 
     [updatedTasks[index +1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
    }
  return (
    <div className="todo-list">
        <h1>To-Do-List</h1>
        <div className="">
            <input
             type="text" 
             placeholder='Enter a todo'
             value={newTask}
             onChange={hundleInputChange}
             />
            <button 
            className="add-button"
            onClick={addTask}
            >Add Todo</button>
            <ol>
                {tasks.map((task,index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button 
                    className='delete-button'
                    onClick={ () => deleteTask(index)}
                    > Delete
                    </button>
                    <button 
                    className='move-button'
                    onClick={ () => moveTaskUp(index)}
                    > Up
                    </button>
                    <button 
                    className='move-button'
                    onClick={ () => moveTaskDown(index)}//arrow function used to prevent calling of a function right away
                    > Down
                    </button>
                </li>
                )}
            </ol>
        </div>
    </div>


  )
}

export default ToDoList