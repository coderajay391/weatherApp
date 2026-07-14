# Weather App (Vanilla JS)

A simple weather web app that fetches current weather data from **OpenWeatherMap** and displays:

- Temperature (°C)
- Weather description
- Humidity
- Wind speed
- Weather icon (based on condition)

## Preview
<image src="./assets/weatherApp.png">Preview</image>

## Demo
[watch Demo](assets/weatherApp,mp4)

## Features

- Search by city name
- Dynamic weather UI update
- Uses OpenWeatherMap `weather` endpoint

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript

## Setup

1. Open the project folder: `frontend/weatherApp/`
2. Make sure you have the following files/folders:
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/` (icons like `clear.png`, `cloud.png`, `mist.png`, `snowfall.png`, `rain.png`)
3. In `script.js`, update the API key (recommended):
   - `const apiKey = "..."`
   - You can get it from: 'https://openweathermap.org/api'

## How to Run

### Option A: Open in browser

- Double-click `index.html`.

### Option B: Use a local server (recommended)

Some browsers restrict `fetch` from local files. Serve the folder using any static server, for example:

- VSCode Live Server extension
- or any simple HTTP server

After starting the server, open `index.html` in your browser.

## Usage

1. Type a city name in the input (e.g., `Delhi`, `London`, `New York`).
2. Click the search icon.
3. The app will fetch data and update the UI.

## Notes / Troubleshooting

- If you see an error, verify:
  - Your API key is valid
  - The city name spelling is correct
  - You are running via a local server (Option B)

## File Overview

- `index.html` - UI layout
- `style.css` - Styling
- `script.js` - API call + DOM updates
