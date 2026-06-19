import React from 'react'
import { useState } from 'react';

const Todo = () => {
    const [tasks , setTasks] = useState([]);
    const [task, setTask] = useState("");


    function handleAdd(){
        if(task == "") return ;

        setTasks((e) => ([...e, task]));
        setTask("");
        
    }

    function handleDelete(index) {
        setTasks(() => (tasks.filter((_, e) => e !== index)));
   
    }

  return (
    <div>
      <h1  className='text-5xl py-4 font-bold w-full text-center'>
        TODO
      </h1>
      <header className='w-full h-30 bg-red-200 flex justify-center items-center gap-10'>
        <input placeholder='Add Task...' className='bg-white w-2/5 h-[40%] rounded-xl pl-6 text-xl'
        onChange={(e) => setTask(e.target.value)}
        value={task}/>
        <button className='p-3 bg-green-600 w-[10%] h-[40%] rounded-xl text-white font-bold text-xl hover:bg-white border-2 border-green-600 hover:text-green-600 '
        onClick={handleAdd}>
            Add
        </button>

      </header>
      <hr></hr>


      <div>
        {tasks.map((task, index) =>(
            <div>
            <div key={index} className='w-full bg-yellow-100 p-10 px-20 flex justify-between gap-10'>
                <div className='flex w-full'>
                <h1 className='w-1/10 text-5xl font-bold'>{index + 1}</h1>
                <h1 className='text-5xl font-bold'>{task}</h1>
                </div>


                <button className='p-3 bg-red-600 w-[10%] h-[40%] rounded-xl border-2 border-red-600 text-white font-bold text-xl hover:bg-white  hover:text-red-600 '
                onClick={() => handleDelete(index)}>
                    Delete!
                </button>
            </div>
            <hr></hr>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Todo
