import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyA-XD8r8K-UXVqKSkn-uGpSOv5Nws8V36k';

// YTSearch({key:API_KEY, term : 'faydee'}, data => {console.log(data)});
//Create a new component that produces HTML
class App extends Component{

  constructor(props){
    super(props);
    this.state = { videos : []};
    YTSearch({key:API_KEY, term : 'faydee'}, videos => this.setState({ videos }));

  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


//Take the component generated HTML and put it on the page (React DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
