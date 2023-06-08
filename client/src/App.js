import './App.css';
import {Home, Landing, Form, Detail} from './views'
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path= '/' element= {<Landing/>}/>
        <Route exact path= '/home' element= {<Home/>}/>
        <Route exact path= '/:id' element= {<Detail/>}/>
        <Route exact path= '/create' element= {<Form/>}/>
      </Routes>      
    </div>
  );
}

export default App;
