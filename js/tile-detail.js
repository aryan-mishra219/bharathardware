// ===== TILE DETAIL PAGE SCRIPTS =====

document.addEventListener('DOMContentLoaded', () => {
  // Get slug from URL
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');
  
  if (!slug) {
    window.location.href = 'tiles.html';
    return;
  }

  const tile = getTileBySlug(slug);
  
  if (!tile) {
    document.getElementById('detail-content').style.display = 'none';
    document.getElementById('detail-404').style.display = 'flex';
    return;
  }

  // Populate basic info
  document.title = `${tile.name} | Bharat Hardware`;
  document.getElementById('tile-collection').textContent = `${tile.collection} Collection`;
  document.getElementById('tile-category').textContent = tile.category;
  document.getElementById('tile-name').textContent = tile.name;
  
  const priceContainer = document.getElementById('tile-price-container');
  if (tile.price) {
    priceContainer.innerHTML = `<span class="detail-price">${tile.price}</span><span class="detail-price-sep">|</span>`;
  }
  
  document.getElementById('tile-description').textContent = tile.description;
  
  document.getElementById('tile-finish').textContent = tile.finish;
  document.getElementById('tile-color').textContent = tile.color;

  // Populate image
  const imageContainer = document.getElementById('tile-image-container');
  if (tile.images && tile.images[0]) {
    imageContainer.innerHTML = `<img src="${tile.images[0]}" alt="${tile.name}" />`;
  } else {
    imageContainer.innerHTML = `<div class="w-full h-full tile-gradient-${tile.id}"></div>`;
  }


  
  document.getElementById('tile-recommended').textContent = tile.recommendedUsage;

  // Setup WhatsApp button
  const waMessage = `Hello Bharat Hardware, I am interested in the ${tile.name} tile (${tile.finish}). Please provide pricing and availability.`;
  document.getElementById('tile-whatsapp-btn').href = `https://wa.me/919101400814?text=${encodeURIComponent(waMessage)}`;

  // Setup Wishlist button
  const wishlistBtn = document.getElementById('tile-wishlist-btn');
  const updateWishlistBtnUI = () => {
    const isWishlisted = Wishlist.isIn(tile.id);
    if (isWishlisted) {
      wishlistBtn.classList.add('wishlisted');
      wishlistBtn.querySelector('span').textContent = 'Saved';
      wishlistBtn.querySelector('svg').classList.add('fill-red-400');
    } else {
      wishlistBtn.classList.remove('wishlisted');
      wishlistBtn.querySelector('span').textContent = 'Save';
      wishlistBtn.querySelector('svg').classList.remove('fill-red-400');
    }
  };
  
  updateWishlistBtnUI(); // Initial
  
  wishlistBtn.addEventListener('click', () => {
    Wishlist.toggle(tile.id);
    updateWishlistBtnUI();
  });

  // Room Visualizer Logic
  const roomTabs = document.querySelectorAll('.room-viz-tab');
  const roomScenes = document.querySelectorAll('.room-viz-scene');
  const roomLabels = document.querySelectorAll('.room-viz-active-label');
  // Map data-room names to folder names
  const roomFolderMap = {
    livingRoom: 'living room',
    kitchen: 'kitchen',
    bathroom: 'bathroom',
    bedroom: 'bedroom'
  };

  // Set the correct rendering image for each scene
  roomScenes.forEach(scene => {
    const roomKey = scene.getAttribute('data-room');
    const folderName = roomFolderMap[roomKey];
    if (folderName) {
      const imgEl = scene.querySelector('.room-viz-image');
      if (imgEl) {
        imgEl.src = `images/bharat hardware/${folderName}/${tile.id}.webp`;
      }
    }
  });

  // Update art label to tile name
  document.querySelectorAll('.room-viz-art-name').forEach(el => {
    el.textContent = tile.name;
  });

  roomTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetRoom = tab.getAttribute('data-room');
      
      // Update tabs
      roomTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update scenes
      roomScenes.forEach(scene => {
        if (scene.getAttribute('data-room') === targetRoom) {
          scene.classList.add('active');
        } else {
          scene.classList.remove('active');
        }
      });
      
      // Update labels
      roomLabels.forEach(label => {
        label.textContent = tab.textContent;
      });
    });
  });

  // Related Tiles
  const relatedGrid = document.getElementById('related-grid');
  const relatedTiles = tiles
    .filter(t => t.id !== tile.id && (t.category === tile.category || t.collection === tile.collection))
    .slice(0, 4);

  if (relatedTiles.length > 0) {
    document.getElementById('related-section').style.display = 'block';
    
    // Copy the createTileCard function logic from catalog.js (simplified here since we don't have modules)
    relatedTiles.forEach((relatedTile, index) => {
      const isWishlisted = Wishlist.isIn(relatedTile.id);
      const gradientClass = `tile-gradient-${relatedTile.id}`;
      
      const card = document.createElement('div');
      card.className = 'tile-card';
      card.style.transitionDelay = `${index * 0.1}s`;
      
      card.innerHTML = `
        <a href="tile-detail.html?slug=${relatedTile.slug}" class="tile-card-link">
          <div class="tile-card-image">
            ${relatedTile.images && relatedTile.images[0] 
              ? `<img src="${relatedTile.images[0]}" alt="${relatedTile.name}" loading="lazy" />` 
              : `<div class="tile-gradient-fill ${gradientClass}"></div>`
            }
            <div class="tile-card-hover-overlay"></div>
            <div class="tile-card-gold-line"></div>
            
            <div class="tile-card-bottom-info">
              <div class="tile-card-meta">
                <span class="tile-card-meta-collection">${relatedTile.collection}</span>
              </div>
              <div class="tile-card-meta-details">${relatedTile.finish}</div>
            </div>
            
            <div class="tile-card-category-badge">${relatedTile.category}</div>
          </div>
        </a>
        
        <button class="tile-heart-btn ${isWishlisted ? 'wishlisted' : ''}" data-id="${relatedTile.id}" aria-label="Toggle wishlist">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
        
        <div class="tile-card-info">
          <a href="tile-detail.html?slug=${relatedTile.slug}">
            <h3 class="tile-card-name">${relatedTile.name}</h3>
          </a>
          <div class="tile-card-footer">
            <span class="tile-card-finish">${relatedTile.finish}</span>
            ${relatedTile.price ? `<span class="tile-card-price">${relatedTile.price}</span>` : ''}
          </div>
        </div>
      `;

      // Add heart button listener
      const heartBtn = card.querySelector('.tile-heart-btn');
      heartBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        Wishlist.toggle(relatedTile.id);
        if (Wishlist.isIn(relatedTile.id)) {
          heartBtn.classList.add('wishlisted');
        } else {
          heartBtn.classList.remove('wishlisted');
        }
      });

      relatedGrid.appendChild(card);
    });
  }

  // Room Lightbox Functionality
  const lightbox = document.getElementById('room-lightbox');
  const lightboxImg = document.getElementById('room-lightbox-img');
  const lightboxClose = document.querySelector('.room-lightbox-close');
  const roomDisplay = document.querySelector('.room-viz-display');

  if (roomDisplay && lightbox && lightboxImg) {
    roomDisplay.addEventListener('click', () => {
      // Find the currently active scene's image
      const activeScene = roomDisplay.querySelector('.room-viz-scene.active');
      if (activeScene) {
        const activeImg = activeScene.querySelector('.room-viz-image');
        if (activeImg && activeImg.src) {
          lightboxImg.src = activeImg.src;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden'; // Stop background scrolling
        }
      }
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = ''; // Restore background scrolling
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
      });
    }

    lightbox.addEventListener('click', (e) => {
      // Close lightbox if clicking outside the image container
      if (e.target === lightbox || e.target.classList.contains('room-lightbox-content')) {
        closeLightbox();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }
});
