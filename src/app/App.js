
import { v4 } from 'uuid';
import Bottom from '../component/Bottom/Bottom';
import Header from '../component/Header/Header';
import './App.css';




function App() {

  return (
    <div className="App" >
       <Header/>
       <Bottom id={v4()}/>
      
    </div>
  );
}

export default App;
