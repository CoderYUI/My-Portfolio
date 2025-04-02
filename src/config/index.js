// Application configuration settings

// API settings
export const API_CONFIG = {
  CONTACT_ENDPOINT: '/api',
  TIMEOUT: 8000,  // 8 seconds
};

// Feature flags
export const FEATURES = {
  // Set to true to log messages locally when API is not available
  LOCAL_STORAGE_FALLBACK: true,
};

// Log storage helper
export const logMessage = (data) => {
  console.log('MESSAGE LOGGED:', data);
  
  // Additional logging could be added here, like:
  // - localStorage for persistence
  // - Analytics events
  // - etc.
};
