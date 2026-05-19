
// Example: Load players
fetch('data/players.json')
  .then(res => res.json())
  .then(players => {
    const container = document.getElementById('player-container');
    if (container) {
      players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
          <img src="${player.image}" alt="${player.name}">
          <h3>${player.name}</h3>
          <p>${player.role}</p>
        `;
        container.appendChild(card);
      });
    }
  });