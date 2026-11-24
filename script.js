/**
 * TravelMate - Modern Travel Planning Website
 * Main JavaScript Engine (User-Specific Data & Authentication)
 */

// ==========================================
// 1. Destination Catalog (Static Knowledge Base)
// ==========================================

const SAMPLE_DESTINATIONS = [
  {
    id: 1,
    name: "Munnar",
    country: "India",
    category: "Hill Station",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    description: "Rolling green tea estates, misty mountain peaks, and crisp highland breeze in God's Own Country.",
    budget: 18000,
    currency: "₹",
    rating: 4.8,
    reviewsCount: 342,
    duration: "3-4 Days",
    bestSeason: "September - March",
    highlights: ["Eravikulam National Park", "Mattupetty Dam", "Anamudi Peak Trek", "Tea Tasting Sessions"]
  },
  {
    id: 2,
    name: "Goa",
    country: "India",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    description: "Golden palm-fringed sands, vibrant beach shacks, Portuguese architecture, and exhilarating water sports.",
    budget: 22000,
    currency: "₹",
    rating: 4.7,
    reviewsCount: 520,
    duration: "4-5 Days",
    bestSeason: "November - February",
    highlights: ["Baga & Palolem Beaches", "Dudhsagar Waterfalls", "Fort Aguada", "Sunset Catamaran Cruises"]
  },
  {
    id: 3,
    name: "Manali",
    country: "India",
    category: "Hill Station",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    description: "Snow-capped Himalayan valleys, alpine pine forests, river rafting in Beas, and scenic mountain passes.",
    budget: 24000,
    currency: "₹",
    rating: 4.9,
    reviewsCount: 460,
    duration: "5-6 Days",
    bestSeason: "October - June",
    highlights: ["Solang Valley Adventure", "Rohtang Pass", "Old Manali Cafes", "Hadimba Temple"]
  },
  {
    id: 4,
    name: "Kashmir",
    country: "India",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
    description: "Known as 'Paradise on Earth' featuring serene Shikara rides on Dal Lake, Gulmarg gondolas, and saffron meadows.",
    budget: 35000,
    currency: "₹",
    rating: 4.9,
    reviewsCount: 610,
    duration: "6-7 Days",
    bestSeason: "April - October",
    highlights: ["Dal Lake Shikara Ride", "Gulmarg Gondola Ride", "Pahalgam Valley", "Mughal Gardens"]
  },
  {
    id: 5,
    name: "Alleppey",
    country: "India",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    description: "Tranquil backwaters, traditional luxury houseboats, swaying coconut palms, and authentic Kerala seafood.",
    budget: 20000,
    currency: "₹",
    rating: 4.8,
    reviewsCount: 380,
    duration: "2-3 Days",
    bestSeason: "October - March",
    highlights: ["Overnight Houseboat Cruise", "Vembanad Lake", "Marari Beach", "Village Canoe Tour"]
  },
  {
    id: 6,
    name: "Ooty",
    country: "India",
    category: "Hill Station",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
    description: "Queen of the Nilgiris featuring heritage toy train rides, botanical gardens, and aromatic chocolate factories.",
    budget: 16000,
    currency: "₹",
    rating: 4.6,
    reviewsCount: 290,
    duration: "3-4 Days",
    bestSeason: "October - June",
    highlights: ["Nilgiri Mountain Railway", "Doddabetta Peak", "Botanical Gardens", "Pykara Lake & Falls"]
  },
  {
    id: 7,
    name: "Paris",
    country: "France",
    category: "International",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    description: "The city of lights, timeless romance, iconic art museums, high fashion, and world-class patisseries.",
    budget: 145000,
    currency: "₹",
    rating: 4.9,
    reviewsCount: 890,
    duration: "5-7 Days",
    bestSeason: "April - October",
    highlights: ["Eiffel Tower Summit", "Louvre Museum", "Seine River Cruise", "Montmartre & Sacré-Cœur"]
  },
  {
    id: 8,
    name: "Bali",
    country: "Indonesia",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    description: "Tropical island sanctuary boasting volcanic peaks, lush rice terraces, sacred sea temples, and surf beaches.",
    budget: 65000,
    currency: "₹",
    rating: 4.8,
    reviewsCount: 750,
    duration: "6-8 Days",
    bestSeason: "May - September",
    highlights: ["Ubud Monkey Forest", "Tegallalang Rice Terraces", "Tanah Lot Temple", "Seminyak Beach Clubs"]
  },
  {
    id: 9,
    name: "Dubai",
    country: "UAE",
    category: "International",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    description: "Ultramodern marvel with glittering skyscrapers, luxury shopping malls, desert safaris, and Arabian hospitality.",
    budget: 75000,
    currency: "₹",
    rating: 4.8,
    reviewsCount: 680,
    duration: "4-5 Days",
    bestSeason: "November - March",
    highlights: ["Burj Khalifa 148th Floor", "Desert Safari with BBQ", "Dubai Marina Yacht Tour", "The Dubai Mall"]
  },
  {
    id: 10,
    name: "Switzerland",
    country: "Switzerland",
    category: "International",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    description: "Pristine fairytale landscapes, majestic Swiss Alps, crystal-clear glacial lakes, and panoramic scenic trains.",
    budget: 185000,
    currency: "₹",
    rating: 5.0,
    reviewsCount: 920,
    duration: "7-9 Days",
    bestSeason: "June - September / Dec - Mar",
    highlights: ["Jungfraujoch - Top of Europe", "Glacier Express Train", "Lake Lucerne Cruise", "Zermatt & Matterhorn"]
  },
  {
    id: 11,
    name: "Maldives",
    country: "Maldives",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    description: "Turquoise lagoons, private overwater bungalows, coral reef snorkeling, and ultimate barefoot tropical luxury.",
    budget: 110000,
    currency: "₹",
    rating: 4.9,
    reviewsCount: 540,
    duration: "4-5 Days",
    bestSeason: "November - April",
    highlights: ["Overwater Villa Stay", "Manta Ray Snorkeling", "Private Sandbank Lunch", "Sunset Dolphin Cruise"]
  }
];

const DEFAULT_PACKING_ITEMS = [
  { id: 1, text: "Passport / Government ID & Visa Copies", category: "Documents", checked: false },
  { id: 2, text: "Flight & Hotel Confirmation Printouts", category: "Documents", checked: false },
  { id: 3, text: "Travel Insurance Policy", category: "Documents", checked: false },
  { id: 4, text: "Smartphone & Universal Travel Charger", category: "Electronics", checked: false },
  { id: 5, text: "Power Bank (10,000mAh+)", category: "Electronics", checked: false },
  { id: 6, text: "Noise-Cancelling Headphones", category: "Electronics", checked: false },
  { id: 7, text: "Comfortable Walking Shoes / Sneakers", category: "Clothing", checked: false },
  { id: 8, text: "Weather-Appropriate Jacket / Windbreaker", category: "Clothing", checked: false },
  { id: 9, text: "Swimwear & Beach Towel", category: "Clothing", checked: false },
  { id: 10, text: "Toothbrush, Paste & Mini Toiletries Kit", category: "Toiletries", checked: false },
  { id: 11, text: "Sunscreen SPF 50+ & Lip Balm", category: "Toiletries", checked: false },
  { id: 12, text: "First Aid Kit & Motion Sickness Pills", category: "Essentials", checked: false },
  { id: 13, text: "Credit / Forex Cards & Local Cash", category: "Essentials", checked: false },
  { id: 14, text: "Reusable Filter Water Bottle", category: "Essentials", checked: false }
];

// ==========================================
// 2. Storage Helpers & Data Migration
// ==========================================

const Storage = {
  get(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.error(`Error reading ${key} from localStorage:`, e);
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error saving ${key} to localStorage:`, e);
    }
  }
};

/**
 * Initialize application storage cleanly.
 * NOTE: NO DEMO ACCOUNT IS CREATED. NO USER IS AUTO-LOGGED IN.
 */
function initAppData() {
  // Ensure registered users array exists
  let users = Storage.get("tm_users", []);
  
  // Clean up any legacy demo account if present
  users = users.filter(u => u.email !== "alex@travelmate.com" && u.id !== "usr-demo");
  Storage.set("tm_users", users);

  // Clean up legacy demo session
  const currentLocal = Storage.get("tm_current_user", null);
  if (currentLocal && (currentLocal.email === "alex@travelmate.com" || currentLocal.id === "usr-demo")) {
    localStorage.removeItem("tm_current_user");
  }
  const currentSession = sessionStorage.getItem("tm_session_user");
  if (currentSession) {
    try {
      const parsed = JSON.parse(currentSession);
      if (parsed.email === "alex@travelmate.com" || parsed.id === "usr-demo") {
        sessionStorage.removeItem("tm_session_user");
      }
    } catch (e) {
      sessionStorage.removeItem("tm_session_user");
    }
  }

  // Ensure trips array exists (empty if fresh)
  if (!localStorage.getItem("tm_trips")) {
    Storage.set("tm_trips", []);
  } else {
    // Clean up old demo trips that didn't have user IDs
    let trips = Storage.get("tm_trips", []);
    trips = trips.filter(t => t.userId && t.userId !== "usr-demo");
    Storage.set("tm_trips", trips);
  }

  // Ensure user-specific wishlists array exists: [{ userId: string, destinationIds: number[] }]
  if (!localStorage.getItem("tm_wishlists")) {
    Storage.set("tm_wishlists", []);
  }

  // Ensure expenses array exists
  if (!localStorage.getItem("tm_expenses")) {
    Storage.set("tm_expenses", []);
  }

  // Ensure personal travel journals array exists
  if (!localStorage.getItem("tm_journals")) {
    Storage.set("tm_journals", []);
  }

  // Ensure photo gallery array exists
  if (!localStorage.getItem("tm_gallery")) {
    Storage.set("tm_gallery", []);
  }

  // Packing list
  if (!localStorage.getItem("tm_packing")) {
    Storage.set("tm_packing", DEFAULT_PACKING_ITEMS);
  }

  // Theme setup
  const savedTheme = localStorage.getItem("tm_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

// ==========================================
// 3. User Session & Authentication Helpers
// ==========================================

function getLoggedInUser() {
  try {
    const session = sessionStorage.getItem("tm_session_user");
    if (session) return JSON.parse(session);
    const local = localStorage.getItem("tm_current_user");
    if (local) return JSON.parse(local);
  } catch (e) {
    console.error("Error reading session:", e);
  }
  return null;
}

function updateAuthUI() {
  const user = getLoggedInUser();
  const authNavContainer = document.getElementById("nav-auth-container");
  if (!authNavContainer) return;

  if (user) {
    const initials = user.name
      .split(" ")
      .map(n => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

    authNavContainer.innerHTML = `
      <div class="user-badge" id="open-profile-btn" title="View Profile (${user.name})">
        <div class="user-avatar-mini">${initials}</div>
        <span style="font-weight:600; font-size:0.9rem;">${user.name.split(" ")[0]}</span>
        <i class="fa-solid fa-chevron-down" style="font-size:0.75rem; color:var(--text-muted);"></i>
      </div>
    `;

    const btn = document.getElementById("open-profile-btn");
    if (btn) {
      btn.addEventListener("click", openUserProfileModal);
    }
  } else {
    authNavContainer.innerHTML = `
      <a href="login.html" class="btn btn-primary btn-sm">
        <i class="fa-solid fa-arrow-right-to-bracket"></i> Login / Register
      </a>
    `;
  }
}

function openUserProfileModal() {
  const user = getLoggedInUser();
  if (!user) return;

  const trips = Storage.get("tm_trips", []).filter(t => t.userId === user.id);
  const wishlist = getUserWishlist(user.id);
  const expenses = Storage.get("tm_expenses", []).filter(e => e.userId === user.id);
  const journals = Storage.get("tm_journals", []).filter(j => j.userId === user.id);
  const totalSpent = expenses.reduce((acc, curr) => acc + Number(curr.amount || 0), 0);

  const profileBody = document.getElementById("profile-modal-body");
  if (profileBody) {
    const initials = user.name
      .split(" ")
      .map(n => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

    profileBody.innerHTML = `
      <div class="profile-header-banner">
        <div class="profile-avatar-large">${initials}</div>
      </div>
      <div style="margin-top: 1rem;">
        <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main);">${user.name}</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;"><i class="fa-solid fa-envelope"></i> ${user.email}</p>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.25rem;">
          <i class="fa-solid fa-id-card"></i> Account ID: <code style="font-size:0.8rem; background:var(--bg-surface-secondary); padding:2px 6px; border-radius:4px;">${user.id}</code>
        </p>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.25rem;">
          <i class="fa-solid fa-calendar-check"></i> Member since ${user.joinedDate || "2026"}
        </p>
      </div>

      <div class="profile-stats-row">
        <div class="profile-stat-box">
          <div class="profile-stat-val">${trips.length}</div>
          <div class="profile-stat-lbl">Planned Trips</div>
        </div>
        <div class="profile-stat-box">
          <div class="profile-stat-val">${wishlist.length}</div>
          <div class="profile-stat-lbl">Wishlist</div>
        </div>
        <div class="profile-stat-box">
          <div class="profile-stat-val">${journals.length}</div>
          <div class="profile-stat-lbl">Memories</div>
        </div>
        <div class="profile-stat-box">
          <div class="profile-stat-val">₹${totalSpent > 0 ? (totalSpent / 1000).toFixed(0) + 'k' : '0'}</div>
          <div class="profile-stat-lbl">Tracked Exp.</div>
        </div>
      </div>

      <div style="background: var(--bg-surface-secondary); padding: 1.25rem; border-radius: var(--radius-md); margin-top: 1.5rem;">
        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-main);">
          <i class="fa-solid fa-shield-halved" style="color: var(--turquoise-500);"></i> Isolated Account Data
        </h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55;">
          Your saved trips, wishlists, and expenses are tied strictly to your account ID. Logging out clears this browser session but permanently preserves your data in storage.
        </p>
      </div>

      <div class="security-disclaimer-box">
        <i class="fa-solid fa-circle-info" style="color:var(--accent-amber); margin-right:0.35rem;"></i>
        <strong>Academic Demonstration Notice:</strong> This project uses client-side localStorage/sessionStorage. In a production system, private information must be verified by backend databases and protected using HTTPS cookies.
      </div>
    `;
  }

  openModal("profile-modal");
}

function handleLogout() {
  // Clear active session
  sessionStorage.removeItem("tm_session_user");
  localStorage.removeItem("tm_current_user");

  closeModal("profile-modal");
  updateAuthUI();
  updateWishlistCount();

  // Re-render UI to show protected lock states
  renderDestinations();
  renderTrips();
  renderWishlist();
  renderBudgetCalculator();
  renderJournalMemories();
  renderGallery();

  showToast("Logged out successfully. Your saved data remains stored.", "info");
}

// ==========================================
// 4. UI Helpers: Toasts, Modals, Theme
// ==========================================

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const icons = {
    success: "fa-circle-check",
    error: "fa-circle-exclamation",
    warning: "fa-triangle-exclamation",
    info: "fa-circle-info"
  };

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${icons[type] || icons.info}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById("theme-toggle-btn");
  if (themeToggle) {
    themeToggle.innerHTML = theme === "dark" 
      ? '<i class="fa-solid fa-sun" title="Switch to Light Mode"></i>' 
      : '<i class="fa-solid fa-moon" title="Switch to Dark Mode"></i>';
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("tm_theme", newTheme);
  updateThemeIcon(newTheme);
  showToast(`Switched to ${newTheme} mode`, "info");
}

function formatCurrency(amount, currency = "₹") {
  return `${currency}${Number(amount).toLocaleString("en-IN")}`;
}

function formatDate(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function getDaysCount(startStr, endStr) {
  if (!startStr || !endStr) return 1;
  const start = new Date(startStr);
  const end = new Date(endStr);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays || 1;
}

let pendingConfirmCallback = null;
function showConfirmDialog(title, message, callback) {
  const titleEl = document.getElementById("confirm-modal-title");
  const msgEl = document.getElementById("confirm-modal-msg");
  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;

  pendingConfirmCallback = callback;
  openModal("confirm-modal");
}

// ==========================================
// 5. User-Specific Wishlist Engine
// ==========================================

function getUserWishlist(userId) {
  if (!userId) return [];
  const wishlists = Storage.get("tm_wishlists", []);
  const entry = wishlists.find(w => w.userId === userId);
  return entry ? (entry.destinationIds || []) : [];
}

function setUserWishlist(userId, destinationIds) {
  if (!userId) return;
  let wishlists = Storage.get("tm_wishlists", []);
  const idx = wishlists.findIndex(w => w.userId === userId);
  if (idx !== -1) {
    wishlists[idx].destinationIds = destinationIds;
  } else {
    wishlists.push({ userId, destinationIds });
  }
  Storage.set("tm_wishlists", wishlists);
}

function toggleWishlist(destId) {
  const user = getLoggedInUser();
  if (!user) {
    showToast("Please log in to add destinations to your wishlist", "warning");
    setTimeout(() => {
      window.location.href = "login.html?redirect=wishlist";
    }, 1100);
    return;
  }

  let list = getUserWishlist(user.id);
  const dest = SAMPLE_DESTINATIONS.find(d => d.id === destId);
  const destName = dest ? dest.name : "Destination";

  if (list.includes(destId)) {
    list = list.filter(id => id !== destId);
    setUserWishlist(user.id, list);
    showToast(`Removed ${destName} from your wishlist`, "info");
  } else {
    list.push(destId);
    setUserWishlist(user.id, list);
    showToast(`Saved ${destName} to your wishlist!`, "success");
  }

  renderDestinations();
  renderWishlist();
  updateWishlistCount();
}

function updateWishlistCount() {
  const user = getLoggedInUser();
  const badge = document.getElementById("wishlist-count-badge");
  if (!badge) return;

  if (user) {
    const list = getUserWishlist(user.id);
    badge.textContent = list.length;
    badge.style.display = "inline-flex";
  } else {
    badge.textContent = "0";
  }
}

function renderWishlist() {
  const container = document.getElementById("wishlist-grid");
  if (!container) return;

  const user = getLoggedInUser();

  // If user is logged out, show attractive Login Required card
  if (!user) {
    container.innerHTML = `
      <div class="auth-lock-card">
        <div class="auth-lock-icon">
          <i class="fa-solid fa-lock"></i>
        </div>
        <h3 class="auth-lock-title">Wishlist Requires Login</h3>
        <p class="auth-lock-desc">
          Sign in or create an account to curate your personal bucket list of dreamy destinations, view saved spots, and convert them into scheduled trips.
        </p>
        <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
          <a href="login.html?redirect=wishlist" class="btn btn-turquoise">
            <i class="fa-solid fa-arrow-right-to-bracket"></i> Sign In to View Wishlist
          </a>
          <a href="register.html?redirect=wishlist" class="btn btn-outline">
            <i class="fa-solid fa-user-plus"></i> Create Account
          </a>
        </div>
      </div>
    `;
    return;
  }

  const wishlistIds = getUserWishlist(user.id);
  const items = SAMPLE_DESTINATIONS.filter(d => wishlistIds.includes(d.id));

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-regular fa-heart"></i>
        <h3>Your Wishlist is Empty</h3>
        <p>Explore breathtaking destinations below and click the heart icon to save your favorites here.</p>
        <a href="#explore" class="btn btn-turquoise btn-sm">
          <i class="fa-solid fa-compass"></i> Explore Destinations
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(dest => {
    return `
      <div class="dest-card">
        <div class="dest-img-wrap">
          <img src="${dest.image}" alt="${dest.name}" loading="lazy">
          <span class="dest-badge-category">${dest.category}</span>
          <button class="dest-wishlist-btn favorited" data-dest-id="${dest.id}" title="Remove from Wishlist">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
        <div class="dest-card-body">
          <div class="dest-header">
            <h3 class="dest-title">${dest.name}</h3>
            <div class="dest-rating"><i class="fa-solid fa-star"></i> ${dest.rating}</div>
          </div>
          <div class="dest-location"><i class="fa-solid fa-location-dot"></i> ${dest.country}</div>
          <p class="dest-desc">${dest.description}</p>
          <div class="dest-footer">
            <div class="dest-price">
              <span class="dest-price-label">Budget</span>
              <span class="dest-price-value">${formatCurrency(dest.budget, dest.currency)}</span>
            </div>
            <div class="dest-actions">
              <button class="btn btn-outline btn-sm view-dest-btn" data-dest-id="${dest.id}">Details</button>
              <button class="btn btn-turquoise btn-sm plan-dest-btn" data-dest-name="${dest.name}" data-dest-budget="${dest.budget}">
                <i class="fa-solid fa-calendar-plus"></i> Plan This Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Wishlist card event listeners
  container.querySelectorAll(".dest-wishlist-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const destId = Number(btn.getAttribute("data-dest-id"));
      toggleWishlist(destId);
    });
  });

  container.querySelectorAll(".view-dest-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const destId = Number(btn.getAttribute("data-dest-id"));
      openDestinationModal(destId);
    });
  });

  container.querySelectorAll(".plan-dest-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const destName = btn.getAttribute("data-dest-name");
      const destBudget = btn.getAttribute("data-dest-budget");
      prefillTripPlanner(destName, destBudget);
    });
  });
}

// ==========================================
// 6. Destination Explorer & Details Modal
// ==========================================

let activeCategory = "all";
let activeSearchQuery = "";
let activeSortOption = "featured";
let activeMaxPrice = 200000;

function renderDestinations() {
  const container = document.getElementById("destinations-grid");
  if (!container) return;

  const user = getLoggedInUser();
  const wishlist = user ? getUserWishlist(user.id) : [];

  // Filter
  let filtered = SAMPLE_DESTINATIONS.filter(dest => {
    const matchesCategory = (activeCategory === "all" || dest.category.toLowerCase() === activeCategory.toLowerCase());
    const query = activeSearchQuery.toLowerCase().trim();
    const matchesSearch = query === "" || 
      dest.name.toLowerCase().includes(query) || 
      dest.country.toLowerCase().includes(query) ||
      dest.description.toLowerCase().includes(query);
    const matchesPrice = dest.budget <= activeMaxPrice;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Sort
  if (activeSortOption === "price-low") {
    filtered.sort((a, b) => a.budget - b.budget);
  } else if (activeSortOption === "price-high") {
    filtered.sort((a, b) => b.budget - a.budget);
  } else if (activeSortOption === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (activeSortOption === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-map-location-dot"></i>
        <h3>No Destinations Found</h3>
        <p>Try adjusting your search terms, category filters, or budget slider.</p>
        <button class="btn btn-outline btn-sm" id="reset-dest-filters-btn">
          <i class="fa-solid fa-rotate-left"></i> Reset All Filters
        </button>
      </div>
    `;
    const resetBtn = document.getElementById("reset-dest-filters-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        activeCategory = "all";
        activeSearchQuery = "";
        activeSortOption = "featured";
        activeMaxPrice = 200000;
        const searchInput = document.getElementById("dest-search-input");
        const priceSlider = document.getElementById("dest-price-slider");
        const sortSelect = document.getElementById("dest-sort-select");
        if (searchInput) searchInput.value = "";
        if (priceSlider) priceSlider.value = 200000;
        if (sortSelect) sortSelect.value = "featured";
        document.querySelectorAll(".chip-btn").forEach(c => c.classList.remove("active"));
        const allChip = document.querySelector('.chip-btn[data-category="all"]');
        if (allChip) allChip.classList.add("active");
        renderDestinations();
      });
    }
    return;
  }

  container.innerHTML = filtered.map(dest => {
    const isFavorited = wishlist.includes(dest.id);
    return `
      <div class="dest-card">
        <div class="dest-img-wrap">
          <img src="${dest.image}" alt="${dest.name}" loading="lazy">
          <span class="dest-badge-category">${dest.category}</span>
          <button class="dest-wishlist-btn ${isFavorited ? 'favorited' : ''}" 
                  data-dest-id="${dest.id}" 
                  title="${isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}">
            <i class="fa-${isFavorited ? 'solid' : 'regular'} fa-heart"></i>
          </button>
        </div>
        <div class="dest-card-body">
          <div class="dest-header">
            <h3 class="dest-title">${dest.name}</h3>
            <div class="dest-rating">
              <i class="fa-solid fa-star"></i>
              <span>${dest.rating}</span>
            </div>
          </div>
          <div class="dest-location">
            <i class="fa-solid fa-location-dot"></i>
            <span>${dest.country}</span>
            <span>•</span>
            <span>${dest.duration}</span>
          </div>
          <p class="dest-desc">${dest.description}</p>
          <div class="dest-footer">
            <div class="dest-price">
              <span class="dest-price-label">Est. Budget</span>
              <span class="dest-price-value">${formatCurrency(dest.budget, dest.currency)}</span>
            </div>
            <div class="dest-actions">
              <button class="btn btn-outline btn-sm view-dest-btn" data-dest-id="${dest.id}">
                Details
              </button>
              <button class="btn btn-turquoise btn-sm plan-dest-btn" data-dest-name="${dest.name}" data-dest-budget="${dest.budget}">
                <i class="fa-solid fa-calendar-plus"></i> Plan Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Attach event listeners
  container.querySelectorAll(".dest-wishlist-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const destId = Number(btn.getAttribute("data-dest-id"));
      toggleWishlist(destId);
    });
  });

  container.querySelectorAll(".view-dest-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const destId = Number(btn.getAttribute("data-dest-id"));
      openDestinationModal(destId);
    });
  });

  container.querySelectorAll(".plan-dest-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const destName = btn.getAttribute("data-dest-name");
      const destBudget = btn.getAttribute("data-dest-budget");
      prefillTripPlanner(destName, destBudget);
    });
  });
}

function openDestinationModal(destId) {
  const dest = SAMPLE_DESTINATIONS.find(d => d.id === destId);
  if (!dest) return;

  const modalBody = document.getElementById("dest-modal-body");
  const modalTitle = document.getElementById("dest-modal-title");
  if (!modalBody || !modalTitle) return;

  const user = getLoggedInUser();
  const wishlist = user ? getUserWishlist(user.id) : [];
  const isFavorited = wishlist.includes(dest.id);

  modalTitle.textContent = `${dest.name}, ${dest.country}`;
  modalBody.innerHTML = `
    <img src="${dest.image}" alt="${dest.name}" class="dest-modal-img">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
      <span class="section-badge">${dest.category}</span>
      <div class="dest-rating" style="font-size:1rem;">
        <i class="fa-solid fa-star"></i> ${dest.rating} (${dest.reviewsCount} reviews)
      </div>
    </div>
    <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:1.25rem;">
      ${dest.description}
    </p>

    <div style="background:var(--bg-surface-secondary); padding:1rem; border-radius:var(--radius-md); margin-bottom:1.25rem; display:grid; grid-template-columns:1fr 1fr; gap:0.75rem;">
      <div>
        <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">Best Season</span>
        <div style="font-weight:700; color:var(--text-main);">${dest.bestSeason}</div>
      </div>
      <div>
        <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">Estimated Budget</span>
        <div style="font-weight:700; color:var(--turquoise-600);">${formatCurrency(dest.budget, dest.currency)} / person</div>
      </div>
    </div>

    <h4 style="font-size:1rem; font-weight:700; margin-bottom:0.6rem; color:var(--text-main);">Top Experiences & Highlights:</h4>
    <ul class="dest-modal-highlights">
      ${dest.highlights.map(h => `<li><i class="fa-solid fa-circle-check"></i> ${h}</li>`).join("")}
    </ul>

    <div style="display:flex; gap:1rem; margin-top:2rem;">
      <button class="btn btn-turquoise" style="flex:1;" id="modal-plan-trip-btn">
        <i class="fa-solid fa-calendar-plus"></i> Plan a Trip to ${dest.name}
      </button>
      <button class="btn btn-outline" id="modal-toggle-wishlist-btn" title="${isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}">
        <i class="fa-${isFavorited ? 'solid' : 'regular'} fa-heart" style="${isFavorited ? 'color:var(--accent-rose);' : ''}"></i>
      </button>
    </div>
  `;

  document.getElementById("modal-plan-trip-btn").addEventListener("click", () => {
    closeModal("dest-modal");
    prefillTripPlanner(dest.name, dest.budget);
  });

  document.getElementById("modal-toggle-wishlist-btn").addEventListener("click", () => {
    toggleWishlist(dest.id);
    closeModal("dest-modal");
  });

  openModal("dest-modal");
}

function prefillTripPlanner(destinationName, estimatedBudget) {
  const destSelect = document.getElementById("trip-destination-input");
  const tripNameInput = document.getElementById("trip-name-input");
  const tripBudgetInput = document.getElementById("trip-budget-input");

  if (destSelect) {
    destSelect.value = destinationName;
  }
  if (tripNameInput && (!tripNameInput.value || tripNameInput.value.trim() === "")) {
    tripNameInput.value = `Trip to ${destinationName}`;
  }
  if (tripBudgetInput && estimatedBudget) {
    tripBudgetInput.value = estimatedBudget;
  }

  const plannerSection = document.getElementById("planner");
  if (plannerSection) {
    plannerSection.scrollIntoView({ behavior: "smooth" });
  }

  showToast(`Prefilled trip planner for ${destinationName}!`, "success");
}

// ==========================================
// 7. Live Trip Countdown Hub & My Trips Engine
// ==========================================

let editingTripId = null;
let activeTripTab = "all"; // 'all', 'upcoming', 'completed'
let countdownInterval = null;
let selectedCountdownTripId = null;

function renderTripCountdown() {
  const container = document.getElementById("countdown-section-wrapper");
  if (!container) return;

  const user = getLoggedInUser();
  if (!user) {
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }
    container.innerHTML = "";
    return;
  }

  const allTrips = Storage.get("tm_trips", []);
  const userTrips = allTrips.filter(t => t.userId === user.id);

  if (userTrips.length === 0) {
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }
    container.innerHTML = "";
    return;
  }

  const now = new Date();
  const todayStr = now.toISOString().split("T")[0];

  // Upcoming trips sorted by closest departure date
  const upcomingTrips = userTrips
    .filter(t => t.endDate >= todayStr)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));

  // Completed trips sorted by most recently finished
  const completedTrips = userTrips
    .filter(t => t.endDate < todayStr)
    .sort((a, b) => b.endDate.localeCompare(a.endDate));

  // Determine current active trip for the countdown
  let currentTrip = null;
  if (selectedCountdownTripId) {
    currentTrip = userTrips.find(t => t.id === selectedCountdownTripId);
  }
  if (!currentTrip) {
    currentTrip = upcomingTrips.length > 0 ? upcomingTrips[0] : completedTrips[0];
    selectedCountdownTripId = currentTrip ? currentTrip.id : null;
  }

  if (!currentTrip) {
    container.innerHTML = "";
    return;
  }

  // Timing calculations (assume departure at 09:00 AM on departure date)
  const departureDate = new Date(`${currentTrip.startDate}T09:00:00`);
  const returnDate = new Date(`${currentTrip.endDate}T23:59:59`);
  const diffToDeparture = departureDate.getTime() - now.getTime();
  const diffToReturn = returnDate.getTime() - now.getTime();

  const isOngoing = diffToDeparture <= 0 && diffToReturn >= 0;
  const isCompleted = diffToReturn < 0;

  // Remaining days calculation
  const remainingDays = Math.max(0, Math.ceil(diffToDeparture / (1000 * 60 * 60 * 24)));

  // Compose status alert message
  let bannerClass = "countdown-banner";
  let bannerHtml = "";

  if (isCompleted) {
    bannerClass = "countdown-banner completed";
    bannerHtml = `
      <i class="fa-solid fa-circle-check" style="color:var(--accent-emerald); font-size:1.3rem;"></i>
      <div>
        <strong>Trip Completed!</strong> The scheduled dates for <em>"${currentTrip.name}"</em> (${formatDate(currentTrip.startDate)} – ${formatDate(currentTrip.endDate)}) have passed. We hope you created unforgettable memories in ${currentTrip.destination}! Ready for your next journey?
      </div>
    `;
  } else if (isOngoing) {
    bannerClass = "countdown-banner ongoing";
    bannerHtml = `
      <i class="fa-solid fa-mountain-sun" style="color:var(--turquoise-400); font-size:1.3rem;"></i>
      <div>
        <strong>Trip Currently Underway!</strong> You are currently on your adventure in ${currentTrip.destination}. Enjoy every single moment of your journey!
      </div>
    `;
  } else {
    // Approaching status messages
    if (remainingDays === 0) {
      bannerClass = "countdown-banner urgent";
      bannerHtml = `
        <i class="fa-solid fa-plane-departure" style="color:#f43f5e; font-size:1.4rem;"></i>
        <div>
          <strong>Departure is Approaching — Leaving in Less Than 24 Hours!</strong> Grab your luggage, tickets, and passport. Your journey to ${currentTrip.destination} departs today!
        </div>
      `;
    } else if (remainingDays === 1) {
      bannerClass = "countdown-banner urgent";
      bannerHtml = `
        <i class="fa-solid fa-suitcase-rolling" style="color:#f43f5e; font-size:1.4rem;"></i>
        <div>
          <strong>Departure is Approaching — Tomorrow is Departure Day!</strong> Finalize your packing checklist, verify your travel reservations, and get ready to fly!
        </div>
      `;
    } else if (remainingDays <= 3) {
      bannerClass = "countdown-banner approaching";
      bannerHtml = `
        <i class="fa-solid fa-bell" style="color:#f59e0b; font-size:1.3rem;"></i>
        <div>
          <strong>Departure is Approaching Fast!</strong> Only <strong>${remainingDays} days</strong> left until your departure to ${currentTrip.destination}. Review your packing checklist and itinerary details!
        </div>
      `;
    } else if (remainingDays <= 7) {
      bannerClass = "countdown-banner approaching";
      bannerHtml = `
        <i class="fa-solid fa-calendar-check" style="color:#f59e0b; font-size:1.3rem;"></i>
        <div>
          <strong>Departure Approaching This Week:</strong> <strong>${remainingDays} days</strong> remaining until departure on ${formatDate(currentTrip.startDate)}. Start organizing your travel essentials!
        </div>
      `;
    } else {
      bannerClass = "countdown-banner";
      bannerHtml = `
        <i class="fa-solid fa-compass" style="color:var(--turquoise-400); font-size:1.3rem;"></i>
        <div>
          <strong>Countdown Active:</strong> <strong>${remainingDays} days</strong> remaining until departure to ${currentTrip.destination}. Plenty of time to customize your plan and budget!
        </div>
      `;
    }
  }

  // Switch trip dropdown
  const tripOptionsHtml = userTrips.map(t => {
    const isPast = t.endDate < todayStr;
    const isSel = t.id === currentTrip.id ? "selected" : "";
    return `<option value="${t.id}" ${isSel}>${t.name} (${t.destination}) ${isPast ? '[Completed]' : '[Upcoming]'}</option>`;
  }).join("");

  container.innerHTML = `
    <div class="countdown-container">
      <div class="countdown-top">
        <div class="countdown-title-wrap">
          <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
            <span class="section-badge" style="background:rgba(6,182,212,0.22); color:var(--turquoise-400); margin:0;">
              <i class="fa-solid fa-stopwatch"></i> Live Departure Countdown
            </span>
            ${!isCompleted && !isOngoing ? `<span class="section-badge" style="background:rgba(255,255,255,0.15); color:#ffffff; margin:0;"><i class="fa-solid fa-hourglass-half"></i> ${remainingDays} ${remainingDays === 1 ? 'Day' : 'Days'} Until Departure</span>` : ''}
            ${isCompleted ? `<span class="section-badge status-completed" style="margin:0;"><i class="fa-solid fa-check"></i> Completed</span>` : ''}
            ${isOngoing ? `<span class="section-badge status-upcoming" style="margin:0;"><i class="fa-solid fa-plane"></i> Ongoing</span>` : ''}
          </div>
          <h3 class="countdown-trip-name">
            <span>${currentTrip.name}</span>
          </h3>
          <div class="countdown-trip-dest">
            <i class="fa-solid fa-location-dot"></i> ${currentTrip.destination}
            <span style="color:rgba(255,255,255,0.4); margin:0 4px;">•</span>
            <i class="fa-regular fa-calendar"></i> Departure: ${formatDate(currentTrip.startDate)}
            <span style="color:rgba(255,255,255,0.4); margin:0 4px;">•</span>
            <i class="fa-regular fa-calendar-check"></i> Return: ${formatDate(currentTrip.endDate)}
          </div>
        </div>

        ${userTrips.length > 1 ? `
          <div style="min-width: 220px;">
            <label for="countdown-trip-select" style="font-size:0.75rem; text-transform:uppercase; color:var(--turquoise-100); display:block; margin-bottom:0.35rem; font-weight:700;">
              <i class="fa-solid fa-repeat"></i> Switch Countdown Trip:
            </label>
            <select id="countdown-trip-select" class="countdown-trip-select" style="width: 100%;">
              ${tripOptionsHtml}
            </select>
          </div>
        ` : ''}
      </div>

      <!-- Live 4-Digit Timer Grid -->
      <div class="countdown-timer-grid">
        <div class="timer-box">
          <span class="timer-number" id="countdown-days">00</span>
          <span class="timer-label">Days</span>
        </div>
        <div class="timer-box">
          <span class="timer-number" id="countdown-hours">00</span>
          <span class="timer-label">Hours</span>
        </div>
        <div class="timer-box">
          <span class="timer-number" id="countdown-mins">00</span>
          <span class="timer-label">Minutes</span>
        </div>
        <div class="timer-box">
          <span class="timer-number" id="countdown-secs">00</span>
          <span class="timer-label">Seconds</span>
        </div>
      </div>

      <!-- Special Alert Message Banner -->
      <div class="${bannerClass}">
        ${bannerHtml}
      </div>

      <div class="countdown-footer-actions">
        <div style="font-size:0.875rem; color:rgba(255,255,255,0.85); display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
          <span><i class="fa-solid fa-users"></i> ${currentTrip.travellers} ${Number(currentTrip.travellers) === 1 ? 'Traveler' : 'Travelers'}</span>
          <span style="opacity:0.4;">|</span>
          <span><i class="fa-solid fa-wallet"></i> Budget: ${formatCurrency(currentTrip.budget)}</span>
          <span style="opacity:0.4;">|</span>
          <span><i class="fa-solid fa-clock"></i> Duration: ${getDaysCount(currentTrip.startDate, currentTrip.endDate)} Days</span>
        </div>
        <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
          <a href="#checklist" class="btn btn-outline btn-sm" style="color:#ffffff; border-color:rgba(255,255,255,0.35);">
            <i class="fa-solid fa-list-check"></i> Packing List
          </a>
          <button class="btn btn-outline btn-sm countdown-track-btn" style="color:#ffffff; border-color:rgba(255,255,255,0.35);">
            <i class="fa-solid fa-calculator"></i> Track Budget
          </button>
          <button class="btn btn-turquoise btn-sm countdown-view-btn">
            <i class="fa-solid fa-eye"></i> View Itinerary
          </button>
        </div>
      </div>
    </div>
  `;

  // Trip selection change event listener
  const tripSelectEl = document.getElementById("countdown-trip-select");
  if (tripSelectEl) {
    tripSelectEl.addEventListener("change", (e) => {
      selectedCountdownTripId = e.target.value;
      renderTripCountdown();
    });
  }

  // Action button event listeners
  const trackBtn = container.querySelector(".countdown-track-btn");
  if (trackBtn) {
    trackBtn.addEventListener("click", () => {
      syncBudgetWithTrip(currentTrip.id);
    });
  }

  const viewBtn = container.querySelector(".countdown-view-btn");
  if (viewBtn) {
    viewBtn.addEventListener("click", () => {
      openViewTripModal(currentTrip.id);
    });
  }

  // Start live tick interval
  startCountdownTicker(currentTrip);
}

function startCountdownTicker(trip) {
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }

  // Update digits immediately
  updateTickerDigits(trip);

  // Update every second (live-updating countdown)
  countdownInterval = setInterval(() => {
    updateTickerDigits(trip);
  }, 1000);
}

function updateTickerDigits(trip) {
  const daysEl = document.getElementById("countdown-days");
  const hoursEl = document.getElementById("countdown-hours");
  const minsEl = document.getElementById("countdown-mins");
  const secsEl = document.getElementById("countdown-secs");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) {
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }
    return;
  }

  const now = new Date().getTime();
  const departureTime = new Date(`${trip.startDate}T09:00:00`).getTime();
  const diff = departureTime - now;

  if (diff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minsEl.textContent = "00";
    secsEl.textContent = "00";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  daysEl.textContent = d < 10 ? `0${d}` : d;
  hoursEl.textContent = h < 10 ? `0${h}` : h;
  minsEl.textContent = m < 10 ? `0${m}` : m;
  secsEl.textContent = s < 10 ? `0${s}` : s;
}

function renderTrips() {
  renderTripCountdown();
  const container = document.getElementById("trips-grid");
  if (!container) return;

  const user = getLoggedInUser();

  // If user is logged out, show Login Required lock card
  if (!user) {
    container.innerHTML = `
      <div class="auth-lock-card">
        <div class="auth-lock-icon">
          <i class="fa-solid fa-lock"></i>
        </div>
        <h3 class="auth-lock-title">My Trips Requires Login</h3>
        <p class="auth-lock-desc">
          Sign in or create an account to view and manage your travel itineraries, edit scheduled trips, and monitor expenses.
        </p>
        <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
          <a href="login.html?redirect=my-trips" class="btn btn-turquoise">
            <i class="fa-solid fa-arrow-right-to-bracket"></i> Sign In to View Trips
          </a>
          <a href="register.html?redirect=my-trips" class="btn btn-outline">
            <i class="fa-solid fa-user-plus"></i> Create Account
          </a>
        </div>
      </div>
    `;
    updateTripSelectDropdowns();
    return;
  }

  // Filter trips strictly by user ID
  const allTrips = Storage.get("tm_trips", []);
  const userTrips = allTrips.filter(t => t.userId === user.id);

  if (userTrips.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-plane-departure"></i>
        <h3>No Trips Planned Yet</h3>
        <p>You haven't scheduled any trips yet. Create your first itinerary using the trip planner above!</p>
        <a href="#planner" class="btn btn-turquoise btn-sm">
          <i class="fa-solid fa-plus"></i> Plan Your First Trip
        </a>
      </div>
    `;
    updateTripSelectDropdowns();
    return;
  }

  const today = new Date().toISOString().split("T")[0];
  const upcomingTrips = userTrips.filter(t => t.endDate >= today);
  const completedTrips = userTrips.filter(t => t.endDate < today);

  // Tabs for separating upcoming and completed trips
  let displayedTrips = userTrips;
  if (activeTripTab === "upcoming") {
    displayedTrips = upcomingTrips;
  } else if (activeTripTab === "completed") {
    displayedTrips = completedTrips;
  }

  const tabButtonsHtml = `
    <div class="trip-tabs-container" style="grid-column: 1 / -1;">
      <button class="trip-tab-btn ${activeTripTab === 'all' ? 'active' : ''}" data-trip-tab="all">
        <i class="fa-solid fa-border-all"></i> All Trips <span class="trip-tab-count">${userTrips.length}</span>
      </button>
      <button class="trip-tab-btn ${activeTripTab === 'upcoming' ? 'active' : ''}" data-trip-tab="upcoming">
        <i class="fa-solid fa-plane-departure"></i> Upcoming Trips <span class="trip-tab-count">${upcomingTrips.length}</span>
      </button>
      <button class="trip-tab-btn ${activeTripTab === 'completed' ? 'active' : ''}" data-trip-tab="completed">
        <i class="fa-solid fa-clock-rotate-left"></i> Completed Trips <span class="trip-tab-count">${completedTrips.length}</span>
      </button>
    </div>
  `;

  if (displayedTrips.length === 0) {
    container.innerHTML = `
      ${tabButtonsHtml}
      <div class="empty-state" style="grid-column: 1 / -1;">
        <i class="fa-solid ${activeTripTab === 'upcoming' ? 'fa-calendar-xmark' : 'fa-hourglass-end'}"></i>
        <h3>No ${activeTripTab === 'upcoming' ? 'Upcoming' : 'Completed'} Trips</h3>
        <p>${activeTripTab === 'upcoming' ? 'You have no scheduled trips in the future. Plan one now!' : 'You have not completed any trips yet.'}</p>
        ${activeTripTab === 'upcoming' ? '<a href="#planner" class="btn btn-turquoise btn-sm"><i class="fa-solid fa-plus"></i> Plan Trip</a>' : ''}
      </div>
    `;
    attachTripTabListeners(container);
    updateTripSelectDropdowns();
    return;
  }

  const cardsHtml = displayedTrips.map(trip => {
    const isCompleted = trip.endDate < today;
    const duration = getDaysCount(trip.startDate, trip.endDate);

    return `
      <div class="trip-card">
        <div class="trip-header">
          <h3 class="trip-name">${trip.name}</h3>
          <span class="trip-status-badge ${isCompleted ? 'status-completed' : 'status-upcoming'}">
            ${isCompleted ? 'Completed' : 'Upcoming'}
          </span>
        </div>
        <div class="trip-destination-pill">
          <i class="fa-solid fa-location-dot"></i> ${trip.destination}
        </div>
        <div class="trip-details-list">
          <div class="trip-detail-item">
            <span class="trip-detail-label"><i class="fa-regular fa-calendar"></i> Departure</span>
            <span class="trip-detail-val">${formatDate(trip.startDate)}</span>
          </div>
          <div class="trip-detail-item">
            <span class="trip-detail-label"><i class="fa-regular fa-calendar-check"></i> Return</span>
            <span class="trip-detail-val">${formatDate(trip.endDate)}</span>
          </div>
          <div class="trip-detail-item">
            <span class="trip-detail-label"><i class="fa-solid fa-users"></i> Travellers</span>
            <span class="trip-detail-val">${trip.travellers} ${Number(trip.travellers) === 1 ? 'Person' : 'People'}</span>
          </div>
          <div class="trip-detail-item">
            <span class="trip-detail-label"><i class="fa-solid fa-wallet"></i> Total Budget</span>
            <span class="trip-detail-val" style="color:var(--turquoise-600);">${formatCurrency(trip.budget)}</span>
          </div>
        </div>
        ${trip.notes ? `<p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1.25rem; font-style:italic;">"${trip.notes}"</p>` : ''}
        <div class="trip-actions">
          <div style="display:flex; gap:0.5rem;">
            <button class="btn btn-outline btn-sm view-trip-btn" data-trip-id="${trip.id}">
              <i class="fa-solid fa-eye"></i> View
            </button>
            <button class="btn btn-outline btn-sm edit-trip-btn" data-trip-id="${trip.id}">
              <i class="fa-solid fa-pen-to-square"></i> Edit
            </button>
          </div>
          <div style="display:flex; gap:0.5rem;">
            <button class="btn btn-outline btn-sm track-budget-btn" data-trip-id="${trip.id}" title="Manage Expenses">
              <i class="fa-solid fa-calculator"></i> Budget
            </button>
            <button class="btn btn-danger btn-sm delete-trip-btn" data-trip-id="${trip.id}" title="Delete Trip">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = tabButtonsHtml + cardsHtml;

  attachTripTabListeners(container);

  // Attach trip card action event listeners
  container.querySelectorAll(".delete-trip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tripId = btn.getAttribute("data-trip-id");
      const trip = userTrips.find(t => t.id === tripId);
      showConfirmDialog(
        "Delete Trip Itinerary",
        `Are you sure you want to delete "${trip ? trip.name : 'this trip'}"? This action cannot be undone.`,
        () => deleteTrip(tripId)
      );
    });
  });

  container.querySelectorAll(".edit-trip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tripId = btn.getAttribute("data-trip-id");
      openEditTripModal(tripId);
    });
  });

  container.querySelectorAll(".view-trip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tripId = btn.getAttribute("data-trip-id");
      openViewTripModal(tripId);
    });
  });

  container.querySelectorAll(".track-budget-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tripId = btn.getAttribute("data-trip-id");
      syncBudgetWithTrip(tripId);
    });
  });

  updateTripSelectDropdowns();
}

function attachTripTabListeners(container) {
  container.querySelectorAll(".trip-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeTripTab = btn.getAttribute("data-trip-tab");
      renderTrips();
    });
  });
}

function handleTripFormSubmit(e) {
  e.preventDefault();

  const user = getLoggedInUser();
  if (!user) {
    showToast("Please sign in or register to create and save trips", "warning");
    setTimeout(() => {
      window.location.href = "login.html?redirect=planner";
    }, 1100);
    return;
  }

  const name = document.getElementById("trip-name-input").value.trim();
  const destination = document.getElementById("trip-destination-input").value.trim();
  const startDate = document.getElementById("trip-start-input").value;
  const endDate = document.getElementById("trip-end-input").value;
  const travellers = Number(document.getElementById("trip-travellers-input").value);
  const budget = Number(document.getElementById("trip-budget-input").value);
  const notes = document.getElementById("trip-notes-input").value.trim();

  // Validation
  if (!name || !destination || !startDate || !endDate || !travellers || !budget) {
    showToast("Please fill in all required fields", "warning");
    return;
  }

  if (endDate < startDate) {
    showToast("Trip return date cannot be earlier than departure date", "error");
    return;
  }

  let trips = Storage.get("tm_trips", []);

  const newTrip = {
    id: "trip_" + Date.now() + "_" + Math.floor(Math.random() * 10000),
    userId: user.id, // Strictly tied to current account
    name,
    destination,
    startDate,
    endDate,
    travellers,
    budget,
    notes
  };

  trips.unshift(newTrip);
  Storage.set("tm_trips", trips);

  // Reset form
  document.getElementById("trip-planner-form").reset();

  showToast(`Trip "${name}" created successfully!`, "success");
  renderTrips();
  renderBudgetCalculator();

  // Scroll to my trips
  const myTripsSection = document.getElementById("my-trips");
  if (myTripsSection) {
    myTripsSection.scrollIntoView({ behavior: "smooth" });
  }
}

function deleteTrip(tripId) {
  const user = getLoggedInUser();
  if (!user) return;

  let trips = Storage.get("tm_trips", []);
  trips = trips.filter(t => !(t.id === tripId && t.userId === user.id));
  Storage.set("tm_trips", trips);

  // Also remove associated expenses for this trip
  let expenses = Storage.get("tm_expenses", []);
  expenses = expenses.filter(e => !(e.tripId === tripId && e.userId === user.id));
  Storage.set("tm_expenses", expenses);

  showToast("Trip deleted successfully", "info");
  renderTrips();
  renderBudgetCalculator();
}

function openEditTripModal(tripId) {
  const user = getLoggedInUser();
  if (!user) return;

  const trips = Storage.get("tm_trips", []);
  const trip = trips.find(t => t.id === tripId && t.userId === user.id);
  if (!trip) return;

  editingTripId = tripId;

  document.getElementById("edit-trip-name").value = trip.name;
  document.getElementById("edit-trip-destination").value = trip.destination;
  document.getElementById("edit-trip-start").value = trip.startDate;
  document.getElementById("edit-trip-end").value = trip.endDate;
  document.getElementById("edit-trip-travellers").value = trip.travellers;
  document.getElementById("edit-trip-budget").value = trip.budget;
  document.getElementById("edit-trip-notes").value = trip.notes || "";

  openModal("edit-trip-modal");
}

function handleSaveEditTrip(e) {
  e.preventDefault();
  const user = getLoggedInUser();
  if (!user || !editingTripId) return;

  const trips = Storage.get("tm_trips", []);
  const tripIndex = trips.findIndex(t => t.id === editingTripId && t.userId === user.id);
  if (tripIndex === -1) return;

  const startDate = document.getElementById("edit-trip-start").value;
  const endDate = document.getElementById("edit-trip-end").value;

  if (endDate < startDate) {
    showToast("Return date cannot be earlier than departure date", "error");
    return;
  }

  trips[tripIndex] = {
    ...trips[tripIndex],
    name: document.getElementById("edit-trip-name").value.trim(),
    destination: document.getElementById("edit-trip-destination").value.trim(),
    startDate,
    endDate,
    travellers: Number(document.getElementById("edit-trip-travellers").value),
    budget: Number(document.getElementById("edit-trip-budget").value),
    notes: document.getElementById("edit-trip-notes").value.trim()
  };

  Storage.set("tm_trips", trips);
  closeModal("edit-trip-modal");
  editingTripId = null;

  showToast("Trip details updated!", "success");
  renderTrips();
  renderBudgetCalculator();
}

function openViewTripModal(tripId) {
  const user = getLoggedInUser();
  if (!user) return;

  const trips = Storage.get("tm_trips", []);
  const trip = trips.find(t => t.id === tripId && t.userId === user.id);
  if (!trip) return;

  const destObj = SAMPLE_DESTINATIONS.find(d => d.name.toLowerCase() === trip.destination.toLowerCase());
  const expenses = Storage.get("tm_expenses", []).filter(e => e.tripId === trip.id && e.userId === user.id);
  const totalSpent = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
  const remaining = trip.budget - totalSpent;
  const duration = getDaysCount(trip.startDate, trip.endDate);

  const modalBody = document.getElementById("view-trip-modal-body");
  const modalTitle = document.getElementById("view-trip-modal-title");

  if (modalTitle) modalTitle.textContent = trip.name;
  if (modalBody) {
    modalBody.innerHTML = `
      ${destObj ? `<img src="${destObj.image}" alt="${destObj.name}" style="width:100%; height:200px; object-fit:cover; border-radius:var(--radius-md); margin-bottom:1.5rem;">` : ''}
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
        <span class="trip-destination-pill" style="font-size:1.1rem; margin:0;">
          <i class="fa-solid fa-location-dot"></i> ${trip.destination}
        </span>
        <span class="section-badge">${duration} Days Itinerary</span>
      </div>

      <div class="trip-details-list" style="margin-bottom:1.5rem;">
        <div class="trip-detail-item">
          <span class="trip-detail-label">Departure Date</span>
          <span class="trip-detail-val">${formatDate(trip.startDate)}</span>
        </div>
        <div class="trip-detail-item">
          <span class="trip-detail-label">Return Date</span>
          <span class="trip-detail-val">${formatDate(trip.endDate)}</span>
        </div>
        <div class="trip-detail-item">
          <span class="trip-detail-label">Party Size</span>
          <span class="trip-detail-val">${trip.travellers} Person(s)</span>
        </div>
        <div class="trip-detail-item">
          <span class="trip-detail-label">Allocated Budget</span>
          <span class="trip-detail-val" style="color:var(--turquoise-600);">${formatCurrency(trip.budget)}</span>
        </div>
      </div>

      <div style="background:var(--bg-surface-secondary); padding:1rem; border-radius:var(--radius-md); margin-bottom:1.5rem;">
        <div style="display:flex; justify-content:space-between; font-size:0.9rem; margin-bottom:0.5rem; font-weight:600;">
          <span>Tracked Expenses: ${formatCurrency(totalSpent)}</span>
          <span style="color:${remaining >= 0 ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">
            Remaining: ${formatCurrency(remaining)}
          </span>
        </div>
      </div>

      ${trip.notes ? `
        <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:0.4rem; color:var(--text-main);">Trip Notes & Ideas:</h4>
        <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.6; background:var(--bg-surface-secondary); padding:0.85rem; border-radius:var(--radius-md); font-style:italic;">
          "${trip.notes}"
        </p>
      ` : ''}
    `;
  }

  openModal("view-trip-modal");
}

function syncBudgetWithTrip(tripId) {
  const tripSelect = document.getElementById("expense-trip-select");
  if (tripSelect) {
    tripSelect.value = tripId;
  }
  const budgetSection = document.getElementById("budget");
  if (budgetSection) {
    budgetSection.scrollIntoView({ behavior: "smooth" });
  }
  renderBudgetCalculator();
}

function updateTripSelectDropdowns() {
  const user = getLoggedInUser();
  const select = document.getElementById("expense-trip-select");
  if (!select) return;

  if (!user) {
    select.innerHTML = `<option value="">Sign in to link a trip</option>`;
    return;
  }

  const allTrips = Storage.get("tm_trips", []);
  const userTrips = allTrips.filter(t => t.userId === user.id);

  if (userTrips.length === 0) {
    select.innerHTML = `<option value="">No trips created yet</option>`;
    return;
  }

  const currentVal = select.value;
  select.innerHTML = userTrips.map(t => `<option value="${t.id}">${t.name} (${t.destination})</option>`).join("");

  if (currentVal && userTrips.some(t => t.id === currentVal)) {
    select.value = currentVal;
  }
}

// ==========================================
// 8. Budget & Expense Calculator (User Specific)
// ==========================================

let activeExpenseCategoryFilter = "all";

function renderBudgetCalculator() {
  const user = getLoggedInUser();
  const allTrips = Storage.get("tm_trips", []);
  const userTrips = user ? allTrips.filter(t => t.userId === user.id) : [];

  const tripSelect = document.getElementById("expense-trip-select");
  const selectedTripId = tripSelect ? tripSelect.value : (userTrips[0] ? userTrips[0].id : null);

  const selectedTrip = userTrips.find(t => t.id === selectedTripId);
  const totalBudget = selectedTrip ? Number(selectedTrip.budget) : (userTrips[0] ? Number(userTrips[0].budget) : 50000);

  const budgetInput = document.getElementById("budget-limit-input");
  if (budgetInput && typeof budgetInput.getAttribute === "function" && !budgetInput.getAttribute("data-manual")) {
    budgetInput.value = totalBudget;
  }
  const currentBudgetLimit = budgetInput && budgetInput.value ? Number(budgetInput.value) : totalBudget;

  const allExpenses = Storage.get("tm_expenses", []);
  const userExpenses = user ? allExpenses.filter(e => e.userId === user.id) : [];

  const tripExpenses = selectedTripId 
    ? userExpenses.filter(e => e.tripId === selectedTripId) 
    : userExpenses;

  const totalSpent = tripExpenses.reduce((sum, e) => sum + Number(e.amount), 0);
  const remaining = currentBudgetLimit - totalSpent;
  const spentPercent = currentBudgetLimit > 0 ? Math.min(Math.round((totalSpent / currentBudgetLimit) * 100), 100) : 0;

  // Stats
  const totalBudgetEl = document.getElementById("stat-total-budget");
  const totalSpentEl = document.getElementById("stat-total-spent");
  const remainingBalanceEl = document.getElementById("stat-remaining-balance");

  if (totalBudgetEl) totalBudgetEl.textContent = formatCurrency(currentBudgetLimit);
  if (totalSpentEl) totalSpentEl.textContent = formatCurrency(totalSpent);
  if (remainingBalanceEl) {
    remainingBalanceEl.textContent = formatCurrency(remaining);
    remainingBalanceEl.style.color = remaining < 0 ? "var(--accent-rose)" : (remaining < currentBudgetLimit * 0.15 ? "var(--accent-amber)" : "var(--text-main)");
  }

  // Progress Bar
  const progressFill = document.getElementById("budget-progress-fill");
  const progressPercentText = document.getElementById("budget-progress-percent");

  if (progressFill) {
    progressFill.style.width = `${spentPercent}%`;
    progressFill.className = "progress-bar-fill";
    if (totalSpent > currentBudgetLimit) {
      progressFill.classList.add("danger");
    } else if (totalSpent >= currentBudgetLimit * 0.8) {
      progressFill.classList.add("warning");
    }
  }

  if (progressPercentText) {
    progressPercentText.textContent = `${spentPercent}% spent`;
  }

  // Warning Banner
  const alertBanner = document.getElementById("budget-alert-banner");
  if (alertBanner) {
    if (totalSpent > currentBudgetLimit) {
      alertBanner.className = "budget-alert-banner danger";
      alertBanner.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span><strong>Budget Overrun Warning!</strong> You have exceeded your budget by ${formatCurrency(Math.abs(remaining))}. Consider trimming non-essential expenses.</span>
      `;
    } else if (totalSpent >= currentBudgetLimit * 0.8 && currentBudgetLimit > 0) {
      alertBanner.className = "budget-alert-banner warning";
      alertBanner.innerHTML = `
        <i class="fa-solid fa-bell"></i>
        <span><strong>Budget Alert:</strong> You have utilized ${spentPercent}% of your budget. Only ${formatCurrency(remaining)} remaining.</span>
      `;
    } else {
      alertBanner.className = "budget-alert-banner";
      alertBanner.style.display = "none";
    }
  }

  // Render Table
  const tableBody = document.getElementById("expenses-table-body");
  if (!tableBody) return;

  if (!user) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding: 2.5rem 1rem; color:var(--text-muted);">
          <i class="fa-solid fa-lock" style="font-size:1.8rem; margin-bottom:0.5rem; display:block; color:var(--turquoise-500);"></i>
          Please sign in to track and record itinerary expenses.
        </td>
      </tr>
    `;
    return;
  }

  const filteredExpenses = activeExpenseCategoryFilter === "all"
    ? tripExpenses
    : tripExpenses.filter(e => e.category.toLowerCase() === activeExpenseCategoryFilter.toLowerCase());

  if (filteredExpenses.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding: 2.5rem 1rem; color:var(--text-muted);">
          <i class="fa-solid fa-receipt" style="font-size:2rem; margin-bottom:0.5rem; display:block;"></i>
          No expenses recorded for this selection yet. Add your first expense on the left!
        </td>
      </tr>
    `;
    return;
  }

  const categoryIcons = {
    accommodation: "fa-hotel",
    food: "fa-utensils",
    transportation: "fa-car",
    shopping: "fa-bag-shopping",
    activities: "fa-ticket",
    other: "fa-receipt"
  };

  tableBody.innerHTML = filteredExpenses.map(exp => {
    const icon = categoryIcons[exp.category.toLowerCase()] || "fa-receipt";
    return `
      <tr>
        <td style="font-weight:600; color:var(--text-main);">${exp.title}</td>
        <td>
          <span class="category-tag">
            <i class="fa-solid ${icon}"></i> ${exp.category}
          </span>
        </td>
        <td style="color:var(--text-muted); font-size:0.85rem;">${formatDate(exp.date)}</td>
        <td style="font-weight:700; color:var(--text-main);">${formatCurrency(exp.amount)}</td>
        <td style="text-align:right;">
          <button class="btn btn-outline btn-sm delete-expense-btn" data-exp-id="${exp.id}" title="Delete Expense">
            <i class="fa-solid fa-trash-can" style="color:var(--accent-rose);"></i>
          </button>
        </td>
      </tr>
    `;
  }).join("");

  tableBody.querySelectorAll(".delete-expense-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const expId = btn.getAttribute("data-exp-id");
      deleteExpense(expId);
    });
  });
}

function handleAddExpense(e) {
  e.preventDefault();

  const user = getLoggedInUser();
  if (!user) {
    showToast("Please sign in to log expenses", "warning");
    setTimeout(() => {
      window.location.href = "login.html?redirect=budget";
    }, 1100);
    return;
  }

  const title = document.getElementById("expense-title-input").value.trim();
  const category = document.getElementById("expense-category-input").value;
  const amount = Number(document.getElementById("expense-amount-input").value);
  const date = document.getElementById("expense-date-input").value || new Date().toISOString().split("T")[0];
  const tripSelect = document.getElementById("expense-trip-select");
  const tripId = tripSelect ? tripSelect.value : null;

  if (!title || !amount || amount <= 0) {
    showToast("Please enter a valid expense title and amount", "warning");
    return;
  }

  const newExpense = {
    id: "exp_" + Date.now() + "_" + Math.floor(Math.random() * 10000),
    userId: user.id, // Strictly tied to user
    tripId: tripId || "general",
    title,
    category,
    amount,
    date
  };

  const expenses = Storage.get("tm_expenses", []);
  expenses.unshift(newExpense);
  Storage.set("tm_expenses", expenses);

  document.getElementById("add-expense-form").reset();
  document.getElementById("expense-date-input").value = new Date().toISOString().split("T")[0];

  showToast(`Added ${formatCurrency(amount)} for ${title}`, "success");
  renderBudgetCalculator();
}

function deleteExpense(expId) {
  const user = getLoggedInUser();
  if (!user) return;

  let expenses = Storage.get("tm_expenses", []);
  expenses = expenses.filter(e => !(e.id === expId && e.userId === user.id));
  Storage.set("tm_expenses", expenses);

  showToast("Expense removed", "info");
  renderBudgetCalculator();
}

// ==========================================
// 9. Packing Checklist
// ==========================================

function renderPackingChecklist() {
  const items = Storage.get("tm_packing", DEFAULT_PACKING_ITEMS);
  const categories = ["Documents", "Electronics", "Clothing", "Toiletries", "Essentials"];
  const gridContainer = document.getElementById("checklist-grid");
  if (!gridContainer) return;

  const totalCount = items.length;
  const checkedCount = items.filter(i => i.checked).length;
  const progress = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

  const progressFill = document.getElementById("packing-progress-fill");
  const progressText = document.getElementById("packing-progress-text");
  if (progressFill) progressFill.style.width = `${progress}%`;
  if (progressText) progressText.textContent = `${checkedCount} of ${totalCount} items packed (${progress}%)`;

  const categoryIcons = {
    Documents: "fa-passport",
    Electronics: "fa-laptop",
    Clothing: "fa-shirt",
    Toiletries: "fa-pump-soap",
    Essentials: "fa-kit-medical"
  };

  gridContainer.innerHTML = categories.map(cat => {
    const catItems = items.filter(i => i.category.toLowerCase() === cat.toLowerCase());
    return `
      <div class="checklist-category-card">
        <h4 class="checklist-cat-title">
          <i class="fa-solid ${categoryIcons[cat] || 'fa-box'}"></i>
          <span>${cat}</span>
          <span style="font-size:0.75rem; color:var(--text-muted); margin-left:auto;">${catItems.filter(i => i.checked).length}/${catItems.length}</span>
        </h4>
        <ul class="checklist-items">
          ${catItems.length === 0 ? '<li style="font-size:0.85rem; color:var(--text-muted); font-style:italic;">No items yet</li>' : ''}
          ${catItems.map(item => `
            <li class="checklist-item ${item.checked ? 'checked' : ''}">
              <label class="checklist-item-left">
                <input type="checkbox" class="checklist-checkbox" data-item-id="${item.id}" ${item.checked ? 'checked' : ''}>
                <span style="font-size:0.885rem;">${item.text}</span>
              </label>
              <button class="checklist-del-btn" data-item-id="${item.id}" title="Remove item">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </li>
          `).join("")}
        </ul>
      </div>
    `;
  }).join("");

  gridContainer.querySelectorAll(".checklist-checkbox").forEach(cb => {
    cb.addEventListener("change", () => {
      const itemId = Number(cb.getAttribute("data-item-id"));
      togglePackingItem(itemId);
    });
  });

  gridContainer.querySelectorAll(".checklist-del-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const itemId = Number(btn.getAttribute("data-item-id"));
      deletePackingItem(itemId);
    });
  });
}

function togglePackingItem(itemId) {
  let items = Storage.get("tm_packing", DEFAULT_PACKING_ITEMS);
  items = items.map(i => i.id === itemId ? { ...i, checked: !i.checked } : i);
  Storage.set("tm_packing", items);
  renderPackingChecklist();
}

function deletePackingItem(itemId) {
  let items = Storage.get("tm_packing", DEFAULT_PACKING_ITEMS);
  items = items.filter(i => i.id !== itemId);
  Storage.set("tm_packing", items);
  renderPackingChecklist();
}

function handleAddPackingItem(e) {
  e.preventDefault();
  const input = document.getElementById("new-pack-item-input");
  const catSelect = document.getElementById("new-pack-category-select");

  if (!input || !catSelect) return;
  const text = input.value.trim();
  const category = catSelect.value;

  if (!text) return;

  let items = Storage.get("tm_packing", DEFAULT_PACKING_ITEMS);
  const newItem = {
    id: Date.now(),
    text,
    category,
    checked: false
  };

  items.push(newItem);
  Storage.set("tm_packing", items);
  input.value = "";
  showToast(`Added "${text}" to checklist`, "success");
  renderPackingChecklist();
}

function resetPackingList() {
  Storage.set("tm_packing", DEFAULT_PACKING_ITEMS);
  showToast("Packing checklist reset to standard defaults", "info");
  renderPackingChecklist();
}

function clearPackedItems() {
  let items = Storage.get("tm_packing", DEFAULT_PACKING_ITEMS);
  items = items.filter(i => !i.checked);
  Storage.set("tm_packing", items);
  showToast("Cleared all completed items", "info");
  renderPackingChecklist();
}

// ==========================================
// 10. Personal Travel Journal Engine
// ==========================================

// ==========================================
// 10b. Personal Travel Gallery Engine
// ==========================================

let galleryViewMode = "grid";           // "grid" | "list"
let activeGalleryTripFilter = "all";
let lightboxPhotos = [];                // photos currently visible in lightbox
let lightboxIndex = 0;
let editingPhotoId = null;
let stagedPhotos = [];                  // { dataUrl, fileName } – pending upload
const GALLERY_MAX_WIDTH = 900;
const GALLERY_QUALITY  = 0.75;

/* ---- Render ---- */
function renderGallery() {
  const grid    = document.getElementById("gallery-grid");
  const toolbar = document.getElementById("gallery-toolbar");
  const statsBar = document.getElementById("gallery-stats-bar");
  if (!grid) return;

  const user = getLoggedInUser();

  if (!user) {
    if (toolbar)   toolbar.style.display  = "none";
    if (statsBar)  statsBar.style.display = "none";
    grid.innerHTML = `
      <div class="auth-lock-card" style="grid-column:1/-1;">
        <div class="auth-lock-icon"><i class="fa-solid fa-images"></i></div>
        <h3 class="auth-lock-title">Travel Gallery Requires Login</h3>
        <p class="auth-lock-desc">Upload and organise your holiday photographs by trip, add captions, and browse your memories in a beautiful lightbox. Sign in to open your gallery.</p>
        <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
          <a href="login.html?redirect=gallery" class="btn btn-turquoise">
            <i class="fa-solid fa-arrow-right-to-bracket"></i> Sign In to View Gallery
          </a>
          <a href="register.html?redirect=gallery" class="btn btn-outline">
            <i class="fa-solid fa-user-plus"></i> Create Account
          </a>
        </div>
      </div>
    `;
    return;
  }

  if (toolbar)  toolbar.style.display  = "flex";

  const allPhotos  = Storage.get("tm_gallery", []);
  const userPhotos = allPhotos.filter(p => p.userId === user.id);

  // Populate trip filter dropdown
  updateGalleryTripFilter(user);

  const displayed = activeGalleryTripFilter === "all"
    ? userPhotos
    : userPhotos.filter(p => p.tripId === activeGalleryTripFilter);

  // Stats bar
  if (statsBar) {
    if (userPhotos.length > 0) {
      statsBar.style.display = "flex";
      const uniqueTrips = new Set(userPhotos.map(p => p.tripId).filter(Boolean));
      document.getElementById("gallery-photo-count").innerHTML =
        `<i class="fa-solid fa-image"></i> <strong>${userPhotos.length}</strong> photo${userPhotos.length !== 1 ? "s" : ""}`;
      document.getElementById("gallery-trip-count").innerHTML =
        `<i class="fa-solid fa-suitcase"></i> <strong>${uniqueTrips.size}</strong> trip${uniqueTrips.size !== 1 ? "s" : ""}`;
    } else {
      statsBar.style.display = "none";
    }
  }

  // Empty states
  if (userPhotos.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1;">
        <i class="fa-solid fa-camera-retro"></i>
        <h3>Your Gallery is Empty</h3>
        <p>Upload your first travel photo and start building your visual travel diary!</p>
        <button class="btn btn-turquoise btn-sm" id="empty-gallery-upload-btn">
          <i class="fa-solid fa-cloud-arrow-up"></i> Upload Your First Photo
        </button>
      </div>
    `;
    const emptyBtn = document.getElementById("empty-gallery-upload-btn");
    if (emptyBtn) emptyBtn.addEventListener("click", openUploadPhotoModal);
    return;
  }

  if (displayed.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1;">
        <i class="fa-solid fa-filter"></i>
        <h3>No Photos for This Trip</h3>
        <p>No photos are linked to the selected trip filter.</p>
        <button class="btn btn-outline btn-sm" id="reset-gallery-filter-btn">
          <i class="fa-solid fa-rotate-left"></i> View All Photos
        </button>
      </div>
    `;
    document.getElementById("reset-gallery-filter-btn")?.addEventListener("click", () => {
      activeGalleryTripFilter = "all";
      const sel = document.getElementById("gallery-trip-filter");
      if (sel) sel.value = "all";
      renderGallery();
    });
    return;
  }

  // Store photos for lightbox navigation
  lightboxPhotos = displayed;

  // Apply view mode class
  grid.className = `gallery-grid${galleryViewMode === "list" ? " list-view" : ""}`;

  // Group by trip when "all" filter is active
  if (activeGalleryTripFilter === "all") {
    // Group photos by tripName
    const groups = {};
    displayed.forEach(p => {
      const key = p.tripName || "General Photos";
      if (!groups[key]) groups[key] = [];
      groups[key].push(p);
    });

    let html = "";
    Object.entries(groups).forEach(([tripName, photos]) => {
      html += `<div class="gallery-trip-group-label"><i class="fa-solid fa-suitcase-rolling"></i> ${tripName}</div>`;
      html += photos.map((p, i) => buildPhotoCard(p, displayed.indexOf(p))).join("");
    });
    grid.innerHTML = html;
  } else {
    grid.innerHTML = displayed.map((p, i) => buildPhotoCard(p, i)).join("");
  }

  // Wire events on cards
  grid.querySelectorAll(".gallery-photo-card[data-lightbox-idx]").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".gallery-action-btn")) return;
      const idx = parseInt(card.getAttribute("data-lightbox-idx"), 10);
      openLightbox(idx);
    });
  });

  grid.querySelectorAll(".gallery-edit-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openEditPhotoModal(btn.getAttribute("data-photo-id"));
    });
  });

  grid.querySelectorAll(".gallery-delete-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-photo-id");
      const photo = userPhotos.find(p => p.id === id);
      showConfirmDialog(
        "Delete Photo",
        `Delete "${photo ? (photo.caption || "this photo") : "this photo"}" from your gallery? This cannot be undone.`,
        () => deleteGalleryPhoto(id)
      );
    });
  });
}

function buildPhotoCard(photo, lightboxIdx) {
  const caption = photo.caption ? photo.caption : "";
  const trip    = photo.tripName || "General Photo";
  return `
    <div class="gallery-photo-card" data-photo-id="${photo.id}" data-lightbox-idx="${lightboxIdx}" title="${caption || trip}">
      <img class="gallery-photo-img" src="${photo.url}" alt="${caption || trip}" loading="lazy"
           onerror="this.style.display='none'; this.parentElement.style.background='var(--bg-surface-secondary)';">
      <div class="gallery-photo-caption">
        ${caption ? `<div class="gallery-photo-caption-text">${caption}</div>` : ""}
        <div class="gallery-photo-trip-badge"><i class="fa-solid fa-location-dot"></i> ${trip}</div>
      </div>
      <div class="gallery-photo-actions">
        <button class="gallery-action-btn edit-btn gallery-edit-btn" data-photo-id="${photo.id}" title="Edit">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="gallery-action-btn delete-btn gallery-delete-btn" data-photo-id="${photo.id}" title="Delete">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  `;
}

function updateGalleryTripFilter(user) {
  const sel = document.getElementById("gallery-trip-filter");
  if (!sel) return;
  const cur = sel.value;
  const userTrips = Storage.get("tm_trips", []).filter(t => t.userId === user.id);
  let opts = `<option value="all">All Photos</option>`;
  userTrips.forEach(t => {
    opts += `<option value="${t.id}">${t.name} (${t.destination})</option>`;
  });
  sel.innerHTML = opts;
  if (cur && (cur === "all" || userTrips.some(t => t.id === cur))) sel.value = cur;
}

/* ---- Upload Modal ---- */
function openUploadPhotoModal() {
  const user = getLoggedInUser();
  if (!user) {
    showToast("Please sign in to upload photos", "warning");
    setTimeout(() => { window.location.href = "login.html?redirect=gallery"; }, 1000);
    return;
  }

  // Populate trips
  const tripSel = document.getElementById("photo-trip-select");
  if (tripSel) {
    const trips = Storage.get("tm_trips", []).filter(t => t.userId === user.id);
    let opts = `<option value="">— Select a trip —</option>`;
    trips.forEach(t => { opts += `<option value="${t.id}" data-name="${t.name} – ${t.destination}">${t.name} (${t.destination})</option>`; });
    if (trips.length === 0) opts += `<option value="general">General / No Trip</option>`;
    tripSel.innerHTML = opts;
  }

  // Reset state
  stagedPhotos = [];
  renderStagedThumbs();
  const form = document.getElementById("upload-photo-form");
  if (form) form.reset();

  openModal("upload-photo-modal");
}

function renderStagedThumbs() {
  const wrap = document.getElementById("staged-photos-wrap");
  const grid = document.getElementById("staged-photos-grid");
  if (!wrap || !grid) return;

  if (stagedPhotos.length === 0) {
    wrap.style.display = "none";
    grid.innerHTML = "";
    return;
  }

  wrap.style.display = "block";
  grid.innerHTML = stagedPhotos.map((p, i) => `
    <div class="staged-thumb">
      <img src="${p.dataUrl}" alt="Preview ${i + 1}" loading="lazy">
      <button type="button" class="staged-remove-btn" data-staged-idx="${i}" title="Remove">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `).join("");

  grid.querySelectorAll(".staged-remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-staged-idx"), 10);
      stagedPhotos.splice(idx, 1);
      renderStagedThumbs();
    });
  });
}

async function handlePhotoFiles(files) {
  const remaining = 5 - stagedPhotos.length;
  const toProcess = Array.from(files).slice(0, remaining);
  for (const file of toProcess) {
    const compressed = await compressImageFile(file, GALLERY_MAX_WIDTH, GALLERY_QUALITY);
    if (compressed) stagedPhotos.push({ dataUrl: compressed, fileName: file.name });
  }
  renderStagedThumbs();
  if (files.length > remaining) {
    showToast(`Maximum 5 photos per upload. ${files.length - remaining} file(s) skipped.`, "warning");
  }
}

async function handleUploadPhotoSubmit(e) {
  e.preventDefault();
  const user = getLoggedInUser();
  if (!user) return;

  const tripSel  = document.getElementById("photo-trip-select");
  const tripId   = tripSel ? tripSel.value : "";
  const tripOpt  = tripSel ? tripSel.selectedOptions[0] : null;
  const tripName = tripId
    ? (tripOpt?.getAttribute("data-name") || tripOpt?.textContent || "Trip")
    : "General Photo";
  const caption  = (document.getElementById("photo-caption-input")?.value || "").trim();

  if (!tripId && stagedPhotos.length === 0) {
    showToast("Please select a trip and add at least one photo", "warning");
    return;
  }
  if (stagedPhotos.length === 0) {
    showToast("Please add at least one photo (file or URL)", "warning");
    return;
  }

  const gallery = Storage.get("tm_gallery", []);
  const now     = new Date().toISOString();

  stagedPhotos.forEach(p => {
    gallery.unshift({
      id:        "photo_" + Date.now() + "_" + Math.floor(Math.random() * 100000),
      userId:    user.id,
      tripId,
      tripName,
      caption,
      url:       p.dataUrl,
      fileName:  p.fileName || "",
      createdAt: now
    });
  });

  try {
    Storage.set("tm_gallery", gallery);
  } catch (err) {
    showToast("Storage full! Try deleting some photos or using smaller images.", "error");
    return;
  }

  closeModal("upload-photo-modal");
  showToast(`${stagedPhotos.length} photo${stagedPhotos.length !== 1 ? "s" : ""} saved to gallery!`, "success");
  stagedPhotos = [];
  renderGallery();
}

function addPhotoFromUrl() {
  const urlInput = document.getElementById("photo-url-input");
  const url = urlInput ? urlInput.value.trim() : "";
  if (!url) { showToast("Please enter a valid image URL", "warning"); return; }
  if (stagedPhotos.length >= 5) { showToast("Maximum 5 photos per upload", "warning"); return; }
  stagedPhotos.push({ dataUrl: url, fileName: url.split("/").pop() || "url-photo" });
  renderStagedThumbs();
  if (urlInput) urlInput.value = "";
  showToast("Image URL added to upload queue", "success");
}

/* ---- Edit Photo Modal ---- */
function openEditPhotoModal(photoId) {
  const user = getLoggedInUser();
  if (!user) return;

  const gallery = Storage.get("tm_gallery", []);
  const photo   = gallery.find(p => p.id === photoId && p.userId === user.id);
  if (!photo) return;

  editingPhotoId = photoId;

  const previewImg = document.getElementById("edit-photo-preview-img");
  if (previewImg) previewImg.src = photo.url;

  const capInput = document.getElementById("edit-photo-caption");
  if (capInput) capInput.value = photo.caption || "";

  // Populate trips dropdown
  const tripSel = document.getElementById("edit-photo-trip");
  if (tripSel) {
    const trips = Storage.get("tm_trips", []).filter(t => t.userId === user.id);
    let opts = `<option value="">General / No Trip</option>`;
    trips.forEach(t => {
      const sel = t.id === photo.tripId ? "selected" : "";
      opts += `<option value="${t.id}" data-name="${t.name} – ${t.destination}" ${sel}>${t.name} (${t.destination})</option>`;
    });
    tripSel.innerHTML = opts;
  }

  openModal("edit-photo-modal");
}

function saveEditPhoto() {
  const user = getLoggedInUser();
  if (!user || !editingPhotoId) return;

  const gallery = Storage.get("tm_gallery", []);
  const idx     = gallery.findIndex(p => p.id === editingPhotoId && p.userId === user.id);
  if (idx === -1) return;

  const tripSel  = document.getElementById("edit-photo-trip");
  const tripId   = tripSel ? tripSel.value : "";
  const tripOpt  = tripSel ? tripSel.selectedOptions[0] : null;
  const tripName = tripId
    ? (tripOpt?.getAttribute("data-name") || tripOpt?.textContent || "Trip")
    : "General Photo";
  const caption  = (document.getElementById("edit-photo-caption")?.value || "").trim();

  gallery[idx] = { ...gallery[idx], tripId, tripName, caption, updatedAt: new Date().toISOString() };
  Storage.set("tm_gallery", gallery);

  closeModal("edit-photo-modal");
  editingPhotoId = null;
  showToast("Photo updated!", "success");
  renderGallery();
}

/* ---- Delete ---- */
function deleteGalleryPhoto(photoId) {
  const user = getLoggedInUser();
  if (!user) return;

  let gallery = Storage.get("tm_gallery", []);
  gallery = gallery.filter(p => !(p.id === photoId && p.userId === user.id));
  Storage.set("tm_gallery", gallery);
  showToast("Photo deleted from gallery", "info");
  renderGallery();
}

/* ---- Lightbox ---- */
function openLightbox(idx) {
  if (!lightboxPhotos.length) return;
  lightboxIndex = Math.max(0, Math.min(idx, lightboxPhotos.length - 1));
  updateLightboxSlide();
  const overlay = document.getElementById("lightbox-overlay");
  if (overlay) {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeLightbox() {
  const overlay = document.getElementById("lightbox-overlay");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

function updateLightboxSlide() {
  const photo = lightboxPhotos[lightboxIndex];
  if (!photo) return;
  const img     = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  const trip    = document.getElementById("lightbox-trip");
  const counter = document.getElementById("lightbox-counter");
  if (img)     img.src = photo.url;
  if (caption) caption.textContent = photo.caption || "";
  if (trip)    trip.textContent = photo.tripName ? `📍 ${photo.tripName}` : "";
  if (counter) counter.textContent = `${lightboxIndex + 1} / ${lightboxPhotos.length}`;
}

function lightboxNext() {
  if (lightboxIndex < lightboxPhotos.length - 1) {
    lightboxIndex++;
    updateLightboxSlide();
  }
}

function lightboxPrev() {
  if (lightboxIndex > 0) {
    lightboxIndex--;
    updateLightboxSlide();
  }
}

// ==========================================
// 10. Personal Travel Journal Engine
// ==========================================
let activeJournalTripFilter = "all";
let editingJournalId = null;
let newJournalPhotoBase64 = "";
let editJournalPhotoBase64 = "";

function renderJournalMemories() {
  const container = document.getElementById("journal-grid");
  const toolbar = document.getElementById("journal-toolbar");
  if (!container) return;

  const user = getLoggedInUser();

  // If user is logged out, show Login Required lock card
  if (!user) {
    if (toolbar) toolbar.style.display = "none";
    container.innerHTML = `
      <div class="auth-lock-card">
        <div class="auth-lock-icon">
          <i class="fa-solid fa-book-bookmark"></i>
        </div>
        <h3 class="auth-lock-title">Travel Journal Requires Login</h3>
        <p class="auth-lock-desc">
          Capture your private travel memories, write reflections for each trip, and upload keepsake vacation photographs. Sign in to open your personal travel journal.
        </p>
        <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
          <a href="login.html?redirect=journal" class="btn btn-turquoise">
            <i class="fa-solid fa-arrow-right-to-bracket"></i> Sign In to View Journal
          </a>
          <a href="register.html?redirect=journal" class="btn btn-outline">
            <i class="fa-solid fa-user-plus"></i> Create Account
          </a>
        </div>
      </div>
    `;
    return;
  }

  if (toolbar) toolbar.style.display = "flex";

  // Filter journal entries strictly by logged-in user
  const allJournals = Storage.get("tm_journals", []);
  const userJournals = allJournals.filter(j => j.userId === user.id);

  // Update Trip Filter dropdown in toolbar
  updateJournalTripFilterDropdown(user);

  // Apply trip filter
  const displayedJournals = activeJournalTripFilter === "all"
    ? userJournals
    : userJournals.filter(j => j.tripId === activeJournalTripFilter);

  if (userJournals.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-book-open-reader"></i>
        <h3>Your Travel Journal is Empty</h3>
        <p>You haven't recorded any travel memories yet. Capture your reflections, stories, and vacation photos!</p>
        <button class="btn btn-turquoise btn-sm" id="empty-add-journal-btn">
          <i class="fa-solid fa-pen-nib"></i> Write Your First Entry
        </button>
      </div>
    `;
    const emptyBtn = document.getElementById("empty-add-journal-btn");
    if (emptyBtn) {
      emptyBtn.addEventListener("click", openNewJournalModal);
    }
    return;
  }

  if (displayedJournals.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-filter"></i>
        <h3>No Memories for This Filter</h3>
        <p>No journal entries found matching the selected trip filter.</p>
        <button class="btn btn-outline btn-sm" id="reset-journal-filter-btn">
          <i class="fa-solid fa-rotate-left"></i> View All Memories
        </button>
      </div>
    `;
    const resetBtn = document.getElementById("reset-journal-filter-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        activeJournalTripFilter = "all";
        const filterSelect = document.getElementById("journal-trip-filter");
        if (filterSelect) filterSelect.value = "all";
        renderJournalMemories();
      });
    }
    return;
  }

  // Render cards
  container.innerHTML = displayedJournals.map(entry => {
    return `
      <div class="journal-card">
        <div class="journal-img-wrap">
          ${entry.photoUrl ? `
            <img src="${entry.photoUrl}" alt="${entry.title}" loading="lazy">
          ` : `
            <div class="journal-img-placeholder">
              <i class="fa-solid fa-camera-retro" style="font-size:2.5rem; opacity:0.6;"></i>
              <span style="font-size:0.8rem; font-weight:600;">No photo attached</span>
            </div>
          `}
          <span class="journal-date-badge">
            <i class="fa-regular fa-calendar"></i> ${formatDate(entry.date)}
          </span>
          <span class="journal-trip-badge" title="${entry.tripName}">
            <i class="fa-solid fa-location-dot"></i> ${entry.tripName}
          </span>
        </div>
        <div class="journal-card-body">
          <h3 class="journal-card-title">${entry.title}</h3>
          <p class="journal-card-desc">${entry.description}</p>
          <div class="journal-card-footer">
            <button class="btn btn-outline btn-sm view-journal-btn" data-entry-id="${entry.id}">
              <i class="fa-solid fa-book-open"></i> Read Story
            </button>
            <div style="display:flex; gap:0.45rem;">
              <button class="btn btn-outline btn-sm edit-journal-btn" data-entry-id="${entry.id}" title="Edit Entry">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn btn-danger btn-sm delete-journal-btn" data-entry-id="${entry.id}" title="Delete Memory">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Card Event Listeners
  container.querySelectorAll(".view-journal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const entryId = btn.getAttribute("data-entry-id");
      openViewJournalModal(entryId);
    });
  });

  container.querySelectorAll(".edit-journal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const entryId = btn.getAttribute("data-entry-id");
      openEditJournalModal(entryId);
    });
  });

  container.querySelectorAll(".delete-journal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const entryId = btn.getAttribute("data-entry-id");
      const entry = userJournals.find(j => j.id === entryId);
      showConfirmDialog(
        "Delete Journal Entry",
        `Are you sure you want to delete "${entry ? entry.title : 'this memory'}"? This action cannot be undone.`,
        () => deleteJournalEntry(entryId)
      );
    });
  });
}

function updateJournalTripFilterDropdown(user) {
  const select = document.getElementById("journal-trip-filter");
  if (!select) return;

  const currentVal = select.value;
  const userTrips = Storage.get("tm_trips", []).filter(t => t.userId === user.id);

  let optionsHtml = `<option value="all">All Trips & Memories</option>`;
  userTrips.forEach(t => {
    optionsHtml += `<option value="${t.id}">${t.name} (${t.destination})</option>`;
  });

  select.innerHTML = optionsHtml;
  if (currentVal && (currentVal === "all" || userTrips.some(t => t.id === currentVal))) {
    select.value = currentVal;
  }
}

function openNewJournalModal() {
  const user = getLoggedInUser();
  if (!user) {
    showToast("Please sign in to write a journal entry", "warning");
    setTimeout(() => {
      window.location.href = "login.html?redirect=journal";
    }, 1000);
    return;
  }

  // Populate trips dropdown
  const tripSelect = document.getElementById("new-journal-trip");
  if (tripSelect) {
    const userTrips = Storage.get("tm_trips", []).filter(t => t.userId === user.id);
    let optionsHtml = `<option value="">General Travel Story (No Trip Linked)</option>`;
    userTrips.forEach(t => {
      optionsHtml += `<option value="${t.id}">${t.name} (${t.destination})</option>`;
    });
    tripSelect.innerHTML = optionsHtml;
  }

  // Set default date to today
  const dateInput = document.getElementById("new-journal-date");
  if (dateInput) {
    dateInput.value = new Date().toISOString().split("T")[0];
  }

  // Reset photo state
  newJournalPhotoBase64 = "";
  const previewBox = document.getElementById("new-journal-preview-box");
  const previewImg = document.getElementById("new-journal-preview-img");
  const urlInput = document.getElementById("new-journal-url");
  const fileInput = document.getElementById("new-journal-file");

  if (previewBox) previewBox.style.display = "none";
  if (previewImg) previewImg.src = "";
  if (urlInput) urlInput.value = "";
  if (fileInput) fileInput.value = "";

  document.getElementById("new-journal-form").reset();
  if (dateInput) dateInput.value = new Date().toISOString().split("T")[0];

  openModal("new-journal-modal");
}

function handleNewJournalSubmit(e) {
  e.preventDefault();
  const user = getLoggedInUser();
  if (!user) return;

  const title = document.getElementById("new-journal-title").value.trim();
  const date = document.getElementById("new-journal-date").value;
  const desc = document.getElementById("new-journal-desc").value.trim();
  const tripSelect = document.getElementById("new-journal-trip");
  const tripId = tripSelect ? tripSelect.value : "";
  const tripName = tripId && tripSelect.selectedOptions[0] ? tripSelect.selectedOptions[0].textContent : "General Memory";

  const urlInput = document.getElementById("new-journal-url");
  const photoUrl = newJournalPhotoBase64 || (urlInput ? urlInput.value.trim() : "");

  if (!title || !date || !desc) {
    showToast("Please fill in the title, date, and reflections", "warning");
    return;
  }

  const newEntry = {
    id: "journal_" + Date.now() + "_" + Math.floor(Math.random() * 10000),
    userId: user.id, // User specific
    tripId,
    tripName,
    title,
    date,
    photoUrl,
    description: desc,
    createdAt: new Date().toISOString()
  };

  const journals = Storage.get("tm_journals", []);
  journals.unshift(newEntry);
  Storage.set("tm_journals", journals);

  closeModal("new-journal-modal");
  showToast(`Memory "${title}" saved to your journal!`, "success");
  renderJournalMemories();
}

function openEditJournalModal(entryId) {
  const user = getLoggedInUser();
  if (!user) return;

  const journals = Storage.get("tm_journals", []);
  const entry = journals.find(j => j.id === entryId && j.userId === user.id);
  if (!entry) return;

  editingJournalId = entryId;

  // Populate trips dropdown
  const tripSelect = document.getElementById("edit-journal-trip");
  if (tripSelect) {
    const userTrips = Storage.get("tm_trips", []).filter(t => t.userId === user.id);
    let optionsHtml = `<option value="">General Travel Story (No Trip Linked)</option>`;
    userTrips.forEach(t => {
      const isSel = t.id === entry.tripId ? "selected" : "";
      optionsHtml += `<option value="${t.id}" ${isSel}>${t.name} (${t.destination})</option>`;
    });
    tripSelect.innerHTML = optionsHtml;
    if (entry.tripId) tripSelect.value = entry.tripId;
  }

  document.getElementById("edit-journal-title").value = entry.title;
  document.getElementById("edit-journal-date").value = entry.date;
  document.getElementById("edit-journal-desc").value = entry.description;

  // Photo
  editJournalPhotoBase64 = entry.photoUrl || "";
  const previewBox = document.getElementById("edit-journal-preview-box");
  const previewImg = document.getElementById("edit-journal-preview-img");
  const urlInput = document.getElementById("edit-journal-url");
  const fileInput = document.getElementById("edit-journal-file");

  if (fileInput) fileInput.value = "";
  if (urlInput) urlInput.value = entry.photoUrl && !entry.photoUrl.startsWith("data:") ? entry.photoUrl : "";

  if (entry.photoUrl) {
    if (previewBox) previewBox.style.display = "block";
    if (previewImg) previewImg.src = entry.photoUrl;
  } else {
    if (previewBox) previewBox.style.display = "none";
    if (previewImg) previewImg.src = "";
  }

  openModal("edit-journal-modal");
}

function handleEditJournalSubmit(e) {
  e.preventDefault();
  const user = getLoggedInUser();
  if (!user || !editingJournalId) return;

  const journals = Storage.get("tm_journals", []);
  const idx = journals.findIndex(j => j.id === editingJournalId && j.userId === user.id);
  if (idx === -1) return;

  const title = document.getElementById("edit-journal-title").value.trim();
  const date = document.getElementById("edit-journal-date").value;
  const desc = document.getElementById("edit-journal-desc").value.trim();
  const tripSelect = document.getElementById("edit-journal-trip");
  const tripId = tripSelect ? tripSelect.value : "";
  const tripName = tripId && tripSelect.selectedOptions[0] ? tripSelect.selectedOptions[0].textContent : "General Memory";

  const urlInput = document.getElementById("edit-journal-url");
  const photoUrl = editJournalPhotoBase64 || (urlInput ? urlInput.value.trim() : "");

  journals[idx] = {
    ...journals[idx],
    title,
    date,
    tripId,
    tripName,
    description: desc,
    photoUrl,
    updatedAt: new Date().toISOString()
  };

  Storage.set("tm_journals", journals);
  closeModal("edit-journal-modal");
  editingJournalId = null;

  showToast("Journal memory updated!", "success");
  renderJournalMemories();
}

function deleteJournalEntry(entryId) {
  const user = getLoggedInUser();
  if (!user) return;

  let journals = Storage.get("tm_journals", []);
  journals = journals.filter(j => !(j.id === entryId && j.userId === user.id));
  Storage.set("tm_journals", journals);

  showToast("Journal entry removed", "info");
  renderJournalMemories();
}

function openViewJournalModal(entryId) {
  const user = getLoggedInUser();
  if (!user) return;

  const journals = Storage.get("tm_journals", []);
  const entry = journals.find(j => j.id === entryId && j.userId === user.id);
  if (!entry) return;

  const titleEl = document.getElementById("view-journal-title");
  const bodyEl = document.getElementById("view-journal-body");

  if (titleEl) titleEl.textContent = entry.title;
  if (bodyEl) {
    bodyEl.innerHTML = `
      ${entry.photoUrl ? `
        <img src="${entry.photoUrl}" alt="${entry.title}" style="width:100%; max-height:360px; object-fit:cover; border-radius:var(--radius-md); margin-bottom:1.5rem;">
      ` : ''}
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem; flex-wrap:wrap; gap:0.5rem;">
        <span class="section-badge" style="background:rgba(6,182,212,0.15); color:var(--turquoise-600); margin:0;">
          <i class="fa-solid fa-location-dot"></i> ${entry.tripName}
        </span>
        <span style="font-size:0.875rem; color:var(--text-muted); font-weight:600;">
          <i class="fa-regular fa-calendar-days"></i> ${formatDate(entry.date)}
        </span>
      </div>
      <h3 style="font-size:1.5rem; font-weight:800; color:var(--text-main); margin-bottom:1rem; line-height:1.3;">
        ${entry.title}
      </h3>
      <div style="font-size:0.95rem; color:var(--text-secondary); line-height:1.75; white-space:pre-line; background:var(--bg-surface-secondary); padding:1.25rem; border-radius:var(--radius-md);">
        ${entry.description}
      </div>
    `;
  }

  openModal("view-journal-modal");
}

function compressImageFile(file, maxWidth = 800, quality = 0.7) {
  return new Promise((resolve) => {
    if (!file || !file.type.startsWith("image/")) {
      resolve("");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL("image/jpeg", quality));
        } catch (err) {
          console.warn("Canvas compression failed, falling back to raw DataURL", err);
          resolve(e.target.result);
        }
      };
      img.onerror = () => resolve("");
      img.src = e.target.result;
    };
    reader.onerror = () => resolve("");
    reader.readAsDataURL(file);
  });
}

// ==========================================
// 11. Global Event Handlers & Bootstrap
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize data & theme
  initAppData();
  updateAuthUI();

  // 2. Display current date
  const currentDateEl = document.getElementById("current-date-display");
  if (currentDateEl) {
    const now = new Date();
    currentDateEl.textContent = now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  }

  // Set min date for date inputs
  const todayStr = new Date().toISOString().split("T")[0];
  const tripStartInput = document.getElementById("trip-start-input");
  const tripEndInput = document.getElementById("trip-end-input");
  const expenseDateInput = document.getElementById("expense-date-input");

  if (tripStartInput) tripStartInput.min = todayStr;
  if (tripEndInput) tripEndInput.min = todayStr;
  if (expenseDateInput) expenseDateInput.value = todayStr;

  // 3. Theme Toggle
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }

  // 4. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const icon = mobileMenuBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    navLinks.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        const icon = mobileMenuBtn.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  // 5. Intercept Navigation Clicks for Protected Sections (Wishlist, My Trips)
  const wishlistNavLink = document.querySelector('a[href="#wishlist"]');
  if (wishlistNavLink) {
    wishlistNavLink.addEventListener("click", (e) => {
      if (!getLoggedInUser()) {
        e.preventDefault();
        showToast("Please sign in to access your Wishlist", "info");
        setTimeout(() => {
          window.location.href = "login.html?redirect=wishlist";
        }, 600);
      }
    });
  }

  const myTripsNavLink = document.querySelector('a[href="#my-trips"]');
  if (myTripsNavLink) {
    myTripsNavLink.addEventListener("click", (e) => {
      if (!getLoggedInUser()) {
        e.preventDefault();
        showToast("Please sign in to view My Trips", "info");
        setTimeout(() => {
          window.location.href = "login.html?redirect=my-trips";
        }, 600);
      }
    });
  }

  const journalNavLink = document.querySelector('a[href="#journal"]');
  if (journalNavLink) {
    journalNavLink.addEventListener("click", (e) => {
      if (!getLoggedInUser()) {
        e.preventDefault();
        showToast("Please sign in to access your Travel Journal", "info");
        setTimeout(() => {
          window.location.href = "login.html?redirect=journal";
        }, 600);
      }
    });
  }

  // Check URL hash on page load
  const hash = window.location.hash;
  if (!getLoggedInUser()) {
    if (hash === "#wishlist") {
      window.location.href = "login.html?redirect=wishlist";
      return;
    } else if (hash === "#my-trips") {
      window.location.href = "login.html?redirect=my-trips";
      return;
    } else if (hash === "#journal") {
      window.location.href = "login.html?redirect=journal";
      return;
    }
  }

  // 6. Populate Destination Dropdown in Trip Planner Form
  const tripDestSelect = document.getElementById("trip-destination-input");
  if (tripDestSelect) {
    SAMPLE_DESTINATIONS.forEach(dest => {
      const opt = document.createElement("option");
      opt.value = dest.name;
      opt.textContent = `${dest.name} (${dest.country})`;
      tripDestSelect.appendChild(opt);
    });
  }

  // 7. Explorer Category Filter Chips
  const categoryChips = document.querySelectorAll(".chip-btn");
  categoryChips.forEach(chip => {
    chip.addEventListener("click", () => {
      categoryChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.getAttribute("data-category");
      renderDestinations();
    });
  });

  // 8. Explorer Search Input
  const destSearchInput = document.getElementById("dest-search-input");
  if (destSearchInput) {
    destSearchInput.addEventListener("input", (e) => {
      activeSearchQuery = e.target.value;
      renderDestinations();
    });
  }

  // 9. Explorer Price Slider
  const destPriceSlider = document.getElementById("dest-price-slider");
  const priceValDisplay = document.getElementById("slider-price-val");
  if (destPriceSlider) {
    destPriceSlider.addEventListener("input", (e) => {
      activeMaxPrice = Number(e.target.value);
      if (priceValDisplay) {
        priceValDisplay.textContent = formatCurrency(activeMaxPrice);
      }
      renderDestinations();
    });
  }

  // 10. Explorer Sort Select
  const destSortSelect = document.getElementById("dest-sort-select");
  if (destSortSelect) {
    destSortSelect.addEventListener("change", (e) => {
      activeSortOption = e.target.value;
      renderDestinations();
    });
  }

  // 11. Hero Quick Search Form
  const heroSearchBtn = document.getElementById("hero-search-btn");
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener("click", () => {
      const query = document.getElementById("hero-search-dest").value.trim();
      const cat = document.getElementById("hero-search-category").value;
      const budget = document.getElementById("hero-search-budget").value;

      if (query && destSearchInput) {
        destSearchInput.value = query;
        activeSearchQuery = query;
      }

      if (cat) {
        activeCategory = cat;
        categoryChips.forEach(c => {
          c.classList.toggle("active", c.getAttribute("data-category") === cat);
        });
      }

      if (budget) {
        activeMaxPrice = Number(budget);
        if (destPriceSlider) destPriceSlider.value = budget;
        if (priceValDisplay) priceValDisplay.textContent = formatCurrency(budget);
      }

      renderDestinations();
      const exploreSection = document.getElementById("explore");
      if (exploreSection) exploreSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // 12. Trip Planner Form Submit
  const tripForm = document.getElementById("trip-planner-form");
  if (tripForm) {
    tripForm.addEventListener("submit", handleTripFormSubmit);
  }

  // 13. Edit Trip Form Submit
  const editTripForm = document.getElementById("edit-trip-form");
  if (editTripForm) {
    editTripForm.addEventListener("submit", handleSaveEditTrip);
  }

  // 14. Expense Form Submit
  const addExpenseForm = document.getElementById("add-expense-form");
  if (addExpenseForm) {
    addExpenseForm.addEventListener("submit", handleAddExpense);
  }

  // 15. Expense Trip Select Change
  const expenseTripSelect = document.getElementById("expense-trip-select");
  if (expenseTripSelect) {
    expenseTripSelect.addEventListener("change", () => {
      renderBudgetCalculator();
    });
  }

  // 16. Expense Category Filter
  const expenseCatFilter = document.getElementById("expense-category-filter");
  if (expenseCatFilter) {
    expenseCatFilter.addEventListener("change", (e) => {
      activeExpenseCategoryFilter = e.target.value;
      renderBudgetCalculator();
    });
  }

  // 17. Manual Budget Limit Input change
  const budgetLimitInput = document.getElementById("budget-limit-input");
  if (budgetLimitInput) {
    budgetLimitInput.addEventListener("input", () => {
      budgetLimitInput.setAttribute("data-manual", "true");
      renderBudgetCalculator();
    });
  }

  // 18. Packing Checklist Form & Controls
  const addPackForm = document.getElementById("add-packing-form");
  if (addPackForm) {
    addPackForm.addEventListener("submit", handleAddPackingItem);
  }

  const resetPackBtn = document.getElementById("reset-packing-btn");
  if (resetPackBtn) {
    resetPackBtn.addEventListener("click", resetPackingList);
  }

  const clearPackedBtn = document.getElementById("clear-packed-btn");
  if (clearPackedBtn) {
    clearPackedBtn.addEventListener("click", clearPackedItems);
  }

  // 19. Newsletter form
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("newsletter-email").value.trim();
      if (email) {
        showToast("Subscribed! You'll receive seasonal travel alerts.", "success");
        newsletterForm.reset();
      }
    });
  }

  // 20. Profile Logout Button
  const profileLogoutBtn = document.getElementById("profile-logout-btn");
  if (profileLogoutBtn) {
    profileLogoutBtn.addEventListener("click", handleLogout);
  }

  // 21. Confirm Dialog Action
  const confirmActionBtn = document.getElementById("confirm-modal-action-btn");
  if (confirmActionBtn) {
    confirmActionBtn.addEventListener("click", () => {
      if (typeof pendingConfirmCallback === "function") {
        pendingConfirmCallback();
      }
      closeModal("confirm-modal");
      pendingConfirmCallback = null;
    });
  }

  // 22. Travel Journal Form & Modal Controls
  const openNewJournalBtn = document.getElementById("open-new-journal-btn");
  if (openNewJournalBtn) {
    openNewJournalBtn.addEventListener("click", openNewJournalModal);
  }

  const newJournalForm = document.getElementById("new-journal-form");
  if (newJournalForm) {
    newJournalForm.addEventListener("submit", handleNewJournalSubmit);
  }

  const editJournalForm = document.getElementById("edit-journal-form");
  if (editJournalForm) {
    editJournalForm.addEventListener("submit", handleEditJournalSubmit);
  }

  // Photo uploads & URL previews for New Journal
  const newFileInput = document.getElementById("new-journal-file");
  if (newFileInput) {
    newFileInput.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (file) {
        const compressed = await compressImageFile(file);
        newJournalPhotoBase64 = compressed;
        const box = document.getElementById("new-journal-preview-box");
        const img = document.getElementById("new-journal-preview-img");
        if (box && img) {
          box.style.display = "block";
          img.src = compressed;
        }
      }
    });
  }

  const newUrlInput = document.getElementById("new-journal-url");
  if (newUrlInput) {
    newUrlInput.addEventListener("input", (e) => {
      const val = e.target.value.trim();
      const box = document.getElementById("new-journal-preview-box");
      const img = document.getElementById("new-journal-preview-img");
      if (val) {
        newJournalPhotoBase64 = "";
        if (box && img) {
          box.style.display = "block";
          img.src = val;
        }
      } else if (!newJournalPhotoBase64) {
        if (box) box.style.display = "none";
      }
    });
  }

  const newRemoveImgBtn = document.getElementById("new-journal-remove-img-btn");
  if (newRemoveImgBtn) {
    newRemoveImgBtn.addEventListener("click", () => {
      newJournalPhotoBase64 = "";
      if (newFileInput) newFileInput.value = "";
      if (newUrlInput) newUrlInput.value = "";
      const box = document.getElementById("new-journal-preview-box");
      if (box) box.style.display = "none";
    });
  }

  // Photo uploads & URL previews for Edit Journal
  const editFileInput = document.getElementById("edit-journal-file");
  if (editFileInput) {
    editFileInput.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (file) {
        const compressed = await compressImageFile(file);
        editJournalPhotoBase64 = compressed;
        const box = document.getElementById("edit-journal-preview-box");
        const img = document.getElementById("edit-journal-preview-img");
        if (box && img) {
          box.style.display = "block";
          img.src = compressed;
        }
      }
    });
  }

  const editUrlInput = document.getElementById("edit-journal-url");
  if (editUrlInput) {
    editUrlInput.addEventListener("input", (e) => {
      const val = e.target.value.trim();
      const box = document.getElementById("edit-journal-preview-box");
      const img = document.getElementById("edit-journal-preview-img");
      if (val) {
        editJournalPhotoBase64 = "";
        if (box && img) {
          box.style.display = "block";
          img.src = val;
        }
      } else if (!editJournalPhotoBase64) {
        if (box) box.style.display = "none";
      }
    });
  }

  const editRemoveImgBtn = document.getElementById("edit-journal-remove-img-btn");
  if (editRemoveImgBtn) {
    editRemoveImgBtn.addEventListener("click", () => {
      editJournalPhotoBase64 = "";
      if (editFileInput) editFileInput.value = "";
      if (editUrlInput) editUrlInput.value = "";
      const box = document.getElementById("edit-journal-preview-box");
      if (box) box.style.display = "none";
    });
  }

  // Journal Trip Filter
  const journalTripFilter = document.getElementById("journal-trip-filter");
  if (journalTripFilter) {
    journalTripFilter.addEventListener("change", (e) => {
      activeJournalTripFilter = e.target.value;
      renderJournalMemories();
    });
  }

  // ── Gallery Event Listeners ─────────────────────────────────────────────

  // Open upload modal
  document.getElementById("open-upload-photo-btn")?.addEventListener("click", openUploadPhotoModal);

  // Drop zone — click to open file picker
  const dropZone   = document.getElementById("photo-drop-zone");
  const fileInput  = document.getElementById("photo-file-input");

  if (dropZone && fileInput) {
    dropZone.addEventListener("click", () => fileInput.click());

    dropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZone.classList.add("drag-over");
    });
    dropZone.addEventListener("dragleave", () => dropZone.classList.remove("drag-over"));
    dropZone.addEventListener("drop", async (e) => {
      e.preventDefault();
      dropZone.classList.remove("drag-over");
      await handlePhotoFiles(e.dataTransfer.files);
    });

    fileInput.addEventListener("change", async () => {
      await handlePhotoFiles(fileInput.files);
      fileInput.value = "";
    });
  }

  // Add URL to staged photos
  document.getElementById("add-photo-url-btn")?.addEventListener("click", addPhotoFromUrl);

  // Upload form submit
  const uploadForm = document.getElementById("upload-photo-form");
  if (uploadForm) uploadForm.addEventListener("submit", handleUploadPhotoSubmit);

  // Gallery trip filter
  document.getElementById("gallery-trip-filter")?.addEventListener("change", (e) => {
    activeGalleryTripFilter = e.target.value;
    renderGallery();
  });

  // Grid / List view toggle
  document.getElementById("gallery-grid-btn")?.addEventListener("click", () => {
    galleryViewMode = "grid";
    document.getElementById("gallery-grid-btn")?.classList.add("active");
    document.getElementById("gallery-masonry-btn")?.classList.remove("active");
    renderGallery();
  });
  document.getElementById("gallery-masonry-btn")?.addEventListener("click", () => {
    galleryViewMode = "list";
    document.getElementById("gallery-masonry-btn")?.classList.add("active");
    document.getElementById("gallery-grid-btn")?.classList.remove("active");
    renderGallery();
  });

  // Save edit photo
  document.getElementById("save-edit-photo-btn")?.addEventListener("click", saveEditPhoto);

  // Lightbox controls
  document.getElementById("lightbox-close-btn")?.addEventListener("click", closeLightbox);
  document.getElementById("lightbox-next-btn")?.addEventListener("click", lightboxNext);
  document.getElementById("lightbox-prev-btn")?.addEventListener("click", lightboxPrev);

  // Lightbox keyboard navigation
  document.addEventListener("keydown", (e) => {
    const lb = document.getElementById("lightbox-overlay");
    if (!lb?.classList.contains("active")) return;
    if (e.key === "ArrowRight") lightboxNext();
    if (e.key === "ArrowLeft")  lightboxPrev();
    if (e.key === "Escape")     closeLightbox();
  });

  // Close lightbox when clicking outside the image
  document.getElementById("lightbox-overlay")?.addEventListener("click", (e) => {
    if (e.target === document.getElementById("lightbox-overlay")) closeLightbox();
  });

  // Nav guard for gallery section
  document.querySelectorAll("a[href='#gallery']").forEach(link => {
    link.addEventListener("click", (e) => {
      if (!getLoggedInUser()) {
        e.preventDefault();
        window.location.href = "login.html?redirect=gallery";
      }
    });
  });

  // 23. Modal Close Buttons
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close-modal");
      closeModal(modalId);
    });
  });

  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });

  // 24. Initial Renders
  renderDestinations();
  renderWishlist();
  updateWishlistCount();
  renderTrips();
  renderBudgetCalculator();
  renderPackingChecklist();
  renderJournalMemories();
  renderGallery();
});
