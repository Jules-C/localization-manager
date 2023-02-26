import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
        authDomain: config.FIREBASE_AUTH_DOMAIN,
        projectId: config.FIREBASE_PROJECT_ID,
        storageBucket: config.FIREBASE_STORAGE_BUCKET,
        appId: config.FIREBASE_APP_ID,
    };

    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);
    const db = getFirestore(firebaseApp);
    const storage = getStorage(firebaseApp);

    console.log('Firebase initialized', firebaseApp);

    initUser();

    nuxtApp.vueApp.provide('auth', auth);
    nuxtApp.provide('auth', auth);

    nuxtApp.vueApp.provide('db', db);
    nuxtApp.provide('db', db);

    nuxtApp.vueApp.provide('storage', storage);
    nuxtApp.provide('storage', storage);
});