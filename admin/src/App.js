
import './App.css';
import Navbar from './composants/Navbar';
import Sidebar from './composants/Sidebar';

function App() {
  return (
    <div className=" flex">
      <div className=' basis-[12%] h-[100vh]'>
        <Sidebar />
      </div>
      <div className=' basis-[88%] border'>
        <div>
          <Navbar />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
