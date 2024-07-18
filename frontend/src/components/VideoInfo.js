import React from 'react';

const VideoInfo = ({ videoDetails }) => {
    if (!videoDetails) return null;

    return (
        <div>
            <h2>{videoDetails.title}</h2>
            <p>{videoDetails.description}</p>
            <img src={videoDetails.thumbnailUrl} alt={videoDetails.title} />
        </div>
    );
};

export default VideoInfo;
