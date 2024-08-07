import './App.css';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
    // <BrowserRouter>
    //   <Route path="/" component={Home}/>
    //   <Route path="/rooms/new" component={NewRoom}/>
    // </BrowserRouter>
    <Home/>
  );
}

export default App;
