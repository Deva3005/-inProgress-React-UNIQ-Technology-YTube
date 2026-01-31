import React, { useState } from "react";

const X1ControlledInTodoApp = () => {
  // States
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [isInEdit, setIsInEdit] = useState(false);
  const [taskId, setTaskId] = useState(null);
  // Functions
  const handleTaskInput = (e) => {
    setTaskInput(e.target.value);
  };
  const handleAddToTasks = () => {
    if (taskInput == "") {
      alert("Kindly add Task");
    } else {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          content: taskInput,
          isChecked: false,
          date: new Date(),
        },
      ]);
      setTaskInput("");
    }
  };
  const handleDelete = (id) => {
    setTasks(
      tasks
        .filter((element) => {
          return element.id != id;
        })
        .map((ele, indx) => {
          return { ...ele, id: indx + 1 };
        }),
    );
  };
  const handleEdit = (id) => {
    setIsInEdit(true);
    setTaskId(id);
    setTaskInput(
      tasks.filter((ele) => {
        return ele.id == id;
      })[0].content,
    );
  };
  const handleEditToTasks = () => {
    setTasks(
      tasks.map((ele) => {
        if (ele.id == taskId) {
          let res = { ...ele, content: taskInput, date: new Date() };
          setIsInEdit(false);
          setTaskId(null);
          setTaskInput("");
          return res;
        } else {
          return ele;
        }
      }),
    );
  };
  return (
    <>
      <div className="container-fluid bg-dark">
        <div
          className="container bg-secondary p-5"
          style={{ minHeight: "100vh" }}
        >
          <h1 className="text-center">To Do Application</h1>
          <div className="addTask d-flex justify-content-center align-items-center flex-column gap-3">
            <input
              type="text"
              style={{ width: "60vw", padding: "10px", outline: "none" }}
              maxLength={150}
              value={taskInput}
              onChange={(e) => {
                handleTaskInput(e);
              }}
            />
            <button
              style={{ width: "300px" }}
              className="btn btn-success"
              onClick={() => {
                if (!isInEdit) {
                  handleAddToTasks();
                } else {
                  handleEditToTasks();
                }
              }}
            >
              {isInEdit ? "Save" : "Add"}
            </button>
          </div>
          <div className="task-section">
            <ul
              className="d-flex flex-column gap-3 justify-content-center align-items-center"
              style={{ listStyle: "none" }}
            >
              {tasks.map((task) => {
                return (
                  <li
                    key={task.id}
                    className="d-flex justify-content-between"
                    style={{ width: "80%" }}
                  >
                    <label title={`created at ${task.date}`}>
                      <span
                        className=""
                        style={{
                          maxWidth: "500px",
                          fontSize: "24px",
                          fontWeight: "500",
                        }}
                      >
                        {task.content}
                      </span>
                    </label>
                    <div className="actionbtns d-flex flex-row gap-5">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          handleEdit(task.id);
                        }}
                      >
                        edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleDelete(task.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default X1ControlledInTodoApp;
