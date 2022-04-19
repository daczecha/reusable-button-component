import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Display from './layout/Display/Display';
import Navigation from './layout/Navigation/Navigation';

function App() {
  const [selectedComponent, setSelectedComponent] = useState('');

  return (
    <Router>
      <Navigation selectedComponent={selectedComponent} />
      <Routes>
        <Route
          path="/:component"
          element={<Display setSelectedComponent={setSelectedComponent} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
