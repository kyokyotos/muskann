import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ValentinePage from './components/ValentinePage';
import YesPage from './components/YesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ValentinePage />} />
        <Route path="/yes" element={<YesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;