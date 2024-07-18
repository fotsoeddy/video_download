import React, { useState } from 'react';
import VideoForm from './VideoForm';
import VideoInfo from './VideoInfo';

const VideoDownload = () => {
    const [videoDetails, setVideoDetails] = useState(null);

    const handleDownload = async (url) => {
        try {
            const response = await fetch(`http://localhost:3001/download?url=${url}`);
            if (!response.ok) throw new Error('Failed to download');
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'video.mp4';
            link.click();
            
            // Fetch video details for display (assuming your backend provides this endpoint)
            const infoResponse = await fetch(`http://localhost:3001/info?url=${url}`);
            const info = await infoResponse.json();
            setVideoDetails(info);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <VideoForm onSubmit={handleDownload} />
            <VideoInfo videoDetails={videoDetails} />
        </div>
    );
};

export default VideoDownload;
