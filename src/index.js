import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA-XD8r8K-UXVqKSkn-uGpSOv5Nws8V36k';
//Create a new component that produces HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


//Take the component generated HTML and put it on the page (React DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
