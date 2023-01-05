import './App.css';
import './Global/GlobalClasses.scss';

//COMPONENTS
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';

function App() {
  return (
    <div className='container'>
      <Header />
      <Body />
    </div>
    
  );
}

export default App;
