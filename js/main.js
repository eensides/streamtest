// Example usage of the Twitch and YouTube API functions

async function getLiveStatusForChannel(channel) {
    if (channel.platform === 'Twitch') {
        const isLive = await checkTwitchLiveStatus(channel.name);
        return isLive;
    } else if (channel.platform === 'YouTube') {
        const isLive = await checkYouTubeLiveStatus(channel.name); // You may need to pass the channel ID instead of name
        return isLive;
    }
    return false;
}

// Example function to update channels with live status
async function updateChannelStatus() {
    const channels = [
        { name: "TwitchChannel1", platform: "Twitch" },
        { name: "YouTubeChannel1", platform: "YouTube" }
    ];

    const channelListElement = document.getElementById('channelList');
    channelListElement.innerHTML = ''; // Clear previous list

    for (const channel of channels) {
        const isLive = await getLiveStatusForChannel(channel);
        const channelItem = document.createElement('li');
        channelItem.classList.add('channel');
        
        const channelName = document.createElement('span');
        channelName.classList.add('channel-name');
        channelName.textContent = `${channel.name} (${channel.platform})`;

        const status = document.createElement('span');
        status.classList.add('status');
        if (isLive) {
            status.classList.add('livestreaming');
            status.textContent = 'Live';
        } else {
            status.classList.add('offline');
            status.textContent = 'Offline';
        }

        channelItem.appendChild(channelName);
        channelItem.appendChild(status);
        channelListElement.appendChild(channelItem);
    }
}

// Call updateChannelStatus when the page loads
window.onload = updateChannelStatus;
