firefox-webtorrent
=====================

An attempt to port [brave webtorrent chromeapp extension](https://discord.com/channels/612575111718895616/829590724760436767/1157414127539589261) to Firefox.

It's not in a usable state.

What I got so far :
- Opening magnet link (don't understand why it doesn't work with .torrent files)
- Displaying UI
- It is somehow able to start downloading from the torrent, but it not in a usable state

The main problematic come from that brave extension is a chromeapp that has the right to open udp/tcp connection and therefore use node only packages.
