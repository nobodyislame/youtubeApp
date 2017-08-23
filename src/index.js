import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyA-XD8r8K-UXVqKSkn-uGpSOv5Nws8V36k';

// YTSearch({key:API_KEY, term : 'faydee'}, data => {console.log(data)});
//Create a new component that produces HTML
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      videos : [],
      selectedVideo : null
    };
    this.videoSearch('faydee');

  }

  videoSearch(term){
    YTSearch({key:API_KEY, term : term}, videos => this.setState({
      videos : videos,
      selectedVideo : videos[0]
    }));
  }
  render(){
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo=>{this.setState({ selectedVideo })}}
          videos={this.state.videos} />
      </div>
    );
  }
}


//Take the component generated HTML and put it on the page (React DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
