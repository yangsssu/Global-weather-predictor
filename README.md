Global Weather Predictor

A professional, real-time global weather visualization tool built with Electron and React. This application provides an interactive 3D-style earth map (using dark-mode Leaflet) that allows users to retrieve precise weather forecasts and visualize precipitation radar data anywhere on the globe.

👤 Author

Yang Su École Normale Supérieure - PSL (ENS-PSL) 📧 Email: yang.su@ens.fr

🔗 GitHub: https://github.com/yangsssu

<img width="1352" height="900" alt="image" src="https://github.com/user-attachments/assets/023bf3c0-8760-41a0-8a0a-77b097533ff6" />


🌍 How It Works

This application combines several powerful open-source technologies to deliver a seamless weather experience:

Core Interface: The app runs inside Electron, which provides a native desktop window environment. The UI is built with React (via CDN) and styled with Tailwind CSS.

Map Visualization: It utilizes Leaflet.js with a custom CSS filter pipeline to invert standard OpenStreetMap tiles, creating a high-performance "Dark Mode" / "Night Earth" aesthetic without requiring heavy WebGL shaders.

Weather Data:

Forecasts: When you click on the map, the app captures the latitude and longitude and sends an asynchronous request to the Open-Meteo API. It fetches current temperature, weather codes (WMO), hourly precipitation probability, and daily forecasts.

Rain Radar: When the "Rain Radar" toggle is active, the app fetches the latest satellite timestamps from RainViewer API and overlays a tile layer showing real-time precipitation intensity globally.

🚀 How to Use

Launch the Application: Open Global Weather Predictor.exe.

Select a Location: Click anywhere on the map (land or ocean).

A marker will appear at the clicked location.

The map will smoothly fly to the target.

View Forecast: The left sidebar will slide in, displaying:

Current Temperature & Weather Condition.

Rain Probability: The highest chance of rain in the next 24 hours.

Short-term Forecast: Trends for the next 3 hours.

7-Day Forecast: Daily highs/lows and weather icons.

Toggle Radar: Click the "Rain Radar" button in the top right to overlay live rain clouds on the map.

Switch Language: Use the dropdown menu in the top right to switch between English, Chinese, French, German, Japanese, Korean, and Italian.

📥 Installation

Option 1: Run the Pre-built Exe (For Users)

If you have received the distribution package:

Locate the folder containing the application.

Double-click Global Weather Predictor Setup 1.0.0.exe (or the unpacked executable).

No installation wizard is required; the app works as a portable standalone executable.

Option 2: Build from Source (For Developers)

To compile the .exe file yourself from this repository:

Prerequisites:

Node.js (LTS version recommended)

Git

Steps:

Clone the repository:

git clone [https://github.com/yangsssu/Global-weather-predictor.git](https://github.com/yangsssu/Global-weather-predictor.git)
cd Global-weather-predictor


Install dependencies:

npm install


Test the app in developer mode:

npm start


Build the Windows executable:

npm run build


The output file will be located in the dist/ directory.

⚠️ Requirements & Permissions

Internet Access (Mandatory)

This application is cloud-dependent and requires an active internet connection to function. It does not work offline.

Why? The app does not bundle map tiles or weather databases locally (which would require terabytes of storage). Instead, it fetches map tiles, forecast JSON data, and radar images in real-time from:

tile.openstreetmap.org (Map Tiles)

api.open-meteo.com (Weather Data)

api.rainviewer.com (Radar Imagery)

cdn.tailwindcss.com & cdnjs.cloudflare.com (UI Libraries)

System Permissions

Network Access: The app requires permission to communicate through your firewall to fetch the data mentioned above.

File System (Read-Only): The app only reads its own internal source files (weather_map.html, main.js). It does not read or write your personal documents, photos, or location history.

Location Services: The app does not request GPS access. Location is determined solely by where you click on the map.

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

© 2025 Yang Su, École Normale Supérieure - PSL. All rights reserved.
