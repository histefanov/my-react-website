import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Homepage from './pages/Homepage';
import PostDetails from './pages/PostDetails';
import SiteHeader from './components/SiteHeader';
import Posts from './pages/Posts';

function App() {
  return (
    <div className="App">
      <Router>
        <SiteHeader />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
