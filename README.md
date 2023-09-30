firefox-webtorrent
=====================

An attempt to port [brave webtorrent chromeapp extension](https://discord.com/channels/612575111718895616/829590724760436767/1157414127539589261) to Firefox.

It's not in a usable state.

What I got so far :
- Opening magnet link (don't understand why it doesn't work with .torrent files)
- Displaying UI
- It is somehow able to start downloading from the torrent, but it not in a usable state

The main problematic come from that brave extension is a chromeapp that has the right to open udp/tcp connection and therefore use node only packages.

## Installation

```bash
git clone git@github.com:dedesite/firefox-webtorrent.git
cd firefox-webtorrent
npm install
npm run build
```

## Usage

Open the [`about:debugging`](about:debugging#/runtime/this-firefox) tab in firefox and click on "Load Temporary Add-on" and select the `manifest.json` file in the `firefox-webtorrent` dir.

Try to open a magnet link (you can find an html page with magnet links in `misc/torrent_links.html`).

## Debugging

Click on the "Inpect" button at the right of the Temporary Extension name to view all the logs from the extension (even the logs from the background script).