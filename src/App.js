import Detail from './page/Detail';
import Main from './page/Main';
import { Routes, Route } from 'react-router-dom';
import NotFound from './page/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/detail/:pageId" element={<Detail />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
