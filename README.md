# ⛈️ Storm Chasers App

A professional React Native app for storm chasers featuring real-time weather tracking, AI predictions, and live streaming capabilities.

## 🌪️ Features

### **Core Features (Production Ready)**
- **🌍 Real-time GPS Tracking** - Uses device location for accurate storm positioning
- **⚡ Live Weather Alerts** - National Weather Service integration for real severe weather alerts
- **📡 Weather Radar** - Interactive storm cell detection and visualization
- **🤖 AI Storm Predictions** - Machine learning powered forecasting and chase recommendations
- **🎮 Gamification** - Achievement system and storm chaser leaderboards
- **👤 User Management** - Complete authentication with admin dashboard

### **Coming Soon Features**
- **📹 Multi-Camera Streaming** - YouTube/Twitch integration for live storm chasing
- **🛡️ Safety Center** - Emergency protocols and route monitoring
- **📚 Education System** - Storm chasing courses and certifications
- **💰 Creator Economy** - Monetization tools for professional chasers
- **🔗 Social Integration** - Cross-platform sharing and community features
- **🗺️ Route Planning** - Advanced navigation and team coordination
- **📸 AI Image Recognition** - Automated weather phenomenon detection

## 🛠️ Tech Stack

- **Framework:** React Native 0.76.7 with Expo SDK 53
- **Language:** TypeScript
- **State Management:** Zustand with AsyncStorage persistence
- **Styling:** NativeWind (Tailwind CSS for React Native)
- **Navigation:** React Navigation 7
- **Animations:** React Native Reanimated v3
- **Weather APIs:** National Weather Service (NWS)
- **Maps:** React Native Maps
- **Icons:** Expo Vector Icons (Ionicons)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Expo CLI
- iOS Simulator or Android Emulator
- Physical device for location testing

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/storm-chasers-app.git
cd storm-chasers-app

# Install dependencies
bun install
# or
npm install

# Start the development server
expo start
```

### Environment Setup
The app comes with pre-configured API keys for development. For production deployment, add your own API keys to `.env`:

```bash
EXPO_PUBLIC_VIBECODE_OPENAI_API_KEY=your_openai_key
EXPO_PUBLIC_VIBECODE_ANTHROPIC_API_KEY=your_anthropic_key
EXPO_PUBLIC_VIBECODE_GOOGLE_API_KEY=your_google_key
```

## 📱 Admin Access

The app includes a pre-configured admin account:
- **Username:** ndstormchasers2025@email.com
- **Password:** Any password (demo mode)

## 🏗️ Project Structure

```
src/
├── api/          # API integrations and services
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── navigation/   # Navigation configuration
├── screens/      # App screens
├── state/        # Zustand stores
├── types/        # TypeScript type definitions
└── utils/        # Utility functions
```

## 🎯 Target Audience

- **Professional Storm Chasers** - Advanced weather tracking tools
- **Weather Enthusiasts** - Educational content and community features
- **Emergency Responders** - Real-time severe weather monitoring
- **Content Creators** - Live streaming and monetization tools

## 🌟 Key Features Demo

### Real Weather Integration
- Uses actual GPS coordinates for location-based alerts
- Integrates with National Weather Service for live data
- Converts severe weather alerts to visual storm cells
- Shows "Clear conditions" when no active storms (no fake data)

### Professional Design
- Storm-themed UI with custom color palette
- Native iOS design patterns and animations
- Optimized for mobile storm chasing scenarios
- Accessibility and usability focused

## 🔄 Version History

- **v1.0.0** - Initial release with core storm tracking features
- Real GPS location integration
- National Weather Service API integration
- AI-powered storm predictions
- Admin dashboard and user management

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For questions, feedback, or storm chasing collaboration:
- **Admin:** ndstormchasers2025
- **Issues:** GitHub Issues tab
- **Discussions:** GitHub Discussions

## ⚠️ Safety Notice

This app is designed to assist storm chasers with weather information. Always prioritize safety and follow proper storm chasing protocols. Never chase storms without proper training and equipment.

---

**Built with ⚡ for the storm chasing community**