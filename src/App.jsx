import MainContent from "./components/MainContent";
import logo from "./assets/images/logo.png";

//Cancelling workflow

function App() {
  return (
    <>
      <div>
        <div id='logo-img'>
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </div>
      <MainContent />
    </>
  );
}

export default App;
