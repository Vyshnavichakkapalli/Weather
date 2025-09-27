/**
 * Weather App - JavaScript functionality
 * Handles API calls to OpenWeatherMap and UI interactions
 */

// Configuration
const CONFIG = {
    // OpenWeatherMap API configuration
    API_KEY: 'b168e37664078863d9cf5dcb3444cd88', // Replace with your actual API key
    API_BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
    API_UNITS: 'metric', // Celsius
    API_LANG: 'en',
    
    // UI elements
    elements: {
        weatherForm: null,
        cityInput: null,
        searchBtn: null,
        loading: null,
        error: null,
        errorMessage: null,
        weatherCard: null,
        cityName: null,
        countryCode: null,
        weatherIcon: null,
        temperature: null,
        weatherDescription: null,
        humidity: null,
        windSpeed: null
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Initialize the application and set up event listeners
 */
function initializeApp() {
    // Cache DOM elements for better performance
    CONFIG.elements = {
        weatherForm: document.getElementById('weatherForm'),
        cityInput: document.getElementById('cityInput'),
        searchBtn: document.getElementById('searchBtn'),
        loading: document.getElementById('loading'),
        error: document.getElementById('error'),
        errorMessage: document.getElementById('errorMessage'),
        weatherCard: document.getElementById('weatherCard'),
        cityName: document.getElementById('cityName'),
        countryCode: document.getElementById('countryCode'),
        weatherIcon: document.getElementById('weatherIcon'),
        temperature: document.getElementById('temperature'),
        weatherDescription: document.getElementById('weatherDescription'),
        humidity: document.getElementById('humidity'),
        windSpeed: document.getElementById('windSpeed')
    };

    // Set up form submission event listener
    CONFIG.elements.weatherForm.addEventListener('submit', handleFormSubmission);
    
    // Set up input event listener for better UX
    CONFIG.elements.cityInput.addEventListener('input', clearErrors);
    
    // Focus on input field when page loads
    CONFIG.elements.cityInput.focus();
    
    console.log('Weather App initialized successfully');
}

/**
 * Handle form submission
 * @param {Event} event - Form submission event
 */
function handleFormSubmission(event) {
    event.preventDefault();
    
    const cityName = CONFIG.elements.cityInput.value.trim();
    
    if (!cityName) {
        showError('Please enter a city name');
        return;
    }
    
    // Clear previous results and errors
    clearResults();
    clearErrors();
    
    // Fetch weather data
    fetchWeatherData(cityName);
}

/**
 * Fetch weather data from OpenWeatherMap API
 * @param {string} cityName - Name of the city to get weather for
 */
async function fetchWeatherData(cityName) {
    try {
        // Show loading state
        showLoading();
        
        // Construct API URL
        const apiUrl = buildApiUrl(cityName);
        
        console.log(`Fetching weather data for: ${cityName}`);
        
        // Make API request
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            // Handle different HTTP error codes
            if (response.status === 404) {
                throw new Error('City not found. Please check the spelling and try again.');
            } else if (response.status === 401) {
                throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
            } else if (response.status === 429) {
                throw new Error('API rate limit exceeded. Please try again later.');
            } else {
                throw new Error(`Server error: ${response.status}. Please try again later.`);
            }
        }
        
        const data = await response.json();
        
        // Validate response data
        if (!data || !data.main || !data.weather || !data.weather[0]) {
            throw new Error('Invalid weather data received from server.');
        }
        
        // Display weather data
        displayWeatherData(data);
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        
        // Show user-friendly error message
        if (error.message.includes('fetch')) {
            showError('Unable to connect to weather service. Please check your internet connection.');
        } else {
            showError(error.message);
        }
    } finally {
        // Hide loading state
        hideLoading();
    }
}

/**
 * Build API URL with parameters
 * @param {string} cityName - Name of the city
 * @returns {string} Complete API URL
 */
function buildApiUrl(cityName) {
    const params = new URLSearchParams({
        q: cityName,
        appid: CONFIG.API_KEY,
        units: CONFIG.API_UNITS,
        lang: CONFIG.API_LANG
    });
    
    return `${CONFIG.API_BASE_URL}?${params.toString()}`;
}

/**
 * Display weather data in the UI
 * @param {Object} data - Weather data from API
 */
function displayWeatherData(data) {
    try {
        // Extract data from API response
        const cityName = data.name;
        const country = data.sys.country;
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const iconCode = data.weather[0].icon;
        
        // Build weather icon URL
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        
        // Update UI elements
        CONFIG.elements.cityName.textContent = cityName;
        CONFIG.elements.countryCode.textContent = country;
        CONFIG.elements.temperature.textContent = temperature;
        CONFIG.elements.weatherDescription.textContent = description;
        CONFIG.elements.humidity.textContent = `${humidity}%`;
        CONFIG.elements.windSpeed.textContent = `${windSpeed} m/s`;
        CONFIG.elements.weatherIcon.src = iconUrl;
        CONFIG.elements.weatherIcon.alt = description;
        
        // Show weather card
        CONFIG.elements.weatherCard.classList.remove('hidden');
        
        // Clear input field
        CONFIG.elements.cityInput.value = '';
        
        console.log(`Weather data displayed for ${cityName}, ${country}`);
        
    } catch (error) {
        console.error('Error displaying weather data:', error);
        showError('Error displaying weather information. Please try again.');
    }
}

/**
 * Show loading state
 */
function showLoading() {
    CONFIG.elements.loading.classList.remove('hidden');
    CONFIG.elements.searchBtn.disabled = true;
    CONFIG.elements.cityInput.disabled = true;
}

/**
 * Hide loading state
 */
function hideLoading() {
    CONFIG.elements.loading.classList.add('hidden');
    CONFIG.elements.searchBtn.disabled = false;
    CONFIG.elements.cityInput.disabled = false;
    CONFIG.elements.cityInput.focus();
}

/**
 * Show error message
 * @param {string} message - Error message to display
 */
function showError(message) {
    CONFIG.elements.errorMessage.textContent = message;
    CONFIG.elements.error.classList.remove('hidden');
    
    // Hide error after 5 seconds
    setTimeout(() => {
        clearErrors();
    }, 5000);
}

/**
 * Clear error messages
 */
function clearErrors() {
    CONFIG.elements.error.classList.add('hidden');
}

/**
 * Clear previous results
 */
function clearResults() {
    CONFIG.elements.weatherCard.classList.add('hidden');
    clearErrors();
}

/**
 * Utility function to format temperature
 * @param {number} temp - Temperature in Celsius
 * @returns {string} Formatted temperature string
 */
function formatTemperature(temp) {
    return Math.round(temp);
}

/**
 * Utility function to format wind speed
 * @param {number} speed - Wind speed in m/s
 * @returns {string} Formatted wind speed string
 */
function formatWindSpeed(speed) {
    return `${speed.toFixed(1)} m/s`;
}

/**
 * Utility function to capitalize first letter of each word
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
function capitalizeWords(str) {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        buildApiUrl,
        formatTemperature,
        formatWindSpeed,
        capitalizeWords
    };
}
