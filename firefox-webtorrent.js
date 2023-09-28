const client = new WebTorrent();

const torrentId = decodeURIComponent(window.location.hash.split("/")[1]);
//const torrentId = "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent";
client.add(torrentId, { paused: true }, function (torrent) {
  // Display the file by adding it to the DOM.
  // Supports video, audio, image files, and more!
  console.log("Torrent", torrent.files);
  console.log("Torrent", torrent.paused);

  torrent.on("download", function (bytes) {
    // console.log("just downloaded: " + bytes);
    // console.log("total downloaded: " + torrent.downloaded);
    // console.log("download speed: " + torrent.downloadSpeed);
    // console.log("progress: " + torrent.progress);
  });
});

console.log("Coucou", torrentId);
