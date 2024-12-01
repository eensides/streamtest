// youtube-api.js

async function checkYouTubeLiveStatus(channelId) {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&eventType=live&part=snippet&key=YOUR_YOUTUBE_API_KEY`);
    const data = await response.json();
    return data.items.length > 0; // If items exist, the user is live
}
