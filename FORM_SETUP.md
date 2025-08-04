# 📧 Formspree Email Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Click "Sign Up" (free)
3. Create account with your email: `tjconsultantsmtdy@gmail.com`

### Step 2: Create New Form
1. Click "New Form"
2. Name it: "T&J Contact Form"
3. Copy the **Form ID** (looks like: `xrgjabrg`)

### Step 3: Update Your Code
Replace `YOUR_FORMSPREE_ID` in `src/components/Contact.tsx` with your actual Form ID:

```tsx
const response = await fetch('https://formspree.io/f/YOUR_ACTUAL_FORM_ID', {
```

### Step 4: Test the Form
1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email: `tjconsultantsmtdy@gmail.com`

## ✅ What You Get

- **Free**: 50 submissions/month
- **Instant emails** to your Gmail
- **Spam protection** included
- **Mobile notifications** (optional)
- **Form analytics** (optional)

## 🔧 Customization Options

### Email Subject Line
The form automatically sets subject as: "New Contact Form Submission from [Name]"

### Email Template
Formspree sends a nicely formatted email with all form fields.

## 🎯 After Setup

- ✅ Form submissions work immediately
- ✅ Emails sent to `tjconsultantsmtdy@gmail.com`
- ✅ Clear form after successful submission
- ✅ Work immediately after deployment

## 📱 Mobile App (Optional)
Download Formspree mobile app to get instant notifications when someone submits the form.

---

**Need help?** Formspree has excellent support and documentation. 