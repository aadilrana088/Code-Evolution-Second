import './App.css';
import ClickCounter from './Component/ClickCounter';
import Counter from './Component/Counter';
import HoverCounter from './Component/HoverCounter';

function App() {
  return (
    <div className="App">
      {/* <ClickCounter />
      <HoverCounter /> */}
      <Counter render={(count,handler)=> 
        (<ClickCounter count={count} handler = {handler} />)
      }/>
      <Counter render={(count,handler)=> 
        (<HoverCounter count={count} handler = {handler} />)
      }/>
    </div>
  );
}

export default App;
