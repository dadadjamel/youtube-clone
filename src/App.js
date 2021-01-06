import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import youtube from './api/youtube';        //API
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';



class App extends Component {
  state = {
    videos : [],
    selected_video : null
  }


  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: 'snippet',
        maxResults: 5,
        
        q : searchTerm,
      }
    })

    console.log(response.data.items)
    this.setState({ videos:response.data.items , selected_video:response.data.items[0] });
    console.log(this.state.selected_video.id.videoId)
  }

  onVideoSelect = (video) =>{
    this.setState({ selected_video:video });
  }


  render() {
    const {selected_video , videos} = this.state
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selected_video} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    );
  }
}

export default App;
