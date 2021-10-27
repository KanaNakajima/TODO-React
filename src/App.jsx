import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTODOText] = useState("");
  const [incompleteTODOs, setIncompleteTODOs] = useState([]);
  const [completeTODOs, setCompleteTODOs] = useState([]);

  const onChangeTODOText = (event) => setTODOText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTODOs = [...incompleteTODOs, todoText];
    setIncompleteTODOs(newTODOs);
    setTODOText(""); //初期値を空 にするため
  };

  const onClickDelete = (index) => {
    const newTODOs = [...incompleteTODOs];
    newTODOs.splice(index, 1); //第一引数に削除する要素の番号、代に引数にいくつ削除するか
    setIncompleteTODOs(newTODOs); //TODOを更新
  };

  const onClickComplete = (index) => {
    const newIncompleteTODOs = [...incompleteTODOs];
    newIncompleteTODOs.splice(index, 1); //第一引数に削除する要素の番号、代に引数にいくつ削除するか

    const newCompleteTODOs = [...completeTODOs, incompleteTODOs[index]];
    setIncompleteTODOs(newIncompleteTODOs);
    setCompleteTODOs(newCompleteTODOs);
  };

  const onClickBack = (index) => {
    const newCompleteTODOs = [...completeTODOs];
    newCompleteTODOs.splice(index, 1);

    const newIncompleteTODOs = [...incompleteTODOs, completeTODOs[index]];
    setCompleteTODOs(newCompleteTODOs);
    setIncompleteTODOs(newIncompleteTODOs);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTODOText}
        onClick={onClickAdd}
        disabled={incompleteTODOs.length >= 5}
      />
      {incompleteTODOs.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTODOは５個までだよ～</p>
      )}
      <IncompleteTodos
        todos={incompleteTODOs}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTODOs} onClick={onClickBack} />

      <script src="src/index.js"></script>
    </>
  );
};
