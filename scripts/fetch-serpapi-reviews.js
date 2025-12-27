#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const API_KEY = process.env.SERPAPI_KEY;
const BASE_URL = 'https://serpapi.com/search.json';
const PLACE_TITLE = 'Dental Implants Turkey: Adalya Dental Clinic | Dentist in Antalya | Adalya Ağız ve Diş Sağlığı Polikliniği';
const DATA_ID = '0x14c38bd789572295:0xbef15351d5de7b14';
const PLACE_ID = 'ChIJlSJXideLwxQRFHve1VFT8b4';
const FILENAME_PREFIX = 'adalya-dental';
const MONTH_WINDOW = 3;
const OUTPUT_DIR = path.join(__dirname, '..', 'serpapi-data');

if (!API_KEY) {
  console.error('Missing SERPAPI_KEY environment variable.');
  process.exit(1);
}

const cutoffDate = (() => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  now.setMonth(now.getMonth() - MONTH_WINDOW);
  return now;
})();

const parseHumanDate = (text) => {
  if (!text) return null;
  const lowered = text.toLowerCase();
  const relativeMatch = lowered.match(/(a|an|\d+)\s+(minute|hour|day|week|month|year)s?\s+ago/);
  if (relativeMatch) {
    const amount = relativeMatch[1] === 'a' || relativeMatch[1] === 'an' ? 1 : Number(relativeMatch[1]);
    const unit = relativeMatch[2];
    const date = new Date();
    switch (unit) {
      case 'minute':
        date.setMinutes(date.getMinutes() - amount);
        return date;
      case 'hour':
        date.setHours(date.getHours() - amount);
        return date;
      case 'day':
        date.setDate(date.getDate() - amount);
        return date;
      case 'week':
        date.setDate(date.getDate() - amount * 7);
        return date;
      case 'month':
        date.setMonth(date.getMonth() - amount);
        return date;
      case 'year':
        date.setFullYear(date.getFullYear() - amount);
        return date;
      default:
        return null;
    }
  }

  if (lowered === 'yesterday') {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
  }

  const parsed = new Date(text);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const parseReviewDate = (review) => {
  if (review.iso_date) {
    const iso = new Date(review.iso_date);
    if (!Number.isNaN(iso.getTime())) return iso;
  }
  return parseHumanDate(review.date);
};

const buildUrl = (nextPageToken) => {
  const params = new URLSearchParams({
    engine: 'google_maps_reviews',
    data_id: DATA_ID,
    hl: 'en',
    sort_by: 'newest',
    api_key: API_KEY,
  });
  if (nextPageToken) params.set('next_page_token', nextPageToken);
  return `${BASE_URL}?${params.toString()}`;
};

const fetchPage = async (nextPageToken) => {
  const url = buildUrl(nextPageToken);
  const response = await fetch(url);
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`SerpApi request failed (${response.status} ${response.statusText}): ${body}`);
  }
  return response.json();
};

const run = async () => {
  const collected = [];
  let nextPageToken = undefined;
  let requestsMade = 0;

  while (true) {
    const page = await fetchPage(nextPageToken);
    requestsMade += 1;
    const reviews = Array.isArray(page.reviews) ? page.reviews : [];
    let pageHasNewer = false;
    let pageHasOlder = false;

    for (const review of reviews) {
      const reviewDate = parseReviewDate(review);
      if (reviewDate && reviewDate < cutoffDate) {
        pageHasOlder = true;
        continue;
      }
      pageHasNewer = true;
      collected.push(review);
    }

    if (!pageHasNewer && pageHasOlder) break;
    nextPageToken = page.serpapi_pagination?.next_page_token;
    if (!nextPageToken) break;
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputPath = path.join(OUTPUT_DIR, `${FILENAME_PREFIX}-reviews-${timestamp}.json`);
  const payload = {
    fetched_at: new Date().toISOString(),
    cutoff_iso: cutoffDate.toISOString(),
    place: {
      title: PLACE_TITLE,
      data_id: DATA_ID,
      place_id: PLACE_ID,
    },
    window_months: MONTH_WINDOW,
    request_count: requestsMade,
    review_count: collected.length,
    reviews: collected,
  };

  fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2), 'utf8');
  console.log(`Saved ${collected.length} reviews to ${outputPath}`);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
