# Nahid Nasiri Portfolio - Deployment Guide

## 🚀 Firebase Deployment Guide

This guide will walk you through deploying Nahid Nasiri's portfolio website to Firebase Hosting with the new bright, glass-morphism design.

---

## Prerequisites

1. **Node.js** (v18 or higher)
2. **npm** or **yarn**
3. **Firebase CLI** installed globally
4. **Firebase account** with a new project created

---

## Step 1: Install Dependencies

```bash
npm install
```

---

## Step 2: Create a New Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter project name: `nahid-nasiri-portfolio` (or your preferred name)
4. Follow the setup wizard:
   - Disable Google Analytics (optional)
   - Click **"Create project"**
5. Wait for project creation to complete

---

## Step 3: Initialize Firebase Hosting

### Option A: Using Firebase CLI (Recommended)

```bash
# Login to Firebase (if not already logged in)
firebase login

# Initialize Firebase in your project
firebase init hosting

# When prompted:
# - Select "Use an existing project"
# - Choose your newly created project
# - Public directory: `out` (this is where Next.js exports static files)
# - Configure as single-page app: Yes
# - Set up automatic builds: No (we'll build manually)
# - Overwrite index.html: No (we're using Next.js)
```

### Option B: Manual Configuration

If you've already initialized Firebase, update `.firebaserc`:

```json
{
  "projects": {
    "default": "nahid-nasiri-portfolio"
  }
}
```

Update `firebase.json`:

```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "cleanUrls": true,
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

## Step 4: Build the Project

```bash
# Build the Next.js project for static export
npm run build:export

# This will:
# 1. Run `next build` to create optimized production build
# 2. Export static files to the `out` directory
```

**Note:** The build process may take a few minutes. Ensure you see:
- ✅ Build completed successfully
- ✅ Static files exported to `out/` directory

---

## Step 5: Test Locally (Optional)

```bash
# Serve the built files locally
npx serve out

# Or use Firebase emulator
firebase emulators:start --only hosting
```

Visit `http://localhost:3000` (or the port shown) to preview your site.

---

## Step 6: Deploy to Firebase

```bash
# Deploy to Firebase Hosting
firebase deploy --only hosting
```

**What happens:**
- Firebase CLI uploads files from `out/` directory
- Your site becomes available at: `https://nahid-nasiri-portfolio.web.app`
- Custom domain can be configured later in Firebase Console

---

## Step 7: Configure Custom Domain (Optional)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Hosting** → **Add custom domain**
4. Enter your domain (e.g., `nahidnasiri.com`)
5. Follow DNS configuration instructions
6. Wait for SSL certificate provisioning (usually 5-10 minutes)

---

## Step 8: Verify Deployment

1. Visit your Firebase Hosting URL: `https://nahid-nasiri-portfolio.web.app`
2. Check all pages:
   - Home page
   - Skills section
   - Projects section
   - Education section
   - Contact form
   - Resume page (`/resume`)

---

## 🎨 Design Features

The new design includes:

- **Bright, Futuristic Theme**: Clean white backgrounds with cyan/blue accents
- **Glass-morphism Effects**: Semi-transparent panels with backdrop blur
- **Smooth Animations**: Subtle hover effects and transitions
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Modern Typography**: Inter, Outfit, and Space Grotesk fonts

---

## 🔧 Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
rm -rf out

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run build:export
```

### Deployment Errors

- **Error: "Public directory not found"**
  - Ensure `out` directory exists after build
  - Check `firebase.json` has `"public": "out"`

- **Error: "Firebase project not found"**
  - Verify `.firebaserc` has correct project ID
  - Run `firebase use --add` to add project

### Styling Issues

- If colors don't appear correctly:
  - Clear browser cache
  - Check `tailwind.config.js` and `globals.css` for color definitions
  - Ensure CSS variables are properly set

---

## 📝 Environment Variables (if needed)

If you need to add environment variables:

1. Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://nahidnasiri.com
```

2. Rebuild:
```bash
npm run build:export
```

3. Redeploy:
```bash
firebase deploy --only hosting
```

---

## 🔄 Continuous Deployment (Optional)

### GitHub Actions Setup

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build:export
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: nahid-nasiri-portfolio
          channelId: live
```

---

## 📦 Project Structure

```
nahid-nasiri-portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   └── lib/             # Utilities and services
├── public/               # Static assets
├── out/                  # Build output (generated)
├── firebase.json         # Firebase configuration
├── .firebaserc          # Firebase project settings
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies
```

---

## ✅ Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Contact form works (if integrated)
- [ ] Mobile responsiveness verified
- [ ] Performance tested (Lighthouse)
- [ ] SEO metadata verified
- [ ] Social media links work
- [ ] Resume PDF accessible

---

## 🆘 Support

For issues or questions:
- Check Firebase Hosting [documentation](https://firebase.google.com/docs/hosting)
- Review Next.js [deployment guide](https://nextjs.org/docs/deployment)
- Check project README.md

---

## 🎉 Success!

Your portfolio is now live with a beautiful, modern glass-morphism design!

**Live URL:** `https://nahid-nasiri-portfolio.web.app`

---

*Last updated: January 2025*
