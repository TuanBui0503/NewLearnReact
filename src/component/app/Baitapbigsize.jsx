import { useState } from "react";
import "./workapp.css";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import TaskItem from "./Demo";

const task = {
  id: "duy nhất",
  content: "",
  //status: "chưa làm"
};

export default function WorkApp() {
  const [newContent, setNewContent] = useState("");
  const [todoTasks, setTodoTasks] = useState([]);
  const [progressTasks, setProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  function inputChange(event) {
    setNewContent(event.target.value);
  }

  function addTask() {
    if (newContent.trim() === "") return;
    const uniqueId = uuidv4();
    const task = {
      content: newContent,
      id: uniqueId,
    };
    setTodoTasks([...todoTasks, task]);
    setNewContent("");
  }

  function moveTask(task, currentList, setCurrentList, nextList, setNextList) {
    setNextList([...nextList, task]);
    setCurrentList(currentList.filter((item) => item.id !== task.id));
  }

  return (
    <>
      <hr />
      <div>
        <h1 className="t-align">ỨNG DỤNG QUẢN LÝ CÔNG VIỆC</h1>
        <div className="flex">
          <input
            value={newContent}
            onChange={inputChange}
            size={110}
            placeholder="Nhập công việc..."
            className="padding-10 margin-10"
            type="text"
          />
          <button onClick={addTask} className="padding-10 margin-10">
            Thêm công việc
          </button>
        </div>
      </div>
      <div className="flex gap-1r margin-top-20">
        <div className="width-40 boder">
          <h3 className="padding-1r">Công việc chưa làm</h3>
          <ol>
            {todoTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                moveTask={moveTask}
                currentList={todoTasks}
                setCurrentList={setTodoTasks}
                nextList={progressTasks}
                setNextList={setProgressTasks}
                buttonLabel="Đang làm"
              />
            ))}
          </ol>
        </div>
        <div className="width-40 boder">
          <h3 className="padding-1r">Công việc đang làm</h3>
          <ol>
            {progressTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                moveTask={moveTask}
                currentList={progressTasks}
                setCurrentList={setProgressTasks}
                nextList={doneTasks}
                setNextList={setDoneTasks}
                buttonLabel="Done"
                backList={todoTasks}
                setBackList={setTodoTasks}
                backLabel="Quay lại"
              />
            ))}
          </ol>
        </div>
        <div className="width-40 boder">
          <h3 className="padding-1r">Công việc đã làm xong</h3>
          <ol>
            {doneTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                moveTask={moveTask}
                currentList={doneTasks}
                setCurrentList={setDoneTasks}
                nextList={progressTasks}
                setNextList={setProgressTasks}
                buttonLabel="Quay lại"
              />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
