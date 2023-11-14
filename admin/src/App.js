
import './App.css';
import Sidebar from './composants/Sidebar';

function App() {
  return (
    <div className=" flex">
      <div className=' basis-[12%] h-full'>
        <Sidebar />
      </div>
      <div className=' basis-[88%] border'>

      </div>
    </div>
  );
}

export default App;
