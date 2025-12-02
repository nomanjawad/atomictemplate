# IP-Based Language Detection

## Overview

The application now automatically detects the user's language preference based on their IP address location. The language is set once on the first visit and persists across sessions.

## How It Works

### 1. Geolocation Service

Located at: `src/services/geolocation.service.ts`

- Uses the free **ipapi.co** API to detect the user's country from their IP address
- No API key required
- Maps country codes to supported languages:
  - **Russian (ru)**: Russia, Belarus, Kazakhstan
  - **Arabic (ar)**: Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, Jordan, Lebanon, Egypt, Iraq, Syria, Yemen, Libya, Tunisia, Algeria, Morocco
  - **English (en)**: Default for all other countries

### 2. Language Store

Located at: `src/store/useLanguageStore.ts`

- Enhanced with `isLanguageInitialized` flag to track if language detection has been performed
- Persists both language selection and initialization status in local storage
- Prevents repeated IP detection on subsequent visits

### 3. IP Language Detection Hook

Located at: `src/hooks/useIPLanguageDetection/useIPLanguageDetection.ts`

- Runs only once per user (on first visit)
- Automatically detects and sets language based on IP
- Handles errors gracefully

### 4. Language Initializer Component

Located at: `src/components/other/LanguageInitializer/LanguageInitializer.tsx`

- Client-side component that initializes IP detection
- Placed in the root layout for global coverage
- Returns null (no visual rendering)

## User Experience

### First Visit

1. User visits the website
2. IP address is detected automatically
3. Country is determined from IP
4. Language is set based on country:
   - **Russia** → Russian (ru)
   - **Saudi Arabia** → Arabic (ar)
   - **Other countries** → English (en)
5. Selection is saved in local storage

### Subsequent Visits

- Language preference is loaded from local storage
- No additional IP detection calls are made
- User can manually change language using the language selector
- Manual selection overrides automatic detection

## Manual Override

Users can still manually change their language at any time using the language selector in the top navigation bar. Once changed manually, that preference is saved and respected.

## Privacy & Performance

- IP detection only happens once per user
- No personal data is stored, only language preference
- Free API with no rate limiting concerns for normal traffic
- Fallback to English if detection fails

## Testing

### Test Different Countries

To test the IP detection locally:

1. **Clear Local Storage**:

   - Open browser DevTools
   - Go to Application → Local Storage
   - Delete the `language-store` entry

2. **Use VPN or Proxy**:

   - Connect to a VPN server in Russia → should set language to Russian
   - Connect to a VPN server in Saudi Arabia → should set language to Arabic
   - Connect from other countries → should set language to English

3. **Mock the API** (for development):
   Edit `src/services/geolocation.service.ts` to return a specific country code:
   ```typescript
   export async function detectCountryFromIP(): Promise<string | null> {
     // Mock for testing
     return "RU" // or "SA" for Saudi Arabia
   }
   ```

## Supported Languages & Countries

### Russian (ru)

- 🇷🇺 Russia (RU)
- 🇧🇾 Belarus (BY)
- 🇰🇿 Kazakhstan (KZ)

### Arabic (ar)

- 🇸🇦 Saudi Arabia (SA)
- 🇦🇪 United Arab Emirates (AE)
- 🇰🇼 Kuwait (KW)
- 🇶🇦 Qatar (QA)
- 🇧🇭 Bahrain (BH)
- 🇴🇲 Oman (OM)
- 🇯🇴 Jordan (JO)
- 🇱🇧 Lebanon (LB)
- 🇪🇬 Egypt (EG)
- 🇮🇶 Iraq (IQ)
- 🇸🇾 Syria (SY)
- 🇾🇪 Yemen (YE)
- 🇱🇾 Libya (LY)
- 🇹🇳 Tunisia (TN)
- 🇩🇿 Algeria (DZ)
- 🇲🇦 Morocco (MA)

### English (en)

- All other countries (default)

## Future Enhancements

- Add browser language detection as secondary fallback
- Implement more granular region-based preferences
- Add analytics to track language detection accuracy
- Support for additional languages and regions
