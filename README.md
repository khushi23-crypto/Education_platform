cd education-platform

# Create beautiful README.md (One command!)
cat > README.md << 'EOF'
# 🌅 Knowledge Brewers

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue.svg?logo=react&logoColor=white&style=for-the-badge)](https://reactjs.org)
[![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Default-%230f172a.svg?style=for-the-badge&logo=moon)](https://knowledge-brewers.com)

**Learn Anything, Anywhere** 🚀  
Modern Education Platform with Dark Mode, React Icons, Responsive Design & Sunrise Favicon

## ✨ **Features**

- 🎓 **Home** - Hero section, Features, Stats
- 📚 **Courses** - Course cards with enrollment
- 📧 **Contact** - Modern animated form with success states
- 🔐 **Login/Signup** - Toggle authentication
- 🌙 **Dark Mode** (Default) - Persistent theme toggle
- 📱 **Fully Responsive** - Mobile-first design
- 🌅 **Sunrise Favicon** - Education-themed PWA ready
- 📖 **React Icons** - 150k+ professional icons
- ⚡ **Smooth Animations** - Hover effects & transitions

## 🛠 **Tech Stack**

| **Category** | **Technology** |
|--------------|----------------|
| **Frontend** | React 18+, React Router |
| **Icons** | React Icons (SiBookstack, FaBrain) |
| **Styling** | Custom CSS (Tailwind-inspired) |
| **State** | React Hooks (useState, useEffect) |
| **Build** | Create React App |

## 📁 **Project Structure**

education-platform/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── Navbar.js
│   │   ├── Home/
│   │   │   ├── HeroSection.js
│   │   │   ├── Features.js
│   │   │   └── Stats.js
│   │   └── shared/
│   │       └── Button.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Courses.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── Login.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── components.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md



**Live Demo:** "https://education-platform-rho.vercel.app/" 🌐

## 🎨 **Screenshots**

| **Light Mode** | **Dark Mode (Default)** |
|---|---|
| ![Light Mode](https://via.placeholder.com/800x400/ffffff/2563eb?text=Light+Mode) | ![Dark Mode](https://via.placeholder.com/800x400/0f172a/60a5fa?text=Dark+Mode) |

| **Contact Form** | **Courses Page** |
|---|---|
| ![Contact](https://via.placeholder.com/400x300/667eea/ffffff?text=Animated+Contact+Form) | ![Courses](https://via.placeholder.com/400x300/f8fafc/2563eb?text=Course+Cards) |

## 🌙 **Dark Mode Features**

- **Default**: Dark theme on first visit
- **Persistent**: Saves preference in localStorage
- **Toggle**: ☀️/🌙 icon in navbar
- **Full Coverage**: All components styled


## 🎯 **Customization**

1. **Colors**: Modify gradients in `globals.css`
2. **Courses**: Update `Courses.js` array
3. **Theme**: Toggle default in `Navbar.js`

## 🤝 **Contributing**

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

⭐ **Star this repo if you found it helpful!**
🌟 **Made with Create React App**
