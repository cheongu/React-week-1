import React, { useState } from "react";
import "./App.css";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addItem = () => {
    const newUser = {
      id: users.length + 1,
      title: title,
      body: body,
      isDone: false,
    };

    setUsers([...users, newUser]);
  };
  const deleteUser = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };

  const doneUser = (id) => {
    const newUserList = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          isDone: !user.isDone,
        };
      } else {
        return { ...user };
      }
    });
    setUsers(newUserList);
  };

  const onReset = (e) => {
    setTitle("");
    setBody("");
  };

  return (
    <div className="all">
      <header className="container">
        <div>My Todo List</div>
        <div>React</div>
      </header>
      <div className="add-form">
        <h3 className="form-label">
          제목
          <input
            className="add-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          내용
          <input
            className="add-input"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </h3>
        <button
          className="add-button"
          onClick={() => {
            addItem();
            {
              onReset();
            }
          }}
        >
          추가하기
        </button>
      </div>
      <h2>Working.. 🔥</h2>
      <div className="list-wrapper">
        {users.map((user) => {
          if (!user.isDone) {
            return (
              <User
                user={user}
                key={user.id}
                Delete={deleteUser}
                isDone={doneUser}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2>Done..! 🎉</h2>
      <div className="list-wrapper">
        {users.map((user) => {
          if (user.isDone) {
            return (
              <User
                user={user}
                key={user.id}
                Delete={deleteUser}
                isDone={doneUser}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default App;
