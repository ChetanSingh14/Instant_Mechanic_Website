# 🚗 Instant Mechanic

> **Drive with Confidence.** India's premier on-demand doorstep car repair, scheduled servicing, and 24/7 roadside assistance platform.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌟 Overview

**Instant Mechanic** is a full-featured web application designed to eliminate the stress of unexpected vehicle breakdowns and routine auto maintenance. Built with modern web technologies, it brings certified mechanics to a car owner's doorstep or roadside location in under 15 minutes across Delhi NCR.

From urgent jump-starts and flat tyres to comprehensive engine rebuilds and periodic annual services, the platform provides clear pricing, transparent estimates, and zero hidden charges.

---

## ✨ Key Features

### 🚨 1. Emergency 24/7 Roadside SOS
- **15-Minute Guaranteed Dispatch**: One-tap emergency roadside assistance trigger with GPS coordinate detection.
- **Interactive Live Tracker Animation**: Real-time progress bar featuring an advancing mechanic icon and service van.
- **Emergency Modal**: Quick selection for battery dead, flat tyre, engine overheating, vehicle lockout, or towing.

### 🔧 2. Comprehensive Car Repair Catalog
- **12 Categorized Repair Modules**:
  - Battery Assistance
  - Tyres & Wheels
  - Engine Diagnostics & Overhaul
  - Overheating & Cooling Systems
  - Brakes & ABS
  - Clutch & Transmission
  - Steering & Suspension
  - AC & Cabin Comfort
  - Electrical & Warning Lights
  - Headlights, Visibility & Glass
  - Door Latches, Keys & Body Lockouts
  - Roadside Breakdown & Towing
- **Transparent Starting Pricing**: Standardized rates starting at ₹399 with detailed problem breakdowns and single-click cart management.
- **Related Issues Accordion**: Expandable diagnostics checklist for every service item.

### 📅 3. Annual Service & Maintenance Planner
- **Interactive Car Selector**: Dropdown selection supporting major Indian vehicle brands (Maruti Suzuki, Hyundai, Tata, Mahindra, Honda, Kia, Toyota, Volkswagen) and fuel types (Petrol, Diesel, CNG, Electric).
- **Service Configuration**: Tiered maintenance options for essential items (Engine Oil, Oil Filter, Air Filter, Cabin Filter) with affordable vs. premium selections.
- **Add-on Packs & Slot Booking**: Doorstep slot selector (Date & Time) with upfront billing breakdown.

### 💳 4. Car Care Membership
- **Annual Club Subscriptions**: Discounted service plans offering 10% instant off on all repairs, free breakdown tows, pre-monsoon checks, and pre-purchase OBD scans.
- **Doorstep Convenience**: Complete car servicing done directly at home, office, or basement parking.

### 🤖 5. CarBuddy AI Diagnostics
- Intelligent symptom diagnostic assistant helping drivers identify mechanical issues, unusual noises, or dashboard warnings before dispatching a technician.

### 📱 6. Pixel-Perfect Responsive Design
- Optimized for all screen sizes (desktop, tablet, and mobile).
- Tailored mobile UX matching custom Figma specifications:
  - Custom horizontal carousels
  - 2-column mobile footer with dedicated WhatsApp connectivity
  - Collapsible pill accordions for FAQs
  - Touch-friendly tap targets and sticky navigation bars

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://reactjs.org/) + TypeScript |
| **Bundler & Dev Server** | [Vite 8](https://vitejs.dev/) with Fast HMR |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **Styling & Design System**| Custom Vanilla CSS Design System with CSS Tokens, Glassmorphism & Animations |
| **Code Quality & Linter** | [Oxlint](https://oxc.rs/) |

---

## 📂 Project Structure

```text
instant-mechanic/
├── public/                 # Static assets & favicon
├── src/
│   ├── assets/             # 3D Badges, vehicle renders, category covers & brand icons
│   │   ├── annual/         # Annual service assets & 3D badges
│   │   ├── carrepairinnerpage/ # Problem category photo assets
│   │   ├── design_assets/  # Exploded car view & vector diagrams
│   │   ├── fotter/         # Footer vehicle assets & WhatsApp icon
│   │   ├── membership/     # Membership club cards & graphics
│   │   └── van/            # Roadside tracking assets
│   ├── components/
│   │   ├── common/         # SOSButton, ServiceCard, Toast alerts
│   │   ├── home/           # RoadsideHelp, CarBuddy, DelhiNCRLocation, HowItWorks
│   │   ├── layout/         # Navbar, BottomNav, Sidebar Drawer, Footer
│   │   └── modals/         # BookingModal, SOSModal
│   ├── context/
│   │   └── AppContext.tsx  # Global state (tab routing, cart, booking & SOS dispatch)
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── RepairServicesPage.tsx
│   │   ├── AnnualServicePage.tsx
│   │   ├── MembershipPage.tsx
│   │   └── BookingsPage.tsx
│   ├── index.css           # Core design system & responsive media queries
│   ├── App.tsx             # Root application shell
│   └── main.tsx            # Application entrypoint
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)

### 1. Clone the Repository

```bash
git clone https://github.com/ChetanSingh14/Instant_Mechanic_Website.git
cd instant-mechanic
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with hot module replacement (HMR).

### 4. Build for Production

```bash
npm run build
```

This generates an optimized production bundle inside the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

---

## 🎨 Design System & Highlights

- **Color Palette**:
  - Primary Accent: `#EA580C` / `#C2410C` (Safety Orange)
  - Neutral Backgrounds: `#FAF6F0` (Warm Cream), `#191613` (Dark Charcoal Footer)
  - Surface Cards: `#FFFFFF` with soft drop shadows and subtle border strokes
- **Micro-interactions**:
  - Live animated tracking vehicle moving along a dashed progress path
  - Hover depth transitions on service cards and action buttons
  - Smooth modal slide-ins and backdrop blur effects

---

## 📞 Support & Inquiries

- **Helpline**: +91 9266961110
- **Email**: support@instantmechanic.online
- **Headquarters**: Sector 75, Gurugram, Haryana, India

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
