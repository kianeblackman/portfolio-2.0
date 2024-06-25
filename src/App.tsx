// Import statements
import { Route, Routes } from 'react-router-dom';

// Import pages
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';

// Import stlyes
import './scss/styles.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
