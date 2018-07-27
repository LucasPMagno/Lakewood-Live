const API_KEY = 'AIzaSyAeFZ6hITgOOyEPaeCdbOvLYDak-RlIE18';
const id = 'UCWB1TQHxLpuEp9hcKnUX1HA';
const recentVideos = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&list=PLyXhNarRdOEy8Kz3VRgHsq6grb6jlE3Z6&channelId=${id}&part=snippet,id&order=date&maxResults=10`;
const recentLWL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=PLyXhNarRdOEy8Kz3VRgHsq6grb6jlE3Z6&part=snippet,id&order=date&maxResults=1`;
const videoContainer = document.getElementById('video-container');

$.get(recentVideos, (data) => {
    const recentItems = data.items;
    console.log(recentItems);
    if (recentItems) {
        let output = '<h4 class="latest-videos-title">Latest Videos</h4>';
        recentItems.forEach(item => {
            const videoId = item.id.videoId;
            const title = item.snippet.title;
            // console.log(videoId);
            output += `
            <div class="video-item">
            <iframe class="recent-iframe" src="https://www.youtube.com/embed/${videoId}?rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p class="video-title">${title}</p>
            </div>
            `;
        });
        // console.log(output);
        videoContainer.innerHTML = output;
    } else {
       videoContainer.innerHTML = 'Error retrieving videos, if the problem persists please contact the administrator <a href="mailto:lrhslive@gmail.com?subject=Error retrieving videos">here</a>';
    }
});

$.get(recentLWL, (data) => {
    console.log(data);
    document.getElementById('latest-lwl').src=`https://www.youtube.com/embed/${data.items["0"].snippet.resourceId.videoId}`;
});
