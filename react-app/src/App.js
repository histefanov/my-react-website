import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Homepage from './pages/Homepage';
import ArticleDetails from './pages/ArticleDetails';
import SiteHeader from './components/SiteHeader';
import Articles from './pages/Articles';

function App() {
  return (
    <div className="App">
      <Router>
        <SiteHeader />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
