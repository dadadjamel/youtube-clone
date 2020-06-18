import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const VideoItem = ({ video , onVideoSelect}) => {
    return (
        <Grid item xs={12}>
            <Paper onClick={()=>onVideoSelect(video)} >
                <img alt="" src={video.snippet.thumbnails.medium.url} />
                <h5>{video.snippet.title}</h5>
            </Paper>
        </Grid>

    );
}

export default VideoItem;