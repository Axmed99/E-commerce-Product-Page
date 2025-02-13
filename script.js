// Electronics Products (20 items with enhanced details)
const products = [
    {
        id: 1,
        name: "Pro Wireless Headphones",
        price: 299.99,
        description: "Premium noise-cancelling headphones with 40h battery life",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        category: "electronics",
        brand: "SoundMaster",
        features: ["Active Noise Cancellation", "40h Battery", "Bluetooth 5.0"],
        rating: 4.8,
        reviews: 245,
        stock: 50,
        discount: 15
    },
    {
        id: 2,
        name: "Ultra Gaming Laptop",
        price: 1999.99,
        description: "High-performance gaming laptop with RTX 4080",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        category: "electronics",
        brand: "TechPro",
        features: ["RTX 4080", "32GB RAM", "1TB SSD"],
        rating: 4.9,
        reviews: 189,
        stock: 20,
        discount: 10
    },
    {
        id: 3,
        name: "Gaming Laptop Elite",
        price: 1999.99,
        description: "High-performance gaming laptop with RTX graphics",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        category: "electronics",
        subCategory: "computers",
        brand: "GameMaster",
        features: ["RTX 3080", "32GB RAM", "1TB SSD"],
        rating: 4.7,
        reviews: 189,
        discount: 5
    },
    {
        id: 4,
        name: "Smart 4K OLED TV",
        price: 1499.99,
        description: "65-inch 4K OLED Smart TV with HDR",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
        category: "electronics",
        subCategory: "tv",
        brand: "VisionTech",
        features: ["4K Resolution", "HDR10+", "Smart Hub"],
        rating: 4.6,
        reviews: 312,
        discount: 20
    },
    {
        id: 5,
        name: "Pro Wireless Earbuds",
        price: 199.99,
        description: "Premium true wireless earbuds with noise cancellation",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        category: "electronics",
        subCategory: "audio",
        brand: "SoundMaster",
        features: ["Active Noise Cancellation", "24h Battery", "Water Resistant"],
        rating: 4.5,
        reviews: 178,
        discount: 10
    },
    {
        id: 6,
        name: "Pro Gaming Console",
        price: 499.99,
        description: "Next-gen gaming console with 4K gaming and ray tracing",
        image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500",
        category: "electronics",
        subCategory: "gaming",
        brand: "GameMaster",
        features: ["4K Gaming", "Ray Tracing", "1TB SSD"],
        rating: 4.9,
        reviews: 425,
        discount: 0
    },
    {
        id: 7,
        name: "Smart Pro Watch",
        price: 349.99,
        description: "Advanced smartwatch with health monitoring and GPS",
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500",
        category: "electronics",
        subCategory: "wearables",
        brand: "TechPro",
        features: ["Heart Rate Monitor", "GPS", "5 Days Battery"],
        rating: 4.6,
        reviews: 234,
        discount: 15
    },
    {
        id: 8,
        name: "Pro Tablet 12.9",
        price: 899.99,
        description: "Professional tablet with M2 chip and Apple Pencil support",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        category: "electronics",
        subCategory: "tablets",
        brand: "TechPro",
        features: ["12.9 inch Display", "M2 Chip", "All-day Battery"],
        rating: 4.8,
        reviews: 312,
        discount: 5
    },
    {
        id: 9,
        name: "Premium Bluetooth Speaker",
        price: 179.99,
        description: "Waterproof bluetooth speaker with 360° sound",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
        category: "electronics",
        subCategory: "audio",
        brand: "SoundMaster",
        features: ["360° Sound", "Waterproof", "20h Battery"],
        rating: 4.4,
        reviews: 156,
        discount: 20
    },
    {
        id: 10,
        name: "Pro Mirrorless Camera",
        price: 1299.99,
        description: "Professional mirrorless camera with 4K video",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        category: "electronics",
        subCategory: "cameras",
        brand: "PhotoPro",
        features: ["24MP Sensor", "4K Video", "5-axis Stabilization"],
        rating: 4.7,
        reviews: 198,
        discount: 10
    },
    {
        id: 11,
        name: "Gaming Mouse Pro",
        price: 79.99,
        description: "Professional gaming mouse with 16K DPI sensor",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
        category: "electronics",
        subCategory: "gaming",
        brand: "GameMaster",
        features: ["16K DPI", "RGB Lighting", "8 Programmable Buttons"],
        rating: 4.5,
        reviews: 245,
        discount: 0
    },
    {
        id: 12,
        name: "Mechanical Gaming Keyboard",
        price: 149.99,
        description: "RGB mechanical keyboard with custom switches",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
        category: "electronics",
        subCategory: "gaming",
        brand: "GameMaster",
        features: ["Mechanical Switches", "RGB Backlight", "Aluminum Frame"],
        rating: 4.6,
        reviews: 167,
        discount: 15
    },
    {
        id: 13,
        name: "4K Webcam Pro",
        price: 199.99,
        description: "Professional 4K webcam with AI features",
        image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500",
        category: "electronics",
        subCategory: "accessories",
        brand: "TechPro",
        features: ["4K Resolution", "AI Auto-focus", "Noise-canceling Mic"],
        rating: 4.4,
        reviews: 89,
        discount: 0
    },
    {
        id: 14,
        name: "Portable SSD 2TB",
        price: 229.99,
        description: "Ultra-fast portable SSD with USB 4.0",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
        category: "electronics",
        subCategory: "storage",
        brand: "TechPro",
        features: ["2TB Storage", "USB 4.0", "Shock Resistant"],
        rating: 4.7,
        reviews: 134,
        discount: 10
    },
    {
        id: 15,
        name: "Gaming Monitor 32",
        price: 599.99,
        description: "32-inch 4K gaming monitor with 144Hz",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
        category: "electronics",
        subCategory: "monitors",
        brand: "VisionTech",
        features: ["4K Resolution", "144Hz", "1ms Response Time"],
        rating: 4.8,
        reviews: 256,
        discount: 5
    },
    {
        id: 16,
        name: "WiFi 6E Router",
        price: 299.99,
        description: "Tri-band WiFi 6E router with mesh support",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500",
        category: "electronics",
        subCategory: "networking",
        brand: "TechPro",
        features: ["WiFi 6E", "Tri-band", "Mesh Support"],
        rating: 4.5,
        reviews: 145,
        discount: 0
    },
    {
        id: 17,
        name: "Smart Video Doorbell",
        price: 179.99,
        description: "HD video doorbell with night vision and two-way audio",
        image: "https://images.unsplash.com/photo-1558389186-438424b00a32?w=500",
        category: "electronics",
        subCategory: "smart-home",
        brand: "SmartLife",
        features: ["1080p HD", "Night Vision", "Two-way Audio"],
        rating: 4.3,
        reviews: 178,
        discount: 20
    },
    {
        id: 18,
        name: "Wireless Charging Pad",
        price: 49.99,
        description: "15W fast wireless charging pad with cooling",
        image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500",
        category: "electronics",
        subCategory: "accessories",
        brand: "TechPro",
        features: ["15W Fast Charging", "Cooling System", "LED Indicator"],
        rating: 4.4,
        reviews: 234,
        discount: 0
    },
    {
        id: 19,
        name: "Smart LED Bulb Pack",
        price: 89.99,
        description: "Pack of 4 smart LED bulbs with voice control",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500",
        category: "electronics",
        subCategory: "smart-home",
        brand: "SmartLife",
        features: ["Voice Control", "16M Colors", "Schedule Support"],
        rating: 4.6,
        reviews: 189,
        discount: 15
    },
    {
        id: 20,
        name: "Security Camera System",
        price: 399.99,
        description: "4-camera security system with 4K recording",
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500",
        category: "electronics",
        subCategory: "security",
        brand: "SmartLife",
        features: ["4K Recording", "Night Vision", "Cloud Storage"],
        rating: 4.7,
        reviews: 167,
        discount: 10
    }
];

// Fashion Products (20 items)
const fashionProducts = [
    // Men's Fashion
    {
        id: 301,
        name: "Classic Cotton T-shirt",
        price: 29.99,
        description: "Premium cotton t-shirt with comfortable fit",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        category: "men",
        subCategory: "tops",
        brand: "StyleBasics",
        size: ["S", "M", "L", "XL"],
        color: ["white", "black", "navy", "grey"],
        material: "100% Cotton",
        rating: 4.5,
        reviews: 128,
        stock: 100,
        discount: 0
    },
    {
        id: 302,
        name: "Slim Fit Denim Jeans",
        price: 79.99,
        description: "Classic blue denim jeans with stretch comfort",
        image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=500",
        category: "men",
        subCategory: "pants",
        brand: "DenimCo",
        size: ["30", "32", "34", "36"],
        color: ["blue", "black", "grey"],
        material: "Stretch Denim",
        rating: 4.7,
        reviews: 245,
        stock: 75,
        discount: 15
    },
    {
        id: 303,
        name: "Leather Bomber Jacket",
        price: 199.99,
        description: "Classic leather bomber jacket with quilted lining",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
        category: "men",
        subCategory: "outerwear",
        brand: "LeatherLux",
        size: ["S", "M", "L", "XL"],
        color: ["brown", "black"],
        material: "Genuine Leather",
        rating: 4.8,
        reviews: 156,
        stock: 30,
        discount: 0
    },
    {
        id: 304,
        name: "Classic Dress Shirt",
        price: 59.99,
        description: "Formal dress shirt with wrinkle-free fabric",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
        category: "men",
        subCategory: "formal",
        brand: "FormalFit",
        size: ["S", "M", "L", "XL"],
        color: ["white", "blue", "pink"],
        material: "Cotton Blend",
        rating: 4.6,
        reviews: 189,
        stock: 85,
        discount: 10
    },
    {
        id: 305,
        name: "Athletic Sneakers",
        price: 89.99,
        description: "Comfortable athletic sneakers for daily wear",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        category: "men",
        subCategory: "shoes",
        brand: "SportFlex",
        size: ["40", "41", "42", "43", "44"],
        color: ["white", "black", "grey"],
        material: "Mesh & Rubber",
        rating: 4.7,
        reviews: 278,
        stock: 60,
        discount: 0
    },
    // ... Continue with more men's fashion items

    // Women's Fashion
    {
        id: 311,
        name: "Floral Summer Dress",
        price: 89.99,
        description: "Light and breezy floral print dress",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
        category: "women",
        subCategory: "dresses",
        brand: "StyleChic",
        size: ["XS", "S", "M", "L"],
        color: ["blue", "pink", "yellow"],
        material: "Viscose",
        rating: 4.6,
        reviews: 167,
        stock: 45,
        discount: 20
    },
    {
        id: 312,
        name: "Designer High Heels",
        price: 129.99,
        description: "Classic stiletto heels with comfort padding",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
        category: "women",
        subCategory: "shoes",
        brand: "LuxurySteps",
        size: ["36", "37", "38", "39", "40"],
        color: ["black", "nude", "red"],
        material: "Premium Leather",
        rating: 4.6,
        reviews: 198,
        stock: 25,
        discount: 10
    },
    {
        id: 313,
        name: "Luxury Handbag",
        price: 299.99,
        description: "Designer leather handbag with gold hardware",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
        category: "women",
        subCategory: "bags",
        brand: "LuxuryBags",
        color: ["black", "brown", "beige"],
        material: "Genuine Leather",
        rating: 4.8,
        reviews: 156,
        stock: 15,
        discount: 0
    },
    {
        id: 314,
        name: "Designer Scarf",
        price: 89.99,
        description: "Silk designer scarf with elegant pattern",
        image: "https://images.unsplash.com/photo-1584187835817-91a3290245fd?w=500",
        category: "women",
        subCategory: "accessories",
        brand: "StyleChic",
        color: ["multicolor"],
        material: "Pure Silk",
        rating: 4.5,
        reviews: 89,
        stock: 40,
        discount: 15
    },
    {
        id: 315,
        name: "Gold Necklace",
        price: 399.99,
        description: "18K gold plated designer necklace",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
        category: "women",
        subCategory: "jewelry",
        brand: "LuxuryJewels",
        material: "18K Gold Plated",
        rating: 4.9,
        reviews: 78,
        stock: 20,
        discount: 0
    },
    // Continue with more fashion products
    {
        id: 316,
        name: "Designer Sunglasses",
        price: 159.99,
        description: "UV protected luxury sunglasses",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
        category: "accessories",
        subCategory: "eyewear",
        brand: "LuxuryEye",
        color: ["black", "gold", "silver"],
        material: "Metal & Glass",
        rating: 4.7,
        reviews: 145,
        stock: 30,
        discount: 20
    },
    {
        id: 317,
        name: "Elegant Watch",
        price: 249.99,
        description: "Luxury stainless steel watch",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
        category: "accessories",
        subCategory: "watches",
        brand: "TimeStyle",
        color: ["silver", "rose gold", "gold"],
        material: "Stainless Steel",
        rating: 4.8,
        reviews: 167,
        stock: 25,
        discount: 0
    },
    {
        id: 318,
        name: "Summer Sandals",
        price: 79.99,
        description: "Comfortable leather summer sandals",
        image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf6e?w=500",
        category: "women",
        subCategory: "shoes",
        brand: "ComfortStep",
        size: ["36", "37", "38", "39", "40"],
        color: ["brown", "black", "beige"],
        material: "Genuine Leather",
        rating: 4.5,
        reviews: 198,
        stock: 45,
        discount: 15
    },
    {
        id: 319,
        name: "Designer Backpack",
        price: 189.99,
        description: "Stylish and practical leather backpack",
        image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500",
        category: "accessories",
        subCategory: "bags",
        brand: "LuxuryBags",
        color: ["black", "brown", "navy"],
        material: "Premium Leather",
        rating: 4.6,
        reviews: 134,
        stock: 35,
        discount: 10
    },
    {
        id: 320,
        name: "Pearl Earrings",
        price: 129.99,
        description: "Elegant pearl drop earrings",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
        category: "accessories",
        subCategory: "jewelry",
        brand: "LuxuryJewels",
        color: ["white", "cream"],
        material: "Sterling Silver & Pearl",
        rating: 4.7,
        reviews: 89,
        stock: 20,
        discount: 0
    }
];

// Home & Living Products (20 items)
const homeProducts = [
    {
        id: 201,
        name: "Modern Sofa",
        price: 899.99,
        description: "Comfortable 3-seater sofa with premium fabric",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
        category: "furniture",
        room: "living-room",
        material: "fabric"
    },
    {
        id: 202,
        name: "Queen Size Bed",
        price: 799.99,
        description: "Elegant queen size bed with wooden frame",
        image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500",
        category: "furniture",
        room: "bedroom",
        material: "wood"
    },
    {
        id: 203,
        name: "Dining Table Set",
        price: 1299.99,
        description: "6-seater dining table set with chairs",
        image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500",
        category: "furniture",
        room: "dining-room",
        material: "wood"
    },
    {
        id: 204,
        name: "Floor Lamp",
        price: 149.99,
        description: "Modern floor lamp with adjustable height",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        category: "lighting",
        room: "living-room",
        material: "metal"
    },
    {
        id: 205,
        name: "Kitchen Cabinet",
        price: 599.99,
        description: "Storage cabinet for kitchen essentials",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500",
        category: "furniture",
        room: "kitchen",
        material: "wood"
    },
    {
        id: 206,
        name: "Bathroom Vanity",
        price: 449.99,
        description: "Modern bathroom vanity with mirror",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500",
        category: "furniture",
        room: "bathroom",
        material: "wood"
    },
    {
        id: 207,
        name: "Area Rug",
        price: 199.99,
        description: "Soft area rug with modern pattern",
        image: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?w=500",
        category: "decor",
        room: "living-room",
        material: "fabric"
    },
    {
        id: 208,
        name: "Wall Mirror",
        price: 129.99,
        description: "Decorative wall mirror with gold frame",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500",
        category: "decor",
        room: "bedroom",
        material: "glass"
    },
    {
        id: 209,
        name: "Storage Ottoman",
        price: 149.99,
        description: "Multi-functional storage ottoman",
        image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?w=500",
        category: "furniture",
        room: "living-room",
        material: "fabric"
    },
    {
        id: 210,
        name: "Desk Lamp",
        price: 79.99,
        description: "LED desk lamp with adjustable brightness",
        image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=500",
        category: "lighting",
        room: "office",
        material: "metal"
    },
    {
        id: 211,
        name: "Bookshelf",
        price: 299.99,
        description: "5-tier bookshelf with modern design",
        image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500",
        category: "furniture",
        room: "living-room",
        material: "wood"
    },
    {
        id: 212,
        name: "Throw Pillows Set",
        price: 49.99,
        description: "Set of 4 decorative throw pillows",
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=500",
        category: "decor",
        room: "living-room",
        material: "fabric"
    },
    {
        id: 213,
        name: "Coffee Table",
        price: 249.99,
        description: "Modern coffee table with storage",
        image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500",
        category: "furniture",
        room: "living-room",
        material: "wood"
    },
    {
        id: 214,
        name: "Curtains Set",
        price: 89.99,
        description: "Blackout curtains set of 2 panels",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500",
        category: "decor",
        room: "bedroom",
        material: "fabric"
    },
    {
        id: 215,
        name: "Wall Clock",
        price: 39.99,
        description: "Modern wall clock with silent movement",
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500",
        category: "decor",
        room: "living-room",
        material: "metal"
    },
    {
        id: 216,
        name: "TV Stand",
        price: 349.99,
        description: "TV stand with storage cabinets",
        image: "https://images.unsplash.com/photo-1601760561441-16420502c7e0?w=500",
        category: "furniture",
        room: "living-room",
        material: "wood"
    },
    {
        id: 217,
        name: "Bedside Table",
        price: 129.99,
        description: "Nightstand with drawer and shelf",
        image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=500",
        category: "furniture",
        room: "bedroom",
        material: "wood"
    },
    {
        id: 218,
        name: "Plant Stand",
        price: 59.99,
        description: "Modern plant stand for indoor plants",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
        category: "decor",
        room: "living-room",
        material: "metal"
    },
    {
        id: 219,
        name: "Bathroom Set",
        price: 79.99,
        description: "Complete bathroom accessory set",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500",
        category: "accessories",
        room: "bathroom",
        material: "ceramic"
    },
    {
        id: 220,
        name: "Kitchen Storage Set",
        price: 69.99,
        description: "Set of 3 kitchen storage containers",
        image: "https://images.unsplash.com/photo-1520981825232-ece5fae45120?w=500",
        category: "accessories",
        room: "kitchen",
        material: "glass"
    }
];

// Cart state
let cart = [];
let totalPrice = 0;

// Filter state
let filterState = {
    category: 'all',
    priceRange: {min: 0, max: 2000},
    searchQuery: '',
    sortBy: 'default'
};

// DOM Elements
const productsContainer = document.getElementById('products-container');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const clearCartBtn = document.getElementById('clear-cart');
const checkoutBtn = document.getElementById('checkout');

// Add new DOM Elements
const searchInput = document.querySelector('input[type="search"]');
const categoryCheckboxes = document.querySelectorAll('.form-check-input');

// Price range input
const priceRangeInput = document.querySelector('.price-range input');
const productsGrid = document.getElementById('products-grid');
const sortSelect = document.querySelector('.sorting-options select');

// Add wishlist state
let wishlist = [];

// Add new states
let compareList = [];
let recentlyViewed = [];

// Initialize the page
function init() {
    displayProducts();
    updateCart();
    
    // Event listeners
    clearCartBtn.addEventListener('click', clearCart);
    checkoutBtn.addEventListener('click', handleCheckout);
    
    // New event listeners
    searchInput.addEventListener('input', filterProducts);
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    // Price range event
    priceRangeInput?.addEventListener('input', (e) => {
        filterState.priceRange = e.target.value;
        updateProducts();
    });

    // Category checkboxes events
    categoryCheckboxes?.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const category = e.target.id;
            if (e.target.checked) {
                filterState.categories.push(category);
            } else {
                filterState.categories = filterState.categories.filter(c => c !== category);
            }
            updateProducts();
        });
    });

    // Search input event
    searchInput?.addEventListener('input', (e) => {
        filterState.searchQuery = e.target.value.toLowerCase();
        updateProducts();
    });

    // Sort select event
    sortSelect?.addEventListener('change', (e) => {
        updateProducts();
    });

    // Initial products display
    updateProducts();
}

// Display products
function displayProducts() {
    displayFilteredProducts(products);
}

// Add filter function
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategories = Array.from(categoryCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id);
    
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategories.length === 0 || 
                              selectedCategories.includes(product.category);
        
        return matchesSearch && matchesCategory;
    });
    
    displayFilteredProducts(filteredProducts);
}

// Add display filtered products function
function displayFilteredProducts(filteredProducts) {
    productsContainer.innerHTML = filteredProducts.map(product => `
        <div class="col-md-4 mb-4">
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>$${product.price.toFixed(2)}</strong></p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add item to cart
function addToCart(productId, quantity = 1) {
    const product = findProduct(productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({...product, quantity});
    }
    updateCart();
    showToast('Product added to cart');
}

// Update cart display
function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.getElementById('cart-total');

    if (cartContainer) {
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h6>${item.name}</h6>
                    <p class="text-muted">$${item.price.toFixed(2)}</p>
                    <div class="quantity-controls">
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="mx-2">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="btn btn-sm btn-danger ms-2" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update cart count
    if (cartCount) {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    // Update total price
    totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) {
        cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    }
}

// Update item quantity
function updateQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = Math.max(1, cartItem.quantity + change);
        updateCart();
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showToast('Product removed from cart');
}

// Clear cart
function clearCart() {
    cart = [];
    updateCart();
    showToast('Cart cleared');
}

// Handle checkout
function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Thank you for your purchase!');
    clearCart();
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Filter products
function filterProducts(products) {
    return products.filter(product => {
        // Price filter
        const matchesPrice = product.price <= filterState.priceRange;

        // Category filter
        const matchesCategory = filterState.categories.length === 0 || 
                              filterState.categories.includes(product.category);

        // Material filter
        const matchesMaterial = filterState.materials.length === 0 || 
                              filterState.materials.includes(product.material);

        // Search filter
        const matchesSearch = product.name.toLowerCase().includes(filterState.searchQuery) ||
                            product.description.toLowerCase().includes(filterState.searchQuery);

        return matchesPrice && matchesCategory && matchesMaterial && matchesSearch;
    });
}

// Sort products
function sortProducts(products) {
    const sortValue = sortSelect.value;
    
    return [...products].sort((a, b) => {
        switch(sortValue) {
            case 'Price: Low to High':
                return a.price - b.price;
            case 'Price: High to Low':
                return b.price - a.price;
            case 'Popular':
                return b.rating - a.rating;
            default: // Latest
                return b.id - a.id;
        }
    });
}

// Update products display
function updateProducts() {
    let filteredProducts = filterProducts(homeProducts);
    filteredProducts = sortProducts(filteredProducts);

    // Update showing results text
    const showingResults = document.querySelector('.showing-results');
    if (showingResults) {
        showingResults.textContent = `Showing ${filteredProducts.length} of ${homeProducts.length} results`;
    }

    // Update products grid
    if (productsGrid) {
        productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="col-md-4 mb-4">
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-details">
                        <h5>${product.name}</h5>
                        <p class="text-muted">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="price">$${product.price.toFixed(2)}</span>
                            <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id})">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Add animation for room cards
const roomCards = document.querySelectorAll('.room-card');
roomCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('img').style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('img').style.transform = 'scale(1)';
    });
});

// Add active state for size buttons
const sizeButtons = document.querySelectorAll('.size-buttons .btn');
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Add to wishlist function
function addToWishlist(productId) {
    const product = products.find(p => p.id === productId) || homeProducts.find(p => p.id === productId);
    if (!wishlist.find(item => item.id === productId)) {
        wishlist.push(product);
        updateWishlistCount();
        showToast('Product added to wishlist!');
    } else {
        removeFromWishlist(productId);
    }
}

// Remove from wishlist
function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    updateWishlistCount();
    showToast('Product removed from wishlist');
}

// Update wishlist count
function updateWishlistCount() {
    const wishlistCount = document.querySelector('.wishlist-count');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

// Toast notification function
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Animate toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Quick view function
function quickView(productId) {
    const product = products.find(p => p.id === productId) || homeProducts.find(p => p.id === productId);
    
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="quick-view-content">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove()">&times;</button>
            <div class="row">
                <div class="col-md-6">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <h3>${product.name}</h3>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <p>${product.description}</p>
                    <div class="quantity-selector mb-3">
                        <button onclick="updateQuickViewQuantity(-1)">-</button>
                        <input type="number" value="1" min="1" id="quickViewQuantity">
                        <button onclick="updateQuickViewQuantity(1)">+</button>
                    </div>
                    <button class="btn btn-primary" onclick="addToCart(${product.id}, parseInt(document.getElementById('quickViewQuantity').value))">
                        Add to Cart
                    </button>
                    <button class="btn btn-outline-primary" onclick="addToWishlist(${product.id})">
                        <i class="far fa-heart"></i> Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Update quick view quantity
function updateQuickViewQuantity(change) {
    const input = document.getElementById('quickViewQuantity');
    const newValue = parseInt(input.value) + change;
    if (newValue >= 1) {
        input.value = newValue;
    }
}

// Add compare function
function addToCompare(productId) {
    const product = products.find(p => p.id === productId) || homeProducts.find(p => p.id === productId);
    
    if (compareList.length >= 4) {
        showToast('You can compare maximum 4 products');
        return;
    }
    
    if (!compareList.find(item => item.id === productId)) {
        compareList.push(product);
        updateCompareCount();
        showToast('Product added to compare');
    } else {
        removeFromCompare(productId);
    }
}

// Remove from compare
function removeFromCompare(productId) {
    compareList = compareList.filter(item => item.id !== productId);
    updateCompareCount();
    showToast('Product removed from compare');
}

// Update compare count
function updateCompareCount() {
    const compareCount = document.querySelector('.compare-count');
    if (compareCount) {
        compareCount.textContent = compareList.length;
    }
}

// Show compare modal
function showCompareModal() {
    if (compareList.length < 2) {
        showToast('Add at least 2 products to compare');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'compare-modal';
    modal.innerHTML = `
        <div class="compare-content">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove()">&times;</button>
            <h3>Compare Products</h3>
            <div class="compare-table-wrapper">
                <table class="compare-table">
                    <tr>
                        <th>Product</th>
                        ${compareList.map(product => `
                            <td>
                                <img src="${product.image}" alt="${product.name}" class="compare-img">
                                <h5>${product.name}</h5>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <th>Price</th>
                        ${compareList.map(product => `
                            <td>$${product.price.toFixed(2)}</td>
                        `).join('')}
                    </tr>
                    <tr>
                        <th>Category</th>
                        ${compareList.map(product => `
                            <td>${product.category}</td>
                        `).join('')}
                    </tr>
                    <tr>
                        <th>Actions</th>
                        ${compareList.map(product => `
                            <td>
                                <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id})">Add to Cart</button>
                                <button class="btn btn-outline-danger btn-sm" onclick="removeFromCompare(${product.id})">Remove</button>
                            </td>
                        `).join('')}
                    </tr>
                </table>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Add to recently viewed
function addToRecentlyViewed(productId) {
    const product = products.find(p => p.id === productId) || homeProducts.find(p => p.id === productId);
    
    // Remove if already exists
    recentlyViewed = recentlyViewed.filter(item => item.id !== productId);
    
    // Add to start of array
    recentlyViewed.unshift(product);
    
    // Keep only last 6 items
    if (recentlyViewed.length > 6) {
        recentlyViewed.pop();
    }
    
    // Update recently viewed section
    updateRecentlyViewed();
}

// Update recently viewed section
function updateRecentlyViewed() {
    const recentlyViewedContainer = document.getElementById('recently-viewed');
    if (recentlyViewedContainer && recentlyViewed.length > 0) {
        recentlyViewedContainer.innerHTML = `
            <h3>Recently Viewed</h3>
            <div class="row g-4">
                ${recentlyViewed.map(product => `
                    <div class="col-md-2">
                        <div class="product-card mini">
                            <img src="${product.image}" alt="${product.name}">
                            <div class="product-details">
                                <h6>${product.name}</h6>
                                <p class="price">$${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// Share product function
function shareProduct(productId) {
    const product = products.find(p => p.id === productId) || homeProducts.find(p => p.id === productId);
    
    if (navigator.share) {
        navigator.share({
            title: product.name,
            text: product.description,
            url: window.location.href
        })
        .then(() => showToast('Product shared successfully'))
        .catch(() => showToast('Error sharing product'));
    } else {
        const modal = document.createElement('div');
        modal.className = 'share-modal';
        modal.innerHTML = `
            <div class="share-content">
                <button class="close-btn" onclick="this.parentElement.parentElement.remove()">&times;</button>
                <h3>Share Product</h3>
                <div class="share-buttons">
                    <button onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${window.location.href}')">
                        <i class="fab fa-facebook"></i> Facebook
                    </button>
                    <button onclick="window.open('https://twitter.com/intent/tweet?text=${product.name}&url=${window.location.href}')">
                        <i class="fab fa-twitter"></i> Twitter
                    </button>
                    <button onclick="window.open('https://wa.me/?text=${product.name} - ${window.location.href}')">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
}

// Add new styles
const newStyles = `
.compare-modal,
.share-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.compare-content,
.share-content {
    background: white;
    padding: 30px;
    border-radius: 10px;
    max-width: 1000px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
}

.compare-table {
    width: 100%;
    border-collapse: collapse;
}

.compare-table th,
.compare-table td {
    padding: 15px;
    border: 1px solid #dee2e6;
    text-align: center;
}

.compare-img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 10px;
}

.share-buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.share-buttons button {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.product-card.mini {
    height: 200px;
}

.product-card.mini img {
    height: 120px;
}

.product-card.mini .product-details {
    padding: 10px;
}
`;

// Add new styles to document
const additionalStyles = document.createElement('style');
additionalStyles.textContent = newStyles;
document.head.appendChild(additionalStyles);

// Function to display electronics products
function displayElectronicsProducts() {
    const electronicsContainer = document.getElementById('products-grid');
    if (electronicsContainer) {
        electronicsContainer.innerHTML = products.map(product => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="product-card">
                    <div class="product-badge bg-danger">Sale</div>
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-details">
                        <h5>${product.name}</h5>
                        <div class="product-price">
                            <span class="new-price">$${product.price.toFixed(2)}</span>
                            <span class="old-price">$${(product.price * 1.2).toFixed(2)}</span>
                        </div>
                        <p class="text-muted">${product.description}</p>
                        <div class="product-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span>(4.5)</span>
                        </div>
                        <div class="product-actions">
                            <button class="btn btn-primary" onclick="addToCart(${product.id})">
                                Add to Cart
                            </button>
                            <button class="btn btn-outline-primary" onclick="quickView(${product.id})">
                                Quick View
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Function to display fashion products
function displayFashionProducts() {
    const fashionContainer = document.getElementById('products-grid');
    if (fashionContainer) {
        fashionContainer.innerHTML = fashionProducts.map(product => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-details">
                        <h5>${product.name}</h5>
                        <div class="product-price">
                            <span class="new-price">$${product.price.toFixed(2)}</span>
                        </div>
                        <p class="text-muted">${product.description}</p>
                        <div class="size-options mb-2">
                            ${product.size.map(size => `
                                <button class="btn btn-outline-secondary btn-sm">${size}</button>
                            `).join('')}
                        </div>
                        <div class="color-options mb-3">
                            ${product.color.map(color => `
                                <div class="color-circle" style="background-color: ${color}"></div>
                            `).join('')}
                        </div>
                        <div class="product-actions">
                            <button class="btn btn-primary" onclick="addToCart(${product.id})">
                                Add to Cart
                            </button>
                            <button class="btn btn-outline-primary" onclick="quickView(${product.id})">
                                Quick View
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Function to display home products
function displayHomeProducts() {
    const homeContainer = document.getElementById('products-grid');
    if (homeContainer) {
        homeContainer.innerHTML = homeProducts.map(product => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-details">
                        <h5>${product.name}</h5>
                        <div class="product-price">
                            <span class="new-price">$${product.price.toFixed(2)}</span>
                        </div>
                        <p class="text-muted">${product.description}</p>
                        <div class="product-info">
                            <span class="badge bg-primary">${product.category}</span>
                            <span class="badge bg-secondary">${product.room}</span>
                            <span class="badge bg-info">${product.material}</span>
                        </div>
                        <div class="product-actions mt-3">
                            <button class="btn btn-primary" onclick="addToCart(${product.id})">
                                Add to Cart
                            </button>
                            <button class="btn btn-outline-primary" onclick="quickView(${product.id})">
                                Quick View
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Initialize page based on category
function initializeCategoryPage() {
    const path = window.location.pathname;
    if (path.includes('electronics.html')) {
        displayElectronicsProducts();
    } else if (path.includes('fashion.html')) {
        displayFashionProducts();
    } else if (path.includes('home.html')) {
        displayHomeProducts();
    }
}

// Call initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCategoryPage();
    // Other initialization code...
});

// Function to display all products on page load
function displayAllProducts() {
    // Get the current page category
    const currentPage = window.location.pathname;
    let productsToShow = [];
    let containerElement = document.getElementById('products-grid');

    if (!containerElement) return;

    // Determine which products to show based on page
    if (currentPage.includes('electronics.html')) {
        productsToShow = products;
    } else if (currentPage.includes('fashion.html')) {
        productsToShow = fashionProducts;
    } else if (currentPage.includes('home.html')) {
        productsToShow = homeProducts;
    }

    // Display products in grid
    containerElement.innerHTML = productsToShow.map(product => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="product-card">
                <div class="product-badge bg-danger">Sale</div>
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-details">
                    <h5>${product.name}</h5>
                    <div class="product-price">
                        <span class="new-price">$${product.price.toFixed(2)}</span>
                        <span class="old-price">$${(product.price * 1.2).toFixed(2)}</span>
                    </div>
                    <p class="text-muted">${product.description}</p>
                    
                    <!-- Show specific details based on category -->
                    ${product.category === 'fashion' ? `
                        <div class="size-options mb-2">
                            ${product.size.map(size => `
                                <button class="btn btn-outline-secondary btn-sm">${size}</button>
                            `).join('')}
                        </div>
                        <div class="color-options mb-3">
                            ${product.color.map(color => `
                                <div class="color-circle" style="background-color: ${color}"></div>
                            `).join('')}
                        </div>
                    ` : ''}
                    
                    ${product.category === 'furniture' || product.category === 'decor' ? `
                        <div class="product-info mb-3">
                            <span class="badge bg-primary">${product.category}</span>
                            <span class="badge bg-secondary">${product.room}</span>
                            <span class="badge bg-info">${product.material}</span>
                        </div>
                    ` : ''}

                    <div class="product-rating mb-3">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
                        <span>(4.5)</span>
                    </div>

                    <div class="product-actions">
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">
                            Add to Cart
                        </button>
                        <button class="btn btn-outline-primary" onclick="quickView(${product.id})">
                            Quick View
                        </button>
                        <button class="btn btn-outline-secondary" onclick="addToWishlist(${product.id})">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Update products count
    const resultsCount = document.querySelector('.showing-results');
    if (resultsCount) {
        resultsCount.textContent = `Showing all ${productsToShow.length} products`;
    }
}

// Call this function when page loads
document.addEventListener('DOMContentLoaded', () => {
    displayAllProducts();
    initializeFilters();
});

// Filter functions
function applyFilters() {
    let filteredProducts = getAllProducts();

    // Category filter
    if (filterState.category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === filterState.category);
    }

    // Price range filter
    filteredProducts = filteredProducts.filter(p => 
        p.price >= filterState.priceRange.min && p.price <= filterState.priceRange.max
    );

    // Search filter
    if (filterState.searchQuery) {
        const query = filterState.searchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.description.toLowerCase().includes(query)
        );
    }

    // Sort products
    switch(filterState.sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    displayProducts(filteredProducts);
}

// Helper functions
function findProduct(id) {
    return [...products, ...fashionProducts, ...homeProducts].find(p => p.id === id);
}

function getAllProducts() {
    return [...products, ...fashionProducts, ...homeProducts];
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    displayAllProducts();
    updateCart();

    // Initialize filters
    const filterInputs = document.querySelectorAll('.filter-input');
    filterInputs.forEach(input => {
        input.addEventListener('change', () => {
            filterState[input.name] = input.value;
            applyFilters();
        });
    });

    // Initialize search
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterState.searchQuery = e.target.value;
            applyFilters();
        });
    }
});

// Function to display products with filters and sorting
function displayFilteredProducts(category) {
    const containerElement = document.getElementById('products-grid');
    if (!containerElement) return;

    // Get base products for category
    let productsToShow = [];
    switch(category) {
        case 'electronics':
            productsToShow = products;
            break;
        case 'fashion':
            productsToShow = fashionProducts;
            break;
        case 'home':
            productsToShow = homeProducts;
            break;
        default:
            productsToShow = getAllProducts();
    }

    // Apply filters
    if (filterState.priceRange.min || filterState.priceRange.max) {
        productsToShow = productsToShow.filter(product => 
            product.price >= filterState.priceRange.min && 
            product.price <= filterState.priceRange.max
        );
    }

    if (filterState.searchQuery) {
        const query = filterState.searchQuery.toLowerCase();
        productsToShow = productsToShow.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
    }

    // Apply sorting
    switch(filterState.sortBy) {
        case 'price-low':
            productsToShow.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            productsToShow.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            productsToShow.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            productsToShow.sort((a, b) => b.rating - a.rating);
            break;
    }

    // Display filtered and sorted products
    containerElement.innerHTML = productsToShow.map(product => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="product-card">
                ${product.discount ? `<div class="product-badge bg-danger">Sale ${product.discount}% Off</div>` : ''}
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-actions-overlay">
                        <button class="btn btn-light btn-sm" onclick="quickView(${product.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-light btn-sm" onclick="addToWishlist(${product.id})">
                            <i class="far fa-heart"></i>
                        </button>
                        <button class="btn btn-light btn-sm" onclick="addToCompare(${product.id})">
                            <i class="fas fa-exchange-alt"></i>
                        </button>
                        <button class="btn btn-light btn-sm" onclick="shareProduct(${product.id})">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>
                </div>
                <div class="product-details">
                    <div class="product-category">${product.category}</div>
                    <h5 class="product-title">${product.name}</h5>
                    <div class="product-rating mb-2">
                        ${generateRatingStars(product.rating || 4.5)}
                        <span class="rating-count">(${product.reviews || 0} reviews)</span>
                    </div>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price mb-3">
                        <span class="new-price">$${product.price.toFixed(2)}</span>
                        ${product.discount ? `
                            <span class="old-price">$${(product.price * (1 + product.discount/100)).toFixed(2)}</span>
                        ` : ''}
                    </div>

                    <!-- Category specific details -->
                    ${generateCategorySpecificDetails(product)}

                    <div class="product-actions">
                        <button class="btn btn-primary w-100" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Update results count
    const resultsCount = document.querySelector('.showing-results');
    if (resultsCount) {
        resultsCount.textContent = `Showing ${productsToShow.length} products`;
    }
}

// Helper function to generate rating stars
function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star text-warning"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt text-warning"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star text-warning"></i>';
    }

    return stars;
}

// Helper function to generate category-specific details
function generateCategorySpecificDetails(product) {
    if (product.category === 'fashion') {
        return `
            <div class="size-options mb-2">
                ${product.size.map(size => `
                    <button class="btn btn-outline-secondary btn-sm">${size}</button>
                `).join('')}
            </div>
            <div class="color-options mb-3">
                ${product.color.map(color => `
                    <div class="color-circle" style="background-color: ${color}" title="${color}"></div>
                `).join('')}
            </div>
        `;
    } else if (product.category === 'furniture' || product.category === 'decor') {
        return `
            <div class="product-info mb-3">
                <span class="badge bg-primary">${product.category}</span>
                <span class="badge bg-secondary">${product.room}</span>
                <span class="badge bg-info">${product.material}</span>
            </div>
        `;
    }
    return '';
}

// Initialize page with category detection
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    let category = 'all';
    
    if (path.includes('electronics.html')) category = 'electronics';
    else if (path.includes('fashion.html')) category = 'fashion';
    else if (path.includes('home.html')) category = 'home';
    
    displayFilteredProducts(category);
    initializeFilters();
    updateCart();
}); 