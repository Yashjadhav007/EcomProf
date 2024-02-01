
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import MainOperations from './MainOperations';
import AdminPage from './components/AdminPage';
import Banner from './components/Banner';

function App() {
  return (
  <>
  <MainOperations/>

<BrowserRouter>
<Routes>
<Route path="/" element= {<Banner/>}/>

</Routes>
</BrowserRouter>
  </>
  );
}

export default App;
