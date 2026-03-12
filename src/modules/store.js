/**
 * store.js - Centralized application state
 * Contains all shared data including itinerary, recommendations, phrases, etc.
 */

const Store = {
  config: {
    appTitle: "濟州春日散策",
    appSubtitle: "Jeju 2026",
    startDate: "2026-03-13",
    targetLang: "ko",
  },
  itinerary: [],
  recommendations: {},
  tickets: {},          // [v2.11] { recKey: [{name, ticketId}] }
  phrases: [],
  assets: {},
  info: [],
  activeDayId: 1,
  geoCache: {},
};

export default Store;
