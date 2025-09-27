# 🌤️ Weather App

A simple, elegant, and responsive weather application built with vanilla HTML, CSS, and JavaScript. Get real-time weather information for any city around the world using the OpenWeatherMap API.

![Weather App Screenshot](https://via.placeholder.com/600x400/667eea/ffffff?text=Weather+App+Screenshot)

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any city worldwide
- **Clean & Modern UI**: Beautiful gradient background with card-based design
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Weather Details**: Display temperature, humidity, wind speed, and weather description
- **Weather Icons**: Visual weather representation using OpenWeatherMap icons
- **Error Handling**: Graceful error handling for invalid cities and API failures
- **Loading States**: Smooth loading animations for better user experience
- **Keyboard Support**: Full keyboard navigation support

## 🚀 Live Demo

[View Live Demo](https://yourusername.github.io/weather-app) *(Replace with your GitHub Pages URL)*

## 🌐 Deploy on GitHub Pages

### Method 1: Using GitHub Web Interface (Recommended for Beginners)

1. **Create a GitHub Repository**
   - Go to [GitHub.com](https://github.com) and sign in
   - Click the "+" icon in the top right corner
   - Select "New repository"
   - Name it `weather-app` (or any name you prefer)
   - Make it public (required for free GitHub Pages)
   - Click "Create repository"

2. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop all your project files (`index.html`, `style.css`, `script.js`, `README.md`)
   - Add a commit message like "Initial commit: Weather app"
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to your repository's "Settings" tab
   - Scroll down to the "Pages" section in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
   - Wait a few minutes for GitHub to build your site

4. **Access Your Live Site**
   - Your site will be available at: `https://yourusername.github.io/weather-app`
   - Replace `yourusername` with your actual GitHub username

### Method 2: Using Git Command Line (For Advanced Users)

1. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Weather app"
   ```

2. **Connect to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/weather-app.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Follow steps 3-4 from Method 1 above

### Important Notes for GitHub Pages Deployment

- **API Key Security**: Never commit your actual API key to a public repository. Instead:
  - Use environment variables or a config file that's gitignored
  - Consider using GitHub Secrets for private repositories
  - For demo purposes, you can include a placeholder and instruct users to add their own key

- **CORS Considerations**: GitHub Pages serves your site over HTTPS, which works well with the OpenWeatherMap API

- **Custom Domain**: You can add a custom domain in the GitHub Pages settings if you own one

### Troubleshooting GitHub Pages Deployment

**Site Not Loading**
- Check that all files are in the root directory
- Ensure `index.html` is named exactly as shown
- Wait up to 10 minutes for changes to propagate

**API Not Working**
- Verify your API key is correctly configured
- Check browser console for CORS errors
- Ensure your OpenWeatherMap API key is active

**Styling Issues**
- Check that `style.css` is properly linked in `index.html`
- Verify file paths are correct (case-sensitive on GitHub Pages)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern HTML features
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **JavaScript (ES6+)**: Modern JavaScript with async/await, fetch API
- **OpenWeatherMap API**: Free weather data service
- **Google Fonts**: Inter font family for better typography

## 📋 Prerequisites

Before you begin, ensure you have:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- An OpenWeatherMap API key (free at [openweathermap.org](https://openweathermap.org/api))
- A code editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

## 🔧 Installation & Setup

### 1. Clone or Download the Repository

```bash
# If using Git
git clone https://github.com/yourusername/weather-app.git
cd weather-app

# Or download and extract the ZIP file
```

### 2. Get Your OpenWeatherMap API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Go to "My API Keys" section
4. Copy your API key

### 3. Configure the API Key

1. Open `script.js` in your code editor
2. Find line 8: `API_KEY: 'your_api_key_here'`
3. Replace `'your_api_key_here'` with your actual API key:

```javascript
API_KEY: 'your_actual_api_key_here',
```

### 4. Run the Application

#### Option 1: Using a Local Server (Recommended)

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open your browser and go to `http://localhost:8000`

#### Option 2: Direct File Opening

Simply open `index.html` in your web browser (some features may not work due to CORS restrictions).

## 🎯 How to Use

1. **Open the application** in your web browser
2. **Enter a city name** in the search box (e.g., "London", "New York", "Tokyo")
3. **Click the search button** or press Enter
4. **View the weather information** including:
   - City name and country code
   - Current temperature in Celsius
   - Weather description (e.g., "clear sky", "light rain")
   - Humidity percentage
   - Wind speed in m/s
   - Weather icon

## 📱 Responsive Design

The app is fully responsive and optimized for:

- **Desktop**: Full-featured experience with hover effects
- **Tablet**: Touch-friendly interface with optimized spacing
- **Mobile**: Compact layout with single-column weather details

## 🎨 Customization

### Changing the Color Scheme

Edit the CSS variables in `style.css`:

```css
/* Main gradient background */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Primary button color */
background: #667eea;
```

### Adding New Weather Details

To add more weather information:

1. Add new elements to `index.html`
2. Style them in `style.css`
3. Update the `displayWeatherData()` function in `script.js`

### Changing Units

To switch from Celsius to Fahrenheit:

1. Change `API_UNITS` from `'metric'` to `'imperial'` in `script.js`
2. Update the temperature unit display from `°C` to `°F`

## 🐛 Troubleshooting

### Common Issues

**API Key Not Working**
- Ensure your API key is correctly copied
- Check if your API key is activated (can take up to 10 minutes)
- Verify you haven't exceeded the free tier limits

**City Not Found**
- Check the spelling of the city name
- Try using the city name in English
- Some cities may need country code (e.g., "London, UK")

**CORS Errors**
- Use a local server instead of opening the HTML file directly
- The OpenWeatherMap API supports CORS for web applications

**No Weather Data Displayed**
- Check browser console for error messages
- Verify your internet connection
- Ensure the API key has the correct permissions

## 📊 API Information

This app uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current):

- **Free Tier**: 1,000 API calls per day
- **Rate Limit**: 60 calls per minute
- **Data Update**: Every 10 minutes
- **Coverage**: 200,000+ cities worldwide

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature-name`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add some feature'`
5. **Push to the branch**: `git push origin feature-name`
6. **Submit a pull request**

### Development Guidelines

- Follow the existing code style
- Add comments for complex functionality
- Test on multiple browsers and devices
- Update the README if adding new features

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Google Fonts](https://fonts.google.com/) for the Inter font family
- [Feather Icons](https://feathericons.com/) for the search icon

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing [GitHub Issues](https://github.com/yourusername/weather-app/issues)
3. Create a new issue with detailed information
4. Contact the maintainer

---

**Made with ❤️ using vanilla web technologies**
"# Weather" 
