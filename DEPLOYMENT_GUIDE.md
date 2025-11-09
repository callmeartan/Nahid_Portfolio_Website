# Nahid Nasiri Portfolio - Deployment Guide

## Overview
This portfolio website has been customized for Nahid Nasiri, Machine Learning Engineer. All personal information, projects, and content have been updated to reflect Nahid's background and expertise.

## Completed Updates

### Personal Information
- ✅ Name: Updated to "Nahid Nasiri" across all components
- ✅ Email: Updated to nnasiri@ucsc.edu
- ✅ LinkedIn: Updated to https://www.linkedin.com/in/nahid-nasiri-17b5aa136/
- ✅ Location: Updated to San Jose, CA, USA
- ✅ Title: Updated to "Machine Learning Engineer | AI Systems | GenAI | Intelligent Automation"

### Components Updated
1. ✅ `src/app/layout.tsx` - Metadata and SEO
2. ✅ `src/components/hero.tsx` - Hero section with bio
3. ✅ `src/components/header.tsx` - Branding
4. ✅ `src/components/contact.tsx` - Contact email
5. ✅ `src/components/footer.tsx` - Footer information
6. ✅ `src/components/skills.tsx` - ML/AI skills
7. ✅ `src/components/projects.tsx` - ML/AI projects
8. ✅ `src/components/education.tsx` - Academic background
9. ✅ `src/components/hire-me.tsx` - Updated description
10. ✅ `src/app/resume/page.tsx` - Resume page (partial - work experience updated)

### Remaining Tasks

#### Resume Page Updates Needed
- Update Projects section with Nahid's ML/AI projects
- Update Skills section with ML/AI technologies
- Update Education section with complete academic history

#### Firebase Configuration
1. Create a new Firebase project for Nahid Nasiri
2. Update `src/lib/firebase.ts` with new Firebase config
3. Create `.firebaserc` file with new project ID
4. Update `firebase.json` if needed (should be fine as-is)

## Firebase Setup Instructions

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Project name: `nahid-nasiri-portfolio` (or your preferred name)
4. Follow the setup wizard

### Step 2: Enable Firebase Hosting
1. In Firebase Console, go to "Hosting"
2. Click "Get started"
3. Follow the setup instructions

### Step 3: Update Firebase Configuration

#### Update `src/lib/firebase.ts`:
Replace the Firebase config object with your new project's configuration:
```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

#### Create `.firebaserc`:
```json
{
  "projects": {
    "default": "nahid-nasiri-portfolio"
  }
}
```

### Step 4: Build and Deploy

1. Install dependencies (if not already done):
```bash
npm install
```

2. Build the project:
```bash
npm run build:export
```

3. Deploy to Firebase:
```bash
firebase deploy
```

Or use the combined command:
```bash
npm run deploy
```

## Environment Variables

If you need environment variables, create a `.env.local` file:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
# ... etc
```

## Testing

Before deploying:
1. Test locally: `npm run dev`
2. Build test: `npm run build:export`
3. Check the `out/` directory for static files

## Notes

- The website is configured for static export (Next.js export mode)
- All images should be in `/public/images/` directory
- Profile image should be at `/public/images/profile.jpg`
- Resume PDF should be at `/public/resume.pdf`

## Contact Form

The contact form uses Firestore. Make sure to:
1. Enable Firestore in Firebase Console
2. Set up Firestore security rules in `firestore.rules`
3. Create a `contact_messages` collection in Firestore

## Custom Domain (Optional)

To use a custom domain:
1. In Firebase Hosting, click "Add custom domain"
2. Follow the DNS configuration instructions
3. Update `metadataBase` in `src/app/layout.tsx` if needed

