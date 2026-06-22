// ===== WISHLIST PAGE SCRIPTS =====

document.addEventListener('DOMContentLoaded', () => {
  const wishlistGrid = document.getElementById('wishlist-grid');
  const wishlistEmpty = document.getElementById('wishlist-empty');
  const wishlistEnquiry = document.getElementById('wishlist-enquiry');
  const massWhatsappBtn = document.getElementById('mass-whatsapp-btn');

  function renderWishlist() {
    const savedIds = Wishlist.getAll();
    const savedTiles = tiles.filter(t => savedIds.includes(t.id));

    if (savedTiles.length === 0) {
      wishlistGrid.style.display = 'none';
      wishlistEnquiry.style.display = 'none';
      wishlistEmpty.style.display = 'flex';
      return;
    }

    wishlistGrid.style.display = 'grid';
    wishlistEnquiry.style.display = 'block';
    wishlistEmpty.style.display = 'none';
    
    wishlistGrid.innerHTML = '';

    savedTiles.forEach((tile, index) => {
      const gradientClass = `tile-gradient-${tile.id}`;
      
      const card = document.createElement('div');
      card.className = 'tile-card scroll-reveal';
      card.style.transitionDelay = `${index * 0.1}s`;
      
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
        
        <button class="tile-heart-btn wishlisted" data-id="${tile.id}" aria-label="Remove from wishlist">
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
        e.preventDefault(); 
        Wishlist.toggle(tile.id);
        // Re-render the whole page to remove the item immediately
        renderWishlist();
      });

      wishlistGrid.appendChild(card);
      
      // Trigger reveal immediately for first load
      setTimeout(() => card.classList.add('revealed'), 50);
    });

    // Update Mass Enquiry Button URL
    const tileNames = savedTiles.map(t => t.name).join(', ');
    const text = `Hello Bharat Hardware, I have shortlisted the following tiles from your website and would like to know their pricing and availability:\n\n${tileNames}`;
    massWhatsappBtn.href = `https://wa.me/919101400814?text=${encodeURIComponent(text)}`;
  }

  // Initial render
  renderWishlist();

  // Listen for changes from other tabs or components
  window.addEventListener('wishlist-updated', () => {
    renderWishlist();
  });
});
