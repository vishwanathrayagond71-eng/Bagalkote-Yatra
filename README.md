# 🏛️ Bagalkote Yatra (ಬಾಗಲಕೋಟೆ ಯಾತ್ರೆ / बागलकोट यात्रा)

A modern, cultural, and production-ready tourism web application for **Bagalkote District (Karnataka, India)** showcasing every major tourist destination, temple complex, clifftop fort, lake, and wildlife sanctuary.

---

## 🌟 Key Features

### 1. 🌐 Full Multilingual Support (3 Languages)
- **English**, **Kannada (ಕನ್ನಡ)**, and **Hindi (हिन्दी)**
- Header Language Switcher with native scripts (`English` / `ಕನ್ನಡ` / `हिन्दी`)
- Instant, zero-reload translation across navigation, hero, destination cards, details, itineraries, culture guides, footers, and the admin panel
- Unicode and typography configured for Kannada (`Noto Sans Kannada`) and Devanagari (`Noto Sans Devanagari`)

### 2. 📍 Complete List of Tourist Places
Detailed pages, cards, practical information, and image galleries for:
1. **Badami Cave Temples** (6th-century rock-cut shrines, 18-armed dancing Nataraja, Cave 3 Mahavishnu)
2. **Badami Fort & Upper Shivalaya** (Clifftop fort, ancient watchtowers, Tipu Sultan cannon)
3. **Agastya Lake (Badami)** (Sacred water reservoir, dramatic cliffs, Bhutanatha Temple reflection)
4. **Aihole Monuments Complex** ("Cradle of Indian Temple Architecture", 125+ temples, apsidal Durga Temple, Lad Khan, 634 CE Ravikirti Inscription)
5. **Pattadakal Group of Monuments** (UNESCO World Heritage Site, Rekha-Nagara & Dravidian fusion, Virupaksha Temple)
6. **Mahakuta / Mahakuteshwara Temple Complex** (Verdant forest sanctuary, Vishnu Pushkarini freshwater springs, submerged Panchamukha Shiva Linga)
7. **Kudalasangama** (Sacred Krishna-Malaprabha confluence, Jagadguru Basaveshwara Aikya Mantapa, Sangameshwara Temple)
8. **Almatti Dam & Reservoir (LBS Sagar)** (123 TMC reservoir, illuminated Mughal & Rock Gardens, dancing musical fountain, boating)
9. **Banashankari Devi Temple** (Tilakaaranya forest, Haridra Tirtha stepwell, annual Banashankari Jathre car festival)
10. **Yadahalli Chinkara Wildlife Sanctuary** (Karnataka's premier Indian Gazelle sanctuary, leopards, striped hyenas, 160+ bird species)
11. **Guledagudda Fort & Guledgudd Falls** (Historical hilltop fort, seasonal monsoon waterfalls, centuries-old Khana weaving)
12. **Badami Archaeological Museum (ASI)** (Rare Lajja Gauri sculpture, Makara toranas, prehistoric stone tools)
13. **Jamakhandi Historical Sites** (Royal Patwardhan Palace, sacred Ramteerth spring, traditional Garadi wrestling culture)
14. **Ilkal Handloom Heritage Town** (GI-tagged Ilkal sarees, Kondi warp interlocking, Tope Teni pallu, Kasuti embroidery)
15. **Navanagar Garden & District Center** (Modern planned township, District Science Centre, recreational promenades)

### 3. 🎨 Chalukyan Architecture Design & Animation Style
- Color palette inspired by Chalukyan architecture:
  - **Sandstone Ochre & Crimson**: `#C85A22`, `#D97736`, `#A64317`
  - **Temple Gold**: `#D4AF37`, `#F6E08B`
  - **Chalukya Emerald**: `#1B4332`, `#2D6A4F`
  - **Night Charcoal & Sand**: `#0d0a08`, `#1c1917`
- Glassmorphic panels with backdrop blurs and gold-bordered highlights
- Dark/Light mode toggle
- Full-screen interactive photo gallery with Lightbox modal (keyboard navigation, zoom, and captions)
- Interactive Google Maps embed with one-click directions

### 4. 🔐 Secure Admin Authentication & Dashboard
- Admin login with **Email / Gmail + Password**
- Configured administrator credentials:
  - **Email:** `xyz7@gmail.com`
  - **Password:** `xyzabc`
- Protected routes with session persistence in `localStorage`
- **Dashboard Overview:** Metric cards (Total Places, Live Published, Drafts, Photos), category coverage breakdown, quick shortcuts
- **Manage Places Table:** Search filter, category dropdown, status toggle (Live / Draft), Edit, Delete with confirmation modal, and Live Preview
- **Add New Place (5-Step Form):**
  - **Step 1: Basic Info** (English/Kannada/Hindi names, auto slug generator, category, featured image upload & preview, publish status)
  - **Step 2: Multilingual Content** (Short description, full detailed description, history & significance for EN, HI, KN)
  - **Step 3: Practical Details** (Timings, Indian fee, Foreigner fee, how to reach by air/train/road, GPS coordinates, Google Maps embed link)
  - **Step 4: Media** (Add multiple gallery images with live preview and deletion, YouTube video link)
  - **Step 5: SEO & Review** (Meta title, meta description, keywords, instant preview card, confetti on publish)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or newer)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd "bagalkote-tourism"

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **State Management:** Zustand (Language, Theme, Places CRUD, Auth)
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout, metadata & viewport
│   │   ├── page.tsx                # Cinematic Home Page
│   │   ├── globals.css             # Chalukyan theme styling & glassmorphism
│   │   ├── destinations/
│   │   │   ├── page.tsx            # Full Catalog (Search, Filters, Grid/Map view)
│   │   │   └── [slug]/page.tsx     # Dynamic Destination Detail Page
│   │   ├── about/page.tsx          # History, Rivers, Handlooms & Gastronomy
│   │   ├── plan-trip/page.tsx      # Curated 1-Day, 2-Day, 3-Day Itineraries
│   │   ├── gallery/page.tsx        # High-Res Photo Gallery with Lightbox
│   │   ├── events/page.tsx         # Festivals & Cultural Fairs
│   │   ├── contact/page.tsx        # Official Tourism Contact & Helpline
│   │   └── admin/
│   │       ├── login/page.tsx      # Gmail + Password Login
│   │       └── dashboard/page.tsx  # Protected Admin Management & Add Place
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Nav with Language Switcher & Dark/Light mode
│   │   │   ├── Footer.tsx          # Cultural Footer with Chalukyan Quote & Links
│   │   │   └── LightboxModal.tsx   # Fullscreen photo modal
│   │   ├── home/
│   │   │   ├── HeroSection.tsx     # Parallax hero with search & stats
│   │   │   ├── HeritageOverview.tsx# 4 Pillars of Bagalkote
│   │   │   ├── FeaturedDestinations.tsx
│   │   │   ├── CultureCraftsSection.tsx
│   │   │   └── TripPlannerTeaser.tsx
│   │   ├── destinations/
│   │   │   ├── DestinationCard.tsx # Reusable card with ratings & bookmarking
│   │   │   └── DestinationDetailView.tsx # Complete place breakdown & map
│   │   └── admin/
│   │       ├── DashboardOverview.tsx # Metrics & charts
│   │       ├── ManagePlacesTable.tsx # Search, filter, edit, delete
│   │       └── AddPlaceForm.tsx      # 5-step comprehensive Add/Edit form
│   ├── data/
│   │   ├── destinations.ts         # All 15+ tourist locations dataset
│   │   └── extras.ts               # Festivals & itineraries dataset
│   ├── store/
│   │   ├── languageStore.ts        # i18n Zustand store (EN/HI/KN)
│   │   ├── placesStore.ts          # CRUD places store with LocalStorage sync
│   │   ├── authStore.ts            # Gmail/Email auth store
│   │   └── themeStore.ts           # Dark/Light mode store
│   ├── translations/
│   │   └── index.ts                # English, Hindi & Kannada dictionaries
│   └── types/
│       └── index.ts                # TypeScript interfaces
```

---

## 🚢 Ready to Deploy on Vercel
1. Push the code to GitHub / GitLab.
2. Import the project into [Vercel](https://vercel.com).
3. The build command `npm run build` will pre-render all static pages and output a zero-error production deployment.
