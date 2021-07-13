import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ImageIcon,
  Button,
} from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import db from "./firebase";

const Todo = (props) => {
  console.log(props);
  return (
    <List>
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary="todo" />
      </ListItem>
      <DeleteIcon
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      >
        delete
      </DeleteIcon>
    </List>
  );
};

export default Todo;
