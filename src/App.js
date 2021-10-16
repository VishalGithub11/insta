import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";
import Stories from "./Stories";
import Posts from "./Posts"
function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Stories />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
