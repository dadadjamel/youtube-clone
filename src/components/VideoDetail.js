import React from 'react';
import Paper from '@material-ui/core/Paper';


const VideoDetail = ({ video }) => {

    if (!video) {
        return (<h3>Nothing yet</h3>)
    }


    const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <React.Fragment>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video player" src={VideoSrc} />
            </Paper>;
            <Paper elevation={6} style={{ padding: '10px' }}>
                <h3>{video.snippet.title}</h3>
                <h4>{video.snippet.channelTitle}</h4>
                <h5>{video.snippet.description}</h5>
            </Paper>;

        </React.Fragment>
    );
}

export default VideoDetail;