function addSong() {
    var title = document.getElementById('songTitle').value;
    var artist = document.getElementById('artistName').value;

    if (title.trim() === '' || artist.trim() === '') {
        document.getElementById('warning').style.display = 'block';
        return;
    }

    document.getElementById('warning').style.display = 'none';

    var listItem = document.createElement('div');
    listItem.innerHTML = `<p>${title} <br> ${artist}</p>`;

    document.getElementById('songList').appendChild(listItem);

    document.getElementById('songTitle').value = '';
    document.getElementById('artistName').value = '';
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js') // Adjust the path as needed
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
}