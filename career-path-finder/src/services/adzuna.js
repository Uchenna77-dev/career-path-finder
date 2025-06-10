// src/services/adzuna.js
const BASE_URL = "https://api.adzuna.com/v1/api/jobs";
const COUNTRY = "gb"; // You can change to 'us', 'ca', etc.
const APP_ID = "your_app_id_here"; // Replace with real Adzuna App ID
const APP_KEY = "your_app_key_here"; // Replace with real Adzuna App Key

export async function fetchJobs(keyword, location = "remote") {
  const url = `${BASE_URL}/${COUNTRY}/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=10&what=${keyword}&where=${location}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Adzuna API error:", error);
    return [];
  }
}
