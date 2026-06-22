// ===== WISHLIST STATE MANAGEMENT =====

const Wishlist = {
  key: 'bharat-wishlist',
  
  get items() {
    try {
      const saved = localStorage.getItem(this.key);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to parse wishlist from local storage', e);
      return [];
    }
  },

  set items(newItems) {
    localStorage.setItem(this.key, JSON.stringify(newItems));
    this.notifyListeners();
  },

  toggle(tileId) {
    const currentItems = this.items;
    if (currentItems.includes(tileId)) {
      this.items = currentItems.filter(id => id !== tileId);
    } else {
      this.items = [...currentItems, tileId];
    }
  },

  isIn(tileId) {
    return this.items.includes(tileId);
  },

  getCount() {
    return this.items.length;
  },

  getAll() {
    return this.items;
  },

  // Event system to notify UI to update across different scripts
  listeners: [],
  
  subscribe(callback) {
    this.listeners.push(callback);
    // Call immediately with initial count
    callback(this.getCount());
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  },

  notifyListeners() {
    const count = this.getCount();
    this.listeners.forEach(callback => callback(count));
    // Also dispatch a custom event on the window for other UI components
    window.dispatchEvent(new CustomEvent('wishlist-updated', { detail: { count, items: this.items } }));
  }
};

// Listen to storage events from other tabs
window.addEventListener('storage', (e) => {
  if (e.key === Wishlist.key) {
    Wishlist.notifyListeners();
  }
});
