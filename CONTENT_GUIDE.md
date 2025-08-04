# T&J Document Consultants - Content Management Guide

This guide will help you manually change the content of your website. All content is stored in the component files within the `src/components/` directory.

## 📁 File Structure

```
src/
├── components/
│   ├── Header.tsx          # Top navigation and contact info
│   ├── Hero.tsx           # Main landing section
│   ├── Services.tsx       # Services offered
│   ├── About.tsx          # About us section
│   ├── Contact.tsx        # Contact form and info
│   └── Footer.tsx         # Footer with links and info
├── app/
│   ├── layout.tsx         # Page metadata and title
│   └── page.tsx           # Main page structure
└── images/                # Your images and assets
```

## 🎯 Quick Content Changes

### 1. **Header Component** (`src/components/Header.tsx`)

**Phone Numbers** (Lines 38-44):
```tsx
<span>+91 9446891522</span>  // First phone number
<span>+91 98765 43211</span>  // Second phone number
```

**Email** (Line 47):
```tsx
<span>tjconsultantsmtdy@gmail.com</span>
```

**Business Hours** (Line 50):
```tsx
<span>Mon - Fri: 9:00 AM - 6:00 PM</span>
```

### 2. **Hero Component** (`src/components/Hero.tsx`)

**Main Headline** (Lines 20-24):
```tsx
<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
  Expert Property
  <span className="text-gray-600"> Documentation </span>
  Services
</h1>
```

**Subtitle** (Lines 25-28):
```tsx
<p className="text-xl text-gray-600 leading-relaxed">
  Professional property document services in Kerala. Specializing in land agreements, wills, 
  power of attorney, and property documentation with deep understanding of Kerala's legal framework.
</p>
```

**Stats** (Lines 50-65):
```tsx
<div className="text-2xl font-bold text-gray-900">500+</div>
<div className="text-sm text-gray-600">Happy Clients</div>
// Change numbers and labels as needed
```

### 3. **Services Component** (`src/components/Services.tsx`)

**Services Array** (Lines 5-35):
```tsx
const services = [
  {
    icon: FileText,
    title: 'Land Agreement Drafting',
    description: 'Professional drafting of land sale agreements, lease agreements, and property transfer documents.',
    features: ['Sale agreements', 'Lease agreements', 'Property transfers', 'Land partition deeds']
  },
  // Add/modify services here
]
```

**Section Title** (Lines 45-50):
```tsx
<h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
  Professional Property
  <span className="text-gray-600"> Document Services</span>
</h2>
```

### 4. **About Component** (`src/components/About.tsx`)

**Main Content** (Lines 20-30):
```tsx
<h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
  Trusted Property
  <span className="text-gray-600"> Document Experts</span>
</h2>
```

**Description** (Lines 32-40):
```tsx
<p className="text-xl text-gray-600 leading-relaxed">
  With years of experience in Kerala's property documentation, 
  we specialize in helping individuals and families navigate the complex 
  legal requirements for property documents, ensuring compliance and peace of mind.
</p>
```

**Features List** (Lines 42-60):
```tsx
<span className="text-gray-700 text-lg">Deep knowledge of Kerala's property laws and regulations</span>
// Modify each feature as needed
```

### 5. **Contact Component** (`src/components/Contact.tsx`)

**Contact Information** (Lines 55-75):
```tsx
<p className="text-gray-600">tjconsultantsmtdy@gmail.com</p>
<p className="text-gray-600">+91 9446891522</p>
<p className="text-gray-600">+91 98765 43211</p>
```

**Address** (Lines 80-85):
```tsx
<p className="text-gray-600">123 Business Street</p>
<p className="text-gray-600">Suite 100, City, State 12345</p>
```

**Business Hours** (Lines 90-95):
```tsx
<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
<p>Saturday: 10:00 AM - 4:00 PM</p>
<p>Sunday: Closed</p>
```

### 6. **Footer Component** (`src/components/Footer.tsx`)

**Company Description** (Lines 25-28):
```tsx
<p className="text-gray-300 mb-8 max-w-md leading-relaxed">
  Kerala's trusted property document consultants helping individuals and families 
  navigate property documentation with expertise and legal compliance.
</p>
```

**Contact Info** (Lines 65-75):
```tsx
<span className="text-gray-300 text-sm">tjconsultantsmtdy@gmail.com</span>
<span className="text-gray-300 text-sm">+91 9446891522</span>
```

### 7. **Page Metadata** (`src/app/layout.tsx`)

**Page Title** (Line 7):
```tsx
title: 'T&J Document Consultants - Kerala Property Document Services',
```

**Meta Description** (Line 8):
```tsx
description: 'Expert property document consultancy services in Kerala. Specializing in land agreements, wills, power of attorney, rectification deeds, and property documentation.',
```

## 🖼️ Image Management

### Logo
- **Location**: `public/logo.png`
- **Size**: Recommended 48x48px or larger
- **Format**: PNG, JPG, or SVG

### Other Images
- **Location**: `src/images/` directory
- **Usage**: Import and use in components

## 🎨 Styling Changes

### Colors
- **Primary Colors**: Defined in `tailwind.config.ts`
- **Custom Colors**: Add to the colors object in the config file

### Typography
- **Font**: Inter (Google Fonts) - configured in `layout.tsx`
- **Sizes**: Use Tailwind classes like `text-sm`, `text-lg`, `text-2xl`, etc.

## 🔧 Making Changes

### Step-by-Step Process:

1. **Open the file** you want to modify
2. **Locate the text** using the line numbers provided above
3. **Replace the content** between the quotes
4. **Save the file**
5. **Test locally** by running `npm run dev`
6. **Build for production** with `npm run build`

### Example: Changing Phone Number

1. Open `src/components/Header.tsx`
2. Find line 38: `<span>+91 9446891522</span>`
3. Change to: `<span>+91 YOUR_NEW_NUMBER</span>`
4. Save the file
5. The change will appear immediately in development

## ⚠️ Important Notes

- **Don't remove** the `'use client'` directive from components with interactive elements
- **Keep the structure** of JSX elements intact
- **Test changes** in development before deploying
- **Backup files** before making major changes
- **Use proper quotes** - single quotes for JSX attributes, double quotes for strings

## 🚀 Deployment

After making changes:

1. **Test locally**: `npm run dev`
2. **Build**: `npm run build`
3. **Deploy** to your hosting platform

## 📞 Need Help?

If you need assistance with content changes:
- Check the browser console for errors
- Ensure all quotes and brackets are properly closed
- Verify that the file structure remains intact
- Test the build process before deploying

---

**Happy editing!** 🎉 