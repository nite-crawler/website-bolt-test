# Henna Artist Portfolio Website

A modern, responsive henna artist portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Modern, clean design with smooth animations
- Responsive layout that works on all devices
- Dynamic gallery system for showcasing henna designs
- Contact section with email and Instagram integration
- About section highlighting henna artistry experience and location
- Smooth scrolling navigation
- Booking-focused contact forms for appointments

## GitHub Pages Deployment

This website is configured for easy deployment to GitHub Pages.

### Setup Instructions

1. Fork or clone this repository
2. Enable GitHub Pages in your repository settings
3. Set the source to "GitHub Actions" 
4. Push your changes to trigger automatic deployment

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

## Local Development

```bash
npm install
npm run dev
```

## Customization

- Update henna designs in the Gallery component by replacing the sample image URLs
- Modify contact information in the Contact component
- Customize the About section with your henna artistry story
- Update social media links and email addresses
- Replace placeholder content with your own information

## Adding New Henna Designs

To add new henna designs to your gallery:

1. Upload your images to a hosting service (like GitHub, Imgur, or your own server)
2. Update the `sampleHennaDesigns` array in `src/components/Gallery.tsx`
3. Add your design details including title, style, year, and description

The gallery will automatically display your new henna designs in the responsive grid layout, perfect for showcasing bridal mehndi, festival designs, and contemporary patterns.