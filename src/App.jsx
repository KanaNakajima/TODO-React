import "./styles.css";

export default function App() {
  return (
    <>
      <div class="input-area">
        <input id="add-text" placeholder="TODOを入力" />
        <button id="add-button">追加</button>
      </div>
      <div class="incomplete-area">
        <p class="title">未完了のTODO</p>
        <ul id="incomplete-list"></ul>
      </div>
      <div class="complete-area">
        <p class="title">完了のTODO</p>
        <ul id="complete-list"></ul>
      </div>

      <script src="src/index.js"></script>
    </>
  );
}
