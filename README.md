# Dream Theme - Floating Gear Button

A beautiful floating gear button for ERPNext that provides quick access to settings and customization options.

## Features

- **Floating Gear Button**: A stylish blue circular button that appears on the top-right corner of your ERPNext interface
- **Quick Settings Panel**: Click the gear button to access various settings:
  - Dark Mode toggle
  - Compact View toggle  
  - Auto Refresh toggle
  - Notifications toggle
- **Smooth Animations**: Beautiful hover effects and smooth transitions
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Persistent Settings**: Your preferences are saved in localStorage

## Installation

1. The gear button is automatically included when you install the dreamtheme app
2. Run `bench build --app dreamtheme` to compile assets
3. Restart your bench with `bench restart` or `bench start`

## Usage

1. Look for the blue circular gear button (⚙) on the top-right corner of your ERPNext interface
2. Click on it to open the settings panel
3. Toggle various options as needed:
   - **Dark Mode**: Switch between light and dark themes
   - **Compact View**: Enable compact layout for better space utilization
   - **Auto Refresh**: Automatically refresh dashboard elements every 30 seconds
   - **Notifications**: Enable/disable browser notifications

## Customization

The gear button styles can be customized by modifying the CSS file:
- File: `apps/dreamtheme/dreamtheme/public/css/gear-button.css`
- You can change colors, size, position, and animations

## Technical Details

- **CSS File**: `gear-button.css` - Contains all styling for the button and settings panel
- **JavaScript File**: `gear-button.js` - Handles functionality and user interactions
- **Hooks**: Updated `hooks.py` to include the CSS and JS files in the ERPNext interface

## Browser Support

- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile browsers

## License

MIT License - Feel free to modify and use as needed.