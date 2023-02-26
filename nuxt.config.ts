export default defineNuxtConfig({
  runtimeConfig: {
    // Private config that is only available on the server
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIRERBASE_AUTH_DOMAIN: process.env.FIRERBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    // Config within public will be also exposed to the client
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIRERBASE_AUTH_DOMAIN: process.env.FIRERBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    },
  },
  nitro: {
    preset: "firebase",
  },
})
