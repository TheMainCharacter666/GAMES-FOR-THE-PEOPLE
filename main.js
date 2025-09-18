// Games with legal embed URLs and external links
const games = [
  {
    title: "Gladihoppers",
    img: "https://gladiators.games/static/img/gladihoppers.jpg",
    url: "https://gladhoppers.github.io/",
    type: "iframe"
  },
  {
    title: "Subway Surfers",
    img: "https://images.poki.com/248e087aebf8e9e323e2b3d4b8e7fa4d.png",
    url: "https://poki.com/en/g/subway-surfers",
    type: "iframe"
  },
  {
    title: "Tetris",
    img: "https://tetris.com/assets/images/social.jpg",
    url: "https://tetris.com/play-tetris",
    type: "iframe"
  },
  {
    title: "1v1.lol",
    img: "https://images.poki.com/6e3b0d4f6e1d1e6b7e3e1b4c8f7d5f6f.png",
    url: "https://poki.com/en/g/1v1-lol",
    type: "iframe"
  },
  {
    title: "BuildNow GG",
    img: "https://buildnow.gg/assets/img/logo.png",
    url: "https://buildnow.gg/",
    type: "iframe"
  },
  {
    title: "Slope",
    img: "https://images.poki.com/70d920c4ff7e0b2e9f9d3b8b4f8b7a7b.png",
    url: "https://poki.com/en/g/slope",
    type: "iframe"
  },
  {
    title: "2048",
    img: "https://play2048.co/favicon.ico",
    url: "https://play2048.co/",
    type: "iframe"
  },
  {
    title: "Boxel Rebound",
    img: "https://images.crazygames.com/games/boxel-rebound/cover-1634659802478.png",
    url: "https://www.crazygames.com/game/boxel-rebound",
    type: "iframe"
  },
  {
    title: "Among Us Online",
    img: "https://images.crazygames.com/games/among-us/cover-1634657498172.png",
    url: "https://www.crazygames.com/game/among-us",
    type: "iframe"
  },
  {
    title: "Stickman Hook",
    img: "https://images.poki.com/3d3fbb9f5c8b8f1b9e1c8e3b7b3c9c6a.png",
    url: "https://poki.com/en/g/stickman-hook",
    type: "iframe"
  },
  {
    title: "Football Legends",
    img: "https://images.poki.com/15e7d2c6e2e3e4b7e6e8e3e1d2c5e4e8.png",
    url: "https://poki.com/en/g/football-legends",
    type: "iframe"
  },
  {
    title: "Ragdoll Archers",
    img: "https://images.crazygames.com/games/ragdoll-archers/cover-1634659802478.png",
    url: "https://www.crazygames.com/game/ragdoll-archers",
    type: "iframe"
  },
  {
    title: "Ragdoll Hit",
    img: "https://images.crazygames.com/games/ragdoll-hit/cover-1634659802478.png",
    url: "https://www.crazygames.com/game/ragdoll-hit",
    type: "iframe"
  },
  {
    title: "Slope 2",
    img: "https://images.crazygames.com/games/slope-2/cover-1634659802478.png",
    url: "https://www.crazygames.com/game/slope-2",
    type: "iframe"
  },
  {
    title: "Slope 3",
    img: "https://images.crazygames.com/games/slope-3/cover-1634659802478.png",
    url: "https://www.crazygames.com/game/slope-3",
    type: "iframe"
  },
  {
    title: "Tanuki Sunset",
    img: "https://images.crazygames.com/games/tanuki-sunset/cover-1634659802478.png",
    url: "https://www.crazygames.com/game/tanuki-sunset",
    type: "iframe"
  },
  {
    title: "Time Shooter 1",
    img: "https://images.crazygames.com/games/time-shooter/cover-1634659802478.png",
    url: "https://www.crazygames.com/game/time-shooter",
    type: "iframe"
  },
  {
    title: "Time Shooter 2",
    img: "https://images.crazygames.com/games/time-shooter-2/cover-1634659802478.png",
    url: "https://www.crazygames.com/game/time-shooter-2",
    type: "iframe"
  },
  {
    title: "Time Shooter 3",
    img: "https://images.crazygames.com/games/time-shooter-3/cover-1634659802478.png",
    url: "https://www.crazygames.com/game/time-shooter-3",
    type: "iframe"
  },
  // External links for games that do not support legal iframe embedding
  {
    title: "BitLife (External Link)",
    img: "https://play-lh.googleusercontent.com/Flw8g8wYDFsA3W3D1nQWZkNnQvXQ9I3I1G2H8E5jyNwXb3TnQvQZtQ=s256",
    url: "https://bitlife.life/",
    type: "external"
  },
  {
    title: "Getting Over It (External Link)",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/240720/header.jpg",
    url: "https://www.foddy.net/2017/10/getting-over-it/",
    type: "external"
  },
  {
    title: "Henry Stickmin Collection (External Link)",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1089980/header.jpg",
    url: "https://www.puffballsunited.com/henry-stickmin/",
    type: "external"
  },
  {
    title: "SuperHot (External Link)",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/322500/header.jpg",
    url: "https://superhotgame.com/",
    type: "external"
  }
];

const gamesList = document.getElementById('games-list');

games.forEach(game => {
  const card = document.createElement('div');
  card.className = 'game-card';
  card.innerHTML = `
    <div class="game-title">${game.title}</div>
    <img src="${game.img}" alt="${game.title} preview" class="game-preview" />
    ${
      game.type === "iframe"
      ? `<button class="play-btn" onclick="openGame('${game.url}')">Play</button>`
      : `<a href="${game.url}" target="_blank"><button class="external-btn">Play (External Site)</button></a>`
    }
  `;
  gamesList.appendChild(card);
});

window.openGame = function(url) {
  document.getElementById('iframe-container').classList.add('active');
  document.getElementById('game-frame').src = url;
}

window.closeGame = function() {
  document.getElementById('iframe-container').classList.remove('active');
  document.getElementById('game-frame').src = '';
}

window.cloak = function() {
  history.pushState({}, '', 'about:blank');
  alert('Cloaked! The URL now shows about:blank. Game will continue.');
};