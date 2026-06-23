// ===== MAIN SHARED SCRIPTS =====

// Utility function to format markdown-like text in chatbot (bolding)
function formatMessage(text) {
  // Replace **text** with <strong>text</strong>
  let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Replace markdown links [text](url) with <a href="url" target="_blank">text</a>
  formattedText = formattedText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  
  return formattedText;
}

// Ensure smooth scrolling for anchor links
document.documentElement.style.scrollBehavior = 'smooth';

document.addEventListener('DOMContentLoaded', () => {
  // 1. SCROLL REVEAL ANIMATIONS (Replaces Framer Motion whileInView)
  const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Optional: stop observing once revealed for 'once: true' behavior
        // observer.unobserve(entry.target); 
      }
    });
  }, {
    root: null,
    threshold: 0.1, // Trigger when 10% visible
    rootMargin: '0px 0px -50px 0px' // Slightly trigger before bottom
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Also manually trigger reveal on load for elements already in viewport
  setTimeout(() => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        el.classList.add('revealed');
      }
    });
  }, 100);

  // 2. NAVBAR SCROLL EFFECT & MOBILE MENU
  const navbar = document.querySelector('.navbar');
  const mobileMenuToggle = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
  }

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mobileMenuToggle.classList.contains('open');
      if (isOpen) {
        mobileMenuToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      } else {
        mobileMenuToggle.classList.add('open');
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu open
      }
    });

    // Close mobile menu on link click
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-menu-link, .mobile-menu-cta a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // 3. WISHLIST BADGE SYNC
  const updateWishlistBadges = (count) => {
    const badges = document.querySelectorAll('.wishlist-badge');
    badges.forEach(badge => {
      if (count > 0) {
        badge.style.display = 'flex';
        badge.textContent = count;
      } else {
        badge.style.display = 'none';
      }
    });
  };

  if (typeof Wishlist !== 'undefined') {
    Wishlist.subscribe(updateWishlistBadges);
  }

  // 4. CHATBOT FUNCTIONALITY
  initChatbot();
});

// Initialize chatbot UI and logic
function initChatbot() {
  const toggleBtn = document.querySelector('.chatbot-toggle');
  const chatWindow = document.querySelector('.chatbot-window');
  
  if (!toggleBtn || !chatWindow) return;

  const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>`;
  const chatIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>`;

  let isOpen = false;
  let isTyping = false;

  const messagesContainer = chatWindow.querySelector('.chatbot-messages');
  const quickActionsContainer = chatWindow.querySelector('.chatbot-quick-actions');
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'chat-message bot typing-indicator-wrapper';
  typingIndicator.style.display = 'none';
  typingIndicator.innerHTML = `
    <div class="typing-dots">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;

  
  // Close chatbot when clicking outside
  document.addEventListener('click', (e) => {
    if (isOpen && !chatWindow.contains(e.target) && !toggleBtn.contains(e.target)) {
      isOpen = false;
      chatWindow.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.classList.add('closed');
      toggleBtn.innerHTML = chatIcon;
    }
  });

  // Toggle chat window

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    isOpen = !isOpen;
    if (isOpen) {
      chatWindow.classList.add('open');
      toggleBtn.classList.remove('closed');
      toggleBtn.classList.add('open');
      toggleBtn.innerHTML = closeIcon;
      
      // Add welcome message if empty
      if (messagesContainer.querySelectorAll('.chat-message:not(.typing-indicator-wrapper)').length === 0) {
        addMessage(chatResponses.greetings.response, 'bot');
      }
    } else {
      chatWindow.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.classList.add('closed');
      toggleBtn.innerHTML = chatIcon;
    }
  });

  // Render quick actions
  if (quickActionsContainer && quickActions) {
    quickActionsContainer.innerHTML = '';
    quickActions.forEach(action => {
      const btn = document.createElement('button');
      btn.className = 'quick-action-btn';
      btn.textContent = action.label;
      btn.addEventListener('click', () => {
        if (!isTyping) {
          handleSend(action.message);
        }
      });
      quickActionsContainer.appendChild(btn);
    });
  }

  // Add a message to chat
  function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-message ${sender}`;
    msgDiv.innerHTML = `<div class="chat-bubble ${sender}">${formatMessage(text)}</div>`;
    
    // Insert before typing indicator if it exists
    if (messagesContainer.contains(typingIndicator)) {
      messagesContainer.insertBefore(msgDiv, typingIndicator);
    } else {
      messagesContainer.appendChild(msgDiv);
    }
    
    scrollToBottom();
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Show/hide typing indicator
  function setTyping(typing) {
    isTyping = typing;
    if (typing) {
      if (!messagesContainer.contains(typingIndicator)) {
        messagesContainer.appendChild(typingIndicator);
      }
      typingIndicator.style.display = 'flex';
    } else {
      typingIndicator.style.display = 'none';
    }
    scrollToBottom();
  }

  // Handle sending message
  function handleSend(overrideText) {
    const text = overrideText;
    if (!text || isTyping) return;

    // 1. Add user message
    addMessage(text, 'user');

    // 2. Show typing indicator
    setTyping(true);

    // 3. Determine response and delay
    const response = getChatResponse(text);
    
    // Calculate reading delay (min 600ms, plus 30ms per char)
    const delay = Math.min(Math.max(600, text.length * 30), 2000);

    // 4. Send response
    setTimeout(() => {
      setTyping(false);
      addMessage(response, 'bot');
    }, delay);
  }
}
