import React, { useState } from 'react';

const VideoForm = ({ onSubmit }) => {
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(url);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)} 
                placeholder="Enter YouTube URL" 
            />
            <button type="submit">Download</button>
        </form>
    );
};

export default VideoForm;
