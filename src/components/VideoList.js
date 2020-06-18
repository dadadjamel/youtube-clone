import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , onVideoSelect}) => {
    const listOfVideo = videos.map((video,id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
    return listOfVideo
}
 
export default VideoList;