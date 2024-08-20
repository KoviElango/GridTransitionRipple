const tilesContainer = document.getElementById('tiles');
const backgroundText = document.getElementById('background-text');
const overlayText = document.getElementById('overlay-text');
let columns, rows;
let toggled = false;

function createGrid() {
    tilesContainer.innerHTML = '';
    const size = 100;
    columns = Math.floor(window.innerWidth / size);
    rows = Math.floor(window.innerHeight / size);

    tilesContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    tilesContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < columns * rows; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.setAttribute('data-index', i);
        tilesContainer.appendChild(tile);
    }
}

function toggleTiles() {
    toggled = !toggled;

    if (toggled) {
        overlayText.style.opacity = 0;
        backgroundText.style.opacity = 1;
    } else {
        overlayText.style.opacity = 1;
        backgroundText.style.opacity = 0;
    }
}

function handleTileClick(event) {
    const clickedTileIndex = parseInt(event.target.getAttribute('data-index'), 10);
    toggleTiles();

    anime({
        targets: '.tile',
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: clickedTileIndex,
        }),
        easing: 'easeInOutQuad',
        duration: 1000,
    });
}

tilesContainer.addEventListener('click', handleTileClick);
window.addEventListener('resize', createGrid);
createGrid();
