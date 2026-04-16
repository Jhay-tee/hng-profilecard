# HNG Stage 1b – Profile Card (Dark Mode)

## Project Overview
A responsive, accessible profile card built with **vanilla HTML, CSS, and JavaScript**.  
It displays a user's avatar, name, bio, current epoch time, social links, hobbies, and dislikes.  
All elements include required `data-testid` attributes for automated testing.

## Live URL
[View the live project]("check deployed url")  


## GitHub Repository
[Source code on GitHub](https://github.com/Jhay-tee/)

## Features
-  Profile card with semantic HTML (`<article>`, `<figure>`, `<nav>`, `<section>`)
-  Avatar image with meaningful `alt` text
-  Current time in milliseconds (updates every second)
-  Social links open in new tab with `rel="noopener noreferrer"`
-  Hobbies and dislikes as separate lists
-  Fully responsive: avatar left on desktop, stacked on mobile
-  Dark mode styling (black background, white text, high contrast)
-  Keyboard accessible (focus outlines, tab navigation)
-  All `data-testid` attributes exactly as required

## Technologies used
- HTML5
- CSS3 (Flexbox, Grid, media queries)
- Vanilla JavaScript (ES6)

## Accessibility notes
- Avatar has descriptive `alt` text
- Colour contrast meets WCAG AA (white on black/gray)
- Time element uses `aria-live="polite"` for screen reader updates
- All links are keyboard-focusable with visible focus outlines
- Semantic HTML structure supports assistive technologies

## Responsiveness
- **Mobile (≤480px):** stacked layout, smaller padding
- **Tablet (768px):** avatar left, content right (grid layout)
- **Desktop (≥1024px):** same as tablet, more breathing room

## How to run locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git