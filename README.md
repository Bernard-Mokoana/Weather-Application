# Weather Application

This weather application provides real-time weather information for any city. Users can input a city name to retrieve the current temperature, weather conditions, and other details using the OpenWeatherMap API.

## Features
- Search for weather details by city name.
- Displays temperature, weather description, and city name.
- Handles invalid city names with user-friendly error messages.

## Technologies Used
- **HTML**: For the structure of the application.
- **CSS**: For styling the user interface.
- **JavaScript**: For fetching weather data and updating the UI dynamically.
- **OpenWeatherMap API**: To provide real-time weather information.

## How to Use
1. Clone or download the repository to your local machine.
2. Open the `index.html` file in any modern web browser.
3. Enter a city name in the input field and click the "Get Weather" button or press `Enter`.
4. View the weather information or error message if the city is invalid.

## API Key Setup
To run this application, you'll need a valid API key from [OpenWeatherMap](https://openweathermap.org/):
1. Sign up and obtain an API key.
2. Replace the placeholder API key in the script (`API_KEY`) with your own.

## Error Handling
- If the entered city name is invalid or not recognized, an error message is displayed: "City not found. Please check the name and try again."

## Troubleshooting
- Ensure you have an active internet connection.
- Check that your API key is valid and correctly configured.
- Inspect browser developer tools for any console errors.

## Future Enhancements
- Add support for additional weather details, such as humidity and wind speed.
- Implement a responsive design for mobile devices.
- Allow users to view weather information for their current location using geolocation.
