/* ==============================================
   firebase-config.js
   Firebase & EmailJS Configuration File

   ⚠️  NOTE: Do NOT use "import" here.
   We use Firebase Compat CDN (loaded in index.html)
   which gives us the global  firebase  object.
   ============================================== */

/* ─────────────────────────────────────────────
   1. FIREBASE CONFIG  ✅  (your real keys)
   ─────────────────────────────────────────── */
const FIREBASE_CONFIG = {
    apiKey:            "AIzaSyC_W9RS45xW7nyPm0E6--0fVyCgyYtAgM8",
    authDomain:        "my-portfolio-992ce.firebaseapp.com",
    projectId:         "my-portfolio-992ce",
    storageBucket:     "my-portfolio-992ce.firebasestorage.app",
    messagingSenderId: "561836294985",
    appId:             "1:561836294985:web:2b27da9ab90513f0f0d098"
};

/* ─────────────────────────────────────────────
   2. EMAILJS CONFIG  (fill in when ready)
   emailjs.com → Account → API Keys
   ─────────────────────────────────────────── */
const EMAILJS_CONFIG = {
    publicKey:   "HZWg1ii1At_k8wd7Y",
    serviceId:   "service_14yuk9h",
    templateId:  "template_b988pkl"
};

/* ─────────────────────────────────────────────
   3. FEATURE FLAGS
   ─────────────────────────────────────────── */
const USE_FIREBASE = true;   // ✅ Firebase ready
const USE_EMAILJS  = true;   // ✅ EmailJS ready
