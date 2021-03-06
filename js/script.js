console.log('app is alive')

function switchChannel(channelName, channelLoc='upgrading.never.helps') {
    console.log('Tuning into channel ' + channelName);
    document.getElementById('channel-name').innerHTML = channelName;
    document.getElementById('location-name').innerHTML = channelLoc;
    document.getElementById('channel-location').href = 'https://w3w.co/' + channelLoc;
    uncheckStar();
    $('#channels ul li.selected').removeClass('selected');
    $('#channels ul li:contains(' + channelName + ')').addClass('selected');
}

function checkStar() {
    $('#chat .channel-meta img').attr ('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}

function uncheckStar() {
    $('#chat .channel-meta img').attr ('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
}

function selectTab(tabId) {
    $('#tab-bar .selected').removeClass('selected');
    $('#tab-bar #' + tabId).addClass('selected');
    console.log('Changing to tab ' + tabId);
}

function toggleEmojis() {
    $('#emojis').toggle();
}