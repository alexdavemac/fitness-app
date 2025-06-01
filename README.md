# 🏋️‍♀️ Fitness App (Progressive Web App)

This project is a mobile-optimized **Progressive Web App (PWA)** designed to help users track their running and workout routines over time. It features a login system, interactive schedule, progress visualization, and can be installed directly to a user’s home screen for offline use — much like a native app.

---

## 📱 Concept

The app provides:
- A **4-week fitness routine** rotating muscle groups, recovery days, and run distances
- A **running & workout tracker** with daily checkboxes and auto-updating activity graph
- An interactive graph showing **last 7 days** of progress (distance & workout count)
- A **login/sign-up system**, storing user credentials locally on-device
- Offline functionality via **service worker caching**
- Full **PWA support** so it can be installed on iPhone/Android home screens

---

## 🛠 Development Stages

### ✅ Phase 1: Core Functionality
- Designed structured weekly plan with alternating workouts and runs
- Added recovery and mobility sessions
- Created dynamic tracker with daily checkboxes

### ✅ Phase 2: UI Enhancements
- Styled using HTML/CSS for mobile optimization
- Added interactive bar chart inspired by Strava activity graphs
- Added "Today’s Activities" summary (later removed for clarity)

### ✅ Phase 3: Graph & Logic Refinement
- Limited the graph to 7-day activity window
- Improved date formatting and spacing
- Addressed x-axis label overlap and mobile responsiveness

### ✅ Phase 4: App Features
- Created **login page** with credential storage
- Added **sign-up page** linked to login
- Ensured secure login/logout experience (client-side only)

### ✅ Phase 5: PWA Integration
- Added `manifest.json` for installability
- Registered a service worker for offline access
- Configured icons, theme colors, and metadata
- Packaged and deployed to **GitHub Pages**

---

## 🚀 How to Use

1. Visit the app on GitHub Pages:  
   📲 [https://alexdavemac.github.io/fitness-app/](https://alexdavemac.github.io/fitness-app/)

2. Tap **“Add to Home Screen”** in Safari (iOS) or Chrome (Android)

3. Create an account and start tracking your workouts and runs!

---

## 📂 Files Included

- `FitnessApp_Login_PWA.html`: Login + PWA entry point
- `FitnessApp_SignUp_Linked_Login.html`: Sign-up page
- `Running_and_Workout_Tracker_Reverted_to_Final_Spacing.html`: Full tracker view
- `manifest.json`: PWA manifest for icons and name
- `service-worker.js`: Caching logic for offline use

---

## ⚙️ Notes

All user data (logins, checklists) is stored **locally** on each device. No information is sent to a server or third-party service.

Multiple users per device is possible in theory, but the app is optimized for one user per device in practice.
