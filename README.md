# 📈 Zerodha Clone - Full Stack Stock Trading & Investment Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-brightgreen?style=for-the-badge&logo=vercel)](https://zerodha-clone-frontend-8wvz-phi.vercel.app/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render)](https://render.com/)

A modern, full-stack web application replicating the core user experience, landing pages, and interactive trading dashboard of **Zerodha (Kite)** — India's premier stock brokerage platform.

🔗 **Live Application URL**: [https://zerodha-clone-frontend-8wvz-phi.vercel.app/](https://zerodha-clone-frontend-8wvz-phi.vercel.app/)

---

## 📋 Table of Contents

- [🌟 Live Demo](#-live-demo)
- [🎯 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
  - [1. Landing Page (Frontend)](#1-landing-page-frontend)
  - [2. Trading Dashboard (Kite Replica)](#2-trading-dashboard-kite-replica)
  - [3. Backend API & Database](#3-backend-api--database)
- [🛠️ Technology Stack](#️-technology-stack)
- [📁 Project Architecture & Directory Structure](#-project-architecture--directory-structure)
- [🔌 API Reference](#-api-reference)
- [🚀 Getting Started & Local Installation](#-getting-started--local-installation)
  - [Prerequisites](#prerequisites)
  - [1. Clone Repository](#1-clone-repository)
  - [2. Environment Configuration](#2-environment-configuration)
  - [3. Backend Setup](#3-backend-setup)
  - [4. Frontend Setup](#4-frontend-setup)
  - [5. Dashboard Setup](#5-dashboard-setup)
- [📱 Responsive Design](#-responsive-design)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## 🌟 Live Demo

Experience the live application hosted on production servers:

- 🚀 **Frontend & Landing Page**: [https://zerodha-clone-frontend-8wvz-phi.vercel.app/](https://zerodha-clone-frontend-8wvz-phi.vercel.app/)
- ⚡ **Backend REST API**: Hosted on Render (`zerodha-clone-backend-uc3s.onrender.com`)

---

## 🎯 Project Overview

This project is a comprehensive, full-stack clone of Zerodha designed to simulate a production-ready stock brokerage ecosystem. It consists of three decoupled micro-services:

1. **Frontend (`/frontend`)**: Replicates Zerodha's main product pages, pricing breakdowns, about page, customer support portal, and signup flows.
2. **Dashboard (`/dashboard`)**: Replicates the trading terminal (**Kite**), providing interactive watchlists, stock search, buy/sell popups, portfolio holdings, active positions, order ledgers, funds view, and visual charts.
3. **Backend (`/backend`)**: An Express.js REST API backed by MongoDB for user authentication, managing portfolio holdings, active market positions, and real-time order processing.

---

## ✨ Key Features

### 1. Landing Page (Frontend)
- **Home & Hero Section**: Clean overview of Zerodha's trading ecosystem with direct call-to-action buttons.
- **Product Ecosystem Showcase**: Detailed overview of core platforms (Kite, Console, Coin, Varsity, Sentinel).
- **Transparent Pricing**: Detailed breaking down of equity delivery (free), intraday charges (₹20/trade), and mutual fund investments.
- **Support & Ticket Desk**: Search bar for support topics and fast ticket creation layout.
- **About Us**: Company overview, leadership profiles, and mission philosophy.
- **User Signup Interface**: Seamless portal redirection for new user onboarding.

### 2. Trading Dashboard (Kite Replica)
- **Interactive Stock Watchlist**:
  - Search and browse popular equity tickers (INFY, RELIANCE, TCS, HDFCBANK, etc.).
  - Hover action shortcuts: Instant **Buy**, **Sell**, and **Chart** view triggers.
- **Buy & Sell Order Windows**:
  - Modal windows to specify quantity, target price, order types (MIS vs CNC), and execute real-time orders.
  - Automatically posts orders to the database and updates the ledger.
- **Holdings Management**:
  - Comprehensive table of stock assets owned.
  - Automatic computation of total investment value, current market value, net returns %, and day P&L status.
- **Positions Tracker**:
  - Real-time display of active day positions with profit/loss color indicators.
- **Order Ledger**:
  - Historical log of executed Buy/Sell transactions with timestamps and prices.
- **Interactive Visual Analytics**:
  - **Doughnut Chart**: Visual representation of portfolio diversification.
  - **Vertical Bar Graph**: Graphical summary of holding values across assets using Chart.js.
- **Mobile-Responsive Experience**:
  - Mobile bottom navigation and responsive drawer toggle for watchlists on small viewports.

### 3. Backend API & Database
- **User Authentication**: Secure signup/login/logout endpoints powered by `passport` and `passport-local-mongoose` with session persistence.
- **RESTful Endpoints**: Dedicated routes for fetching and modifying `holdings`, `positions`, and `orders`.
- **CORS Configured**: Full cross-origin setup enabling smooth communication between localhost, Vercel deployments, and Render backend services.
- **MongoDB Schema Models**: Structured data models using Mongoose for robust data validation.

---

## 🛠️ Technology Stack

### **Frontend & Dashboard Services**
| Technology | Description |
| :--- | :--- |
| **React 19** | Modern UI components and state management |
| **React Router v7** | Client-side routing and page transitions |
| **Material UI (`@mui/material`)** | Component UI library & Material icons |
| **Chart.js (`react-chartjs-2`)** | Interactive data visualization & financial charts |
| **Axios** | HTTP client for backend REST API calls |
| **CSS3** | Responsive grid layouts, flexbox, and custom styling |

### **Backend & Database Services**
| Technology | Description |
| :--- | :--- |
| **Node.js** | JavaScript runtime environment |
| **Express.js (v5)** | Web application framework for REST APIs |
| **MongoDB & Mongoose** | NoSQL database and Object Data Modeling (ODM) |
| **Passport.js** | Authentication middleware for session-based login/signup |
| **Express Session** | Server-side session storage |
| **Dotenv & CORS** | Environment configuration & Cross-Origin Resource Sharing |

---

## 📁 Project Architecture & Directory Structure

```
Zerodha_clone/
├── backend/                        # Express REST API & Database Models
│   ├── models/                     # Mongoose Schema Definitions
│   │   ├── HoldingsModel.js        # Schema for user holdings
│   │   ├── OrdersModel.js          # Schema for stock orders
│   │   ├── PositionModel.js        # Schema for active positions
│   │   └── UserModel.js            # Passport user schema
│   ├── schemas/                    # Raw schema definitions
│   ├── index.js                    # Server entrypoint & API endpoints
│   ├── package.json                # Backend dependencies & scripts
│   └── .env                        # Environment configuration
│
├── dashboard/                      # Kite Trading Terminal (React App)
│   ├── public/                     # Static assets & HTML template
│   ├── src/
│   │   ├── components/             # Dashboard UI components
│   │   │   ├── BuyActionWindow.js  # Order placement modal (BUY)
│   │   │   ├── SellActionWindow.js # Order placement modal (SELL)
│   │   │   ├── Dashboard.js        # Main container grid
│   │   │   ├── Holdings.js         # Holdings portfolio component
│   │   │   ├── Positions.js        # Positions tracking table
│   │   │   ├── Orders.js           # Order history log
│   │   │   ├── WatchList.js        # Stock search & watchlist
│   │   │   ├── DoughnoutChart.js   # Portfolio visual chart
│   │   │   ├── Funds.js            # Cash & margins view
│   │   │   ├── Login.js / Signup.js# Authentication views
│   │   │   └── TopBar.js           # Header navigation
│   │   ├── index.js                # React root entrypoint
│   │   └── index.css               # Global terminal styles & responsiveness
│   ├── package.json                # Dashboard dependencies
│   └── vercel.json                 # Vercel deployment routing config
│
├── frontend/                       # Zerodha Marketing Website (React App)
│   ├── public/                     # Public icons, branding & assets
│   ├── src/
│   │   ├── landing_page/           # Modular page components
│   │   │   ├── home/               # Landing page modules
│   │   │   ├── products/           # Ecosystem products showcase
│   │   │   ├── pricing/            # Pricing tables & breakdown
│   │   │   ├── about/              # Company history & team
│   │   │   ├── support/            # Support center & portal
│   │   │   ├── Navbar.js           # Top main navigation bar
│   │   │   └── footer.js           # Global footer component
│   │   ├── index.js                # React entrypoint
│   │   └── index.css               # Custom CSS styles
│   ├── package.json                # Frontend dependencies
│   └── vercel.json                 # Vercel deployment routing config
│
└── README.md                       # Project Documentation
```

---

## 🔌 API Reference

### **Authentication Routes**
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/signup` | Registers a new user account |
| `POST` | `/login` | Authenticates user credentials |
| `GET` | `/logout` | Logs out the current user session |
| `GET` | `/user` | Returns authenticated user details |

### **Trading Data Routes**
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/allHoldings` | Fetches all stock holdings in the portfolio |
| `GET` | `/allPositions` | Fetches active day positions |
| `GET` | `/allOrders` | Fetches executed order log history |
| `POST` | `/newOrder` | Submits a new Buy/Sell order to the server |

---

## 🚀 Getting Started & Local Installation

Follow these steps to set up and run the full project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.0 or higher)
- **npm** (v9.0 or higher)
- **MongoDB** (Local instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud URI)
- **Git**

### 1. Clone Repository

```bash
git clone https://github.com/Prathmesh-k2/Zerodha_clone.git
cd Zerodha_clone
```

### 2. Environment Configuration

Create a `.env` file inside the `backend` folder:

```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
SECRET=your_jwt_or_session_secret
```

---

### 3. Backend Setup

1. Open terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend development server:
   ```bash
   npm start
   ```
   *The server will run on `http://localhost:3002`.*

---

### 4. Frontend Setup

1. Open a new terminal tab and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Launch the development server:
   ```bash
   npm start
   ```
   *The landing page will run on `http://localhost:3000`.*

---

### 5. Dashboard Setup

1. Open another terminal tab and navigate to the dashboard folder:
   ```bash
   cd dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Launch the trading dashboard:
   ```bash
   npm start
   ```
   *The Kite trading dashboard will run on `http://localhost:3001`.*

---

## 📱 Responsive Design

The application is engineered with a mobile-responsive UI layout:
- 🖥️ **Desktop**: Full multi-column view with persistent watchlist and side-by-side trading charts.
- 📱 **Mobile & Tablet**: Tabbed views, responsive touch menus, collapsable watchlists, and centered action popups optimized for mobile viewports.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the [Issues page](https://github.com/Prathmesh-k2/Zerodha_clone/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Prathmesh**
- 🌐 **Live App**: [https://zerodha-clone-frontend-8wvz-phi.vercel.app/](https://zerodha-clone-frontend-8wvz-phi.vercel.app/)
- 💻 **GitHub**: [@Prathmesh-k2](https://github.com/Prathmesh-k2)

---

<p align="center">Made with ❤️ for financial tech enthusiasm</p>
