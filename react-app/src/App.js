import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Homepage from './pages/homepage/Homepage';
import ArticleDetails from './pages/ArticleDetails';
import SiteHeader from './components/header/SiteHeader';
import Articles from './pages/Articles';
import Category from './pages/Category';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="App">
      <Router>
        <ApolloProvider client={client}>
          <SiteHeader />
          <Routes>
            <Route exact path={"/"} element={<Homepage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetails />} />
            <Route path="/categories/:id" element={<Category />} />
          </Routes>
        </ApolloProvider>
      </Router>
    </div>
  );
}

export default App;
