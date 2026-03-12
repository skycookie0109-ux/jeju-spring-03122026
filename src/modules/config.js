/**
 * config.js - Application configuration constants
 * Contains API keys, sheet IDs, and fallback assets
 */

const GOOGLE_API_KEY = "AIzaSyDkdIhs2SP1uOKdTxkVuxDxDKrQMo9U-4Y";

const CONFIG = {
  GOOGLE_SHEET_ID: "18dmbiKJa_VFpPmXpbuU3gJOOijF-fbFqAWbT9tti7CA",
  unsplashBase: "https://images.unsplash.com/photo-",
};

const FALLBACK_ASSETS = {
  // 封面
  header_cover:
    "https://images.unsplash.com/photo-1578037571214-25e07834ad2f?auto=format&fit=crop&w=800&q=80",

  // 交通與機場
  airport_tw: "1570125909232-eb263c188f7e",
  airport_jeju: "1596422846543-75c6fc197f07",
  flight_jeju: "1436491865332-7a61a109db05",
  flight_home: "1436491865332-7a61a109db05",
  rental_car: "1549317661-bd78e682013a",

  // 住宿
  hotel_jeju: "1566073771259-6a6e5e9e9df4",

  // 濟州景點
  seongsan: "1578037571214-25e07834ad2f",
  seopjikoji: "1578037571214-25e07834ad2f",
  udo_island: "1507525428034-b723cf961d3e",
  hamdeok_beach: "1507525428034-b723cf961d3e",
  haenyeo_museum: "1596422846543-75c6fc197f07",
  jusangjeolli: "1559592413-7cec4d0cae2b",
  jeongbang: "1432405972618-c6b0a3e8e0e6",
  yongduam: "1559592413-7cec4d0cae2b",
  dongmun_market: "1533900298318-6b8da08a523e",
  dongmun_night: "1533900298318-6b8da08a523e",
  park_981: "1567620905732-2d1ec0a7da64",
  jeju_city: "1566073771259-6a6e5e9e9df4",
  jeju_night: "1566073771259-6a6e5e9e9df4",

  // 美食
  ollae_guksu: "1504674900247-0877df9cc836",
  gozip_dol: "1504674900247-0877df9cc836",
  black_pork: "1582878826629-29b7ad1cdc43",
  bhc_chicken: "1582878826629-29b7ad1cdc43",
  mongtan: "1555992336-03a23c7b20ee",
  chunshim: "1504674900247-0877df9cc836",
  sookseongdo: "1582878826629-29b7ad1cdc43",
  sundubu: "1504674900247-0877df9cc836",
  seogwipo_market: "1533900298318-6b8da08a523e",

  // 咖啡廳
  london_bagel: "1514432324607-a09d9b4a5819",
  starbucks_jeju: "1514432324607-a09d9b4a5819",
  jejudang: "1514432324607-a09d9b4a5819",
  cafe_container: "1514432324607-a09d9b4a5819",
};

export { GOOGLE_API_KEY, CONFIG, FALLBACK_ASSETS };
