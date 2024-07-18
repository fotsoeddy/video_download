const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
const port = 3001;

app.get('/download', async (req, res) => {
    const videoURL = req.query.url;
    if (!ytdl.validateURL(videoURL)) {
        return res.status(400).send('Invalid URL');
    }
    const info = await ytdl.getInfo(videoURL);
    const format = ytdl.chooseFormat(info.formats, { quality: 'highestvideo' });
    res.header('Content-Disposition', `attachment; filename="${info.videoDetails.title}.mp4"`);
    ytdl(videoURL, { format }).pipe(res);
});

app.get('/info', async (req, res) => {
    const videoURL = req.query.url;
    if (!ytdl.validateURL(videoURL)) {
        return res.status(400).send('Invalid URL');
    }
    const info = await ytdl.getInfo(videoURL);
    res.json({
        title: info.videoDetails.title,
        description: info.videoDetails.description,
        thumbnailUrl: info.videoDetails.thumbnails[0].url
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
