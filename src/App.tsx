import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About } from './pages';
import MainLayout from './components/layout';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
