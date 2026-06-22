// ===== CATALOG PAGE SCRIPTS =====

document.addEventListener('DOMContentLoaded', () => {
  const catalogGrid = document.getElementById('catalog-grid');
  const catalogEmpty = document.getElementById('catalog-empty');
  const tabsContainer = document.getElementById('catalog-tabs');
  const searchInput = document.getElementById('catalog-search');

  if (!catalogGrid || !tabsContainer || !searchInput || typeof tiles === 'undefined') return;

  let currentCategory = 'All';
  let currentSearchQuery = '';

  // Render Tabs
  function renderTabs() {
    tabsContainer.innerHTML = '';
    categories.forEach(category => {
      const btn = document.createElement('button');
      btn.className = `catalog-tab ${category === currentCategory ? 'active' : ''}`;
      btn.textContent = category;
      
      const line = document.createElement('div');
      line.className = 'catalog-tab-line';
      btn.appendChild(line);

      btn.addEventListener('click', () => {
        // Update active class
        const currentActive = tabsContainer.querySelector('.active');
        if (currentActive) currentActive.classList.remove('active');
        btn.classList.add('active');
        
        currentCategory = category;
        filterAndRenderTiles();
      });

      tabsContainer.appendChild(btn);
    });
  }

  // Render Tile Card
  function createTileCard(tile, index) {
    const isWishlisted = Wishlist.isIn(tile.id);
    const gradientClass = `tile-gradient-${tile.id}`;
    
    // Create card element
    const card = document.createElement('div');
    card.className = 'tile-card scroll-reveal';
    card.style.transitionDelay = `${index * 0.1}s`;
    
    // Card HTML
    card.innerHTML = `
      <a href="tile-detail.html?slug=${tile.slug}" class="tile-card-link">
        <div class="tile-card-image">
          ${tile.images && tile.images[0] 
            ? `<img src="${tile.images[0]}" alt="${tile.name}" loading="lazy" />` 
            : `<div class="tile-gradient-fill ${gradientClass}"></div>`
          }
          <div class="tile-card-hover-overlay"></div>
          <div class="tile-card-gold-line"></div>
          
          <div class="tile-card-bottom-info">
            <div class="tile-card-meta">
              <span class="tile-card-meta-collection">${tile.collection}</span>
            </div>
            <div class="tile-card-meta-details">${tile.finish}</div>
          </div>
          
          <div class="tile-card-category-badge">${tile.category}</div>
        </div>
      </a>
      
      <button class="tile-heart-btn ${isWishlisted ? 'wishlisted' : ''}" data-id="${tile.id}" aria-label="Toggle wishlist">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>
      
      <div class="tile-card-info">
        <a href="tile-detail.html?slug=${tile.slug}">
          <h3 class="tile-card-name">${tile.name}</h3>
        </a>
        <div class="tile-card-footer">
          <span class="tile-card-finish">${tile.finish}</span>
          ${tile.price ? `<span class="tile-card-price">${tile.price}</span>` : ''}
        </div>
      </div>
    `;

    // Add heart button listener
    const heartBtn = card.querySelector('.tile-heart-btn');
    heartBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent navigating if clicked inside a link area (though it's outside here)
      Wishlist.toggle(tile.id);
      const nowWishlisted = Wishlist.isIn(tile.id);
      if (nowWishlisted) {
        heartBtn.classList.add('wishlisted');
      } else {
        heartBtn.classList.remove('wishlisted');
      }
    });

    return card;
  }

  // Filter and Render
  function filterAndRenderTiles() {
    // 1. Filter by category
    let filteredTiles = getTilesByCategory(currentCategory);
    
    // 2. Filter by search query
    if (currentSearchQuery) {
      const q = currentSearchQuery.toLowerCase();
      filteredTiles = filteredTiles.filter(tile => 
        tile.name.toLowerCase().includes(q) ||
        tile.collection.toLowerCase().includes(q) ||
        tile.category.toLowerCase().includes(q) ||
        tile.finish.toLowerCase().includes(q)
      );
    }

    // 3. Render
    catalogGrid.innerHTML = '';
    
    if (filteredTiles.length === 0) {
      catalogGrid.style.display = 'none';
      catalogEmpty.style.display = 'flex';
    } else {
      catalogGrid.style.display = 'grid';
      catalogEmpty.style.display = 'none';
      
      filteredTiles.forEach((tile, index) => {
        // limit staggering delay to first 10 items to prevent huge delays on scroll
        const card = createTileCard(tile, Math.min(index, 9));
        catalogGrid.appendChild(card);
        
        // Trigger intersection observer manually for initial load
        setTimeout(() => {
          card.classList.add('revealed');
        }, 50);
      });
    }
  }

  // Search input listener
  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.trim();
    filterAndRenderTiles();
  });

  // Initial render
  renderTabs();
  filterAndRenderTiles();
});
