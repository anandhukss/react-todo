import React, { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          type="text"
          value={toDo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            // console.log(toDo);
            setTodos([
              ...toDos,
              { text: toDo, status: false, id: Date.now(), color: "white" },
            ]);
            // console.log(toDos);
          }}
          className="fas fa-plus"
        ></i>
      </div>
      {toDos.map((todoData) => {
        return (
          <div className="todos">
            <div style={{ background: todoData.color }} className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    setTodos(
                      toDos.filter((obj) => {
                        if (obj.id === todoData.id) {
                          todoData.status = e.target.checked;
                          if (todoData.status) {
                            todoData.color = "red";
                          } else {
                            todoData.color = "white";
                          }
                        }
                        console.log(obj);
                        return obj;
                      })
                    );
                  }}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{todoData.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() => {
                    var deleted=toDos.splice(
                      toDos.findIndex(function (i) {
                        return i.id === todoData.id;
                      }),
                      1
                    );
                    setTodos([...toDos]);
                    console.log(deleted);
                    console.log(toDos)

                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
