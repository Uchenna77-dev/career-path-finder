// src/services/udemy.js
const UDEMY_API_BASE = 'https://www.udemy.com/api-2.0';
const UDEMY_CLIENT_ID = import.meta.env.VITE_UDEMY_CLIENT_ID;
const UDEMY_CLIENT_SECRET = import.meta.env.VITE_UDEMY_CLIENT_SECRET;

export async function getCourses(query) {
  try {
    const response = await fetch(`${UDEMY_API_BASE}/courses/?search=${query}`, {
      headers: {
        Authorization: `Basic ${btoa(`${UDEMY_CLIENT_ID}:${UDEMY_CLIENT_SECRET}`)}`
      }
    });

    if (!response.ok) {
      throw new Error(`Udemy API error: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Udemy API error:', error);
    return [];
  }
}
