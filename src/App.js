import "./App.css";
import Main from "./page/Main.jsx";

function App({ tracks }) {
  return (
    <div className='root'>
      <Main tracks={tracks} />
    </div>
  );
}

export default App;
