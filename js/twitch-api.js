async function checkTwitchLiveStatus(channelName) {
    const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${channelName}`, {
        headers: {
            'Client-ID': 'YOUR_TWITCH_CLIENT_ID',
            'Authorization': 'Bearer YOUR_TWITCH_OAUTH_TOKEN'
        }
    });
    const data = await response.json();
    return data.data.length > 0; // If stream exists, the user is live
}
