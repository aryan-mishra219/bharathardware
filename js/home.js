// ===== HOME PAGE SPECIFIC SCRIPTS =====

document.addEventListener('DOMContentLoaded', () => {
  // 1. TESTIMONIAL CAROUSEL
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  
  if (slides.length > 0 && dots.length > 0) {
    let currentSlide = 0;
    let autoplayInterval;

    function goToSlide(index) {
      if (index === currentSlide) return;

      // Reset current slide
      slides[currentSlide].classList.remove('active');
      slides[currentSlide].classList.add('exiting');
      dots[currentSlide].classList.remove('active');

      // After animation duration, remove exiting class
      const previousSlide = currentSlide;
      setTimeout(() => {
        slides[previousSlide].classList.remove('exiting');
      }, 700); // matches CSS transition duration

      // Set new slide
      currentSlide = index;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      const next = (currentSlide + 1) % slides.length;
      goToSlide(next);
    }

    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 8000);
    }

    function resetAutoplay() {
      clearInterval(autoplayInterval);
      startAutoplay();
    }

    // Click events for dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoplay();
      });
    });

    // Start autoplay
    startAutoplay();
  }

  // 2. RENDER FEATURED TILES
  const featuredGrid = document.getElementById('featured-grid');
  if (featuredGrid && typeof getFeaturedTiles !== 'undefined') {
    const featuredTilesList = getFeaturedTiles().slice(0, 4);
    featuredGrid.innerHTML = '';
    
    featuredTilesList.forEach((tile, index) => {
      const isWishlisted = Wishlist.isIn(tile.id);
      const gradientClass = `tile-gradient-${tile.id}`;
      
      const imgHtml = (tile.images && tile.images[0])
        ? `<img src="${tile.images[0]}" alt="${tile.name}" loading="lazy" />` 
        : `<div class="tile-gradient-fill ${gradientClass}"></div>`;
        
      const priceHtml = tile.price 
        ? `<div class="featured-tile-price">${tile.price}</div>` 
        : '';
      
      const card = document.createElement('div');
      card.className = 'featured-tile scroll-reveal revealed';
      card.style.transitionDelay = `${index * 0.15}s`;
      
      card.innerHTML = `
        <a href="tile-detail.html?slug=${tile.slug}" class="featured-tile-link">
          <div class="featured-tile-image-wrapper">
            ${imgHtml}
            <div class="featured-tile-overlay"></div>
            <div class="featured-tile-gold-line"></div>
            
            <div class="featured-tile-info">
              <span class="featured-tile-collection">${tile.collection}</span>
              <h3 class="featured-tile-name">${tile.name}</h3>
              <div class="featured-tile-meta">
                <span>${tile.finish}</span>
              </div>
              ${priceHtml}
            </div>
          </div>
        </a>
        
        <button class="tile-heart-btn ${isWishlisted ? 'wishlisted' : ''}" data-id="${tile.id}" aria-label="Toggle wishlist">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      `;

      // Event listener for wishlist toggle
      const heartBtn = card.querySelector('.tile-heart-btn');
      heartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        Wishlist.toggle(tile.id);
        if (Wishlist.isIn(tile.id)) {
          heartBtn.classList.add('wishlisted');
        } else {
          heartBtn.classList.remove('wishlisted');
        }
      });

      featuredGrid.appendChild(card);
    });

    // Add View More button at the end
    const viewMoreHtml = `
      <div class="w-full flex justify-center mt-12" style="grid-column: 1 / -1; display: flex; justify-content: center; margin-top: 3rem;">
        <a href="tiles.html" class="btn-luxury btn-luxury-filled" style="background: var(--color-gold); color: #000;">
          <span>View More</span>
          <span>→</span>
        </a>
      </div>
    `;
    featuredGrid.insertAdjacentHTML('afterend', viewMoreHtml);
  }

  // 3. RENDER COLLECTIONS
  const collectionsGrid = document.getElementById('collections-grid');
  if (collectionsGrid && typeof collections !== 'undefined' && typeof collectionImages !== 'undefined') {
    collectionsGrid.innerHTML = '';
    collections.forEach((collection, index) => {
      const imageSrc = collectionImages[collection.id.toLowerCase()];
      const bgImage = imageSrc ? `<img src="${imageSrc}" alt="${collection.name}" loading="lazy" />` : `<div class="w-full h-full tile-gradient-${index + 1}"></div>`;
      
      const colCard = document.createElement('div');
      colCard.className = 'collection-card scroll-reveal revealed';
      colCard.style.transitionDelay = `${index * 0.1}s`;
      
      colCard.innerHTML = `
        <a href="tiles.html" class="collection-card-link">
          <div class="collection-card-image">
            ${bgImage}
            <div class="collection-card-gradient"></div>
            <div class="collection-card-goldline"></div>
            <div class="collection-card-corner"></div>
            
            <div class="collection-card-content">
              <h3 class="collection-card-name">${collection.name}</h3>
              <div class="collection-card-line mb-3"></div>
              <p class="collection-card-desc line-clamp-2">${collection.description}</p>
            </div>
          </div>
        </a>
      `;
      collectionsGrid.appendChild(colCard);
    });
  }

  // 4. ROOM SLIDESHOW
  const slideshowImages = document.querySelectorAll('.room-slideshow');
  if (slideshowImages.length > 0) {
    setInterval(() => {
      slideshowImages.forEach(img => {
        let current = parseInt(img.dataset.current || 1);
        let max = parseInt(img.dataset.max || 30);
        current = current >= max ? 1 : current + 1;
        img.dataset.current = current;
        
        const nextImg = new Image();
        nextImg.src = `images/bharat hardware/${img.dataset.folder}/${current}.webp`;
        nextImg.onload = () => {
          img.style.transition = 'opacity 0.8s ease';
          img.style.opacity = 0;
          setTimeout(() => {
            img.src = nextImg.src;
            img.style.opacity = 0.8;
          }, 800);
        };
      });
    }, 3500);
  }
});
