import './App.css';
import './Global/CommonClasses.scss';

//COMPONENTS
import Header from './Components/Header/Header';
import Body from './Components/Form/Form';

function App() {
  return (
    <div className='container'>
      <Header />
      <Body />
    </div>
    
  );
}

export default App;
