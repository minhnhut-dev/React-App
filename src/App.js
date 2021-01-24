import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Navbar,Form,NavDropdown,Nav} from 'react-bootstrap';
import Header from './Header';
import Banner from './Banner';
import Body from './Body';
function App() {
  return (
  <div>
      <Header/>
      <Banner/>
      <Body/>
  </div>    
  );
}

export default App;
