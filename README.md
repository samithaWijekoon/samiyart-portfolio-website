# Video Editor Portfolio Website

A stunning, dynamic portfolio website for video editors and videographers built with pure HTML, CSS, and JavaScript.

## Features

- ✨ Custom animated cursor
- 📊 Scroll progress indicator
- 🎨 Smooth scroll animations with floating effects
- 🎬 Portfolio filtering system
- 💬 Reviews slider
- 📱 Fully responsive design
- 🌈 Purple/Pink/Cyan cosmic color theme
- ⚡ Lightweight and fast
- 🎯 Floating pill-shaped navigation bar

## Technology Stack

- **HTML5** - Structure and content
- **CSS3** - Styling, animations, and effects
- **JavaScript (Vanilla)** - Interactivity and dynamic features
- **Google Fonts (Inter)** - Typography

## Folder Structure

\`\`\`
video-editor-portfolio (4)/
├── index.html          # Main HTML file with all content
├── css/
│   └── styles.css     # All styles, animations, and color theme
├── js/
│   └── script.js      # All JavaScript functionality
├── public/            # Your images go here
│   ├── hero-videographer.jpg
│   ├── about-editor.jpg
│   ├── portfolio-1.jpg to portfolio-6.jpg
│   ├── client-1.jpg to client-3.jpg
│   └── avatar-1.jpg to avatar-6.jpg
└── README.md          # This file
\`\`\`

## Required Images

Place these images in the `public` folder:

### Main Images
- `hero-videographer.jpg` - Hero section image (600x500px recommended)
- `about-editor.jpg` - About section image (600x600px recommended)

### Portfolio Images
- `portfolio-1.jpg` - New Year Festival (600x400px)
- `portfolio-2.jpg` - Office Special Event (600x400px)
- `portfolio-3.jpg` - School Trip (600x400px)
- `portfolio-4.jpg` - Cooking Channel (600x400px)
- `portfolio-5.jpg` - Memories Album (600x400px)
- `portfolio-6.jpg` - Gaming Video (600x400px)

### Client/Review Images
- `client-1.jpg` - Sarah Johnson (80x80px)
- `client-2.jpg` - Michael Chen (80x80px)
- `client-3.jpg` - Emily Rodriguez (80x80px)

### Floating Avatars
- `avatar-1.jpg` to `avatar-6.jpg` - Small circular avatars (60x60px)

## How to Use

### Step 1: Setup
1. Download and extract the ZIP file
2. Create a `public` folder if it doesn't exist
3. Add your images to the `public` folder with the names listed above
4. Open `index.html` in any web browser

### Step 2: Edit Content

#### Change Text Content
Open `index.html` and find the section you want to edit:

- **Hero Section** (Line ~60): Change title, subtitle, button text
  \`\`\`html
  <h1 class="hero-title">
      <span class="reveal-text">Your Title</span>
  </h1>
  \`\`\`

- **Services** (Line ~100): Edit service names
  \`\`\`html
  <h3>Your Service Name</h3>
  \`\`\`

- **About** (Line ~180): Update about text
  \`\`\`html
  <p class="about-description">Your description here</p>
  \`\`\`

- **Portfolio** (Line ~220): Add/remove portfolio items
  \`\`\`html
  <div class="portfolio-item" data-category="event">
      <img src="..." alt="Your Project">
  \`\`\`

- **Contact** (Line ~400): Update contact information
  \`\`\`html
  <span>your-email@example.com</span>
  \`\`\`

#### Change Colors
Open `css/styles.css` and edit the CSS variables at the top (lines 2-15):

\`\`\`css
:root {
  --primary: #a855f7;        /* Purple */
  --accent-pink: #ec4899;    /* Pink */
  --accent-cyan: #06b6d4;    /* Cyan */
}
\`\`\`

To change to a different color scheme, replace these values with your preferred colors.

#### Change Images
All image paths are in `index.html`. They currently point to:
\`\`\`
/Users/apple/Downloads/video-editor-portfolio (4)/public/image-name.jpg
\`\`\`

If you move the folder or want to use relative paths, change them to:
\`\`\`html
<img src="public/image-name.jpg" alt="Description">
\`\`\`

### Step 3: Customize

#### Adjust Animations
Open `js/script.js` to modify:
- **Scroll animation speed** (line ~50): Change `0.8s` in observer options
- **Slider timing** (line ~120): Change `5000` (milliseconds)
- **Parallax intensity** (line ~180): Adjust the `* 20` multiplier

#### Modify Layout
Open `css/styles.css`:
- **Container width** (line 20): Change `--container-width: 1200px`
- **Section padding** (line 21): Change `--section-padding: 100px 0`
- **Grid columns** (line ~200): Change `grid-template-columns: repeat(3, 1fr)`

## Editing in VS Code

1. **Open the folder**: File → Open Folder → Select the portfolio folder
2. **Install Live Server extension** (optional but recommended):
   - Click Extensions icon (or press Ctrl+Shift+X)
   - Search for "Live Server"
   - Click Install
3. **Start editing**: Click on any file to edit
4. **Preview changes**: Right-click `index.html` → "Open with Live Server"

## Key Features Explained

### Custom Cursor
The website has a custom animated cursor that follows your mouse. To disable it, remove these lines from `css/styles.css` (lines 60-80).

### Floating Pill Navigation
The navigation bar floats at the top with a white pill-shaped container. It's always visible and follows you as you scroll.

### Portfolio Filtering
Click the filter buttons to show different categories of work. Categories are set in the HTML with `data-category="event"` attributes.

### Reviews Slider
Automatically cycles through client reviews every 5 seconds. Click the dots to manually navigate.

### Scroll Animations
Elements fade in and slide up as you scroll down the page, creating a dynamic viewing experience.

## Browser Support

Works perfectly in all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Tips for Best Results

- Use high-quality images (at least 1920px wide for hero images)
- Keep file sizes under 500KB per image for fast loading
- Use JPG for photos, PNG for graphics with transparency
- Test on mobile by resizing your browser window
- Keep backups before making major changes

## Troubleshooting

**Images not showing?**
- Check that image paths match your folder structure
- Make sure images are in the `public` folder
- Verify image file names match exactly (case-sensitive)

**Animations not working?**
- Make sure JavaScript is enabled in your browser
- Check browser console for errors (F12 → Console tab)

**Layout looks broken?**
- Clear your browser cache (Ctrl+Shift+Delete)
- Make sure you didn't accidentally delete CSS code

## No Installation Required!

This is pure HTML/CSS/JavaScript with no dependencies:
- No Node.js needed
- No npm packages
- No build process
- Just open and edit!

## Need Help?

- All code files have detailed comments
- Each section is clearly labeled
- CSS is organized by component
- JavaScript functions are well-documented

Enjoy your stunning video editor portfolio! 🎬✨
