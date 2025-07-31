# Deployment Guide - Free Hosting Options

This guide will help you deploy your document consultancy website for free on various platforms.

## 🚀 Vercel (Recommended - Easiest)

Vercel is the creator of Next.js and offers the best integration.

### Steps:
1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/document-consultancy.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain

### Benefits:
- ✅ Zero configuration
- ✅ Automatic deployments
- ✅ Global CDN
- ✅ SSL certificate included
- ✅ Custom domains
- ✅ Analytics included

---

## 🌐 Netlify

Netlify is another excellent option for static sites.

### Steps:
1. **Push to GitHub** (same as Vercel step 1)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Choose your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Configure for Next.js:**
   - Go to "Site settings" → "Build & deploy"
   - Add environment variable: `NODE_VERSION = 18`

### Benefits:
- ✅ Free tier with generous limits
- ✅ Form handling included
- ✅ Custom domains
- ✅ SSL certificates

---

## 📄 GitHub Pages

GitHub Pages is free but requires static export.

### Steps:
1. **Modify package.json:**
   ```json
   {
     "scripts": {
       "export": "next build && next export",
       "deploy": "npm run export && touch out/.nojekyll"
     }
   }
   ```

2. **Create GitHub Actions workflow:**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/checkout@v2
       - uses: actions/setup-node@v2
         with:
           node-version: '18'
       - run: npm ci
       - run: npm run export
       - name: Deploy
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./out
   ```

3. **Enable GitHub Pages:**
   - Go to repository settings
   - Scroll to "GitHub Pages"
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"

### Benefits:
- ✅ Completely free
- ✅ Integrated with GitHub
- ✅ Custom domains supported

---

## 🔧 Environment Setup

### Required Environment Variables:
Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=info@docconsult.com
```

### For Production:
Add these in your hosting platform's environment variables section.

---

## 📧 Contact Form Integration

### Option 1: EmailJS (Free tier available)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Update `Contact.tsx` with EmailJS integration

### Option 2: Formspree (Free tier available)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form action in `Contact.tsx`

### Option 3: Netlify Forms (If using Netlify)
1. Add `data-netlify="true"` to your form
2. Add hidden input: `<input type="hidden" name="form-name" value="contact" />`

---

## 🎨 Customization Before Deployment

### Update Company Information:
1. **Company name:** Update in `Header.tsx` and `Footer.tsx`
2. **Contact details:** Update in `Contact.tsx` and `Footer.tsx`
3. **Services:** Modify in `Services.tsx`
4. **About section:** Update in `About.tsx`

### SEO Optimization:
1. **Meta tags:** Update in `src/app/layout.tsx`
2. **Page title:** Change "DocConsult" to your company name
3. **Description:** Update with your specific services

### Colors and Branding:
1. **Primary color:** Update in `tailwind.config.ts`
2. **Logo:** Add your logo to `public/` directory
3. **Favicon:** Replace `public/favicon.ico`

---

## 🚀 Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify contact form works
- [ ] Check mobile responsiveness
- [ ] Test navigation links
- [ ] Verify SEO meta tags
- [ ] Check loading speed
- [ ] Test in different browsers
- [ ] Set up Google Analytics (optional)
- [ ] Configure custom domain (if applicable)

---

## 📊 Analytics Setup (Optional)

### Google Analytics:
1. Create Google Analytics account
2. Add tracking code to `layout.tsx`
3. Update privacy policy

### Vercel Analytics (if using Vercel):
- Automatically included with Vercel deployment

---

## 🔒 Security Considerations

- ✅ HTTPS enabled by default on all platforms
- ✅ No sensitive data in client-side code
- ✅ Form validation implemented
- ✅ XSS protection with React

---

## 💰 Cost Breakdown

All recommended platforms offer **completely free** hosting:
- **Vercel:** Free tier includes 100GB bandwidth/month
- **Netlify:** Free tier includes 100GB bandwidth/month  
- **GitHub Pages:** Completely free, unlimited bandwidth

---

**Your document consultancy website is now ready for free hosting!** 🎉

Choose Vercel for the easiest deployment experience, or any of the other options based on your preferences. 