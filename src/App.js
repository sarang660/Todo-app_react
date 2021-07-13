import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState(["abc", "def"]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data().todoooos));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);
  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>hello world </h1>
      <form>
        {/*<input value={input} onChange={(e) => setInput(e.target.value)} />*/}
        <FormControl>
          <InputLabel>write a todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Primary
        </Button>
        {/*<button onClick={addTodo}>add todo</button>*/}
      </form>
      <ul>
        {todos.map((todo) => {
          return <Todo todo={todo} />;
          //<li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
