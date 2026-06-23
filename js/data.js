// ===== TILES DATA =====
const collections = [
  { id: 'classico', name: 'Classico', description: 'Timeless marble designs inspired by Italian heritage' },
  { id: 'natura', name: 'Natura', description: 'Organic textures drawn from natural stone and wood' },
  { id: 'moderna', name: 'Moderna', description: 'Contemporary minimal designs for modern interiors' },
  { id: 'elite', name: 'Elite', description: 'Premium luxury finishes for distinguished spaces' },
  { id: 'artisan', name: 'Artisan', description: 'Handcrafted patterns with artisanal character' },
];

const categories = [
  'All',
  'Floor Tiles',
  'Wall Tiles',
  'Kitchen Tiles',
  'Bathroom Tiles',
  'Outdoor Tiles',
  'Marble Finish',
];

const tiles = [
  {
    id: 1, slug: 'white-onyx-gold-vein', name: 'White Onyx Gold Vein', category: 'Marble Finish', collection: 'Classico',
    images: ['images/bharat hardware/1;1/1.webp'],
    finish: 'Glossy Marble', color: 'White with Black & Gold Veins', texture: 'Expressive Marble',
    description: 'An exquisite recreation of natural Calacatta marble, featuring dramatic gold and grey veining on a pristine white canvas. This tile brings timeless Italian elegance to any space.',
    recommendedUsage: 'Living Room, Bedroom, Lobby',
    featured: false,
    size: '4x2',
  },
  {
    id: 2, slug: 'ocean-blue-spider-marble', name: 'Ocean Blue Spider Marble', category: 'Marble Finish', collection: 'Elite',
    images: ['images/bharat hardware/1;1/2.webp'],
    finish: 'High Gloss', color: 'Deep Blue', texture: 'Fine White Spider Webbing',
    description: 'The epitome of luxury, this deep black tile features striking white veining that creates a dramatic visual statement. Perfect for those who demand sophistication.',
    recommendedUsage: 'Living Room, Bathroom, Feature Wall',
    featured: false,
    size: '4x2',
  },
  {
    id: 3, slug: 'calacatta-rust-vein', name: 'Calacatta Rust Vein', category: 'Floor Tiles', collection: 'Classico',
    images: ['images/bharat hardware/1;1/3.webp'],
    finish: 'Satin Matte', color: 'White with Heavy Grey & Rust', texture: 'Dramatic Veining',
    description: 'Inspired by Spanish Emperador marble, this rich brown tile exudes warmth and grandeur. The subtle cream veining adds depth and character to every installation.',
    recommendedUsage: 'Living Room, Dining Room, Office',
    featured: false,
    size: '4x2',
  },
  {
    id: 4, slug: 'sapphire-gold-swirl', name: 'Sapphire Gold Swirl', category: 'Wall Tiles', collection: 'Classico',
    images: ['images/bharat hardware/1;1/4.webp'],
    finish: 'Glossy', color: 'Swirling Deep Blue & Gold', texture: 'Abstract Resin Swirl',
    description: 'A refined interpretation of Statuario marble with delicate grey veining on a luminous pearl-white surface. Ideal for creating bright, sophisticated wall treatments.',
    recommendedUsage: 'Bathroom Walls, Kitchen Backsplash, Lobby',
    featured: false,
    size: '4x2',
  },
  {
    id: 5, slug: 'azure-pearl-spider', name: 'Azure Pearl Spider', category: 'Floor Tiles', collection: 'Moderna',
    images: ['images/bharat hardware/1;1/5.webp'],
    finish: 'Matte', color: 'Blue-Grey', texture: 'White Spider Veins',
    description: 'A sophisticated grey marble recreation with dark dramatic veining. This tile brings understated luxury and contemporary elegance to modern interiors.',
    recommendedUsage: 'Living Room, Office, Commercial Spaces',
    featured: false,
    size: '4x2',
  },
  {
    id: 6, slug: 'pastel-star-wood-deco', name: 'Pastel Star Wood Deco', category: 'Floor Tiles', collection: 'Natura',
    images: ['images/bharat hardware/1;1/6.webp'],
    finish: 'Satin', color: 'Pastel Green, Blue, Brown', texture: 'Floral Geometric Stars',
    description: 'Warm desert-inspired tones create a welcoming atmosphere. This beige tile combines natural beauty with versatile functionality for any living space.',
    recommendedUsage: 'Living Room, Bedroom, Kitchen',
    featured: false,
    size: '4x2',
  },
  {
    id: 7, slug: 'pearl-cloud-marble', name: 'Pearl Cloud Marble', category: 'Floor Tiles', collection: 'Natura',
    images: ['images/bharat hardware/1;1/7.webp'],
    finish: 'Honed Matte', color: 'Soft Pearl White', texture: 'Subtle Grey Clouds',
    description: 'Authentic travertine reproduction with natural pitting and warm walnut tones. This tile brings old-world charm with modern durability.',
    recommendedUsage: 'Living Room, Patio, Entryway',
    featured: false,
    size: '4x2',
  },
  {
    id: 8, slug: 'mint-gold-crystal-onyx', name: 'Mint Gold Crystal Onyx', category: 'Marble Finish', collection: 'Elite',
    images: ['images/bharat hardware/1;1/8.webp'],
    finish: 'High Gloss', color: 'Light Mint Blue', texture: 'White & Gold Diagonal Veins',
    description: 'A mesmerizing recreation of natural onyx with warm amber and golden tones. This tile adds an extraordinary luminous quality to luxury interiors.',
    recommendedUsage: 'Feature Wall, Lobby, Bar Counter',
    featured: false,
    size: '4x2',
  },
  {
    id: 9, slug: 'grigio-cloud-marble', name: 'Grigio Cloud Marble', category: 'Floor Tiles', collection: 'Natura',
    images: ['images/bharat hardware/1;1/9.webp'],
    finish: 'Matte', color: 'Cool Grey', texture: 'White Spider Veins & Faint Gold',
    description: 'Ultra-realistic wood grain porcelain plank that captures the warmth of natural Baltic pine. All the beauty of hardwood with the durability of porcelain.',
    recommendedUsage: 'Bedroom, Living Room, Study',
    featured: false,
    size: '4x2',
  },
  {
    id: 10, slug: 'white-gold-crackle', name: 'White Gold Crackle', category: 'Bathroom Tiles', collection: 'Classico',
    images: ['images/bharat hardware/1;1/10.webp'],
    finish: 'Glossy', color: 'White', texture: 'Thick Gold and Brown Cracks',
    description: 'The eternal beauty of Carrara marble, captured in durable ceramic. Fine grey veining on pristine white creates the perfect backdrop for elegant bathrooms.',
    recommendedUsage: 'Bathroom, Powder Room, Spa',
    featured: false,
    size: '4x2',
  },
  {
    id: 11, slug: 'mocha-white-streak', name: 'Mocha White Streak', category: 'Wall Tiles', collection: 'Elite',
    images: ['images/bharat hardware/1;1/11.webp'],
    finish: 'Super Glossy', color: 'Chocolate Brown', texture: 'Sharp White Streaks',
    description: 'Pure obsidian-black tile with a mirror-like super glossy finish. Creates breathtaking feature walls and dramatic flooring statements.',
    recommendedUsage: 'Feature Wall, Bar, Commercial',
    featured: false,
    size: '4x2',
  },
  {
    id: 12, slug: 'statuario-pure-white', name: 'Statuario Pure White', category: 'Kitchen Tiles', collection: 'Artisan',
    images: ['images/bharat hardware/1;1/12.webp'],
    finish: 'Satin Matte', color: 'Pure White', texture: 'Subtle Light Grey Veins',
    description: 'A warm cream tile inspired by Valencia limestone with a gentle satin finish. Its neutral elegance makes it the perfect canvas for kitchen and dining spaces.',
    recommendedUsage: 'Kitchen, Dining Room, Corridor',
    featured: false,
    size: '4x2',
  },
  {
    id: 13, slug: 'woven-azure-deco', name: 'Woven Azure Deco', category: 'Outdoor Tiles', collection: 'Natura',
    images: ['images/bharat hardware/1;1/13.webp'],
    finish: 'Anti-Skid Matte', color: 'Light & Dark Blue', texture: 'Geometric Woven Block',
    description: 'Rugged and robust, this outdoor tile features earthy terracotta tones with an anti-skid surface designed for patios, pathways, and garden spaces.',
    recommendedUsage: 'Patio, Garden, Driveway, Balcony',
    featured: false,
    size: '12x18',
  },
  {
    id: 14, slug: 'gold-ribbon-agate', name: 'Gold Ribbon Agate', category: 'Bathroom Tiles', collection: 'Moderna',
    images: ['images/bharat hardware/1;1/14.webp'],
    finish: 'Satin', color: 'Swirling Grey & White', texture: 'Thick Gold Ribbons',
    description: 'A cool, serene white tile with subtle blue undertones that evokes the pristine beauty of arctic landscapes. Perfect for creating clean, spa-like environments.',
    recommendedUsage: 'Bathroom, Spa, Washroom',
    featured: false,
    size: '4x2',
  },
  {
    id: 15, slug: 'white-black-spiderweb', name: 'White Black Spiderweb', category: 'Wall Tiles', collection: 'Artisan',
    images: ['images/bharat hardware/1;1/15.webp'],
    finish: 'Glossy', color: 'Solid White', texture: 'Extremely Fine Black Cracks',
    description: 'A romantic, soft pink marble-effect tile that brings a touch of Venetian elegance. Delicate cream veining adds sophisticated charm to feature walls.',
    recommendedUsage: 'Bedroom Wall, Bathroom, Boutique',
    featured: false,
    size: '4x2',
  },
  {
    id: 16, slug: 'taupe-pearl-vein', name: 'Taupe Pearl Vein', category: 'Outdoor Tiles', collection: 'Moderna',
    images: ['images/bharat hardware/1;1/16.webp'],
    finish: 'Structured Matte', color: 'Warm Taupe Grey', texture: 'Thin White and Beige Veins',
    description: 'Inspired by Nordic stone formations, this structured tile features a split-face texture in cool silver grey. Built to withstand outdoor conditions with style.',
    recommendedUsage: 'Terrace, Pathway, Pool Deck',
    featured: false,
    size: '4x2',
  },
  {
    id: 17, slug: 'black-gold-portoro', name: 'Black Gold Portoro', category: 'Kitchen Tiles', collection: 'Artisan',
    images: ['images/bharat hardware/1;1/17.webp'],
    finish: 'Metallic Matte', color: 'Jet Black', texture: 'Swirling Gold & Copper Patches',
    description: 'A striking bronze-toned tile with a subtle metallic sheen. This artisan design brings industrial warmth and character to kitchen and dining spaces.',
    recommendedUsage: 'Kitchen, Restaurant, Café',
    featured: false,
    size: '4x2',
  },
  {
    id: 18, slug: 'sage-black-crackle', name: 'Sage Black Crackle', category: 'Floor Tiles', collection: 'Moderna',
    images: ['images/bharat hardware/1;1/18.webp'],
    finish: 'Matte', color: 'Sage Green', texture: 'Sharp Dark Grey Cracks',
    description: 'A modern slate-inspired tile in deep charcoal with authentic layered texture. Brings a zen-like calm and contemporary sophistication to any space.',
    recommendedUsage: 'Living Room, Study, Yoga Studio',
    featured: false,
    size: '4x2',
  },
  {
    id: 19, slug: 'imperial-green-onyx', name: 'Imperial Green Onyx', category: 'Marble Finish', collection: 'Elite',
    images: ['images/bharat hardware/1;1/19.webp'],
    finish: 'High Gloss', color: 'Imperial Green with Golden Honey Veining', texture: 'Translucent Onyx',
    description: 'An exceptionally rare green onyx recreation displaying deep emerald swirls and luminous golden-honey veining, creating an ambiance of grand luxury.',
    recommendedUsage: 'Feature Wall, Lobby, Dining Room',
    featured: false,
    size: '4x2',
  },
  {
    id: 20, slug: 'calacatta-gold-classic', name: 'Calacatta Gold Classic', category: 'Marble Finish', collection: 'Classico',
    images: ['images/bharat hardware/1;1/20.webp'],
    finish: 'Glossy Marble', color: 'Warm White with Heavy Gold Veins', texture: 'Bold Marble',
    description: 'A masterpiece of classic Italian style, showing striking grey and golden-bronze veins cutting across a warm alabaster white surface.',
    recommendedUsage: 'Living Room, Bedroom, Lobby',
    featured: true,
    size: '4x2',
  },
  {
    id: 21, slug: 'noir-st-laurent', name: 'Noir St. Laurent', category: 'Floor Tiles', collection: 'Elite',
    images: ['images/bharat hardware/1;1/21.webp'],
    finish: 'Polished', color: 'Deep Black with Bronze and White Veins', texture: 'Fine Veined Marble',
    description: 'A luxurious dark marble tile featuring rich cocoa brown and white crystalline veins running across a deep carbon black background.',
    recommendedUsage: 'Living Room, Commercial, Executive Office',
    featured: true,
    size: '4x2',
  },
  {
    id: 22, slug: 'crema-marfil-premium', name: 'Crema Marfil Premium', category: 'Floor Tiles', collection: 'Classico',
    images: ['images/bharat hardware/1;1/22.webp'],
    finish: 'Satin', color: 'Soft Ivory Cream', texture: 'Subtle Fossilized Details',
    description: 'The epitome of warm Mediterranean design, this ivory-cream tile features delicate, feathery veins for a subtle, elegant look.',
    recommendedUsage: 'Living Room, Bedroom, Dining Room',
    featured: true,
    size: '4x2',
  },
  {
    id: 23, slug: 'arabescato-white', name: 'Arabescato White', category: 'Wall Tiles', collection: 'Classico',
    images: ['images/bharat hardware/1;1/23.webp'],
    finish: 'Glossy', color: 'White with Dramatic Dark Grey Swirls', texture: 'Bold Brecciated Marble',
    description: 'Featuring dramatic, rounded dark grey waves wrapping around pure white crystalline islands, this wall tile creates spectacular accent features.',
    recommendedUsage: 'Bathroom Walls, Kitchen Backsplash, Accent Wall',
    featured: true,
    size: '4x2',
  },
  {
    id: 24, slug: 'silver-travertine', name: 'Silver Travertine', category: 'Outdoor Tiles', collection: 'Natura',
    images: ['images/bharat hardware/1;1/24.webp'],
    finish: 'Structured Matte', color: 'Silver Grey and Ash', texture: 'Porous Travertine Structure',
    description: 'Recreating the banded structure of travertine, this ash-grey outdoor tile offers a slip-resistant surface with an organic, contemporary feel.',
    recommendedUsage: 'Patio, Pool Deck, Balcony, Pathway',
    featured: false,
    size: '4x2',
  },
  {
    id: 25, slug: 'royal-azure-lapis', name: 'Royal Azure Lapis', category: 'Wall Tiles', collection: 'Elite',
    images: ['images/bharat hardware/1;1/25.webp'],
    finish: 'Super Glossy', color: 'Vibrant Cobalt Blue and Gold', texture: 'Semi-Precious Stone Swirls',
    description: 'Inspired by the precious Lapis Lazuli stone, this tile boasts deep cobalt blue swirls mixed with shining golden pyrite veins for an majestic look.',
    recommendedUsage: 'Feature Wall, Reception, Luxury Spa',
    featured: false,
    size: '4x2',
  },
  {
    id: 26, slug: 'golden-portoro-extra', name: 'Golden Portoro Extra', category: 'Kitchen Tiles', collection: 'Artisan',
    images: ['images/bharat hardware/1;1/26.webp'],
    finish: 'Glossy', color: 'Jet Black with Bold Golden Waves', texture: 'Flowing Marble Veins',
    description: 'A stunning representation of Portoro marble, featuring bold golden and white waves dancing across a polished black ocean.',
    recommendedUsage: 'Kitchen Floor, Dining Area, Fireplace Surround',
    featured: false,
    size: '4x2',
  },
  {
    id: 27, slug: 'earthy-terrazzo-speckle', name: 'Earthy Terrazzo Speckle', category: 'Kitchen Tiles', collection: 'Artisan',
    images: ['images/bharat hardware/1;1/27.webp'],
    finish: 'Satin Matte', color: 'Warm Terracotta with Multi-colored Chips', texture: 'Speckled Aggregate',
    description: 'A playful yet elegant terrazzo recreation combining warm terracotta chips with white and grey aggregate specks for a lively kitchen design.',
    recommendedUsage: 'Kitchen Floor, Café, Accent Wall',
    featured: false,
    size: '4x2',
  },
  {
    id: 28, slug: 'pistachio-crackle-glaze', name: 'Pistachio Crackle Glaze', category: 'Bathroom Tiles', collection: 'Artisan',
    images: ['images/bharat hardware/1;1/28.webp'],
    finish: 'Glossy Glaze', color: 'Soft Pistachio Green', texture: 'Artisanal Crackled Glaze',
    description: 'A handcraft-inspired wall tile with a glossy glaze and fine crackle lines, bringing soft botanical tones and vintage character to bathrooms.',
    recommendedUsage: 'Bathroom Walls, Shower Enclosure, Backsplash',
    featured: false,
    size: '4x2',
  },
  {
    id: 29, slug: 'steel-grey-basalt', name: 'Steel Grey Basalt', category: 'Outdoor Tiles', collection: 'Moderna',
    images: ['images/bharat hardware/1;1/29.webp'],
    finish: 'Anti-Skid Matte', color: 'Dark Charcoal Grey', texture: 'Fine Grained Basalt',
    description: 'An elegant dark grey tile mimicking volcanic basalt stone. Highly slip-resistant, scratch-resistant, and perfect for high-traffic outdoor pavements.',
    recommendedUsage: 'Driveway, Terrace, Outdoor Staircase',
    featured: false,
    size: '4x2',
  },
  {
    id: 30, slug: 'warm-walnut-plank', name: 'Warm Walnut Plank', category: 'Floor Tiles', collection: 'Natura',
    images: ['images/bharat hardware/1;1/30.webp'],
    finish: 'Matte Wood-grain', color: 'Warm Chestnut Brown', texture: 'Deep Timber Rings',
    description: 'Capture the luxury of fine hardwood floors with this warm walnut plank tile. Resistant to water and scratches, it brings rustic charm to any interior.',
    recommendedUsage: 'Bedroom, Living Room, Dining Room',
    featured: false,
    size: '4x2',
  },
];

function getTileBySlug(slug) { return tiles.find(t => t.slug === slug); }
function getFeaturedTiles() { return tiles.filter(t => t.featured); }
function getTilesByCategory(cat) { return cat === 'All' ? tiles : tiles.filter(t => t.category === cat); }

const collectionImages = {
  classico: 'images/bharat hardware/1;1/1.webp',
  natura: 'images/bharat hardware/1;1/9.webp',
  moderna: 'images/bharat hardware/1;1/11.webp',
  elite: 'images/bharat hardware/1;1/8.webp',
  artisan: 'images/bharat hardware/1;1/15.webp',
};

// ===== CHATBOT DATA =====
const chatResponses = {
  greetings: {
    patterns: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'namaste', 'greetings'],
    response: "Namaste! Welcome to Bharat Hardware. 🙏 I'm here to help you find the perfect tiles for your space. How can I assist you today?",
  },
  living_room: {
    patterns: ['living room', 'living', 'hall', 'drawing room', 'lounge'],
    response: "For living rooms, I recommend our **glossy marble finish** and **large format porcelain tiles**. Our best sellers include:\n\n• **Royal Calacatta White** — Timeless elegance\n• **Grigio Carnico** — Modern sophistication\n• **Nero Marquina Black** — Bold luxury\n\nWould you like to explore our living room collection?",
  },
  bedroom: {
    patterns: ['bedroom', 'bed room', 'sleeping'],
    response: "For bedrooms, warm and inviting textures work beautifully. Consider:\n\n• **Baltic Pine** — Wood-grain warmth\n• **Sahara Beige** — Soft and welcoming\n• **Royal Calacatta White** — Classic elegance\n\nMatte and satin finishes are especially popular for bedrooms.",
  },
  kitchen: {
    patterns: ['kitchen', 'cooking', 'modular kitchen'],
    response: "For kitchens, durability and stain resistance are key. We recommend:\n\n• **Crema Valencia** — Warm and easy to maintain\n• **Havana Bronze** — Artistic character\n• **Emperador Dark** — Rich sophistication\n\nVitrified and porcelain tiles with R10+ slip resistance are ideal for kitchen floors.",
  },
  bathroom: {
    patterns: ['bathroom', 'washroom', 'toilet', 'bath'],
    response: "For bathrooms, we suggest tiles with good water resistance and slip protection:\n\n• **Carrara Bianco** — Classic white marble look\n• **Arctic Frost** — Spa-like serenity\n• **Statuario Pearl** — Bright and elegant\n\nAll our bathroom tiles meet water absorption standards below 3%.",
  },
  outdoor: {
    patterns: ['outdoor', 'garden', 'patio', 'balcony', 'terrace', 'outside'],
    response: "For outdoor spaces, frost resistance and anti-skid surfaces are essential:\n\n• **Rustic Autumn** — R12 anti-skid, full body porcelain\n• **Tundra Stone** — Split-face texture, pool-safe\n\nBoth tiles are frost resistant and rated for heavy outdoor use.",
  },
  wall: {
    patterns: ['wall', 'wall tile', 'accent wall', 'feature wall', 'backsplash'],
    response: "For walls and feature areas:\n\n• **Statuario Pearl** — Elegant white marble\n• **Venetian Rose** — Soft pink romance\n• **Midnight Obsidian** — Dramatic dark statement\n\nGlossy finishes are especially stunning on walls as they reflect light beautifully.",
  },
  marble: {
    patterns: ['marble', 'marble finish', 'marble look', 'marble tile'],
    response: "Our marble finish collection is our pride! Each tile recreates the beauty of natural marble:\n\n• **Royal Calacatta White** — Italian-inspired gold veining\n• **Nero Marquina Black** — Dramatic dark marble\n• **Onyx Honey Gold** — Warm translucent beauty\n\nAll our marble tiles are porcelain — more durable and affordable than natural marble.",
  },
  wood: {
    patterns: ['wood', 'wooden', 'wood look', 'wood grain', 'plank'],
    response: "Love the look of wood? Our wood-finish tiles give you that warmth without the maintenance:\n\n• **Baltic Pine** — Realistic light oak grain\n\nThese porcelain planks are waterproof, scratch-resistant, and perfect for any room including bathrooms!",
  },
  size: {
    patterns: ['size', 'dimension', 'measurement', 'how big', 'large format'],
    response: "We offer tiles in multiple sizes tailored to your project requirements. Please contact us via WhatsApp at **+91 9101400814** or visit our showroom in Badarpur, Assam, and our team will recommend the perfect sizes and layout for your space.",
  },
  price: {
    patterns: ['price', 'cost', 'rate', 'expensive', 'cheap', 'budget', 'affordable'],
    response: "Please contact us on WhatsApp at **+91 9101400814** or visit our showroom in Badarpur, Assam for pricing details, custom quotes, and exclusive offers!",
  },
  hours: {
    patterns: ['hours', 'timing', 'open', 'close', 'when', 'time', 'schedule', 'working hours'],
    response: "**Bharat Hardware Opening Hours:**\n\n🕐 Tuesday to Sunday — Open\n🔴 Monday — Closed\n\n📍 Visit us at Badarpur, Assam — 788806",
  },
  location: {
    patterns: ['location', 'address', 'where', 'direction', 'map', 'badarpur', 'reach', 'visit'],
    response: "**📍 Bharat Hardware Pvt Ltd**\nBadarpur, Assam, India — 788806\n\n🕐 Open: Tuesday to Sunday\n🔴 Closed: Monday\n\n[Get Directions on Google Maps](https://www.google.com/maps/place/Bharat+hardware/@24.8706071,92.5578359,840m/data=!3m2!1e3!4b1!4m6!3m5!1s0x374e2d728ca3400f:0xbabaece133f0a3d9!8m2!3d24.8706072!4d92.5627068!16s%2Fg%2F11ghq5xqkj?hl=en&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D)",
  },
  contact: {
    patterns: ['contact', 'phone', 'call', 'whatsapp', 'reach out', 'enquiry', 'enquire'],
    response: "You can reach us through:\n\n📞 **Call us**: [+91 9101400814](tel:+919101400814)\n📱 **WhatsApp**: [Chat Now](https://wa.me/919101400814)\n📸 **Instagram**: [@bharathardwareeee](https://www.instagram.com/bharathardwareeee)\n📍 **Visit**: Badarpur, Assam — 788806",
  },
  wishlist: {
    patterns: ['wishlist', 'save', 'saved', 'favourite', 'favorite', 'heart', 'bookmark'],
    response: "You can save tiles you love by clicking the **heart icon ♥** on any tile card! Your saved designs are stored locally and stay even after you close the browser.\n\nView your saved tiles anytime from the **heart icon in the navbar** or the **My Saved Designs** page.",
  },
  recommend: {
    patterns: ['recommend', 'suggest', 'best', 'popular', 'trending', 'which one'],
    response: "Here are our most popular tiles right now:\n\n🥇 **Royal Calacatta White** — Best seller for living rooms\n🥈 **Nero Marquina Black** — Trending for luxury spaces\n🥉 **Baltic Pine** — Most loved wood-look tile\n\nEach tile is available in our showroom for you to see and feel in person!",
  },
  material: {
    patterns: ['porcelain', 'ceramic', 'vitrified', 'material', 'difference', 'which material'],
    response: "Understanding tile materials:\n\n🔹 **Porcelain** — Premium, low absorption (<0.5%), ideal for all areas\n🔹 **Vitrified** — Durable, stain-resistant, great for floors\n🔹 **Ceramic** — Affordable, best for walls and low-traffic areas\n🔹 **Full Body** — Same color throughout, perfect for high-traffic outdoor use\n\nNeed help choosing? WhatsApp us for personalized advice!",
  },
  thanks: {
    patterns: ['thank', 'thanks', 'thank you', 'bye', 'goodbye', 'see you'],
    response: "You're welcome! 😊 Feel free to reach out anytime. Visit our showroom in Badarpur to see our full collection in person.\n\n🙏 Thank you for choosing Bharat Hardware!",
  },
  fallback: {
    response: "I'd be happy to help! Here are some things I can assist with:\n\n• 🏠 Tile recommendations for specific rooms\n• ✨ Available finishes and styles\n• 📱 WhatsApp / Contact details\n• 🕐 Showroom hours and location\n• 📱 Contact and WhatsApp\n• ❤️ Wishlist help\n\nOr feel free to WhatsApp us at **+91 9101400814** for personalized assistance!",
  },
};

function getChatResponse(message) {
  const lower = message.toLowerCase().trim();
  const words = lower.split(/[^a-zA-Z0-9]+/);
  for (const [key, data] of Object.entries(chatResponses)) {
    if (key === 'fallback') continue;
    if (data.patterns && data.patterns.some(p => {
      if (p.length <= 3) {
        return words.includes(p);
      }
      return lower.includes(p);
    })) {
      return data.response;
    }
  }
  return chatResponses.fallback.response;
}

const quickActions = [
  { label: '🏠 Living Room Tiles', message: 'Which tile is good for living room?' },
  { label: '🛁 Bathroom Tiles', message: 'Suggest bathroom tiles' },
  { label: '🕐 Showroom Hours', message: 'When is the showroom open?' },
  { label: '📍 Location', message: 'Where is the showroom?' },
  { label: '📞 Call Store', message: 'How do I call the store?' },
  { label: '📱 WhatsApp Contact', message: 'How to contact you on WhatsApp?' },
];
