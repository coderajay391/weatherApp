# Weather App Documentation

This document explains how the **Weather App (Vanilla JS)** works internally—UI structure, JavaScript flow, API usage, and how to extend it.

---

## 1) What the app does

- Lets the user type a **city name**.
- On search, calls **OpenWeatherMap** to retrieve current weather.
- Updates the UI with:
  - Temperature (°C)
  - Weather description
  - Humidity (%)
  - Wind speed (Km/H)
  - Weather icon (based on weather condition)

---

## 2) Project structure

- `index.html`
  - Renders the input + button and the weather display elements.
- `style.css`
  - Styles the layout and typography.
- `script.js`
  - Handles user interaction and the OpenWeatherMap API request.
- `assets/`
  - Weather icons (e.g., `clear.png`, `cloud.png`, `mist.png`, `snowfall.png`, `rain.png`).

---

## 3) UI elements and IDs

The app reads values from the DOM using selectors/IDs defined in `index.html`:

- City input: `.input`
- Search button: `#search-btn`
- Weather icon: `#weather-img` (an `<img>` tag)
- Temperature: `.temperature` (shows calculated °C)
- Description: `.description`
- Humidity: `#humidity`
- Wind speed: `#wind-speed`

---

## 4) JavaScript flow (`script.js`)

### 4.1) Key variables

`script.js` defines references to UI elements:

- `inputBox` (text input)
- `seacrhBtn` (search button)
- `weather_img` (icon image)
- `temperature`, `description`
- `humidity`, `windSpeed`

### 4.2) Main function: `checkedWeather(city)`

1. Builds the OpenWeatherMap request URL:
   - Endpoint: `https://api.openweathermap.org/data/2.5/weather`
   - Query params:
     - `q` = city name
     - `appid` = API key
2. Fetches JSON weather data.
3. Updates UI:
   - Converts Kelvin to Celsius:
     - `Math.round(weatherData.main.temp - 273.15)`
   - Sets:
     - temperature
     - weather description (`weather[0].description`)
     - humidity (`main.humidity`)
     - wind speed (`wind.speed`) + `Km/H`
4. Selects the icon based on `weatherData.weather[0].main`:
   - `Clear` → `assets/clear.png`
   - `Clouds` → `assets/cloud.png`
   - `Mist` → `assets/mist.png`
   - `Snow` → `assets/snowfall.png`
   - `Rain` → `assets/rain.png`

### 4.3) Event handler

The click handler triggers the request:

- On button click: `checkedWeather(inputBox.value)`

---

## 5) API notes (OpenWeatherMap)

### 5.1) API key

In `script.js`, the API key is stored in:

```js
const apiKey = "...";
```

For production use, do **not** expose API keys in client-side code. A backend proxy is recommended.

### 5.2) Units

Currently, the code assumes Kelvin input and converts to Celsius manually.

Alternative: use OpenWeatherMap `units=metric` to get °C directly.

---

## 6) Extending the app

### Add more weather conditions

Extend the `switch (weatherData.weather[0].main)` statement to map new conditions to icon files.

### Add error handling

Currently there is no user-friendly error state. Recommended enhancements:

- Handle empty input
- Catch network/API errors
- Show “City not found” message for invalid cities

### Improve wind units

`wind.speed` is labeled `Km/H` in the UI, but OpenWeatherMap’s unit depends on the response (and whether `units` is set). Consider using `units=metric` and updating the label to match actual values.

---

## 7) Run instructions

- Open `index.html` with a browser.
- If `fetch` is blocked due to local file restrictions, run via a static server (e.g., VSCode Live Server).

---

## 8) Known limitations

- No input validation (blank city, special characters, etc.)
- No error UI when the API request fails
- API key is embedded in front-end code

---

## 9) Quick checklist

If the app doesn’t show weather:

- Ensure `assets/` images exist and filenames match.
- Verify API key in `script.js`.
- Ensure you run from a local server (not strictly required, but often necessary).
- Confirm city spelling.
