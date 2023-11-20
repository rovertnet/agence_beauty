
import './App.css';
import Navbar from './composants/Navbar';
import Sidebar from './composants/Sidebar';
import Dashboard from './composants/dashboard/Dashboard';

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
        <div className=' mt-14'>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
