import logo from './logo.svg';
import './App.css';
import DisplayArrUsingMap from './DisplayArrUsingMap';
import DisplayFaculty from './DisplayFaculty'
import ProductData from './ProductData';
function App() {
  return (
    <div className="App">
       ------------------------------------
      
        <DisplayArrUsingMap/>
       
      ------------------------------------
      <ol> 
        <DisplayFaculty/>
      </ol>
      
    </div>
  );
}

export default App;
