
import {List} from './component/List'
import {Show} from './component/Show'





function App() {
  return (
    <div  className="App">
     <h1 style={{display:'flex',justifyContent:'center',fontFamily:"italic" ,}} >TODO APP</h1>
    <div >
  <div class="row">
    <div  class="col">
      <List/>
    </div>
    <div class="col">
    <Show/>
    </div>
  </div></div>
    
    </div>
  );
}

export default App;
