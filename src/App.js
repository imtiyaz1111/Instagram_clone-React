import Midlle from "./Components/Midllebar/Midlle";
import Rightsidebar from "./Components/Rightsidebar/Rightsidebar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <Sidebar/>
        <Midlle/>
        <Rightsidebar/>
      </div>
    </div>
  );
}

export default App;
