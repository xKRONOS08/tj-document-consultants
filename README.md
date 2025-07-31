# T&J Document Consultants Website

A professional Next.js website for Kerala-based property document consultancy services, optimized for free hosting on platforms like Vercel, Netlify, or GitHub Pages.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-first approach with excellent UX
- ⚡ Fast performance with Next.js 14
- 🔧 TypeScript for better development experience
- 📧 Contact form with email integration ready
- 🎯 SEO optimized with proper meta tags
- 🚀 Ready for free hosting deployment

## Services Offered

- **Land Agreement Drafting** - Professional drafting of land sale agreements, lease agreements, and property transfer documents
- **Wills & Trusts** - Expert preparation of wills, trusts, and estate planning documents for property succession
- **Power of Attorney** - Comprehensive power of attorney services for property management and legal representation
- **Rectification Deeds** - Professional rectification and correction of property documents and legal instruments
- **Property Documentation** - Complete property documentation services including title verification and legal compliance
- **Legal Consultation** - Expert legal consultation for property matters with deep understanding of Kerala laws

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
document-consultancy/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── About.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

### Colors
The primary color scheme can be customized in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... other shades
    600: '#2563eb', // Main brand color
  },
}
```

### Content
- Update company information in components
- Modify services in `Services.tsx`
- Change contact details in `Contact.tsx` and `Footer.tsx`
- Update meta tags in `layout.tsx`

### Contact Form
The contact form in `Contact.tsx` is ready for email service integration. You can add:
- EmailJS
- Formspree
- Netlify Forms
- Custom API endpoint

## Free Hosting Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### GitHub Pages
1. Add `next export` to build script
2. Configure GitHub Actions for deployment

## SEO Optimization

- Meta tags configured in `layout.tsx`
- Semantic HTML structure
- Fast loading times
- Mobile responsive
- Accessible design

## Performance

- Optimized images and assets
- Code splitting with Next.js
- CSS purging with Tailwind
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please contact:
- Email: info@docconsult.com
- Phone: +1 (555) 123-4567

---

**Ready to deploy your document consultancy website!** 🚀 