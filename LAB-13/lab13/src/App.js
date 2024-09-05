import logo from './logo.svg';
import './App.css';
import FunctionComponent from './FunctionComponent';
import ReactProps from './ReactProps';
import ReactProproperties from './ReactProperties';
import EventHandling from './EventHandling';
import ConditionalRendering from './ConditionalRender';

function App() {
  return (
    <div className="App">
      <FunctionComponent/>
      <ReactProproperties Name="samir"/>
      <EventHandling/>
      <ConditionalRendering isDisplay="true"/>
    </div>
  );
}

export default App;
