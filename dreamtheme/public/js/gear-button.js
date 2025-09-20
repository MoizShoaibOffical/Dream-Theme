// Floating Gear Button JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DreamTheme JavaScript loaded');
    console.log('📍 Current URL:', window.location.href);
    console.log('📍 Current pathname:', window.location.pathname);
    console.log('📍 Body data-page-route:', document.body.getAttribute('data-page-route'));
    console.log('📍 Body classes:', document.body.className);
    
    // Check if we're on workspace/dashboard route and hide page header content
    const currentRoute = window.location.pathname;
    const isWorkspaceRoute = currentRoute === '/app' || currentRoute === '/app/' || 
                            document.body.getAttribute('data-page-route') === 'app' ||
                            document.body.getAttribute('data-page-route') === '/app' ||
                            document.body.getAttribute('data-page-route') === '/app/' ||
                            currentRoute === '/workspace' || currentRoute === '/workspace/' ||
                            document.body.getAttribute('data-page-route') === 'workspace' ||
                            document.body.getAttribute('data-page-route') === '/workspace' ||
                            document.body.getAttribute('data-page-route') === '/workspace/' ||
                            currentRoute === '/dashboard' || currentRoute === '/dashboard/' ||
                            document.body.getAttribute('data-page-route') === 'dashboard' ||
                            document.body.getAttribute('data-page-route') === '/dashboard' ||
                            document.body.getAttribute('data-page-route') === '/dashboard/' ||
                            currentRoute === '/' || currentRoute === '/desk' || currentRoute === '/home' || 
                            document.body.getAttribute('data-page-route') === 'home' ||
                            document.body.getAttribute('data-page-route') === 'desk' ||
                            document.body.classList.contains('home-page');
    
    console.log('🔍 Is workspace route:', isWorkspaceRoute);
    
    // Restore ERPNext default page header styling
    restoreDefaultPageHeader();
    
    // Apply notifications icon color
    applyNotificationsIconColor();
    
    // Load saved theme color
    loadSavedThemeColor();
    
    // Apply with delays to ensure elements are loaded
    setTimeout(restoreDefaultPageHeader, 500);
    setTimeout(restoreDefaultPageHeader, 1000);
    setTimeout(restoreDefaultPageHeader, 2000);
    setTimeout(applyNotificationsIconColor, 100);
    setTimeout(applyNotificationsIconColor, 300);
    setTimeout(applyNotificationsIconColor, 500);
    setTimeout(applyNotificationsIconColor, 1000);
    setTimeout(applyNotificationsIconColor, 2000);
    setTimeout(applyNotificationsIconColor, 3000);
    
    // Continuous monitoring with MutationObserver
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                // Check if new buttons were added
                const addedNodes = Array.from(mutation.addedNodes);
                const hasButtons = addedNodes.some(node => 
                    node.nodeType === 1 && (
                        node.tagName === 'BUTTON' || 
                        node.classList?.contains('btn') ||
                        node.querySelector?.('button, .btn')
                    )
                );
                
                if (hasButtons) {
                    console.log('🔄 New buttons detected, applying theme colors...');
                    const savedTheme = localStorage.getItem('dreamThemeColor');
                    if (savedTheme) {
                        const themeColors = {
                            'teal': { primary: '#20c997', secondary: '#17a2b8', accent: '#6f42c1', text: '#ffffff' },
                            'red': { primary: '#dc3545', secondary: '#c82333', accent: '#e74c3c', text: '#ffffff' },
                            'purple': { primary: '#6f42c1', secondary: '#5a32a3', accent: '#8e44ad', text: '#ffffff' },
                            'blue': { primary: '#007bff', secondary: '#0056b3', accent: '#3498db', text: '#ffffff' },
                            'green': { primary: '#28a745', secondary: '#1e7e34', accent: '#2ecc71', text: '#ffffff' },
                            'orange-red': { primary: '#ff4500', secondary: '#e63900', accent: '#ff6347', text: '#ffffff' },
                            'black': { primary: '#000000', secondary: '#333333', accent: '#666666', text: '#ffffff' }
                        };
                        const colors = themeColors[savedTheme] || themeColors['teal'];
                        setTimeout(() => applyThemeToButtons(colors), 100);
                    }
                }
            }
        });
    });
    
    // Start observing
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    const marginObserver = new MutationObserver(() => {
        restoreDefaultPageHeader();
        applyNotificationsIconColor();
    });
    marginObserver.observe(document.body, { 
        childList: true, 
        subtree: true, 
        attributes: true,
        attributeFilter: ['class']
    });
    
    // Apply default layout immediately
    console.log('🎨 Applying default layout...');
    try {
        applyDefaultSidebarLayout();
        console.log('✅ Default layout applied');
    } catch (e) {
        console.error('❌ Default layout application failed:', e);
    }
    
    // Create all buttons immediately
    console.log('🔧 Creating gear button immediately...');
    try {
        createFloatingGearButton();
        console.log('✅ Gear button creation completed');
    } catch (e) {
        console.error('❌ Gear button creation failed:', e);
    }
    
    console.log('📺 Creating fullscreen button immediately...');
    try {
        createFullscreenButton();
        console.log('✅ Fullscreen button creation completed');
    } catch (e) {
        console.error('❌ Fullscreen button creation failed:', e);
    }
    

    // Show ERPNext default notification icon
    console.log('🔔 Showing ERPNext default notification icon...');
    try {
        // Try multiple selectors to find notification dropdown
        const notificationSelectors = [
            '.dropdown-notifications',
            '.navbar .dropdown-notifications',
            '.navbar-nav .dropdown-notifications',
            '.navbar .nav-item.dropdown-notifications',
            'li.dropdown-notifications'
        ];
        
        let notificationDropdown = null;
        for (let selector of notificationSelectors) {
            notificationDropdown = document.querySelector(selector);
            if (notificationDropdown) {
                console.log(`Found notification dropdown with selector: ${selector}`);
                break;
            }
        }
        
        if (notificationDropdown) {
            notificationDropdown.classList.remove('hidden');
            notificationDropdown.style.display = 'block';
            notificationDropdown.style.visibility = 'visible';
            notificationDropdown.style.opacity = '1';
            
            // Force show the notification icon
            const notificationIcon = notificationDropdown.querySelector('.notifications-icon');
            if (notificationIcon) {
                notificationIcon.style.display = 'block';
                notificationIcon.style.visibility = 'visible';
                notificationIcon.style.opacity = '1';
                notificationIcon.style.position = 'relative';
                notificationIcon.style.width = '20px';
                notificationIcon.style.height = '20px';
                
                // Clear any existing content
                notificationIcon.innerHTML = '';
                
                // Add proper styling for CSS bell icon
                notificationIcon.style.border = 'none';
                notificationIcon.style.background = 'none';
                
                // Dynamic color detection based on navbar background
                updateNotificationIconColor(notificationIcon);
                
                console.log('✅ Notification icon configured');
            } else {
                console.log('❌ Notification icon not found in dropdown');
            }
            
            console.log('✅ ERPNext notification dropdown shown');
        } else {
            console.log('❌ ERPNext notification dropdown not found with any selector');
            
            // Debug: List all dropdown elements
            const allDropdowns = document.querySelectorAll('[class*="dropdown"]');
            console.log('Available dropdown elements:', allDropdowns);
        }
    } catch (e) {
        console.error('❌ Failed to show ERPNext notification icon:', e);
    }

    // Wait a bit for page to fully load
    console.log('⏰ Starting additional button creation in 1000ms...');
    setTimeout(function() {
        console.log('🔧 Creating gear button (attempt 2)...');
        createFloatingGearButton();
        // Add navbar enhancements after gear button is created
        setTimeout(function() {
            console.log('🎨 Adding navbar enhancements...');
            addNavbarEnhancements();
            // Create fullscreen button with multiple attempts
            console.log('📺 Creating fullscreen button...');
            createFullscreenButton();
            setTimeout(() => {
                console.log('📺 Creating fullscreen button (attempt 2)...');
                createFullscreenButton();
            }, 1000);
            setTimeout(() => {
                console.log('📺 Creating fullscreen button (attempt 3)...');
                createFullscreenButton();
            }, 2000);
            
            // Notification button removed as requested
            console.log('🔔 Notification button creation skipped');
            // Ensure Add New and Fullscreen buttons are removed
            try {
                removeNavbarButtons();
                // Observe for future DOM changes (SPA navigation)
                const observer = new MutationObserver(() => {
                    removeNavbarButtons();
                    createFullscreenButton();
                    
                    // Show ERPNext notification icon on DOM changes
                    const notificationDropdown = document.querySelector('.dropdown-notifications');
                    if (notificationDropdown) {
                        notificationDropdown.classList.remove('hidden');
                        
                        // Force show the notification icon
                        const notificationIcon = notificationDropdown.querySelector('.notifications-icon');
                        if (notificationIcon) {
                            notificationIcon.style.display = 'block';
                            notificationIcon.style.visibility = 'visible';
                            notificationIcon.style.opacity = '1';
                            notificationIcon.style.position = 'relative';
                            notificationIcon.style.width = '20px';
                            notificationIcon.style.height = '20px';
                            
                            // Clear any existing content
                            notificationIcon.innerHTML = '';
                            
                            // Add proper styling for CSS bell icon
                            notificationIcon.style.border = 'none';
                            notificationIcon.style.background = 'none';
                            
                            // Dynamic color detection based on navbar background
                            updateNotificationIconColor(notificationIcon);
                        }
                    }
                    
                    // Apply default sidebar layout on DOM changes
                    const defaultLayout = 'default';
                    applySidebarLayoutStyles(defaultLayout);
                    localStorage.setItem('sidebarLayout', defaultLayout);
                });
                observer.observe(document.body, { childList: true, subtree: true });
            } catch (e) {
                console.warn('Navbar button removal failed:', e);
            }
        }, 500);
    }, 1000);
});

// Function to restore ERPNext default page header styling
function restoreDefaultPageHeader() {
    console.log('🔄 Restoring ERPNext default page header styling...');
    
    // Remove any custom styling and let ERPNext handle it
    const selectors = [
        '.page-head',
        '.page-head-content',
        '.row.flex.align-center.page-head-content',
        '.page-head .container',
        '.container',
        '.row',
        '.flex',
        '.page-title',
        '.page-actions'
    ];
    
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            // Remove custom inline styles
            element.style.removeProperty('margin');
            element.style.removeProperty('max-width');
            element.style.removeProperty('width');
            element.style.removeProperty('position');
            element.style.removeProperty('top');
            element.style.removeProperty('left');
            element.style.removeProperty('right');
            element.style.removeProperty('z-index');
            element.style.removeProperty('background');
            element.style.removeProperty('border-bottom');
            element.style.removeProperty('box-shadow');
            element.style.removeProperty('height');
            element.style.removeProperty('padding');
            element.style.removeProperty('align-items');
            element.style.removeProperty('justify-content');
        });
    });
    
    console.log('✅ ERPNext default page header styling restored');
}

// Function to apply dynamic color to notifications icon based on navbar background
function applyNotificationsIconColor() {
    console.log('🔔 Applying dynamic color to notifications icon...');
    
    const navbar = document.querySelector('.navbar, .layout-top-section, .header, .main-header');
    
    // Try multiple selectors for notifications icon
    const selectors = [
        '.btn-reset.nav-link.notifications-icon.text-muted',
        '.nav-item.dropdown.dropdown-notifications.dropdown-mobile',
        '.nav-item.dropdown.dropdown-notifications',
        '.dropdown-notifications',
        '[class*="notifications"]',
        '[class*="dropdown-notifications"]'
    ];
    
    let notificationsIcon = null;
    for (const selector of selectors) {
        notificationsIcon = document.querySelector(selector);
        if (notificationsIcon) {
            console.log('✅ Found notifications icon with selector:', selector);
            break;
        }
    }
    
    if (!navbar || !notificationsIcon) {
        console.log('❌ Navbar or notifications icon not found');
        console.log('🔍 Available elements:', document.querySelectorAll('[class*="notifications"]'));
        return;
    }
    
    // Get computed background color
    const computedStyle = window.getComputedStyle(navbar);
    const backgroundColor = computedStyle.backgroundColor;
    const backgroundImage = computedStyle.backgroundImage;
    
    console.log('🎨 Navbar background:', backgroundColor, backgroundImage);
    
    // Determine if background is dark
    let isDark = false;
    
    // Check for dark colors
    if (backgroundColor.includes('rgb(0, 0, 0)') || 
        backgroundColor.includes('rgb(52, 58, 64)') || 
        backgroundColor.includes('rgb(111, 66, 193)') || 
        backgroundColor.includes('rgb(0, 123, 255)') || 
        backgroundColor.includes('rgb(40, 167, 69)') || 
        backgroundColor.includes('rgb(32, 201, 151)')) {
        isDark = true;
    }
    
    // Check inline styles
    const inlineStyle = navbar.getAttribute('style') || '';
    if (inlineStyle.includes('#000000') || 
        inlineStyle.includes('#343a40') || 
        inlineStyle.includes('#6f42c1') || 
        inlineStyle.includes('#007bff') || 
        inlineStyle.includes('#28a745') || 
        inlineStyle.includes('#20c997')) {
        isDark = true;
    }
    
    const textColor = isDark ? '#ffffff' : '#333333';
    const strokeColor = isDark ? '#ffffff' : '#333333';
    const fillColor = isDark ? '#ffffff' : '#333333';
    
    console.log('🎯 Applying color:', textColor, 'to notifications icon');
    console.log('🔍 Notifications icon element:', notificationsIcon);
    
    // ULTIMATE FORCE - Remove all inline styles first
    notificationsIcon.removeAttribute('style');
    const allElements = notificationsIcon.querySelectorAll('*');
    allElements.forEach(element => {
        element.removeAttribute('style');
    });
    
    // Apply color to all elements within notifications icon
    allElements.forEach(element => {
        element.style.setProperty('color', textColor, 'important');
        element.style.setProperty('stroke', strokeColor, 'important');
        element.style.setProperty('fill', fillColor, 'important');
    });
    
    // Apply to the button itself
    notificationsIcon.style.setProperty('color', textColor, 'important');
    notificationsIcon.style.setProperty('stroke', strokeColor, 'important');
    notificationsIcon.style.setProperty('fill', fillColor, 'important');
    
    // Force apply with direct style manipulation
    notificationsIcon.style.color = textColor + ' !important';
    notificationsIcon.style.stroke = strokeColor + ' !important';
    notificationsIcon.style.fill = fillColor + ' !important';
    
    // Apply to all child elements with direct style manipulation
    allElements.forEach(element => {
        element.style.color = textColor + ' !important';
        element.style.stroke = strokeColor + ' !important';
        element.style.fill = fillColor + ' !important';
    });
    
    // NUCLEAR OPTION - Force white for testing
    if (isDark) {
        console.log('🚀 NUCLEAR OPTION - Forcing white color');
        notificationsIcon.style.cssText = `color: #ffffff !important; stroke: #ffffff !important; fill: #ffffff !important;`;
        allElements.forEach(element => {
            element.style.cssText = `color: #ffffff !important; stroke: #ffffff !important; fill: #ffffff !important;`;
        });
        
        // Apply white color to bell icon pseudo-elements
            const style = document.createElement('style');
            style.textContent = `
            .dropdown-notifications .notifications-icon::before,
            .dropdown-notifications .notifications-icon::after {
                border-color: #ffffff !important;
            }
            .dropdown-notifications .notifications-icon::after {
                background: #ffffff !important;
                }
            `;
            document.head.appendChild(style);
    } else {
        // Apply dark color to bell icon pseudo-elements
        const style = document.createElement('style');
        style.textContent = `
            .dropdown-notifications .notifications-icon::before,
            .dropdown-notifications .notifications-icon::after {
                border-color: #333333 !important;
            }
            .dropdown-notifications .notifications-icon::after {
                background: #333333 !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    console.log('✅ Notifications icon color applied:', textColor);
}

// Function to change theme color
function setThemeColor(theme) {
    console.log('🎨 Setting theme color to:', theme);
    
    // Remove active class from all theme color options
    document.querySelectorAll('.theme-color-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Add active class to selected option
    const selectedOption = document.querySelector(`[data-theme="${theme}"]`);
    if (selectedOption) {
        selectedOption.classList.add('active');
    }
    
    // Apply theme color
    applyThemeColorStyles(theme);
    
    // Save to localStorage
    localStorage.setItem('dreamThemeColor', theme);
}

// Function to apply theme color styles
function applyThemeColorStyles(theme) {
    console.log('🎯 Applying theme color styles:', theme);
    
    // Remove existing theme classes
    document.body.classList.remove('theme-orange', 'theme-teal', 'theme-red', 'theme-purple', 'theme-blue', 'theme-green', 'theme-orange-red');
    document.documentElement.classList.remove('theme-orange', 'theme-teal', 'theme-red', 'theme-purple', 'theme-blue', 'theme-green', 'theme-orange-red');
    
    // Add new theme class
    document.body.classList.add(`theme-${theme}`);
    document.documentElement.classList.add(`theme-${theme}`);
    
    // Apply theme-specific colors
    const themeColors = {
        'teal': {
            primary: '#20c997',
            secondary: '#17a2b8',
            accent: '#6f42c1',
            text: '#ffffff'
        },
        'red': {
            primary: '#dc3545',
            secondary: '#c82333',
            accent: '#e74c3c',
            text: '#ffffff'
        },
        'purple': {
            primary: '#6f42c1',
            secondary: '#5a32a3',
            accent: '#8e44ad',
            text: '#ffffff'
        },
        'blue': {
            primary: '#007bff',
            secondary: '#0056b3',
            accent: '#3498db',
            text: '#ffffff'
        },
        'green': {
            primary: '#28a745',
            secondary: '#1e7e34',
            accent: '#2ecc71',
            text: '#ffffff'
        },
        'orange-red': {
            primary: '#ff4500',
            secondary: '#e63900',
            accent: '#ff6347',
            text: '#ffffff'
        },
        'black': {
            primary: '#000000',
            secondary: '#333333',
            accent: '#666666',
            text: '#ffffff'
        }
    };
    
    const colors = themeColors[theme] || themeColors['teal'];
    
    // Apply CSS custom properties
    document.documentElement.style.setProperty('--theme-primary', colors.primary);
    document.documentElement.style.setProperty('--theme-secondary', colors.secondary);
    document.documentElement.style.setProperty('--theme-accent', colors.accent);
    document.documentElement.style.setProperty('--theme-text', colors.text);
    
    // Apply theme colors to buttons
    applyThemeToButtons(colors);
    
    // Apply theme colors to lines and borders
    applyThemeToLines(colors);
    
    // Apply with delays to ensure elements are loaded
    setTimeout(() => applyThemeToButtons(colors), 100);
    setTimeout(() => applyThemeToButtons(colors), 300);
    setTimeout(() => applyThemeToButtons(colors), 500);
    setTimeout(() => applyThemeToButtons(colors), 1000);
    setTimeout(() => applyThemeToButtons(colors), 2000);
    setTimeout(() => applyThemeToButtons(colors), 3000);
    
    console.log('✅ Theme color styles applied:', colors);
}

// Function to apply theme colors to buttons
function applyThemeToButtons(colors) {
    console.log('🔘 Applying theme colors to buttons:', colors);
    
    // Apply to all buttons with more comprehensive selectors
    const buttons = document.querySelectorAll('button, .btn, .btn-primary, .btn-secondary, .btn-success, .btn-danger, .btn-warning, .btn-info, .btn-light, .btn-dark, .btn-sm, .btn-lg, .btn-xs, [class*="btn"], [class*="button"]');
    console.log('🔍 Found buttons:', buttons.length);
    
    buttons.forEach((button, index) => {
        console.log(`🔘 Button ${index + 1}:`, button.className, button.textContent?.trim());
        
        // Primary buttons
        if (button.classList.contains('btn-primary') || button.classList.contains('primary-action')) {
            button.style.setProperty('background-color', colors.primary, 'important');
            button.style.setProperty('border-color', colors.primary, 'important');
            button.style.setProperty('color', colors.text, 'important');
            console.log('✅ Applied primary colors to button:', button.textContent?.trim());
        }
        // Secondary buttons
        else if (button.classList.contains('btn-secondary')) {
            button.style.setProperty('background-color', colors.secondary, 'important');
            button.style.setProperty('border-color', colors.secondary, 'important');
            button.style.setProperty('color', colors.text, 'important');
            console.log('✅ Applied secondary colors to button:', button.textContent?.trim());
        }
        // Success buttons
        else if (button.classList.contains('btn-success')) {
            button.style.setProperty('background-color', colors.primary, 'important');
            button.style.setProperty('border-color', colors.primary, 'important');
            button.style.setProperty('color', colors.text, 'important');
            console.log('✅ Applied success colors to button:', button.textContent?.trim());
        }
        // Danger buttons
        else if (button.classList.contains('btn-danger')) {
            button.style.setProperty('background-color', colors.accent, 'important');
            button.style.setProperty('border-color', colors.accent, 'important');
            button.style.setProperty('color', colors.text, 'important');
            console.log('✅ Applied danger colors to button:', button.textContent?.trim());
        }
        // Default buttons
        else if (button.classList.contains('btn-default') || button.classList.contains('btn')) {
            button.style.setProperty('border-color', colors.primary, 'important');
            button.style.setProperty('color', colors.primary, 'important');
            console.log('✅ Applied default colors to button:', button.textContent?.trim());
        }
        // All other buttons
        else {
            button.style.setProperty('border-color', colors.primary, 'important');
            button.style.setProperty('color', colors.primary, 'important');
            console.log('✅ Applied general colors to button:', button.textContent?.trim());
        }
    });
    
    // Apply to form controls
    const formControls = document.querySelectorAll('.form-control, .input-with-feedback, input[type="text"], input[type="email"], input[type="password"], input[type="number"], input[type="tel"], input[type="url"], textarea, select, .form-select');
    formControls.forEach(control => {
        control.style.setProperty('border-color', colors.primary, 'important');
        control.addEventListener('focus', function() {
            this.style.setProperty('border-color', colors.accent, 'important');
            this.style.setProperty('box-shadow', `0 0 0 0.2rem ${colors.accent}40`, 'important');
        });
    });
    
    // Apply to links that look like buttons
    const buttonLinks = document.querySelectorAll('a.btn, .btn-link, .link-button');
    buttonLinks.forEach(link => {
        link.style.setProperty('color', colors.primary, 'important');
        link.style.setProperty('border-color', colors.primary, 'important');
    });
    
    // Apply to icon buttons
    const iconButtons = document.querySelectorAll('.icon-btn, .btn-icon, .btn-reset');
    iconButtons.forEach(button => {
        button.style.setProperty('color', colors.primary, 'important');
        button.style.setProperty('border-color', colors.primary, 'important');
    });
    
    console.log('✅ Button theme colors applied to', buttons.length, 'buttons');
}

// Function to apply theme colors to lines and borders
function applyThemeToLines(colors) {
    console.log('📏 Applying theme colors to lines and borders:', colors);
    
    // Apply to specific line elements
    const lineElements = document.querySelectorAll('.divider, .border, .border-top, .border-bottom, .border-left, .border-right, hr, .separator, .line, .rule, .hr');
    lineElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
        element.style.backgroundColor = colors.primary + ' !important';
    });
    
    // Apply to table borders
    const tableElements = document.querySelectorAll('table, th, td, .table, .table th, .table td, .data-table, .list-table');
    tableElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
    });
    
    // Apply to card borders
    const cardElements = document.querySelectorAll('.card, .panel, .widget, .box, .container, .row');
    cardElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
    });
    
    // Apply to form borders
    const formElements = document.querySelectorAll('.form-group, .control-group, .field-group, .input-group');
    formElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
    });
    
    // Apply to navigation borders
    const navElements = document.querySelectorAll('.navbar, .nav, .nav-tabs, .nav-pills, .breadcrumb');
    navElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
    });
    
    // Apply to modal borders
    const modalElements = document.querySelectorAll('.modal, .modal-content, .modal-header, .modal-footer');
    modalElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
    });
    
    // Apply to dropdown borders
    const dropdownElements = document.querySelectorAll('.dropdown-menu, .dropdown-content, .dropdown-item');
    dropdownElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
    });
    
    // Apply to alert borders
    const alertElements = document.querySelectorAll('.alert, .notification, .message, .alert-info, .alert-success, .alert-warning, .alert-danger');
    alertElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
    });
    
    // Apply to progress bar borders
    const progressElements = document.querySelectorAll('.progress, .progress-bar, .progress-striped');
    progressElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
    });
    
    // Apply to badge borders
    const badgeElements = document.querySelectorAll('.badge, .label, .tag, .pill');
    badgeElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
    });
    
    // Apply to pagination borders
    const paginationElements = document.querySelectorAll('.pagination, .pagination .page-item, .pagination .page-link');
    paginationElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
    });
    
    // Apply to list borders
    const listElements = document.querySelectorAll('.list-group, .list-group-item, .list-unstyled');
    listElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
    });
    
    // Apply to sidebar borders
    const sidebarElements = document.querySelectorAll('.sidebar, .layout-side-section, .sidebar-menu, .sidebar-section');
    sidebarElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
    });
    
    // Apply to main content borders
    const mainElements = document.querySelectorAll('.main-content, .content-area, .page-content, .layout-main-section');
    mainElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
    });
    
    // Apply to top bar borders
    const topBarElements = document.querySelectorAll('.layout-top-section, .navbar, .header, .top-bar');
    topBarElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
    });
    
    // Apply to page header borders
    const pageHeaderElements = document.querySelectorAll('.page-head, .page-header, .page-title-area');
    pageHeaderElements.forEach(element => {
        element.style.borderColor = colors.primary + ' !important';
    });
    
    console.log('✅ Line theme colors applied');
}

// Function to apply theme colors to backgrounds
function applyThemeToBackgrounds(colors) {
    console.log('🎨 Applying theme colors to backgrounds:', colors);
    
    // Apply to top bar/navbar
    const topBarElements = document.querySelectorAll('.navbar, .navbar-expand-lg, .navbar-container, .header, .main-header, .layout-top-section, .top-bar, [class*="navbar"], [class*="header"], [class*="top"]');
    console.log('🔍 Found top bar elements:', topBarElements.length);
    topBarElements.forEach((element, index) => {
        element.style.setProperty('background-color', colors.primary, 'important');
        element.style.setProperty('color', colors.text, 'important');
        console.log(`✅ Applied top bar colors to element ${index + 1}:`, element.className);
    });
    
    // Apply to sidebar
    const sidebarElements = document.querySelectorAll('.sidebar, .layout-side-section, .side-section, .nav-sidebar, .sidebar-nav, [class*="sidebar"], [class*="side-section"]');
    console.log('🔍 Found sidebar elements:', sidebarElements.length);
    sidebarElements.forEach((element, index) => {
        element.style.setProperty('background-color', colors.secondary, 'important');
        element.style.setProperty('color', colors.text, 'important');
        console.log(`✅ Applied sidebar colors to element ${index + 1}:`, element.className);
    });
    
    // Apply to primary backgrounds
    const primaryBackgrounds = document.querySelectorAll('.bg-primary, .primary-bg, .main-bg, .content-bg');
    primaryBackgrounds.forEach(element => {
        element.style.setProperty('background-color', colors.primary, 'important');
        element.style.setProperty('color', colors.text, 'important');
    });
    
    // Apply to secondary backgrounds
    const secondaryBackgrounds = document.querySelectorAll('.bg-secondary, .secondary-bg, .sidebar-bg');
    secondaryBackgrounds.forEach(element => {
        element.style.setProperty('background-color', colors.secondary, 'important');
        element.style.setProperty('color', colors.text, 'important');
    });
    
    // Apply to accent backgrounds
    const accentBackgrounds = document.querySelectorAll('.bg-accent, .accent-bg, .highlight-bg');
    accentBackgrounds.forEach(element => {
        element.style.setProperty('background-color', colors.accent, 'important');
        element.style.setProperty('color', colors.text, 'important');
    });
    
    // Apply to card headers
    const cardHeaders = document.querySelectorAll('.card-header, .panel-heading, .modal-header');
    cardHeaders.forEach(element => {
        element.style.setProperty('background-color', colors.primary, 'important');
        element.style.setProperty('color', colors.text, 'important');
        element.style.setProperty('border-color', colors.primary, 'important');
    });
    
    // Apply to navigation elements
    const navElements = document.querySelectorAll('.nav, .nav-tabs, .nav-pills');
    navElements.forEach(element => {
        element.style.setProperty('background-color', colors.primary, 'important');
        element.style.setProperty('color', colors.text, 'important');
    });
    
    // Apply to active states
    const activeElements = document.querySelectorAll('.active, .selected, .current');
    activeElements.forEach(element => {
        element.style.setProperty('background-color', colors.accent, 'important');
        element.style.setProperty('color', colors.text, 'important');
    });
    
    console.log('✅ Background theme colors applied');
}

// Function to load saved theme color
function loadSavedThemeColor() {
    const savedTheme = localStorage.getItem('dreamThemeColor');
    if (savedTheme) {
        console.log('📁 Loading saved theme color:', savedTheme);
        setThemeColor(savedTheme);
    }
}



    
    
    

function createFloatingGearButton() {
    console.log('🔧 Creating floating gear button...');
    
    // Remove existing button if any
    const existingButton = document.querySelector('.floating-gear-button');
    if (existingButton) {
        console.log('🗑️ Removing existing gear button');
        existingButton.remove();
    }
    
    // Create button element
    const gearButton = document.createElement('button');
    gearButton.className = 'floating-gear-button';
    gearButton.innerHTML = '<i class="gear-icon">⚙</i>';
    gearButton.title = 'Settings';
    gearButton.style.position = 'fixed';
    gearButton.style.top = '20px';
    gearButton.style.right = '20px';
    gearButton.style.zIndex = '99999';
    gearButton.style.display = 'flex';
    gearButton.style.visibility = 'visible';
    gearButton.style.opacity = '1';
    
    // Create settings panel
    const settingsPanel = document.createElement('div');
    settingsPanel.className = 'settings-panel';
    settingsPanel.innerHTML = `
        <div class="settings-panel-header">
            <div class="header-content">
                <div class="header-icon">🎨</div>
                <div class="header-text">
                    <h5>Theme Customizer</h5>
                    <p>Customize your ERPNext experience</p>
                </div>
            </div>
            <button class="close-btn" onclick="toggleSettingsPanel()">×</button>
        </div>
        <div class="settings-panel-body">
            <div class="theme-section">
                <div class="section-header">
                    <h6>🎨 Theme Colors</h6>
                    <p>Choose your preferred color scheme</p>
                </div>
                <div class="theme-colors-grid">
                    <div class="theme-color-option active" data-theme="teal" onclick="setThemeColor('teal')">
                        <div class="theme-color-swatch teal"></div>
                        <span>Teal</span>
                    </div>
                    <div class="theme-color-option" data-theme="red" onclick="setThemeColor('red')">
                        <div class="theme-color-swatch red"></div>
                        <span>Red</span>
                    </div>
                    <div class="theme-color-option" data-theme="purple" onclick="setThemeColor('purple')">
                        <div class="theme-color-swatch purple"></div>
                        <span>Purple</span>
                    </div>
                    <div class="theme-color-option" data-theme="blue" onclick="setThemeColor('blue')">
                        <div class="theme-color-swatch blue"></div>
                        <span>Blue</span>
                    </div>
                    <div class="theme-color-option" data-theme="green" onclick="setThemeColor('green')">
                        <div class="theme-color-swatch green"></div>
                        <span>Green</span>
                    </div>
                    <div class="theme-color-option" data-theme="orange-red" onclick="setThemeColor('orange-red')">
                        <div class="theme-color-swatch orange-red"></div>
                        <span>Orange Red</span>
                    </div>
                    <div class="theme-color-option" data-theme="black" onclick="setThemeColor('black')">
                        <div class="theme-color-swatch black"></div>
                        <span>Black</span>
                    </div>
                </div>
            </div>
            
            <div class="theme-section">
                <div class="section-header">
                    <h6>🎯 Top Bar Color</h6>
                    <p>Customize the top navigation bar</p>
                </div>
                <div class="color-swatches-grid">
                    <div class="color-swatch white" data-color="white" onclick="setTopBarColor('white')" title="White"></div>
                    <div class="color-swatch light-green active" data-color="lightgreen" onclick="setTopBarColor('lightgreen')" title="Light Green"></div>
                    <div class="color-swatch dark-gray" data-color="darkgray" onclick="setTopBarColor('darkgray')" title="Dark Gray"></div>
                    <div class="color-swatch black" data-color="black" onclick="setTopBarColor('black')" title="Black"></div>
                    <div class="color-swatch blue" data-color="blue" onclick="setTopBarColor('blue')" title="Blue"></div>
                    <div class="color-swatch purple" data-color="purple" onclick="setTopBarColor('purple')" title="Purple"></div>
                    <div class="color-swatch teal" data-color="teal" onclick="setTopBarColor('teal')" title="Teal"></div>
                </div>
            </div>
            
            
            
            <!-- REMOVED SECTIONS AS REQUESTED -->
            <!-- Main Content Color section removed -->
            <!-- Main Content Text Color section removed -->
            
            <!-- Form Content Style section removed -->
            
            
            <div class="theme-section">
                <h6>Sidebar Color</h6>
                <div class="color-section">
                    <label>Solid Colors</label>
                    <div class="color-swatches solid-colors">
                        <div class="color-swatch white" data-color="sidebar-white" onclick="setSidebarColor('sidebar-white')"></div>
                        <div class="color-swatch light-green active" data-color="sidebar-lightgreen" onclick="setSidebarColor('sidebar-lightgreen')"></div>
                        <div class="color-swatch dark-gray" data-color="sidebar-darkgray" onclick="setSidebarColor('sidebar-darkgray')"></div>
                        <div class="color-swatch black" data-color="sidebar-black" onclick="setSidebarColor('sidebar-black')"></div>
                        <div class="color-swatch blue" data-color="sidebar-blue" onclick="setSidebarColor('sidebar-blue')"></div>
                        <div class="color-swatch purple" data-color="sidebar-purple" onclick="setSidebarColor('sidebar-purple')"></div>
                        <div class="color-swatch teal" data-color="sidebar-teal" onclick="setSidebarColor('sidebar-teal')"></div>
                    </div>
                </div>
            </div>
            
            <!-- Sidebar Background Images section removed as requested -->
            
            
            <!-- Font Family section removed as requested -->
            
            <div class="theme-section">
                <h6>Theme Mode</h6>
                <div class="theme-mode-section">
                    <div class="theme-mode-options">
                        <div class="theme-mode-option active" data-mode="light" onclick="setThemeMode('light')">
                            <div class="theme-mode-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                        </div>
                            <span>Light</span>
                        </div>
                        <div class="theme-mode-option" data-mode="dark" onclick="setThemeMode('dark')">
                            <div class="theme-mode-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                        </div>
                            <span>Dark</span>
                        </div>
                        <div class="theme-mode-option" data-mode="system" onclick="setThemeMode('system')">
                            <div class="theme-mode-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                        </div>
                            <span>System</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add click event to gear button
    gearButton.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleSettingsPanel();
    });
    
    // Add click event to document to close panel
    document.addEventListener('click', function(e) {
        if (!gearButton.contains(e.target) && !settingsPanel.contains(e.target)) {
            hideSettingsPanel();
        }
    });
    
    // Append elements to body
    document.body.appendChild(gearButton);
    document.body.appendChild(settingsPanel);
    
    console.log('Gear button and panel created successfully!');
    console.log('Gear button added to DOM:', gearButton);
    console.log('Button position:', gearButton.style.position);
    console.log('Button top:', gearButton.style.top);
    console.log('Button right:', gearButton.style.right);
    console.log('Button z-index:', gearButton.style.zIndex);
}

function toggleSettingsPanel() {
    const panel = document.querySelector('.settings-panel');
    if (panel.classList.contains('show')) {
        hideSettingsPanel();
    } else {
        showSettingsPanel();
    }
}

function showSettingsPanel() {
    const panel = document.querySelector('.settings-panel');
    panel.classList.add('show');
}

function hideSettingsPanel() {
    const panel = document.querySelector('.settings-panel');
    panel.classList.remove('show');
}

// Change top bar color function
function setTopBarColor(color) {
    // Remove active class from all color swatches
    document.querySelectorAll('.theme-section:nth-child(1) .color-swatch').forEach(swatch => {
        swatch.classList.remove('active');
    });
    
    // Add active class to clicked swatch
    event.target.classList.add('active');
    
    // Apply color to top bar/navbar
    const topBar = document.querySelector('.navbar') || document.querySelector('.top-bar') || document.querySelector('.header') || document.querySelector('.navbar-nav');
    
    if (topBar) {
        // Remove existing color classes
        topBar.classList.remove('white', 'lightgreen', 'darkgray', 'black', 'blue', 'purple', 'teal', 'darkblue-gradient', 'lightblue-gradient', 'purple-gradient', 'teal-gradient', 'orange-gradient', 'red-gradient');
        
        // Add new color class
        topBar.classList.add(color);
        
        // Save to localStorage
        localStorage.setItem('topBarColor', color);
    }
    
    // Apply CSS styles based on color
    applyTopBarStyles(color);
}

// Apply CSS styles for different colors
// Enhanced smart color contrast function
function getContrastColor(backgroundColor) {
    // Handle gradient backgrounds
    if (backgroundColor.includes('gradient')) {
        // For gradients, we'll determine based on the overall tone
        if (backgroundColor.includes('darkblue') || backgroundColor.includes('purple') || 
            backgroundColor.includes('teal') || backgroundColor.includes('red')) {
            return '#ffffff'; // White text for dark gradients
        } else if (backgroundColor.includes('orange')) {
            return '#333333'; // Dark text for light gradients
        } else {
            return '#ffffff'; // Default to white for gradients
        }
    }
    
    // Convert hex to RGB
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Calculate relative luminance using WCAG formula
    const rsRGB = r / 255;
    const gsRGB = g / 255;
    const bsRGB = b / 255;
    
    const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
    const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
    const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);
    
    const luminance = 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
    
    // Debug log
    console.log(`Color: ${backgroundColor}, RGB: (${r}, ${g}, ${b}), Luminance: ${luminance}, Text Color: ${luminance > 0.5 ? '#333333' : '#ffffff'}`);
    
    // Return white for dark backgrounds (luminance < 0.5), dark for light backgrounds
    return luminance > 0.5 ? '#333333' : '#ffffff';
}

function applyTopBarStyles(color) {
    let styles = '';
    let backgroundColor = '';
    let textColor = '';
    
    switch(color) {
        case 'white':
            backgroundColor = '#ffffff';
            textColor = getContrastColor(backgroundColor);
            break;
        case 'lightgreen':
            backgroundColor = '#28a745';
            textColor = getContrastColor(backgroundColor);
            break;
        case 'darkgray':
            backgroundColor = '#343a40';
            textColor = getContrastColor(backgroundColor);
            break;
        case 'black':
            backgroundColor = '#000000';
            textColor = getContrastColor(backgroundColor);
            break;
        case 'blue':
            backgroundColor = '#007bff';
            textColor = getContrastColor(backgroundColor);
            break;
        case 'purple':
            backgroundColor = '#6f42c1';
            textColor = getContrastColor(backgroundColor);
            break;
        case 'teal':
            backgroundColor = '#20c997';
            textColor = getContrastColor(backgroundColor);
            break;
        case 'red':
            backgroundColor = '#dc3545';
            textColor = getContrastColor(backgroundColor);
            break;
        case 'orange':
            backgroundColor = '#fd7e14';
            textColor = getContrastColor(backgroundColor);
            break;
        case 'yellow':
            backgroundColor = '#ffc107';
            textColor = getContrastColor(backgroundColor);
            break;
        case 'green':
            backgroundColor = '#198754';
            textColor = getContrastColor(backgroundColor);
            break;
        case 'indigo':
            backgroundColor = '#6610f2';
            textColor = getContrastColor(backgroundColor);
            break;
        case 'pink':
            backgroundColor = '#d63384';
            textColor = getContrastColor(backgroundColor);
            break;
        case 'cyan':
            backgroundColor = '#0dcaf0';
            textColor = getContrastColor(backgroundColor);
            break;
        case 'default':
        default:
            backgroundColor = '#ffffff';
            textColor = getContrastColor(backgroundColor);
            break;
    }
    
    // Debug log
    console.log(`Applying styles for ${color}: Background=${backgroundColor}, Text=${textColor}`);
    
    // Create simple styles - only colors, no layout changes
    if (color.includes('gradient')) {
        styles = `
            /* Main navbar background - only color changes */
            .navbar, .top-bar, .header, .layout-top-section {
                background: ${backgroundColor} !important; 
            }
            
            /* Simple text color changes */
            .layout-top-section *, .layout-top-section .navbar *,
            .layout-top-section .navbar-brand, .layout-top-section .navbar-nav,
            .layout-top-section .navbar-toggler, .layout-top-section .navbar-nav a,
            .layout-top-section .navbar-nav span, .layout-top-section .navbar-nav div,
            .layout-top-section .navbar-nav .nav-link, .layout-top-section .navbar-nav .dropdown-toggle,
            .layout-top-section .navbar-nav i, .layout-top-section .navbar-nav svg,
            .layout-top-section .navbar-nav .btn, .layout-top-section .navbar-nav .form-control,
            .layout-top-section .navbar-nav .nav-item, .layout-top-section .navbar-nav .nav-item a,
            .layout-top-section .navbar-nav .nav-item span, .layout-top-section .navbar-nav .nav-item div,
            .layout-top-section .navbar-nav .nav-item i, .layout-top-section .navbar-nav .nav-item svg,
            .layout-top-section .navbar-nav .dropdown-menu, .layout-top-section .navbar-nav .dropdown-item,
            .layout-top-section .navbar-nav .dropdown-item a, .layout-top-section .navbar-nav .dropdown-item span,
            .layout-top-section .navbar-nav .dropdown-item i, .layout-top-section .navbar-nav .dropdown-item svg,
            .layout-top-section .navbar-nav .form-control, .layout-top-section .navbar-nav .form-control::placeholder,
            .layout-top-section .navbar-nav .btn, .layout-top-section .navbar-nav .btn i,
            .layout-top-section .navbar-nav .btn span, .layout-top-section .navbar-nav .btn svg {
                color: ${textColor} !important; 
            }
            
            .layout-top-section .navbar-nav .nav-link:hover,
            .layout-top-section .navbar-nav .dropdown-toggle:hover ,
            .layout-top-section .navbar-nav .notifications-icon
            {
                color: ${textColor === '#ffffff' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)'} !important;
            }
        `;
    } else {
        styles = `
            /* Main navbar background - only color changes */
            .navbar, .top-bar, .header, .layout-top-section {
                background-color: ${backgroundColor} !important; 
            }
            
            /* Simple text color changes */
            .layout-top-section *, .layout-top-section .navbar *,
            .layout-top-section .navbar-brand, .layout-top-section .navbar-nav,
            .layout-top-section .navbar-toggler, .layout-top-section .navbar-nav a,
            .layout-top-section .navbar-nav span, .layout-top-section .navbar-nav div,
            .layout-top-section .navbar-nav .nav-link, .layout-top-section .navbar-nav .dropdown-toggle,
            .layout-top-section .navbar-nav i, .layout-top-section .navbar-nav svg,
            .layout-top-section .navbar-nav .btn, .layout-top-section .navbar-nav .form-control,
            .layout-top-section .navbar-nav .nav-item, .layout-top-section .navbar-nav .nav-item a,
            .layout-top-section .navbar-nav .nav-item span, .layout-top-section .navbar-nav .nav-item div,
            .layout-top-section .navbar-nav .nav-item i, .layout-top-section .navbar-nav .nav-item svg,
            .layout-top-section .navbar-nav .dropdown-menu, .layout-top-section .navbar-nav .dropdown-item,
            .layout-top-section .navbar-nav .dropdown-item a, .layout-top-section .navbar-nav .dropdown-item span,
            .layout-top-section .navbar-nav .dropdown-item i, .layout-top-section .navbar-nav .dropdown-item svg,
            .layout-top-section .navbar-nav .form-control, .layout-top-section .navbar-nav .form-control::placeholder,
            .layout-top-section .navbar-nav .btn, .layout-top-section .navbar-nav .btn i,
            .layout-top-section .navbar-nav .btn span, .layout-top-section .navbar-nav .btn svg {
                color: ${textColor} !important; 
            }
            
            .layout-top-section .navbar-nav .nav-link:hover,
            .layout-top-section .navbar-nav .dropdown-toggle:hover ,
            layout-top-section .navbar-nav .notifications-icon{
                color: ${textColor === '#ffffff' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)'} !important;
            }
        `;
    }
    console.log('Generated CSS:', styles);
    
    // Remove existing dynamic styles
    const existingStyle = document.getElementById('dynamic-topbar-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add new styles
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-topbar-styles';
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    
    // Force reapply styles after a short delay to override any existing styles
    setTimeout(() => {
        // Apply to all navbar elements
        const navbarElements = document.querySelectorAll('.layout-top-section .navbar-nav *, .layout-top-section *, .navbar *, .top-bar *, .header *');
        navbarElements.forEach(element => {
            element.style.setProperty('color', textColor, 'important');
        });
        
        // Apply enhanced styles to logo
        const logos = document.querySelectorAll('.navbar-brand, .navbar .navbar-brand, .layout-top-section .navbar-brand, .navbar .logo, .navbar img[src*="logo"], .navbar img[alt*="logo"], .navbar img[alt*="Logo"], .navbar img[title*="logo"], .navbar img[title*="Logo"]');
        logos.forEach(logo => {
            logo.style.setProperty('height', '60px', 'important');
            logo.style.setProperty('width', 'auto', 'important');
            logo.style.setProperty('max-height', '60px', 'important');
            logo.style.setProperty('max-width', '200px', 'important');
            logo.style.setProperty('object-fit', 'contain', 'important');
            logo.style.setProperty('transition', 'all 0.3s ease', 'important');
        });
        
        // Apply enhanced styles to search bar specifically - preserve functionality
        const searchInputs = document.querySelectorAll('#navbar-search, input[id*="navbar-search"], .navbar-search, .navbar .form-control[placeholder*="Search"], .navbar input[type="text"][placeholder*="Search"], input[placeholder*="Search"], .form-control[placeholder*="Search"], .search-bar input, .form-inline input');
        searchInputs.forEach(input => {
            // Apply proper search bar styling
            input.style.setProperty('background', '#f8f9fa', 'important');
            input.style.setProperty('border', '1px solid #ced4da', 'important');
            input.style.setProperty('border-radius', '0.375rem', 'important');
            input.style.setProperty('padding', '0.5rem 0.75rem', 'important');
            input.style.setProperty('font-size', '0.875rem', 'important');
            input.style.setProperty('line-height', '1.5', 'important');
            input.style.setProperty('color', '#495057', 'important');
            input.style.setProperty('width', '100%', 'important');
            input.style.setProperty('max-width', '500px', 'important');
            input.style.setProperty('transition', 'all 0.15s ease-in-out', 'important');
            input.style.setProperty('display', 'block', 'important');
            input.style.setProperty('visibility', 'visible', 'important');
            input.style.setProperty('opacity', '1', 'important');
            input.style.setProperty('pointer-events', 'auto', 'important');
            input.style.setProperty('cursor', 'text', 'important');
            input.style.setProperty('position', 'relative', 'important');
            input.style.setProperty('z-index', '10', 'important');
            
            // Ensure search functionality is preserved
            if (input.type === 'text' && input.placeholder) {
                // Preserve ERPNext's awesome bar functionality
                if (input.id === 'navbar-search' && typeof frappe !== 'undefined' && frappe.search && frappe.search.AwesomeBar) {
                    try {
                        const awesome_bar = new frappe.search.AwesomeBar();
                        awesome_bar.setup("#navbar-search");
                        console.log('✅ ERPNext Awesome Bar reinitialized');
                    } catch (e) {
                        console.warn('⚠️ Could not reinitialize Awesome Bar:', e);
                    }
                }
                
                // Remove existing event listeners to avoid duplicates
                input.removeEventListener('keydown', handleSearchKeydown);
                input.removeEventListener('click', handleSearchClick);
                input.removeEventListener('keypress', handleSearchKeypress);
                
                // Add event listeners
                input.addEventListener('keydown', handleSearchKeydown);
                input.addEventListener('click', handleSearchClick);
                input.addEventListener('keypress', handleSearchKeypress);
                
                // Add focus styles
                input.addEventListener('focus', function(e) {
                    this.style.setProperty('outline', 'none', 'important');
                    this.style.setProperty('border-color', '#007bff', 'important');
                    this.style.setProperty('box-shadow', '0 0 0 0.2rem rgba(0, 123, 255, 0.25)', 'important');
                    this.style.setProperty('background', '#ffffff', 'important');
                });
                
                input.addEventListener('blur', function(e) {
                    this.style.setProperty('border-color', '#ced4da', 'important');
                    this.style.setProperty('box-shadow', 'none', 'important');
                    this.style.setProperty('background', '#f8f9fa', 'important');
                });
            }
        });
        
        // Define event handlers outside the loop to avoid duplication
        function handleSearchKeydown(e) {
                    // Preserve Ctrl+G shortcut
                    if (e.ctrlKey && e.key === 'g') {
                        e.preventDefault();
                        this.focus();
                    }
        }
                
        function handleSearchClick(e) {
                // Preserve click functionality
                    this.focus();
        }
                
        function handleSearchKeypress(e) {
                // Preserve Enter key functionality
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        const query = this.value.trim();
                        if (query) {
                            // Use ERPNext's search if available
                            if (typeof frappe !== 'undefined' && frappe.search) {
                                frappe.search.search(query);
                            } else {
                                // Fallback: navigate to search results
                                window.location.href = `/app/search?q=${encodeURIComponent(query)}`;
                            }
                        }
                    }
            }
        
        // Apply to icons specifically
        const icons = document.querySelectorAll('.layout-top-section .navbar-nav i, .layout-top-section .navbar-nav svg, .navbar i, .navbar svg, .top-bar i, .top-bar svg');
        icons.forEach(icon => {
            icon.style.setProperty('color', textColor, 'important');
            icon.style.setProperty('fill', textColor, 'important');
            icon.style.setProperty('stroke', textColor, 'important');
        });
        
        // Apply to user menu elements
        const userMenuElements = document.querySelectorAll('.layout-top-section .navbar-nav .user-menu *, .navbar .user-menu *, .top-bar .user-menu *');
        userMenuElements.forEach(element => {
            element.style.setProperty('color', textColor, 'important');
        });
        
        // Apply to dropdown menus
        const dropdownMenus = document.querySelectorAll('.layout-top-section .navbar-nav .dropdown-menu, .navbar .dropdown-menu, .top-bar .dropdown-menu');
        dropdownMenus.forEach(menu => {
            menu.style.setProperty('background-color', backgroundColor, 'important');
            menu.style.setProperty('border-color', textColor === '#ffffff' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)', 'important');
        });
        
        // Apply to dropdown items
        const dropdownItems = document.querySelectorAll('.layout-top-section .navbar-nav .dropdown-item, .navbar .dropdown-item, .top-bar .dropdown-item');
        dropdownItems.forEach(item => {
            item.style.setProperty('color', textColor, 'important');
        });
        
        // Apply enhanced styles to buttons
        const buttons = document.querySelectorAll('.layout-top-section .navbar-nav .btn, .navbar .btn, .top-bar .btn');
        buttons.forEach(button => {
            button.style.setProperty('color', textColor, 'important');
            button.style.setProperty('border', `2px solid ${textColor === '#ffffff' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'}`, 'important');
            button.style.setProperty('border-radius', '25px', 'important');
            button.style.setProperty('padding', '10px 20px', 'important');
            button.style.setProperty('transition', 'all 0.3s ease', 'important');
            button.style.setProperty('backdrop-filter', 'blur(10px)', 'important');
            button.style.setProperty('box-shadow', '0 4px 15px rgba(0,0,0,0.1)', 'important');
            
            // Add hover effect
            button.addEventListener('mouseenter', function() {
                this.style.setProperty('transform', 'translateY(-2px)', 'important');
                this.style.setProperty('box-shadow', `0 8px 25px ${textColor === '#ffffff' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'}`, 'important');
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.setProperty('transform', 'translateY(0)', 'important');
                this.style.setProperty('box-shadow', '0 4px 15px rgba(0,0,0,0.1)', 'important');
            });
        });
        
        console.log(`Applied ${textColor} text color to ${navbarElements.length} navbar elements`);
    }, 100);
}



// Change main content color function
// REMOVED: changeMainContentColor function

// REMOVED: applyMainContentStyles function

function applyMainContentStyles(color) {
    let styles = '';
    
    switch(color) {
        case 'white':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .codex-editor, .desk-page, .page-main-content,
                .widget, .widget-head, .widget-body, .widget-footer,
                .onboarding-widget-box, .dashboard-widget-box, 
                .shortcut-widget-box, .links-widget-box,
                .ce-block, .ce-block__content,
                .workspace-footer, .btn-new-workspace, .btn-edit-workspace {
                    background-color: #ffffff !important; 
                    color: #333333 !important;
                }
            `;
            break;
        case 'lightgreen':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .codex-editor, .desk-page, .page-main-content,
                .widget, .widget-head, .widget-body, .widget-footer,
                .onboarding-widget-box, .dashboard-widget-box, 
                .shortcut-widget-box, .links-widget-box,
                .ce-block, .ce-block__content,
                .workspace-footer, .btn-new-workspace, .btn-edit-workspace {
                    background-color: #28a745 !important; 
                    color: #ffffff !important;
                }
            `;
            break;
        case 'darkgray':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .codex-editor, .desk-page, .page-main-content,
                .widget, .widget-head, .widget-body, .widget-footer,
                .onboarding-widget-box, .dashboard-widget-box, 
                .shortcut-widget-box, .links-widget-box,
                .ce-block, .ce-block__content,
                .workspace-footer, .btn-new-workspace, .btn-edit-workspace {
                    background-color: #343a40 !important; 
                    color: #ffffff !important;
                }
            `;
            break;
        case 'black':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .layout-main-section *, .layout-main-section-wrapper *,
                .codex-editor, .codex-editor *, .desk-page,
                .desk-page *, .widget, .widget *, .ce-block,
                .ce-block *, .onboarding-widget-box,
                .dashboard-widget-box, .shortcut-widget-box,
                .links-widget-box {
                    background-color: #000000 !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'blue':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .codex-editor, .desk-page, .page-main-content,
                .widget, .widget-head, .widget-body, .widget-footer,
                .onboarding-widget-box, .dashboard-widget-box, 
                .shortcut-widget-box, .links-widget-box,
                .ce-block, .ce-block__content,
                .workspace-footer, .btn-new-workspace, .btn-edit-workspace {
                    background-color: #007bff !important; 
                    color: #ffffff !important;
                }
            `;
            break;
        case 'purple':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .layout-main-section *, .layout-main-section-wrapper *,
                .codex-editor, .codex-editor *, .desk-page,
                .desk-page *, .widget, .widget *, .ce-block,
                .ce-block *, .onboarding-widget-box,
                .dashboard-widget-box, .shortcut-widget-box,
                .links-widget-box {
                    background-color: #6f42c1 !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'teal':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .layout-main-section *, .layout-main-section-wrapper *,
                .codex-editor, .codex-editor *, .desk-page,
                .desk-page *, .widget, .widget *, .ce-block,
                .ce-block *, .onboarding-widget-box,
                .dashboard-widget-box, .shortcut-widget-box,
                .links-widget-box {
                    background-color: #20c997 !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'darkblue-gradient':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .layout-main-section *, .layout-main-section-wrapper *,
                .codex-editor, .codex-editor *, .desk-page,
                .desk-page *, .widget, .widget *, .ce-block,
                .ce-block *, .onboarding-widget-box,
                .dashboard-widget-box, .shortcut-widget-box,
                .links-widget-box {
                    background: linear-gradient(135deg, #1e3c72, #2a5298) !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'lightblue-gradient':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .layout-main-section *, .layout-main-section-wrapper *,
                .codex-editor, .codex-editor *, .desk-page,
                .desk-page *, .widget, .widget *, .ce-block,
                .ce-block *, .onboarding-widget-box,
                .dashboard-widget-box, .shortcut-widget-box,
                .links-widget-box {
                    background: linear-gradient(135deg, #74b9ff, #0984e3) !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'purple-gradient':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .layout-main-section *, .layout-main-section-wrapper *,
                .codex-editor, .codex-editor *, .desk-page,
                .desk-page *, .widget, .widget *, .ce-block,
                .ce-block *, .onboarding-widget-box,
                .dashboard-widget-box, .shortcut-widget-box,
                .links-widget-box {
                    background: linear-gradient(135deg, #a29bfe, #6c5ce7) !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'teal-gradient':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .layout-main-section *, .layout-main-section-wrapper *,
                .codex-editor, .codex-editor *, .desk-page,
                .desk-page *, .widget, .widget *, .ce-block,
                .ce-block *, .onboarding-widget-box,
                .dashboard-widget-box, .shortcut-widget-box,
                .links-widget-box {
                    background: linear-gradient(135deg, #00b894, #00cec9) !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'orange-gradient':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .layout-main-section *, .layout-main-section-wrapper *,
                .codex-editor, .codex-editor *, .desk-page,
                .desk-page *, .widget, .widget *, .ce-block,
                .ce-block *, .onboarding-widget-box,
                .dashboard-widget-box, .shortcut-widget-box,
                .links-widget-box {
                    background: linear-gradient(135deg, #fdcb6e, #e17055) !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'red-gradient':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .layout-main-section *, .layout-main-section-wrapper *,
                .codex-editor, .codex-editor *, .desk-page,
                .desk-page *, .widget, .widget *, .ce-block,
                .ce-block *, .onboarding-widget-box,
                .dashboard-widget-box, .shortcut-widget-box,
                .links-widget-box {
                    background: linear-gradient(135deg, #fd79a8, #e84393) !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
    }
    
    // Remove existing dynamic styles
    const existingStyle = document.getElementById('dynamic-maincontent-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add new styles
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-maincontent-styles';
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}


// Change main content layout function
function changeMainContentLayout(layout) {
    // Remove active class from all layout options
    document.querySelectorAll('.theme-section:nth-child(5) .layout-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Add active class to clicked option
    event.target.closest('.layout-option').classList.add('active');
    
    // Apply layout to main content
    applyMainContentLayout(layout);
    
    // Save to localStorage
    localStorage.setItem('mainContentLayout', layout);
}

// Apply CSS styles for main content layouts
function applyMainContentLayout(layout) {
    let styles = '';
    
    switch(layout) {
        case 'default':
            styles = `
                .widget, .onboarding-widget-box, .dashboard-widget-box, 
                .shortcut-widget-box, .links-widget-box {
                    padding: 1rem !important;
                    margin: 0.5rem !important;
                    border-radius: 8px !important;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
                }
                .btn, .btn-default, .btn-primary, .btn-secondary {
                    padding: 0.5rem 1rem !important;
                    border-radius: 6px !important;
                    font-weight: 500 !important;
                    transition: all 0.3s ease !important;
                }
            `;
            break;
        case 'card':
            styles = `
                .widget, .onboarding-widget-box, .dashboard-widget-box, 
                .shortcut-widget-box, .links-widget-box {
                    padding: 1.5rem !important;
                    margin: 1rem !important;
                    border-radius: 16px !important;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
                    border: 1px solid rgba(255, 255, 255, 0.2) !important;
                }
                .btn, .btn-default, .btn-primary, .btn-secondary {
                    padding: 0.75rem 1.5rem !important;
                    border-radius: 12px !important;
                    font-weight: 600 !important;
                    font-size: 0.9rem !important;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
                    transition: all 0.3s ease !important;
                }
                .btn:hover {
                    transform: translateY(-3px) !important;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2) !important;
                }
            `;
            break;
        case 'minimal':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .codex-editor, .desk-page, .widget {
                    padding: 0.5rem !important;
                    margin: 0 !important;
                    border-radius: 0 !important;
                    box-shadow: none !important;
                    border: 1px solid #e9ecef !important;
                }
            `;
            break;
        case 'modern':
            styles = `
                .widget, .onboarding-widget-box, .dashboard-widget-box, 
                .shortcut-widget-box, .links-widget-box {
                    padding: 2rem !important;
                    margin: 1.5rem !important;
                    border-radius: 20px !important;
                    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12) !important;
                    background: linear-gradient(145deg, #ffffff, #f8f9fa) !important;
                    border: 2px solid rgba(0, 123, 255, 0.1) !important;
                }
                .btn, .btn-default, .btn-primary, .btn-secondary {
                    padding: 1rem 2rem !important;
                    border-radius: 16px !important;
                    font-weight: 700 !important;
                    font-size: 1rem !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.5px !important;
                    box-shadow: 0 6px 16px rgba(0, 123, 255, 0.2) !important;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
                }
                .btn:hover {
                    transform: translateY(-4px) scale(1.05) !important;
                    box-shadow: 0 12px 24px rgba(0, 123, 255, 0.3) !important;
                }
            `;
            break;
        case 'spacious':
            styles = `
                .layout-main-section, .layout-main-section-wrapper {
                    padding: 2rem !important;
                    margin: 1rem !important;
                    border-radius: 8px !important;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
                }
                .widget {
                    border-radius: 8px !important;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
                    margin-bottom: 2rem !important;
                }
            `;
            break;
        case 'compact':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .codex-editor, .desk-page, .widget {
                    padding: 0.25rem !important;
                    margin: 0 !important;
                    border-radius: 0 !important;
                    box-shadow: none !important;
                }
                .widget {
                    margin-bottom: 0.5rem !important;
                }
            `;
            break;
    }
    
    // Remove existing dynamic styles
    const existingStyle = document.getElementById('dynamic-maincontent-layout-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add new styles
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-maincontent-layout-styles';
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

// Change main content font function
function changeMainContentFont(font) {
    // Remove active class from all font options
    document.querySelectorAll('.theme-section:nth-child(6) .font-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Add active class to clicked option
    event.target.closest('.font-option').classList.add('active');
    
    // Apply font to main content
    applyMainContentFont(font);
    
    // Save to localStorage
    localStorage.setItem('mainContentFont', font);
}

// Apply CSS styles for main content fonts
function applyMainContentFont(font) {
    let styles = '';
    
    switch(font) {
        case 'default':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .layout-main-section *, .layout-main-section-wrapper *,
                .codex-editor, .codex-editor *, .desk-page,
                .desk-page *, .widget, .widget *, .ce-block,
                .ce-block *, .onboarding-widget-box,
                .dashboard-widget-box, .shortcut-widget-box,
                .links-widget-box {
                    font-family: inherit !important;
                }
            `;
            break;
        case 'roboto':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .layout-main-section *, .layout-main-section-wrapper *,
                .codex-editor, .codex-editor *, .desk-page,
                .desk-page *, .widget, .widget *, .ce-block,
                .ce-block *, .onboarding-widget-box,
                .dashboard-widget-box, .shortcut-widget-box,
                .links-widget-box {
                    font-family: 'Roboto', sans-serif !important;
                }
            `;
            break;
        case 'opensans':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .layout-main-section *, .layout-main-section-wrapper *,
                .codex-editor, .codex-editor *, .desk-page,
                .desk-page *, .widget, .widget *, .ce-block,
                .ce-block *, .onboarding-widget-box,
                .dashboard-widget-box, .shortcut-widget-box,
                .links-widget-box {
                    font-family: 'Open Sans', sans-serif !important;
                }
            `;
            break;
        case 'lato':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .layout-main-section *, .layout-main-section-wrapper *,
                .codex-editor, .codex-editor *, .desk-page,
                .desk-page *, .widget, .widget *, .ce-block,
                .ce-block *, .onboarding-widget-box,
                .dashboard-widget-box, .shortcut-widget-box,
                .links-widget-box {
                    font-family: 'Lato', sans-serif !important;
                }
            `;
            break;
        case 'montserrat':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .layout-main-section *, .layout-main-section-wrapper *,
                .codex-editor, .codex-editor *, .desk-page,
                .desk-page *, .widget, .widget *, .ce-block,
                .ce-block *, .onboarding-widget-box,
                .dashboard-widget-box, .shortcut-widget-box,
                .links-widget-box {
                    font-family: 'Montserrat', sans-serif !important;
                }
            `;
            break;
        case 'poppins':
            styles = `
                .layout-main-section, .layout-main-section-wrapper,
                .layout-main-section *, .layout-main-section-wrapper *,
                .codex-editor, .codex-editor *, .desk-page,
                .desk-page *, .widget, .widget *, .ce-block,
                .ce-block *, .onboarding-widget-box,
                .dashboard-widget-box, .shortcut-widget-box,
                .links-widget-box {
                    font-family: 'Poppins', sans-serif !important;
                }
            `;
            break;
    }
    
    // Remove existing dynamic styles
    const existingStyle = document.getElementById('dynamic-maincontent-font-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add new styles
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-maincontent-font-styles';
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

// REMOVED: changeMainContentTextColor function
function changeMainContentTextColor(color) {
    // Remove active class from all text color swatches
    document.querySelectorAll('.theme-section:nth-child(4) .color-swatch').forEach(swatch => {
        swatch.classList.remove('active');
    });
    
    // Add active class to clicked swatch
    event.target.classList.add('active');
    
    // Apply text color to main content
    applyMainContentTextStyles(color);
    
    // Save to localStorage
    localStorage.setItem('mainContentTextColor', color);
}


// REMOVED: applyMainContentTextStyles function

function applyMainContentTextStyles(color) {
            let styles = '';
            
            switch(color) {
                case 'white':
                    styles = `
                        .layout-main-section, .layout-main-section-wrapper,
                        .codex-editor, .desk-page, .page-main-content,
                        .widget, .widget-head, .widget-body, .widget-footer,
                        .onboarding-widget-box, .dashboard-widget-box, 
                        .shortcut-widget-box, .links-widget-box,
                        .ce-block, .ce-block__content,
                        .workspace-footer, .btn-new-workspace, .btn-edit-workspace,
                        .layout-main-section *, .layout-main-section-wrapper *,
                        .codex-editor *, .desk-page *, .page-main-content *,
                        .widget *, .widget-head *, .widget-body *, .widget-footer *,
                        .onboarding-widget-box *, .dashboard-widget-box *, 
                        .shortcut-widget-box *, .links-widget-box *,
                        .ce-block *, .ce-block__content *,
                        .workspace-footer *, .btn-new-workspace *, .btn-edit-workspace * {
                            color: #ffffff !important;
                        }
                    `;
                    break;
                case 'black':
                    styles = `
                        .layout-main-section, .layout-main-section-wrapper,
                        .codex-editor, .desk-page, .page-main-content,
                        .widget, .widget-head, .widget-body, .widget-footer,
                        .onboarding-widget-box, .dashboard-widget-box, 
                        .shortcut-widget-box, .links-widget-box,
                        .ce-block, .ce-block__content,
                        .workspace-footer, .btn-new-workspace, .btn-edit-workspace,
                        .layout-main-section *, .layout-main-section-wrapper *,
                        .codex-editor *, .desk-page *, .page-main-content *,
                        .widget *, .widget-head *, .widget-body *, .widget-footer *,
                        .onboarding-widget-box *, .dashboard-widget-box *, 
                        .shortcut-widget-box *, .links-widget-box *,
                        .ce-block *, .ce-block__content *,
                        .workspace-footer *, .btn-new-workspace *, .btn-edit-workspace * {
                            color: #000000 !important;
                        }
                    `;
                    break;
                case 'blue':
                    styles = `
                        .layout-main-section, .layout-main-section-wrapper,
                        .codex-editor, .desk-page, .page-main-content,
                        .widget, .widget-head, .widget-body, .widget-footer,
                        .onboarding-widget-box, .dashboard-widget-box, 
                        .shortcut-widget-box, .links-widget-box,
                        .ce-block, .ce-block__content,
                        .workspace-footer, .btn-new-workspace, .btn-edit-workspace,
                        .layout-main-section *, .layout-main-section-wrapper *,
                        .codex-editor *, .desk-page *, .page-main-content *,
                        .widget *, .widget-head *, .widget-body *, .widget-footer *,
                        .onboarding-widget-box *, .dashboard-widget-box *, 
                        .shortcut-widget-box *, .links-widget-box *,
                        .ce-block *, .ce-block__content *,
                        .workspace-footer *, .btn-new-workspace *, .btn-edit-workspace * {
                            color: #007bff !important;
                        }
                    `;
                    break;
                case 'green':
                    styles = `
                        .layout-main-section, .layout-main-section-wrapper,
                        .codex-editor, .desk-page, .page-main-content,
                        .widget, .widget-head, .widget-body, .widget-footer,
                        .onboarding-widget-box, .dashboard-widget-box, 
                        .shortcut-widget-box, .links-widget-box,
                        .ce-block, .ce-block__content,
                        .workspace-footer, .btn-new-workspace, .btn-edit-workspace,
                        .layout-main-section *, .layout-main-section-wrapper *,
                        .codex-editor *, .desk-page *, .page-main-content *,
                        .widget *, .widget-head *, .widget-body *, .widget-footer *,
                        .onboarding-widget-box *, .dashboard-widget-box *, 
                        .shortcut-widget-box *, .links-widget-box *,
                        .ce-block *, .ce-block__content *,
                        .workspace-footer *, .btn-new-workspace *, .btn-edit-workspace * {
                            color: #28a745 !important;
                        }
                    `;
                    break;
                case 'purple':
                    styles = `
                        .layout-main-section, .layout-main-section-wrapper,
                        .codex-editor, .desk-page, .page-main-content,
                        .widget, .widget-head, .widget-body, .widget-footer,
                        .onboarding-widget-box, .dashboard-widget-box, 
                        .shortcut-widget-box, .links-widget-box,
                        .ce-block, .ce-block__content,
                        .workspace-footer, .btn-new-workspace, .btn-edit-workspace,
                        .layout-main-section *, .layout-main-section-wrapper *,
                        .codex-editor *, .desk-page *, .page-main-content *,
                        .widget *, .widget-head *, .widget-body *, .widget-footer *,
                        .onboarding-widget-box *, .dashboard-widget-box *, 
                        .shortcut-widget-box *, .links-widget-box *,
                        .ce-block *, .ce-block__content *,
                        .workspace-footer *, .btn-new-workspace *, .btn-edit-workspace * {
                            color: #6f42c1 !important;
                        }
                    `;
                    break;
                case 'red':
                    styles = `
                        .layout-main-section, .layout-main-section-wrapper,
                        .codex-editor, .desk-page, .page-main-content,
                        .widget, .widget-head, .widget-body, .widget-footer,
                        .onboarding-widget-box, .dashboard-widget-box, 
                        .shortcut-widget-box, .links-widget-box,
                        .ce-block, .ce-block__content,
                        .workspace-footer, .btn-new-workspace, .btn-edit-workspace,
                        .layout-main-section *, .layout-main-section-wrapper *,
                        .codex-editor *, .desk-page *, .page-main-content *,
                        .widget *, .widget-head *, .widget-body *, .widget-footer *,
                        .onboarding-widget-box *, .dashboard-widget-box *, 
                        .shortcut-widget-box *, .links-widget-box *,
                        .ce-block *, .ce-block__content *,
                        .workspace-footer *, .btn-new-workspace *, .btn-edit-workspace * {
                            color: #dc3545 !important;
                        }
                    `;
                    break;
            }
            
            // Remove existing dynamic styles
            const existingStyle = document.getElementById('dynamic-maincontent-text-styles');
            if (existingStyle) {
                existingStyle.remove();
            }
            
            // Add new styles
            const styleElement = document.createElement('style');
            styleElement.id = 'dynamic-maincontent-text-styles';
            styleElement.textContent = styles;
            document.head.appendChild(styleElement);
        }


// REMOVED: changeFormContentStyle function

function changeFormContentStyle(color, type) {
            // Remove active class from all swatches in the specific color section
            const formSection = document.querySelector('.theme-section:nth-child(5)');
            if (formSection) {
                // Find the specific color section based on type
                let targetSection;
                if (type === 'background') {
                    targetSection = formSection.querySelector('.color-section:nth-child(2)');
                } else if (type === 'font') {
                    targetSection = formSection.querySelector('.color-section:nth-child(3)');
                }
                
                if (targetSection) {
                    targetSection.querySelectorAll('.color-swatch').forEach(swatch => {
                        swatch.classList.remove('active');
                    });
                }
            }
            
            // Add active class to clicked swatch
            event.target.classList.add('active');
            
            // Apply form content style
            applyFormContentStyles(color, type);
            
            // Save to localStorage
            localStorage.setItem(`formContent${type.charAt(0).toUpperCase() + type.slice(1)}`, color);
        }

// REMOVED: applyFormContentStyles function

function applyFormContentStyles(color, type) {
            let styles = '';
            let colorValue = '';
            
            // Get color value
            switch(color) {
                case 'white':
                    colorValue = '#ffffff';
                    break;
                case 'lightgreen':
                    colorValue = '#28a745';
                    break;
                case 'darkgray':
                    colorValue = '#343a40';
                    break;
                case 'black':
                    colorValue = '#000000';
                    break;
                case 'blue':
                    colorValue = '#007bff';
                    break;
                case 'purple':
                    colorValue = '#6f42c1';
                    break;
                case 'teal':
                    colorValue = '#20c997';
                    break;
                case 'red':
                    colorValue = '#dc3545';
                    break;
            }
            
            // Apply styles based on type - Only target form content area, not navbar or other parts
            if (type === 'background') {
                styles = `
                    .layout-main-section .form-layout,
                    .layout-main-section .form-page,
                    .layout-main-section .form-tabs-list,
                    .layout-main-section .form-tab-content,
                    .layout-main-section .form-section,
                    .layout-main-section .card-section,
                    .layout-main-section .section-body,
                    .layout-main-section .section-head,
                    .layout-main-section .form-column,
                    .layout-main-section .form-group,
                    .layout-main-section .frappe-control,
                    .layout-main-section .control-input-wrapper,
                    .layout-main-section .control-input,
                    .layout-main-section .input-with-feedback,
                    .layout-main-section .form-control,
                    .layout-main-section .tab-pane,
                    .layout-main-section .nav-link,
                    .layout-main-section .nav-item,
                    .layout-main-section .grid-field,
                    .layout-main-section .form-grid-container,
                    .layout-main-section .form-grid,
                    .layout-main-section .grid-heading-row,
                    .layout-main-section .grid-body,
                    .layout-main-section .grid-footer,
                    .layout-main-section .timeline-item,
                    .layout-main-section .timeline-content,
                    .layout-main-section .comment-box,
                    .layout-main-section .comment-input-wrapper {
                        background-color: ${colorValue} !important;
                        border: 1px solid transparent !important;
                    }
                `;
            } else if (type === 'font') {
                styles = `
                    .layout-main-section .form-layout,
                    .layout-main-section .form-page,
                    .layout-main-section .form-tabs-list,
                    .layout-main-section .form-tab-content,
                    .layout-main-section .form-section,
                    .layout-main-section .card-section,
                    .layout-main-section .section-body,
                    .layout-main-section .section-head,
                    .layout-main-section .form-column,
                    .layout-main-section .form-group,
                    .layout-main-section .frappe-control,
                    .layout-main-section .control-input-wrapper,
                    .layout-main-section .control-input,
                    .layout-main-section .input-with-feedback,
                    .layout-main-section .form-control,
                    .layout-main-section .tab-pane,
                    .layout-main-section .nav-link,
                    .layout-main-section .nav-item,
                    .layout-main-section .grid-field,
                    .layout-main-section .form-grid-container,
                    .layout-main-section .form-grid,
                    .layout-main-section .grid-heading-row,
                    .layout-main-section .grid-body,
                    .layout-main-section .grid-footer,
                    .layout-main-section .timeline-item,
                    .layout-main-section .timeline-content,
                    .layout-main-section .comment-box,
                    .layout-main-section .comment-input-wrapper,
                    .layout-main-section .form-layout *,
                    .layout-main-section .form-page *,
                    .layout-main-section .form-tabs-list *,
                    .layout-main-section .form-tab-content *,
                    .layout-main-section .form-section *,
                    .layout-main-section .card-section *,
                    .layout-main-section .section-body *,
                    .layout-main-section .section-head *,
                    .layout-main-section .form-column *,
                    .layout-main-section .form-group *,
                    .layout-main-section .frappe-control *,
                    .layout-main-section .control-input-wrapper *,
                    .layout-main-section .control-input *,
                    .layout-main-section .input-with-feedback *,
                    .layout-main-section .form-control *,
                    .layout-main-section .tab-pane *,
                    .layout-main-section .nav-link *,
                    .layout-main-section .nav-item *,
                    .layout-main-section .grid-field *,
                    .layout-main-section .form-grid-container *,
                    .layout-main-section .form-grid *,
                    .layout-main-section .grid-heading-row *,
                    .layout-main-section .grid-body *,
                    .layout-main-section .grid-footer *,
                    .layout-main-section .timeline-item *,
                    .layout-main-section .timeline-content *,
                    .layout-main-section .comment-box *,
                    .layout-main-section .comment-input-wrapper * {
                        color: ${colorValue} !important;
                        border: 1px solid transparent !important;
                    }
                `;
            }
            
            // Remove existing dynamic styles
            const existingStyle = document.getElementById(`dynamic-formcontent-${type}-styles`);
            if (existingStyle) {
                existingStyle.remove();
            }
            
            // Add new styles
            const styleElement = document.createElement('style');
            styleElement.id = `dynamic-formcontent-${type}-styles`;
            styleElement.textContent = styles;
            document.head.appendChild(styleElement);
        }

// Change sidebar color function
function setSidebarColor(color) {
    // Remove active class from all sidebar color swatches
    document.querySelectorAll('.theme-section:nth-child(2) .color-swatch').forEach(swatch => {
        swatch.classList.remove('active');
    });
    
    // Add active class to clicked swatch
    event.target.classList.add('active');
    
    // Apply color to sidebar - ERPNext Specific Detection
    const sidebarSelectors = [
        '.web-sidebar', '.sidebar-column', '.sidebar-items',
        '.sidebar', '.nav-sidebar', '.sidebar-nav', '.sidebar-menu',
        '.col-lg-2.layout-side-section', '.desk-sidebar', '.list-sidebar',
        '.layout-side-section', '.sidebar-container'
    ];
    
    let sidebar = null;
    for (const selector of sidebarSelectors) {
        sidebar = document.querySelector(selector);
        if (sidebar) {
            console.log(`🎨 Found sidebar with selector: ${selector}`);
            break;
        }
    }
    
    if (sidebar) {
        console.log(`🎨 Applying color ${color} to sidebar:`, sidebar.className);
        
        // Remove existing color classes
        const colorClasses = ['sidebar-white', 'sidebar-lightgreen', 'sidebar-darkgray', 'sidebar-black', 'sidebar-blue', 'sidebar-purple', 'sidebar-teal', 'sidebar-darkblue-gradient', 'sidebar-lightblue-gradient', 'sidebar-purple-gradient', 'sidebar-teal-gradient', 'sidebar-orange-gradient', 'sidebar-red-gradient'];
        colorClasses.forEach(cls => sidebar.classList.remove(cls));
        
        // Add new color class
        sidebar.classList.add(color);
        
        // Also apply to parent container if it exists
        const parentContainer = sidebar.closest('.col-lg-2') || sidebar.closest('.layout-side-section');
        if (parentContainer) {
            colorClasses.forEach(cls => parentContainer.classList.remove(cls));
            parentContainer.classList.add(color);
            console.log(`🎨 Also applied color to parent container:`, parentContainer.className);
        }
        
        // Save to localStorage
        localStorage.setItem('sidebarColor', color);
        
        console.log(`✅ Color ${color} applied successfully!`);
    } else {
        console.log('❌ Sidebar not found with any selector');
    }
    
    // Apply CSS styles based on color
    applySidebarStyles(color);
}

// Apply CSS styles for sidebar colors
function applySidebarStyles(color) {
    let styles = '';
    
    // Always target the main sidebar container first
    let mainContainerStyle = '';
    
    switch(color) {
        case 'sidebar-white':
            styles = `
                .col-lg-2.layout-side-section { 
                    background-color: #ffffff !important; 
                    color: #333333 !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .col-lg-2.layout-side-section * {
                    color: #333333 !important;
                }
                .desk-sidebar, .sidebar-menu, .list-sidebar { 
                    background-color: #ffffff !important; 
                    color: #333333 !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .desk-sidebar *, .sidebar-menu *, .list-sidebar *,
                .desk-sidebar a, .sidebar-menu a, .list-sidebar a,
                .desk-sidebar span, .sidebar-menu span, .list-sidebar span,
                .desk-sidebar div, .sidebar-menu div, .list-sidebar div,
                .desk-sidebar li, .sidebar-menu li, .list-sidebar li,
                .desk-sidebar .item-anchor, .sidebar-menu .item-anchor, .list-sidebar .item-anchor,
                .desk-sidebar .sidebar-item-label, .sidebar-menu .sidebar-item-label, .list-sidebar .sidebar-item-label {
                    color: #333333 !important;
                }
                .desk-sidebar-item.selected, .standard-sidebar-item.selected {
                    background-color: rgba(0, 0, 0, 0.1) !important;
                    color: #333333 !important;
                    border-radius: 8px !important;
                    margin: 2px 8px !important;
                }
                .desk-sidebar-item.selected .item-anchor, .standard-sidebar-item.selected .item-anchor {
                    color: #333333 !important;
                }
                .desk-sidebar-item.selected .sidebar-item-label, .standard-sidebar-item.selected .sidebar-item-label {
                    color: #333333 !important;
                }
                .desk-sidebar-item.selected .sidebar-item-icon, .standard-sidebar-item.selected .sidebar-item-icon {
                    color: #ffffff !important;
                }
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background-color: #ffffff !important; 
                    color: #333333 !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .sidebar *, .nav-sidebar *, .sidebar-nav *, .sidebar-menu *,
                .sidebar a, .nav-sidebar a, .sidebar-nav a, .sidebar-menu a,
                .sidebar span, .nav-sidebar span, .sidebar-nav span, .sidebar-menu span,
                .sidebar div, .nav-sidebar div, .sidebar-nav div, .sidebar-menu div,
                .sidebar li, .nav-sidebar li, .sidebar-nav li, .sidebar-menu li {
                    color: #333333 !important;
                }
                .sidebar .active, .nav-sidebar .active, .sidebar-nav .active, .sidebar-menu .active,
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
                    background-color: rgba(0, 0, 0, 0.1) !important;
                    color: #333333 !important;
                }
            `;
            break;
        case 'sidebar-lightgreen':
            styles = `
                .col-lg-2.layout-side-section { 
                    background-color: #28a745 !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .col-lg-2.layout-side-section * {
                    color: #ffffff !important;
                }
                .desk-sidebar, .sidebar-menu, .list-sidebar { 
                    background-color: #28a745 !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .desk-sidebar *, .sidebar-menu *, .list-sidebar *,
                .desk-sidebar a, .sidebar-menu a, .list-sidebar a,
                .desk-sidebar span, .sidebar-menu span, .list-sidebar span,
                .desk-sidebar div, .sidebar-menu div, .list-sidebar div,
                .desk-sidebar li, .sidebar-menu li, .list-sidebar li,
                .desk-sidebar .item-anchor, .sidebar-menu .item-anchor, .list-sidebar .item-anchor,
                .desk-sidebar .sidebar-item-label, .sidebar-menu .sidebar-item-label, .list-sidebar .sidebar-item-label {
                    color: #ffffff !important;
                }
                .desk-sidebar-item.selected, .standard-sidebar-item.selected {
                    background-color: rgba(255, 255, 255, 0.2) !important;
                    color: #ffffff !important;
                    border-radius: 8px !important;
                    margin: 2px 8px !important;
                }
                .desk-sidebar-item.selected .item-anchor, .standard-sidebar-item.selected .item-anchor {
                    color: #ffffff !important;
                }
                .desk-sidebar-item.selected .sidebar-item-label, .standard-sidebar-item.selected .sidebar-item-label {
                    color: #ffffff !important;
                }
                .desk-sidebar-item.selected .sidebar-item-icon, .standard-sidebar-item.selected .sidebar-item-icon {
                    color: #ffffff !important;
                }
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background-color: #28a745 !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .sidebar *, .nav-sidebar *, .sidebar-nav *, .sidebar-menu *,
                .sidebar a, .nav-sidebar a, .sidebar-nav a, .sidebar-menu a,
                .sidebar span, .nav-sidebar span, .sidebar-nav span, .sidebar-menu span,
                .sidebar div, .nav-sidebar div, .sidebar-nav div, .sidebar-menu div,
                .sidebar li, .nav-sidebar li, .sidebar-nav li, .sidebar-menu li,
                .sidebar .nav-link, .nav-sidebar .nav-link, .sidebar-nav .nav-link, .sidebar-menu .nav-link,
                .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
                    color: #333333 !important;
                }
                .desk-sidebar-item, .standard-sidebar-item, .sidebar-item-container {
                    background-color: transparent !important;
                    color: #333333 !important;
                    margin: 2px 8px !important;
                    border-radius: 8px !important;
                    transition: all 0.3s ease !important;
                }
                .desk-sidebar-item a, .standard-sidebar-item a, .sidebar-item-container a {
                    color: #333333 !important;
                    padding: 12px 16px !important;
                    display: block !important;
                    text-decoration: none !important;
                    border-radius: 8px !important;
                    transition: all 0.3s ease !important;
                }
                .desk-sidebar-item:hover, .standard-sidebar-item:hover, .sidebar-item-container:hover {
                    background-color: rgba(40, 167, 69, 0.1) !important;
                }
                .desk-sidebar-item:hover a, .standard-sidebar-item:hover a, .sidebar-item-container:hover a {
                    color: #28a745 !important;
                }
                .desk-sidebar-item.selected, .standard-sidebar-item.selected, .sidebar-item-container.selected {
                    background-color: rgba(40, 167, 69, 0.9) !important;
                    color: #ffffff !important;
                }
                .desk-sidebar-item.selected a, .standard-sidebar-item.selected a, .sidebar-item-container.selected a {
                    color: #ffffff !important;
                }
                .desk-sidebar-item.selected .sidebar-item-icon, .standard-sidebar-item.selected .sidebar-item-icon, .sidebar-item-container.selected .sidebar-item-icon {
                    color: #ffffff !important;
                }
                .desk-sidebar-item.selected .sidebar-item-label, .standard-sidebar-item.selected .sidebar-item-label, .sidebar-item-container.selected .sidebar-item-label {
                    color: #ffffff !important;
                }
                .sidebar .active, .nav-sidebar .active, .sidebar-nav .active, .sidebar-menu .active,
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
                    background-color: rgba(40, 167, 69, 0.9) !important;
                    color: #ffffff !important;
                }
            `;
            break;
        case 'sidebar-darkgray':
            styles = `
                .col-lg-2.layout-side-section { 
                    background-color: #343a40 !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .col-lg-2.layout-side-section * {
                    color: #ffffff !important;
                }
                .desk-sidebar, .sidebar-menu, .list-sidebar { 
                    background-color: #343a40 !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .desk-sidebar *, .sidebar-menu *, .list-sidebar *,
                .desk-sidebar a, .sidebar-menu a, .list-sidebar a,
                .desk-sidebar span, .sidebar-menu span, .list-sidebar span,
                .desk-sidebar div, .sidebar-menu div, .list-sidebar div,
                .desk-sidebar li, .sidebar-menu li, .list-sidebar li,
                .desk-sidebar .item-anchor, .sidebar-menu .item-anchor, .list-sidebar .item-anchor,
                .desk-sidebar .sidebar-item-label, .sidebar-menu .sidebar-item-label, .list-sidebar .sidebar-item-label {
                    color: #ffffff !important;
                }
                .desk-sidebar-item.selected, .standard-sidebar-item.selected {
                    background-color: rgba(255, 255, 255, 0.2) !important;
                    color: #ffffff !important;
                    border-radius: 8px !important;
                    margin: 2px 8px !important;
                }
                .desk-sidebar-item.selected .item-anchor, .standard-sidebar-item.selected .item-anchor {
                    color: #ffffff !important;
                }
                .desk-sidebar-item.selected .sidebar-item-label, .standard-sidebar-item.selected .sidebar-item-label {
                    color: #ffffff !important;
                }
                .desk-sidebar-item.selected .sidebar-item-icon, .standard-sidebar-item.selected .sidebar-item-icon {
                    color: #ffffff !important;
                }
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background-color: #343a40 !important; 
                    color: #ffffff !important;
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .sidebar *, .nav-sidebar *, .sidebar-nav *, .sidebar-menu *,
                .sidebar a, .nav-sidebar a, .sidebar-nav a, .sidebar-menu a,
                .sidebar span, .nav-sidebar span, .sidebar-nav span, .sidebar-menu span,
                .sidebar div, .nav-sidebar div, .sidebar-nav div, .sidebar-menu div,
                .sidebar li, .nav-sidebar li, .sidebar-nav li, .sidebar-menu li,
                .sidebar .nav-link, .nav-sidebar .nav-link, .sidebar-nav .nav-link, .sidebar-menu .nav-link,
                .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
                    color: #ffffff !important;
                }
                .sidebar .active, .nav-sidebar .active, .sidebar-nav .active, .sidebar-menu .active,
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
                    background-color: rgba(255, 255, 255, 0.2) !important;
                    color: #ffffff !important;
                }
            `;
            break;
        case 'sidebar-black':
            styles = `
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background-color: rgba(0, 0, 0, 0.4) !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .sidebar *, .nav-sidebar *, .sidebar-nav *, .sidebar-menu *,
                .sidebar a, .nav-sidebar a, .sidebar-nav a, .sidebar-menu a,
                .sidebar span, .nav-sidebar span, .sidebar-nav span, .sidebar-menu span,
                .sidebar div, .nav-sidebar div, .sidebar-nav div, .sidebar-menu div,
                .sidebar li, .nav-sidebar li, .sidebar-nav li, .sidebar-menu li,
                .sidebar .nav-link, .nav-sidebar .nav-link, .sidebar-nav .nav-link, .sidebar-menu .nav-link,
                .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
                    color: #ffffff !important;
                }
                .sidebar .active, .nav-sidebar .active, .sidebar-nav .active, .sidebar-menu .active,
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
background-color: rgba(255, 255, 255, 0.9) !important;
            color: #333333 !important;
                }
            `;
            break;
        case 'sidebar-blue':
            styles = `
                .col-lg-2.layout-side-section { 
                    background-color: transparent !important; 
                    color: #333333 !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background-color: transparent !important; 
                    color: #333333 !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .sidebar *, .nav-sidebar *, .sidebar-nav *, .sidebar-menu *,
                .sidebar a, .nav-sidebar a, .sidebar-nav a, .sidebar-menu a,
                .sidebar span, .nav-sidebar span, .sidebar-nav span, .sidebar-menu span,
                .sidebar div, .nav-sidebar div, .sidebar-nav div, .sidebar-menu div,
                .sidebar li, .nav-sidebar li, .sidebar-nav li, .sidebar-menu li,
                .sidebar .nav-link, .nav-sidebar .nav-link, .sidebar-nav .nav-link, .sidebar-menu .nav-link,
                .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
                    color: #333333 !important;
                }
                .desk-sidebar-item, .standard-sidebar-item, .sidebar-item-container {
                    background-color: transparent !important;
                    color: #333333 !important;
                    margin: 2px 8px !important;
                    border-radius: 8px !important;
                    transition: all 0.3s ease !important;
                }
                .desk-sidebar-item a, .standard-sidebar-item a, .sidebar-item-container a {
                    color: #333333 !important;
                    padding: 12px 16px !important;
                    display: block !important;
                    text-decoration: none !important;
                    border-radius: 8px !important;
                    transition: all 0.3s ease !important;
                }
                .desk-sidebar-item:hover, .standard-sidebar-item:hover, .sidebar-item-container:hover {
                    background-color: rgba(0, 123, 255, 0.1) !important;
                }
                .desk-sidebar-item:hover a, .standard-sidebar-item:hover a, .sidebar-item-container:hover a {
                    color: #007bff !important;
                }
                .desk-sidebar-item.selected, .standard-sidebar-item.selected, .sidebar-item-container.selected {
                    background-color: rgba(0, 123, 255, 0.9) !important;
                    color: #ffffff !important;
                }
                .desk-sidebar-item.selected a, .standard-sidebar-item.selected a, .sidebar-item-container.selected a {
                    color: #ffffff !important;
                }
                .desk-sidebar-item.selected .sidebar-item-icon, .standard-sidebar-item.selected .sidebar-item-icon, .sidebar-item-container.selected .sidebar-item-icon {
                    color: #ffffff !important;
                }
                .desk-sidebar-item.selected .sidebar-item-label, .standard-sidebar-item.selected .sidebar-item-label, .sidebar-item-container.selected .sidebar-item-label {
                    color: #ffffff !important;
                }
                .sidebar .active, .nav-sidebar .active, .sidebar-nav .active, .sidebar-menu .active,
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
                    background-color: rgba(0, 123, 255, 0.9) !important;
                    color: #ffffff !important;
                }
            `;
            break;
        case 'sidebar-purple':
            styles = `
                .col-lg-2.layout-side-section { 
                    background-color: #9C27B0 !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .col-lg-2.layout-side-section * {
                    color: #ffffff !important;
                }
                .desk-sidebar, .sidebar-menu, .list-sidebar { 
                    background-color: #9C27B0 !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .desk-sidebar *, .sidebar-menu *, .list-sidebar *,
                .desk-sidebar a, .sidebar-menu a, .list-sidebar a,
                .desk-sidebar span, .sidebar-menu span, .list-sidebar span,
                .desk-sidebar div, .sidebar-menu div, .list-sidebar div,
                .desk-sidebar li, .sidebar-menu li, .list-sidebar li,
                .desk-sidebar .item-anchor, .sidebar-menu .item-anchor, .list-sidebar .item-anchor,
                .desk-sidebar .sidebar-item-label, .sidebar-menu .sidebar-item-label, .list-sidebar .sidebar-item-label {
                    color: #ffffff !important;
                }
                .desk-sidebar-item.selected, .standard-sidebar-item.selected {
                    background-color: rgba(255, 255, 255, 0.2) !important;
                    color: #ffffff !important;
                    border-radius: 8px !important;
                    margin: 2px 8px !important;
                }
                .desk-sidebar-item.selected .item-anchor, .standard-sidebar-item.selected .item-anchor {
                    color: #ffffff !important;
                }
                .desk-sidebar-item.selected .sidebar-item-label, .standard-sidebar-item.selected .sidebar-item-label {
                    color: #ffffff !important;
                }
                .desk-sidebar-item.selected .sidebar-item-icon, .standard-sidebar-item.selected .sidebar-item-icon {
                    color: #ffffff !important;
                }
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background-color: #9C27B0 !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .sidebar *, .nav-sidebar *, .sidebar-nav *, .sidebar-menu *,
                .sidebar a, .nav-sidebar a, .sidebar-nav a, .sidebar-menu a,
                .sidebar span, .nav-sidebar span, .sidebar-nav span, .sidebar-menu span,
                .sidebar div, .nav-sidebar div, .sidebar-nav div, .sidebar-menu div,
                .sidebar li, .nav-sidebar li, .sidebar-nav li, .sidebar-menu li,
                .sidebar .nav-link, .nav-sidebar .nav-link, .sidebar-nav .nav-link, .sidebar-menu .nav-link,
                .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
                    color: #ffffff !important;
                }
                .sidebar .active, .nav-sidebar .active, .sidebar-nav .active, .sidebar-menu .active,
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
                    background-color: rgba(255, 255, 255, 0.2) !important;
                    color: #ffffff !important;
                }
            `;
            break;
        case 'sidebar-teal':
            styles = `
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background-color: rgba(32, 201, 151, 0.4) !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .sidebar *, .nav-sidebar *, .sidebar-nav *, .sidebar-menu *,
                .sidebar a, .nav-sidebar a, .sidebar-nav a, .sidebar-menu a,
                .sidebar span, .nav-sidebar span, .sidebar-nav span, .sidebar-menu span,
                .sidebar div, .nav-sidebar div, .sidebar-nav div, .sidebar-menu div,
                .sidebar li, .nav-sidebar li, .sidebar-nav li, .sidebar-menu li,
                .sidebar .nav-link, .nav-sidebar .nav-link, .sidebar-nav .nav-link, .sidebar-menu .nav-link,
                .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
                    color: #ffffff !important;
                }
                .sidebar .active, .nav-sidebar .active, .sidebar-nav .active, .sidebar-menu .active,
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
background-color: rgba(255, 255, 255, 0.9) !important;
            color: #333333 !important;
                }
            `;
            break;
        case 'sidebar-darkblue-gradient':
            styles = `
                .col-lg-2.layout-side-section { 
                    background: linear-gradient(135deg, rgba(30, 60, 114, 0.4), rgba(42, 82, 152, 0.4)) !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .col-lg-2.layout-side-section::after {
                    content: '' !important;
                    position: absolute !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    bottom: 0 !important;
                    background: linear-gradient(135deg, rgba(30, 60, 114, 0.1), rgba(42, 82, 152, 0.1)) !important;
                    z-index: 1 !important;
                }
                .col-lg-2.layout-side-section * {
                    color: #ffffff !important;
                }
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background: linear-gradient(135deg, rgba(30, 60, 114, 0.4), rgba(42, 82, 152, 0.4)) !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .sidebar *, .nav-sidebar *, .sidebar-nav *, .sidebar-menu *,
                .sidebar a, .nav-sidebar a, .sidebar-nav a, .sidebar-menu a,
                .sidebar span, .nav-sidebar span, .sidebar-nav span, .sidebar-menu span,
                .sidebar div, .nav-sidebar div, .sidebar-nav div, .sidebar-menu div,
                .sidebar li, .nav-sidebar li, .sidebar-nav li, .sidebar-menu li,
                .sidebar .nav-link, .nav-sidebar .nav-link, .sidebar-nav .nav-link, .sidebar-menu .nav-link,
                .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
                    color: #ffffff !important;
                }
                .sidebar .active, .nav-sidebar .active, .sidebar-nav .active, .sidebar-menu .active,
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
background-color: rgba(255, 255, 255, 0.9) !important;
            color: #333333 !important;
                }
            `;
            break;
        case 'sidebar-lightblue-gradient':
            styles = `
                .col-lg-2.layout-side-section { 
                    background: linear-gradient(135deg, rgba(116, 185, 255, 0.4), rgba(9, 132, 227, 0.4)) !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .col-lg-2.layout-side-section::after {
                    content: '' !important;
                    position: absolute !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    bottom: 0 !important;
                    background: linear-gradient(135deg, rgba(116, 185, 255, 0.1), rgba(9, 132, 227, 0.1)) !important;
                    z-index: 1 !important;
                }
                .col-lg-2.layout-side-section * {
                    color: #ffffff !important;
                }
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background: linear-gradient(135deg, rgba(116, 185, 255, 0.4), rgba(9, 132, 227, 0.4)) !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .sidebar *, .nav-sidebar *, .sidebar-nav *, .sidebar-menu *,
                .sidebar a, .nav-sidebar a, .sidebar-nav a, .sidebar-menu a,
                .sidebar span, .nav-sidebar span, .sidebar-nav span, .sidebar-menu span,
                .sidebar div, .nav-sidebar div, .sidebar-nav div, .sidebar-menu div,
                .sidebar li, .nav-sidebar li, .sidebar-nav li, .sidebar-menu li,
                .sidebar .nav-link, .nav-sidebar .nav-link, .sidebar-nav .nav-link, .sidebar-menu .nav-link,
                .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
                    color: #ffffff !important;
                }
                .sidebar .active, .nav-sidebar .active, .sidebar-nav .active, .sidebar-menu .active,
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
background-color: rgba(255, 255, 255, 0.9) !important;
            color: #333333 !important;
                }
            `;
            break;
        case 'sidebar-purple-gradient':
            styles = `
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background: linear-gradient(135deg, rgba(162, 155, 254, 0.4), rgba(108, 92, 231, 0.4)) !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .sidebar *, .nav-sidebar *, .sidebar-nav *, .sidebar-menu *,
                .sidebar a, .nav-sidebar a, .sidebar-nav a, .sidebar-menu a,
                .sidebar span, .nav-sidebar span, .sidebar-nav span, .sidebar-menu span,
                .sidebar div, .nav-sidebar div, .sidebar-nav div, .sidebar-menu div,
                .sidebar li, .nav-sidebar li, .sidebar-nav li, .sidebar-menu li,
                .sidebar .nav-link, .nav-sidebar .nav-link, .sidebar-nav .nav-link, .sidebar-menu .nav-link,
                .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
                    color: #ffffff !important;
                }
                .sidebar .active, .nav-sidebar .active, .sidebar-nav .active, .sidebar-menu .active,
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
background-color: rgba(255, 255, 255, 0.9) !important;
            color: #333333 !important;
                }
            `;
            break;
        case 'sidebar-teal-gradient':
            styles = `
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background: linear-gradient(135deg, rgba(0, 184, 148, 0.4), rgba(0, 206, 201, 0.4)) !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .sidebar *, .nav-sidebar *, .sidebar-nav *, .sidebar-menu *,
                .sidebar a, .nav-sidebar a, .sidebar-nav a, .sidebar-menu a,
                .sidebar span, .nav-sidebar span, .sidebar-nav span, .sidebar-menu span,
                .sidebar div, .nav-sidebar div, .sidebar-nav div, .sidebar-menu div,
                .sidebar li, .nav-sidebar li, .sidebar-nav li, .sidebar-menu li,
                .sidebar .nav-link, .nav-sidebar .nav-link, .sidebar-nav .nav-link, .sidebar-menu .nav-link,
                .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
                    color: #ffffff !important;
                }
                .sidebar .active, .nav-sidebar .active, .sidebar-nav .active, .sidebar-menu .active,
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
background-color: rgba(255, 255, 255, 0.9) !important;
            color: #333333 !important;
                }
            `;
            break;
        case 'sidebar-orange-gradient':
            styles = `
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background: linear-gradient(135deg, rgba(253, 203, 110, 0.4), rgba(225, 112, 85, 0.4)) !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .sidebar *, .nav-sidebar *, .sidebar-nav *, .sidebar-menu *,
                .sidebar a, .nav-sidebar a, .sidebar-nav a, .sidebar-menu a,
                .sidebar span, .nav-sidebar span, .sidebar-nav span, .sidebar-menu span,
                .sidebar div, .nav-sidebar div, .sidebar-nav div, .sidebar-menu div,
                .sidebar li, .nav-sidebar li, .sidebar-nav li, .sidebar-menu li,
                .sidebar .nav-link, .nav-sidebar .nav-link, .sidebar-nav .nav-link, .sidebar-menu .nav-link,
                .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
                    color: #ffffff !important;
                }
                .sidebar .active, .nav-sidebar .active, .sidebar-nav .active, .sidebar-menu .active,
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
background-color: rgba(255, 255, 255, 0.9) !important;
            color: #333333 !important;
                }
            `;
            break;
        case 'sidebar-red-gradient':
            styles = `
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background: linear-gradient(135deg, rgba(253, 121, 168, 0.4), rgba(232, 67, 147, 0.4)) !important; 
                    color: #ffffff !important; 
                    position: relative !important;
                    width: 100% !important;
                    height: 100vh !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .sidebar *, .nav-sidebar *, .sidebar-nav *, .sidebar-menu *,
                .sidebar a, .nav-sidebar a, .sidebar-nav a, .sidebar-menu a,
                .sidebar span, .nav-sidebar span, .sidebar-nav span, .sidebar-menu span,
                .sidebar div, .nav-sidebar div, .sidebar-nav div, .sidebar-menu div,
                .sidebar li, .nav-sidebar li, .sidebar-nav li, .sidebar-menu li,
                .sidebar .nav-link, .nav-sidebar .nav-link, .sidebar-nav .nav-link, .sidebar-menu .nav-link,
                .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
                    color: #ffffff !important;
                }
                .sidebar .active, .nav-sidebar .active, .sidebar-nav .active, .sidebar-menu .active,
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
background-color: rgba(255, 255, 255, 0.9) !important;
            color: #333333 !important;
                }
            `;
            break;
    }
    
    // Remove existing dynamic styles
    const existingStyle = document.getElementById('dynamic-sidebar-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add color overlay to all cases
    const overlayStyles = `
        .col-lg-2.layout-side-section::after {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            z-index: 1 !important;
        }
    `;
    
    // Add new styles
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-sidebar-styles';
    styleElement.textContent = styles + overlayStyles;
    document.head.appendChild(styleElement);
}

// REMOVED: Change sidebar background function - Background Images section removed


function changeSidebarBackground(bgType) {
    // Remove active class from all background thumbs
    document.querySelectorAll('.background-thumb').forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    // Add active class to clicked thumb
    event.target.closest('.background-thumb').classList.add('active');
    
    // Apply background to sidebar
    const sidebar = document.querySelector('.sidebar') || document.querySelector('.nav-sidebar') || document.querySelector('.sidebar-nav') || document.querySelector('.sidebar-menu');
    
    if (sidebar) {
        // Remove existing background classes
        sidebar.classList.remove('bg-abstract-lights', 'bg-venice-canal', 'bg-forest-silhouette', 'bg-colorful-objects', 'bg-sunset-water', 'bg-fresh-produce');
        
        // Add new background class
        sidebar.classList.add('bg-' + bgType);
        
        // Save to localStorage
        localStorage.setItem('sidebarBackground', bgType);
    }
    
    // Apply CSS styles for background
    applySidebarBackgroundStyles(bgType);
}


// Change sidebar icon color function
function changeSidebarIconColor(color) {
    // Remove active class from all icon color options
    document.querySelectorAll('.icon-color-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Add active class to clicked option
    event.target.closest('.icon-color-option').classList.add('active');
    
    // Save to localStorage
    localStorage.setItem('sidebarIconColor', color);
    
    // Apply CSS styles for icon color
    applySidebarIconColorStyles(color);
}

// REMOVED: Apply CSS styles for sidebar backgrounds - Background Images section removed
// REMOVED: Apply CSS styles for sidebar backgrounds - Background Images section removed


// Load saved color on page load
function loadSavedColor() {
    const savedColor = localStorage.getItem('topBarColor');
    if (savedColor) {
        // Apply saved color
        const topBar = document.querySelector('.navbar') || document.querySelector('.top-bar') || document.querySelector('.header');
        if (topBar) {
            topBar.classList.add(savedColor);
        }
        applyTopBarStyles(savedColor);
        
        // Mark the corresponding swatch as active
        const activeSwatch = document.querySelector(`[data-color="${savedColor}"]`);
        if (activeSwatch) {
            activeSwatch.classList.add('active');
        }
    }
    
    // Load page header color
    const savedPageHeaderColor = localStorage.getItem('pageHeaderColor');
    if (savedPageHeaderColor) {
        applyPageHeaderStyles(savedPageHeaderColor);
        
        // Mark the corresponding swatch as active
        const activePageHeaderSwatch = document.querySelector(`[onclick="changePageHeaderColor('${savedPageHeaderColor}')"]`);
        if (activePageHeaderSwatch) {
            activePageHeaderSwatch.classList.add('active');
        }
    }
    
    // Load navbar layout
    
    // Load main content color
    const savedMainContentColor = localStorage.getItem('mainContentColor');
    if (savedMainContentColor) {
        applyMainContentStyles(savedMainContentColor);
        
        // Mark the corresponding swatch as active
        const activeMainContentSwatch = document.querySelector(`[onclick="changeMainContentColor('${savedMainContentColor}')"]`);
        if (activeMainContentSwatch) {
            activeMainContentSwatch.classList.add('active');
        }
    }
    
    // Load main content layout
    const savedMainContentLayout = localStorage.getItem('mainContentLayout');
    if (savedMainContentLayout) {
        applyMainContentLayout(savedMainContentLayout);
        
        // Mark the corresponding option as active
        const activeMainContentLayoutOption = document.querySelector(`[data-layout="${savedMainContentLayout}"]`);
        if (activeMainContentLayoutOption) {
            activeMainContentLayoutOption.classList.add('active');
        }
    }
    
        // Load main content text color
        const savedMainContentTextColor = localStorage.getItem('mainContentTextColor');
        if (savedMainContentTextColor) {
            applyMainContentTextStyles(savedMainContentTextColor);
            
            // Mark the corresponding swatch as active
            const activeMainContentTextSwatch = document.querySelector(`[onclick="changeMainContentTextColor('${savedMainContentTextColor}')"]`);
            if (activeMainContentTextSwatch) {
                activeMainContentTextSwatch.classList.add('active');
            }
        }

        // Load form content styles
        const savedFormContentBackground = localStorage.getItem('formContentBackground');
        if (savedFormContentBackground) {
            applyFormContentStyles(savedFormContentBackground, 'background');
            
            // Mark the corresponding swatch as active
            const activeFormBackgroundSwatch = document.querySelector(`[onclick="changeFormContentStyle('${savedFormContentBackground}', 'background')"]`);
            if (activeFormBackgroundSwatch) {
                activeFormBackgroundSwatch.classList.add('active');
            }
        }


        const savedFormContentFont = localStorage.getItem('formContentFont');
        if (savedFormContentFont) {
            applyFormContentStyles(savedFormContentFont, 'font');
            
            // Mark the corresponding swatch as active
            const activeFormFontSwatch = document.querySelector(`[onclick="changeFormContentStyle('${savedFormContentFont}', 'font')"]`);
            if (activeFormFontSwatch) {
                activeFormFontSwatch.classList.add('active');
            }
        }
}

// Change sidebar style function
function changeSidebarStyle(style) {
    // Remove active class from all style options
    document.querySelectorAll('.style-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Add active class to clicked option
    event.target.closest('.style-option').classList.add('active');
    
    // Apply style to sidebar
    const sidebar = document.querySelector('.sidebar') || document.querySelector('.nav-sidebar') || document.querySelector('.sidebar-nav') || document.querySelector('.sidebar-menu');
    
    if (sidebar) {
        // Remove existing style classes
        sidebar.classList.remove('style-modern', 'style-minimal', 'style-glass');
        
        // Add new style class
        sidebar.classList.add('style-' + style);
        
        // Save to localStorage
        localStorage.setItem('sidebarStyle', style);
    }
    
    // Apply CSS styles for style
    applySidebarStyleStyles(style);
}

// Change sidebar text color function
function changeSidebarTextColor(color) {
    // Remove active class from all text color options
    document.querySelectorAll('.text-color-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Add active class to clicked option
    event.target.closest('.text-color-option').classList.add('active');
    
    // Save to localStorage
    localStorage.setItem('sidebarTextColor', color);
    
    // Apply CSS styles for text color
    applySidebarTextColorStyles(color);
}



// Change theme mode function
function setThemeMode(mode) {
    // Remove active class from all theme mode options
    document.querySelectorAll('.theme-mode-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Add active class to clicked option
    event.target.closest('.theme-mode-option').classList.add('active');
    
    // Save to localStorage
    localStorage.setItem('themeMode', mode);
    
    // Apply theme mode
    applyThemeMode(mode);
}

// Apply theme mode styles
function applyThemeMode(mode) {
    const body = document.body;
    const root = document.documentElement;
    
    // Remove existing theme classes
    body.classList.remove('theme-light', 'theme-dark', 'theme-system');
    root.classList.remove('theme-light', 'theme-dark', 'theme-system');
    
    // Connect with ERPNext's theme system
    if (mode === 'light') {
        body.classList.add('theme-light');
        root.classList.add('theme-light');
        // Set ERPNext theme mode
        root.setAttribute('data-theme-mode', 'light');
        document.documentElement.setAttribute("data-theme-mode", "light");
        console.log('🌞 Light mode applied');
    } else if (mode === 'dark') {
        body.classList.add('theme-dark');
        root.classList.add('theme-dark');
        // Set ERPNext theme mode
        root.setAttribute('data-theme-mode', 'dark');
        document.documentElement.setAttribute("data-theme-mode", "dark");
        console.log('🌙 Dark mode applied');
    } else if (mode === 'system') {
        body.classList.add('theme-system');
        root.classList.add('theme-system');
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('theme-dark');
            root.classList.add('theme-dark');
            root.setAttribute('data-theme-mode', 'dark');
            document.documentElement.setAttribute("data-theme-mode", "dark");
            console.log('💻 System mode: Dark (system preference)');
        } else {
            body.classList.add('theme-light');
            root.classList.add('theme-light');
            root.setAttribute('data-theme-mode', 'light');
            document.documentElement.setAttribute("data-theme-mode", "light");
            console.log('💻 System mode: Light (system preference)');
        }
    }
    
    // Trigger ERPNext theme change event
    if (window.frappe && window.frappe.ui && window.frappe.ui.theme_switcher) {
        // Update ERPNext's theme switcher if it exists
        const themeSwitcher = window.frappe.ui.theme_switcher;
        if (themeSwitcher && themeSwitcher.current_theme !== mode) {
            themeSwitcher.current_theme = mode;
        }
    }
    
    // Show success message
    if (window.frappe && window.frappe.show_alert) {
        frappe.show_alert(__("Theme Changed"), 3);
    }
}

// Load saved theme mode on page load
function loadSavedThemeMode() {
    const savedMode = localStorage.getItem('themeMode') || 'light';
    applyThemeMode(savedMode);
    
    // Mark the corresponding option as active
    const activeOption = document.querySelector(`[data-mode="${savedMode}"]`);
    if (activeOption) {
        document.querySelectorAll('.theme-mode-option').forEach(option => {
        option.classList.remove('active');
    });
        activeOption.classList.add('active');
    }
}

// Listen for system theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        const currentMode = localStorage.getItem('themeMode');
        if (currentMode === 'system') {
            applyThemeMode('system');
        }
    });
}

// Sync with ERPNext's theme switcher
function syncWithERPNextTheme() {
    // Listen for ERPNext theme changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme-mode') {
                const erpnextTheme = document.documentElement.getAttribute('data-theme-mode');
                const ourTheme = localStorage.getItem('themeMode');
                
                // If ERPNext theme changed and it's different from ours, update ours
                if (erpnextTheme && erpnextTheme !== ourTheme) {
                    console.log('🔄 ERPNext theme changed to:', erpnextTheme);
                    
                    // Map ERPNext themes to our themes
                    let mappedTheme = 'light';
                    if (erpnextTheme === 'dark') {
                        mappedTheme = 'dark';
                    } else if (erpnextTheme === 'auto' || erpnextTheme === 'system') {
                        mappedTheme = 'system';
                    }
                    
                    // Update our theme mode
                    localStorage.setItem('themeMode', mappedTheme);
                    
                    // Update our UI
                    document.querySelectorAll('.theme-mode-option').forEach(option => {
                        option.classList.remove('active');
                    });
                    const activeOption = document.querySelector(`[data-mode="${mappedTheme}"]`);
                    if (activeOption) {
                        activeOption.classList.add('active');
                    }
                }
            }
        });
    });
    
    // Start observing
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme-mode']
    });
}

// Initialize sync when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(syncWithERPNextTheme, 1000);
});

// Integrate with ERPNext's theme customizer
function integrateWithERPNextCustomizer() {
    // Override ERPNext's theme customizer if it exists
    if (window.erpnext && window.erpnext.theme_customizer) {
        const originalApplyTheme = window.erpnext.theme_customizer.apply_theme;
        
        window.erpnext.theme_customizer.apply_theme = function(values) {
            // Call original function
            if (originalApplyTheme) {
                originalApplyTheme.call(this, values);
            }
            
            // Sync with our customizer
            if (values.theme_mode) {
                let mappedMode = 'light';
                if (values.theme_mode === 'Dark') {
                    mappedMode = 'dark';
                } else if (values.theme_mode === 'System') {
                    mappedMode = 'system';
                }
                
                // Update our theme mode
                localStorage.setItem('themeMode', mappedMode);
                applyThemeMode(mappedMode);
                
                // Update our UI
                document.querySelectorAll('.theme-mode-option').forEach(option => {
                    option.classList.remove('active');
                });
                const activeOption = document.querySelector(`[data-mode="${mappedMode}"]`);
                if (activeOption) {
                    activeOption.classList.add('active');
                }
            }
        };
        
        console.log('✅ Integrated with ERPNext theme customizer');
    }
}

// Initialize integration
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(integrateWithERPNextCustomizer, 2000);
});

// REMOVED: Change sidebar font function - Font Family section removed

// REMOVED: Change sidebar layout function - Layout Style section removed

function changeSidebarLayout(layout) {
    // Force default layout regardless of what user clicks
    const defaultLayout = 'default';
    
    // Remove active class from all layout options
    document.querySelectorAll('.layout-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Add active class to default option only
    const defaultOption = document.querySelector(`[data-layout="${defaultLayout}"]`);
    if (defaultOption) {
        defaultOption.classList.add('active');
    }
    
    // Save default layout to localStorage
    localStorage.setItem('sidebarLayout', defaultLayout);
    
    // Apply CSS styles for default layout
    applySidebarLayoutStyles(defaultLayout);
    
    // Show message that layout is locked to default
    console.log('Sidebar layout is locked to Default');
}

// Apply CSS styles for sidebar styles
function applySidebarStyleStyles(style) {
    let styles = '';
    
    switch(style) {
        case 'modern':
            styles = `
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu {
                    backdrop-filter: blur(10px) !important;
                    border-right: 1px solid rgba(255, 255, 255, 0.1) !important;
                }
                .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
                    margin: 2px 8px !important;
                    border-radius: 8px !important;
                    transition: all 0.3s ease !important;
                }
                .sidebar .nav-item:hover, .nav-sidebar .nav-item:hover, .sidebar-nav .nav-item:hover, .sidebar-menu .nav-item:hover {
                    background-color: rgba(255, 255, 255, 0.1) !important;
                    transform: translateX(4px) !important;
                }
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
                    background-color: rgba(255, 255, 255, 0.9) !important;
                    color: #333333 !important;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2) !important;
                }
                .sidebar .nav-item.active .nav-link, .nav-sidebar .nav-item.active .nav-link, .sidebar-nav .nav-item.active .nav-link, .sidebar-menu .nav-item.active .nav-link,
                .sidebar .nav-item.active .nav-link span, .nav-sidebar .nav-item.active .nav-link span, .sidebar-nav .nav-item.active .nav-link span, .sidebar-menu .nav-item.active .nav-link span {
                    color: #333333 !important;
                }
            `;
            break;
        case 'minimal':
            styles = `
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu {
                    border-right: none !important;
                }
                .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
                    margin: 1px 0 !important;
                    border-radius: 0 !important;
                    transition: all 0.2s ease !important;
                }
                .sidebar .nav-item:hover, .nav-sidebar .nav-item:hover, .sidebar-nav .nav-item:hover, .sidebar-menu .nav-item:hover {
                    background-color: rgba(255, 255, 255, 0.05) !important;
                }
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
                    background-color: rgba(255, 255, 255, 0.9) !important;
                    color: #333333 !important;
                    border-left: 3px solid #007bff !important;
                }
                .sidebar .nav-item.active .nav-link, .nav-sidebar .nav-item.active .nav-link, .sidebar-nav .nav-item.active .nav-link, .sidebar-menu .nav-item.active .nav-link,
                .sidebar .nav-item.active .nav-link span, .nav-sidebar .nav-item.active .nav-link span, .sidebar-nav .nav-item.active .nav-link span, .sidebar-menu .nav-item.active .nav-link span {
                    color: #333333 !important;
                }
            `;
            break;
        case 'glass':
            styles = `
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu {
                    backdrop-filter: blur(20px) saturate(180%) !important;
                    background-color: rgba(0, 0, 0, 0.3) !important;
                    border-right: 1px solid rgba(255, 255, 255, 0.2) !important;
                }
                .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
                    margin: 4px 12px !important;
                    border-radius: 12px !important;
                    transition: all 0.3s ease !important;
                    background-color: rgba(255, 255, 255, 0.05) !important;
                }
                .sidebar .nav-item:hover, .nav-sidebar .nav-item:hover, .sidebar-nav .nav-item:hover, .sidebar-menu .nav-item:hover {
                    background-color: rgba(255, 255, 255, 0.15) !important;
                    transform: scale(1.02) !important;
                }
                .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
                    background-color: rgba(255, 255, 255, 0.9) !important;
                    color: #333333 !important;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
                }
                .sidebar .nav-item.active .nav-link, .nav-sidebar .nav-item.active .nav-link, .sidebar-nav .nav-item.active .nav-link, .sidebar-menu .nav-item.active .nav-link,
                .sidebar .nav-item.active .nav-link span, .nav-sidebar .nav-item.active .nav-link span, .sidebar-nav .nav-item.active .nav-link span, .sidebar-menu .nav-item.active .nav-link span {
                    color: #333333 !important;
                }
            `;
            break;
    }
    
    // Remove existing dynamic styles
    const existingStyle = document.getElementById('dynamic-sidebar-style-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add new styles
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-sidebar-style-styles';
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

// Apply CSS styles for sidebar text colors
function applySidebarTextColorStyles(color) {
    let textColor = '';
    
    switch(color) {
        case 'white':
            textColor = '#ffffff';
            break;
        case 'black':
            textColor = '#333333';
            break;
        case 'blue':
            textColor = '#007bff';
            break;
        case 'green':
            textColor = '#28a745';
            break;
        case 'purple':
            textColor = '#6f42c1';
            break;
        case 'orange':
            textColor = '#fd7e14';
            break;
    }
    
    const styles = `
        .col-lg-2.layout-side-section *,
        .col-lg-2.layout-side-section a,
        .col-lg-2.layout-side-section span,
        .col-lg-2.layout-side-section div,
        .col-lg-2.layout-side-section li,
        .col-lg-2.layout-side-section .item-anchor,
        .col-lg-2.layout-side-section .sidebar-item-label,
        .desk-sidebar *,
        .desk-sidebar a,
        .desk-sidebar span,
        .desk-sidebar div,
        .desk-sidebar li,
        .desk-sidebar .item-anchor,
        .desk-sidebar .sidebar-item-label,
        .sidebar-menu *,
        .sidebar-menu a,
        .sidebar-menu span,
        .sidebar-menu div,
        .sidebar-menu li,
        .sidebar-menu .item-anchor,
        .sidebar-menu .sidebar-item-label {
            color: ${textColor} !important;
        }
    `;
    
    // Remove existing dynamic styles
    const existingStyle = document.getElementById('dynamic-sidebar-text-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add new styles
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-sidebar-text-styles';
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

// Apply CSS styles for sidebar icon colors
function applySidebarIconColorStyles(color) {
    let iconColor = '';
    
    switch(color) {
        case 'white':
            iconColor = '#ffffff';
            break;
        case 'black':
            iconColor = '#333333';
            break;
        case 'blue':
            iconColor = '#007bff';
            break;
        case 'green':
            iconColor = '#28a745';
            break;
        case 'purple':
            iconColor = '#6f42c1';
            break;
        case 'orange':
            iconColor = '#fd7e14';
            break;
    }
    
    const styles = `
        .col-lg-2.layout-side-section .sidebar-item-icon,
        .col-lg-2.layout-side-section .sidebar-item-icon svg,
        .col-lg-2.layout-side-section .sidebar-item-icon svg use,
        .desk-sidebar .sidebar-item-icon,
        .desk-sidebar .sidebar-item-icon svg,
        .desk-sidebar .sidebar-item-icon svg use,
        .sidebar-menu .sidebar-item-icon,
        .sidebar-menu .sidebar-item-icon svg,
        .sidebar-menu .sidebar-item-icon svg use,
        .col-lg-2.layout-side-section svg,
        .col-lg-2.layout-side-section svg use,
        .desk-sidebar svg,
        .desk-sidebar svg use,
        .sidebar-menu svg,
        .sidebar-menu svg use {
            color: ${iconColor} !important;
            fill: ${iconColor} !important;
        }
    `;
    
    // Remove existing dynamic styles
    const existingStyle = document.getElementById('dynamic-sidebar-icon-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add new styles
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-sidebar-icon-styles';
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

// REMOVED: Apply CSS styles for sidebar fonts - Font Family section removed

// Apply CSS styles for sidebar layouts
function applySidebarLayoutStyles(layout) {
    let styles = '';
    
    switch(layout) {
        case 'default':
            styles = `
                .col-lg-2.layout-side-section .desk-sidebar-item,
                .col-lg-2.layout-side-section .standard-sidebar-item {
                    padding: 8px 12px !important;
                    margin: 2px 8px !important;
                    border-radius: 4px !important;
                    transition: all 0.2s ease !important;
                }
                .col-lg-2.layout-side-section .sidebar-item-label {
                    font-size: 14px !important;
                    font-weight: 400 !important;
                }
            `;
            break;
        case 'modern':
            styles = `
                .col-lg-2.layout-side-section .desk-sidebar-item,
                .col-lg-2.layout-side-section .standard-sidebar-item {
                    padding: 12px 16px !important;
                    margin: 4px 12px !important;
                    border-radius: 8px !important;
                    transition: all 0.3s ease !important;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
                }
                .col-lg-2.layout-side-section .desk-sidebar-item:hover,
                .col-lg-2.layout-side-section .standard-sidebar-item:hover {
                    transform: translateX(4px) !important;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;
                }
                .col-lg-2.layout-side-section .sidebar-item-label {
                    font-size: 15px !important;
                    font-weight: 500 !important;
                }
            `;
            break;
        case 'compact':
            styles = `
                .col-lg-2.layout-side-section .desk-sidebar-item,
                .col-lg-2.layout-side-section .standard-sidebar-item {
                    padding: 6px 10px !important;
                    margin: 1px 6px !important;
                    border-radius: 3px !important;
                    transition: all 0.2s ease !important;
                }
                .col-lg-2.layout-side-section .sidebar-item-label {
                    font-size: 13px !important;
                    font-weight: 400 !important;
                }
                .col-lg-2.layout-side-section .sidebar-item-icon {
                    width: 16px !important;
                    height: 16px !important;
                }
            `;
            break;
        case 'spacious':
            styles = `
                .col-lg-2.layout-side-section .desk-sidebar-item,
                .col-lg-2.layout-side-section .standard-sidebar-item {
                    padding: 16px 20px !important;
                    margin: 6px 16px !important;
                    border-radius: 12px !important;
                    transition: all 0.3s ease !important;
                }
                .col-lg-2.layout-side-section .desk-sidebar-item:hover,
                .col-lg-2.layout-side-section .standard-sidebar-item:hover {
                    transform: scale(1.02) !important;
                }
                .col-lg-2.layout-side-section .sidebar-item-label {
                    font-size: 16px !important;
                    font-weight: 500 !important;
                }
                .col-lg-2.layout-side-section .sidebar-item-icon {
                    width: 24px !important;
                    height: 24px !important;
                }
            `;
            break;
    }
    
    // Remove existing dynamic styles
    const existingStyle = document.getElementById('dynamic-sidebar-layout-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add new styles
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-sidebar-layout-styles';
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

// Load saved sidebar settings on page load
function loadSavedSidebarSettings() {
    const savedColor = localStorage.getItem('sidebarColor');
    const savedBackground = localStorage.getItem('sidebarBackground');
    const savedStyle = localStorage.getItem('sidebarStyle');
    const savedTextColor = localStorage.getItem('sidebarTextColor');
    const savedIconColor = localStorage.getItem('sidebarIconColor');
    const savedFont = localStorage.getItem('sidebarFont');
    const savedLayout = localStorage.getItem('sidebarLayout');
    
    if (savedColor) {
        const sidebar = document.querySelector('.sidebar') || document.querySelector('.nav-sidebar') || document.querySelector('.sidebar-nav');
        if (sidebar) {
            sidebar.classList.add(savedColor);
        }
        applySidebarStyles(savedColor);
        
        const activeSwatch = document.querySelector(`[data-color="${savedColor}"]`);
        if (activeSwatch) {
            activeSwatch.classList.add('active');
        }
    }
    
    if (savedBackground) {
        const sidebar = document.querySelector('.sidebar') || document.querySelector('.nav-sidebar') || document.querySelector('.sidebar-nav');
        if (sidebar) {
            sidebar.classList.add('bg-' + savedBackground);
        }
        applySidebarBackgroundStyles(savedBackground);
        
        const activeThumb = document.querySelector(`[data-bg="${savedBackground}"]`);
        if (activeThumb) {
            activeThumb.classList.add('active');
        }
    }
    
    if (savedStyle) {
        const sidebar = document.querySelector('.sidebar') || document.querySelector('.nav-sidebar') || document.querySelector('.sidebar-nav');
        if (sidebar) {
            sidebar.classList.add('style-' + savedStyle);
        }
        applySidebarStyleStyles(savedStyle);
        
        const activeStyle = document.querySelector(`[data-style="${savedStyle}"]`);
        if (activeStyle) {
            activeStyle.classList.add('active');
        }
    }
    
    if (savedTextColor) {
        applySidebarTextColorStyles(savedTextColor);
        
        const activeTextColor = document.querySelector(`[data-text-color="${savedTextColor}"]`);
        if (activeTextColor) {
            activeTextColor.classList.add('active');
        }
    }
    
    if (savedIconColor) {
        applySidebarIconColorStyles(savedIconColor);
        
        const activeIconColor = document.querySelector(`[data-icon-color="${savedIconColor}"]`);
        if (activeIconColor) {
            activeIconColor.classList.add('active');
        }
    }
    
    if (savedFont) {
        applySidebarFontStyles(savedFont);
        
        const activeFont = document.querySelector(`[data-font="${savedFont}"]`);
        if (activeFont) {
            activeFont.classList.add('active');
        }
    }
    
    // Apply default sidebar layout (even though UI is removed)
    const defaultLayout = 'default';
    applySidebarLayoutStyles(defaultLayout);
    
    // Save default layout to localStorage
    localStorage.setItem('sidebarLayout', defaultLayout);
}

// Load saved color when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        loadSavedColor();
        loadSavedSidebarSettings();
        loadSavedThemeMode();
        
        // Force default sidebar layout on page load
        const defaultLayout = 'default';
        applySidebarLayoutStyles(defaultLayout);
        localStorage.setItem('sidebarLayout', defaultLayout);
        console.log('✅ Default sidebar layout applied');
    }, 1000); // Delay to ensure elements are loaded
});

// Add navbar enhancements
function addNavbarEnhancements() {
    console.log('🚀 Adding navbar enhancements...');
    console.log('🔍 Current URL:', window.location.href);
    console.log('📄 Document ready state:', document.readyState);
    
    // Wait for navbar to be ready
    setTimeout(() => {
        // Try multiple selectors to find navbar
        let navbar = document.querySelector('.layout-top-section .navbar-nav');
        if (!navbar) {
            navbar = document.querySelector('.navbar-nav');
        }
        if (!navbar) {
            navbar = document.querySelector('.layout-top-section');
        }
        if (!navbar) {
            navbar = document.querySelector('.navbar');
        }
        
        console.log('Navbar found:', navbar);
        
        if (!navbar) {
            console.log('Navbar not found, retrying...');
            setTimeout(addNavbarEnhancements, 1000);
            return;
        }
        
        // Permanently remove any Add New / Fullscreen from DOM and skip creating new ones
        const removeSelectors = [
            '.add-new-btn',
            '.fullscreen-btn',
            '.nav.user-menu .nav-item.link-nav',
            '.nav.user-menu li.link-nav',
            '.link-nav',
            '.dropdown-menu.dropdown-xl.dropdown-menu-center'
        ];
        document.querySelectorAll(removeSelectors.join(',')).forEach(n => { try { n.remove(); } catch(_){} });

        // Remove by text match as well
        document.querySelectorAll('.nav.user-menu .nav-item, .navbar .nav-item, .layout-top-section .nav-item, a, button').forEach(el => {
            const t = (el.textContent || '').trim().toLowerCase();
            if (t === 'add new' || t.startsWith('add new')) {
                const node = el.closest('li, .nav-item, .dropdown, .btn-group') || el;
                try { node.remove(); } catch(_){}
            }
        });

        // Also remove any remaining plus-icon based nav
        document.querySelectorAll('i.ti.ti-circle-plus, i.ti-circle-plus').forEach(icon => {
            const node = icon.closest('li, .nav-item, .dropdown') || icon;
            try { node.remove(); } catch(_){}
        });

        console.log('🔧 Skipped creating Add New/Fullscreen and removed existing elements');
        
        // End early: do not add any buttons
        return;
        
        // Also try to add to top bar if navbar approach didn't work
        setTimeout(() => {
            const topBar = document.querySelector('.layout-top-section');
            if (topBar && !document.querySelector('.fullscreen-btn')) {
                console.log('Adding buttons to top bar as fallback...');
                
                // Create container for buttons
                const buttonContainer = document.createElement('div');
                buttonContainer.style.cssText = 'display: flex; align-items: center; margin-left: auto; gap: 8px;';
                
                // Recreate buttons - Add New first, then Full Screen
                const addNewBtn2 = document.createElement('div');
                addNewBtn2.className = 'add-new-btn';
                addNewBtn2.innerHTML = '<span style="font-size: 16px; margin-right: 8px;">+</span> Add New';
                addNewBtn2.title = 'Add New';
                
                const fullscreenBtn2 = document.createElement('button');
                fullscreenBtn2.className = 'fullscreen-btn';
                fullscreenBtn2.innerHTML = '<span style="font-size: 18px;">⛶</span>';
                fullscreenBtn2.title = 'Full Screen';
                fullscreenBtn2.onclick = toggleFullscreen;
                
                // Recreate dropdown
                const dropdown2 = document.createElement('div');
                dropdown2.className = 'add-new-dropdown';
                dropdown2.innerHTML = `
                    <div class="dropdown-item" onclick="openNewWindow('/app/item/new')">
                        <span style="font-size: 24px; margin-bottom: 8px;">📦</span>
                        <span>Item</span>
                    </div>
                    <div class="dropdown-item" onclick="openNewWindow('/app/purchase-order/new')">
                        <span style="font-size: 24px; margin-bottom: 8px;">🛒</span>
                        <span>Purchase Order</span>
                    </div>
                    <div class="dropdown-item" onclick="openNewWindow('/app/purchase-invoice/new')">
                        <span style="font-size: 24px; margin-bottom: 8px;">🧾</span>
                        <span>Purchase Invoice</span>
                    </div>
                    <div class="dropdown-item" onclick="openNewWindow('/app/sales-order/new')">
                        <span style="font-size: 24px; margin-bottom: 8px;">📋</span>
                        <span>Sales Order</span>
                    </div>
                    <div class="dropdown-item" onclick="openNewWindow('/app/sales-invoice/new')">
                        <span style="font-size: 24px; margin-bottom: 8px;">🧾</span>
                        <span>Sales Invoice</span>
                    </div>
                    <div class="dropdown-item" onclick="openNewWindow('/app/customer/new')">
                        <span style="font-size: 24px; margin-bottom: 8px;">👥</span>
                        <span>Customer</span>
                    </div>
                    <div class="dropdown-item" onclick="openNewWindow('/app/supplier/new')">
                        <span style="font-size: 24px; margin-bottom: 8px;">🚚</span>
                        <span>Supplier</span>
                    </div>
                    <div class="dropdown-item" onclick="openNewWindow('/app/employee/new')">
                        <span style="font-size: 24px; margin-bottom: 8px;">👤</span>
                        <span>Employee</span>
                    </div>
                    <div class="dropdown-item" onclick="openNewWindow('/app/stock-entry/new')">
                        <span style="font-size: 24px; margin-bottom: 8px;">🏪</span>
                        <span>Stock Entry</span>
                    </div>
                    <div class="dropdown-item" onclick="openNewWindow('/app/delivery-note/new')">
                        <span style="font-size: 24px; margin-bottom: 8px;">📦</span>
                        <span>Delivery Note</span>
                    </div>
                    <div class="dropdown-item" onclick="openNewWindow('/app/payment-entry/new')">
                        <span style="font-size: 24px; margin-bottom: 8px;">💰</span>
                        <span>Payment Entry</span>
                    </div>
                    <div class="dropdown-item" onclick="openNewWindow('/app/journal-entry/new')">
                        <span style="font-size: 24px; margin-bottom: 8px;">📖</span>
                        <span>Journal Entry</span>
                    </div>
                `;
                
                addNewBtn2.appendChild(dropdown2);
                
                // Add click handler for dropdown
                addNewBtn2.onclick = function(e) {
                    e.stopPropagation();
                    dropdown2.classList.toggle('show');
                };
                
                buttonContainer.appendChild(addNewBtn2);
                buttonContainer.appendChild(fullscreenBtn2);
                topBar.appendChild(buttonContainer);
                
                console.log('Buttons added to top bar as fallback');
            }
        }, 1000);
        
        console.log('Navbar enhancements added successfully!');
    }, 500);
}

// Fullscreen toggle function
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('Error attempting to enable fullscreen:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// Open new window function
function openNewWindow(url) {
    window.open(url, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
}

// Dynamic fullscreen icon color based on background
function updateFullscreenIconColor() {
    const fullscreenIcon = document.querySelector('#btnFullscreen');
    if (!fullscreenIcon) return;
    
    const navbar = document.querySelector('.navbar, .header, .main-header, .layout-top-section');
    if (!navbar) return;
    
    // Get computed background color
    const computedStyle = window.getComputedStyle(navbar);
    const backgroundColor = computedStyle.backgroundColor;
    
    // Convert RGB to hex for easier comparison
    const rgbToHex = (rgb) => {
        const result = rgb.match(/\d+/g);
        if (!result) return '#000000';
        const r = parseInt(result[0]);
        const g = parseInt(result[1]);
        const b = parseInt(result[2]);
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    
    const hexColor = rgbToHex(backgroundColor);
    
    // Calculate brightness
    const getBrightness = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return (r * 299 + g * 587 + b * 114) / 1000;
    };
    
    const brightness = getBrightness(hexColor);
    
    // Apply appropriate filter based on brightness
    if (brightness > 128) {
        // Light background - dark icon
        fullscreenIcon.style.setProperty('--icon-filter', 'brightness(0) saturate(100%) invert(0)');
    } else {
        // Dark background - light icon
        fullscreenIcon.style.setProperty('--icon-filter', 'brightness(0) saturate(100%) invert(1)');
    }
    
    // Apply the filter
    const style = document.createElement('style');
    style.textContent = `
        #btnFullscreen::before {
            filter: var(--icon-filter, brightness(0) saturate(100%) invert(1)) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Add fullscreen functionality
    fullscreenIcon.addEventListener('click', function(e) {
        e.preventDefault();
        toggleFullscreen();
    });
}

// Call updateFullscreenIconColor when background changes
function observeBackgroundChanges() {
    const observer = new MutationObserver(() => {
        updateFullscreenIconColor();
    });
    
    const navbar = document.querySelector('.navbar, .header, .main-header, .layout-top-section');
    if (navbar) {
        observer.observe(navbar, { 
            attributes: true, 
            attributeFilter: ['style', 'class'] 
        });
    }
}

// Initialize background observer
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(observeBackgroundChanges, 2000);
});

// Fullscreen toggle function
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        // Enter fullscreen
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

// Create fullscreen button manually
function createFullscreenButton() {
    // Check if fullscreen button already exists
    let fullscreenBtn = document.getElementById('btnFullscreen');
    if (fullscreenBtn) {
        console.log('Fullscreen button already exists');
        return;
    }
    
    console.log('Creating fullscreen button...');
    
    // Find search bar container
    const searchBar = document.querySelector('input[placeholder*="Search"], .form-control[placeholder*="Search"], .search-bar input');
    if (!searchBar) {
        console.log('Search bar not found, trying alternative approach');
        // Fallback: create button in navbar
        const navbar = document.querySelector('.navbar, .layout-top-section');
        if (navbar) {
            fullscreenBtn = document.createElement('button');
            fullscreenBtn.id = 'btnFullscreen';
            fullscreenBtn.className = 'fullscreen-btn';
            fullscreenBtn.title = 'Toggle Fullscreen';
            fullscreenBtn.innerHTML = '<i class="custom-fullscreen-icon"></i>';
            
            // Style for navbar
            fullscreenBtn.style.cssText = `
                width: 35px !important;
                height: 35px !important;
                background: transparent !important;
                border: 1px solid transparent !important;
                border-radius: 4px !important;
                color: white !important;
                cursor: pointer !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                margin-left: 10px !important;
                vertical-align: middle !important;
            `;
            
            // Add to navbar
            navbar.appendChild(fullscreenBtn);
            
            // Add click event
            fullscreenBtn.addEventListener('click', function(e) {
                e.preventDefault();
                toggleFullscreen();
            });
            
            console.log('Fullscreen button created in navbar');
            return;
        }
        return;
    }
    
    // Find search bar's parent container
    let searchContainer = searchBar.closest('.input-group, .form-inline, .navbar-center, .search-bar');
    if (!searchContainer) {
        searchContainer = searchBar.parentElement;
    }
    
    // Create fullscreen button element
    fullscreenBtn = document.createElement('button');
    fullscreenBtn.id = 'btnFullscreen';
    fullscreenBtn.className = 'fullscreen-btn';
    fullscreenBtn.title = 'Toggle Fullscreen';
    fullscreenBtn.innerHTML = '<i class="custom-fullscreen-icon"></i>';
    
    // Style the button
    fullscreenBtn.style.cssText = `
        width: 35px !important;
        height: 35px !important;
        background: transparent !important;
        border: 1px solid transparent !important;
        border-radius: 4px !important;
        color: white !important;
        cursor: pointer !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        margin-left: 10px !important;
        vertical-align: middle !important;
    `;
    
    // Insert after search bar
    searchContainer.parentNode.insertBefore(fullscreenBtn, searchContainer.nextSibling);
    
    // Add click event
    fullscreenBtn.addEventListener('click', function(e) {
        e.preventDefault();
        toggleFullscreen();
    });
    
    console.log('Fullscreen button created next to search bar');
}

// Update notification icon color based on navbar background
function updateNotificationIconColor(notificationIcon) {
    try {
        // Get navbar background color
        const navbar = document.querySelector('.navbar, .main-header, .header');
        if (navbar) {
            const computedStyle = window.getComputedStyle(navbar);
            const backgroundColor = computedStyle.backgroundColor;
            
            console.log('🔍 Navbar background color:', backgroundColor);
            
            // Convert RGB to brightness
            const rgb = backgroundColor.match(/\d+/g);
            let iconColor = '#333'; // Default dark color
            
            if (rgb && rgb.length >= 3) {
                const r = parseInt(rgb[0]);
                const g = parseInt(rgb[1]);
                const b = parseInt(rgb[2]);
                
                // Calculate brightness (0-255)
                const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                
                // Set icon color based on background brightness
                iconColor = brightness > 128 ? '#333' : 'white';
                
                console.log(`🔔 Calculated brightness: ${brightness}, setting color to: ${iconColor}`);
            } else {
                // If RGB parsing fails, try to detect by color name
                if (backgroundColor.includes('black') || backgroundColor.includes('rgb(0, 0, 0)') || backgroundColor.includes('#000')) {
                    iconColor = 'white';
                    console.log('🔔 Detected black background, setting to white');
                } else {
                    iconColor = '#333';
                    console.log('🔔 Detected light background, setting to dark');
                }
            }
            
            // Apply color using CSS classes
            if (notificationIcon) {
                // Remove existing color classes
                notificationIcon.classList.remove('dark-icon', 'white-icon');
                
                // Add appropriate color class
                if (iconColor === 'white') {
                    notificationIcon.classList.add('white-icon');
                    console.log('✅ Added white-icon class');
                } else {
                    notificationIcon.classList.add('dark-icon');
                    console.log('✅ Added dark-icon class');
                }
            }
            
            console.log(`🔔 Notification icon color set to: ${iconColor}`);
        } else {
            console.log('❌ Navbar not found, using default dark color');
            if (notificationIcon) {
                notificationIcon.classList.remove('white-icon');
                notificationIcon.classList.add('dark-icon');
            }
        }
    } catch (e) {
        console.warn('Failed to update notification icon color:', e);
        // Fallback to dark color
        if (notificationIcon) {
            notificationIcon.classList.remove('white-icon');
            notificationIcon.classList.add('dark-icon');
        }
    }
}

// COMPREHENSIVE COLOR FIX FUNCTION
function applyCompleteSidebarColor(color, backgroundColor, textColor = '#ffffff', iconColor = '#ffffff') {
    const styles = `
        .col-lg-2.layout-side-section { 
            background-color: ${backgroundColor} !important; 
            color: ${textColor} !important; 
            position: relative !important;
            width: 100% !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        .col-lg-2.layout-side-section * {
            color: ${textColor} !important;
        }
        .desk-sidebar, .sidebar-menu, .list-sidebar { 
            background-color: ${backgroundColor} !important; 
            color: ${textColor} !important; 
            position: relative !important;
            width: 100% !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        .desk-sidebar *, .sidebar-menu *, .list-sidebar *,
        .desk-sidebar a, .sidebar-menu a, .list-sidebar a,
        .desk-sidebar span, .sidebar-menu span, .list-sidebar span,
        .desk-sidebar div, .sidebar-menu div, .list-sidebar div,
        .desk-sidebar li, .sidebar-menu li, .list-sidebar li,
        .desk-sidebar .item-anchor, .sidebar-menu .item-anchor, .list-sidebar .item-anchor,
        .desk-sidebar .sidebar-item-label, .sidebar-menu .sidebar-item-label, .list-sidebar .sidebar-item-label {
            color: ${textColor} !important;
        }
        .desk-sidebar-item.selected, .standard-sidebar-item.selected {
            background-color: ${textColor === '#ffffff' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'} !important;
            color: ${textColor} !important;
            border-radius: 8px !important;
            margin: 2px 8px !important;
        }
        .desk-sidebar-item.selected .item-anchor, .standard-sidebar-item.selected .item-anchor {
            color: ${textColor} !important;
        }
        .desk-sidebar-item.selected .sidebar-item-label, .standard-sidebar-item.selected .sidebar-item-label {
            color: ${textColor} !important;
        }
        .desk-sidebar-item.selected .sidebar-item-icon, .standard-sidebar-item.selected .sidebar-item-icon {
            color: ${iconColor} !important;
        }
        
        /* Apply icon color to all sidebar icons - MAXIMUM SPECIFICITY */
        .col-lg-2.layout-side-section i,
        .col-lg-2.layout-side-section .fa,
        .col-lg-2.layout-side-section .icon,
        .col-lg-2.layout-side-section .sidebar-item-icon,
        .col-lg-2.layout-side-section [class*="icon"],
        .col-lg-2.layout-side-section [class*="fa-"],
        .col-lg-2.layout-side-section [class*="feather"],
        .col-lg-2.layout-side-section *[class*="icon"],
        .col-lg-2.layout-side-section *[class*="fa"],
        .col-lg-2.layout-side-section *[class*="feather"],
        .desk-sidebar i,
        .desk-sidebar .fa,
        .desk-sidebar .icon,
        .desk-sidebar .sidebar-item-icon,
        .desk-sidebar [class*="icon"],
        .desk-sidebar [class*="fa-"],
        .desk-sidebar [class*="feather"],
        .desk-sidebar *[class*="icon"],
        .desk-sidebar *[class*="fa"],
        .desk-sidebar *[class*="feather"],
        .sidebar-menu i,
        .sidebar-menu .fa,
        .sidebar-menu .icon,
        .sidebar-menu .sidebar-item-icon,
        .sidebar-menu [class*="icon"],
        .sidebar-menu [class*="fa-"],
        .sidebar-menu [class*="feather"],
        .sidebar-menu *[class*="icon"],
        .sidebar-menu *[class*="fa"],
        .sidebar-menu *[class*="feather"],
        .list-sidebar i,
        .list-sidebar .fa,
        .list-sidebar .icon,
        .list-sidebar .sidebar-item-icon,
        .list-sidebar [class*="icon"],
        .list-sidebar [class*="fa-"],
        .list-sidebar [class*="feather"],
        .list-sidebar *[class*="icon"],
        .list-sidebar *[class*="fa"],
        .list-sidebar *[class*="feather"],
        .sidebar i,
        .nav-sidebar i,
        .sidebar-nav i,
        .sidebar .fa,
        .nav-sidebar .fa,
        .sidebar-nav .fa,
        .sidebar .icon,
        .nav-sidebar .icon,
        .sidebar-nav .icon,
        .sidebar .sidebar-item-icon,
        .nav-sidebar .sidebar-item-icon,
        .sidebar-nav .sidebar-item-icon,
        .desk-sidebar-item i,
        .standard-sidebar-item i,
        .desk-sidebar-item .fa,
        .standard-sidebar-item .fa,
        .desk-sidebar-item .icon,
        .standard-sidebar-item .icon,
        .desk-sidebar-item .sidebar-item-icon,
        .standard-sidebar-item .sidebar-item-icon,
        .desk-sidebar .item-anchor i,
        .sidebar-menu .item-anchor i,
        .list-sidebar .item-anchor i,
        .desk-sidebar .item-anchor .fa,
        .sidebar-menu .item-anchor .fa,
        .list-sidebar .item-anchor .fa,
        .desk-sidebar .item-anchor .icon,
        .sidebar-menu .item-anchor .icon,
        .list-sidebar .item-anchor .icon,
        .desk-sidebar .item-anchor .sidebar-item-icon,
        .sidebar-menu .item-anchor .sidebar-item-icon,
        .list-sidebar .item-anchor .sidebar-item-icon,
        /* MAXIMUM SPECIFICITY OVERRIDE */
        .col-lg-2.layout-side-section .desk-sidebar-item i,
        .col-lg-2.layout-side-section .standard-sidebar-item i,
        .col-lg-2.layout-side-section .desk-sidebar-item .fa,
        .col-lg-2.layout-side-section .standard-sidebar-item .fa,
        .col-lg-2.layout-side-section .desk-sidebar-item .icon,
        .col-lg-2.layout-side-section .standard-sidebar-item .icon,
        .col-lg-2.layout-side-section .desk-sidebar-item .sidebar-item-icon,
        .col-lg-2.layout-side-section .standard-sidebar-item .sidebar-item-icon,
        .col-lg-2.layout-side-section .desk-sidebar-item .item-anchor i,
        .col-lg-2.layout-side-section .standard-sidebar-item .item-anchor i,
        .col-lg-2.layout-side-section .desk-sidebar-item .item-anchor .fa,
        .col-lg-2.layout-side-section .standard-sidebar-item .item-anchor .fa,
        .col-lg-2.layout-side-section .desk-sidebar-item .item-anchor .icon,
        .col-lg-2.layout-side-section .standard-sidebar-item .item-anchor .icon,
        .col-lg-2.layout-side-section .desk-sidebar-item .item-anchor .sidebar-item-icon,
        .col-lg-2.layout-side-section .standard-sidebar-item .item-anchor .sidebar-item-icon {
            color: ${iconColor} !important;
        }
        .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
            background-color: ${backgroundColor} !important; 
            color: ${textColor} !important; 
            position: relative !important;
            width: 100% !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        .sidebar *, .nav-sidebar *, .sidebar-nav *, .sidebar-menu *,
        .sidebar a, .nav-sidebar a, .sidebar-nav a, .sidebar-menu a,
        .sidebar span, .nav-sidebar span, .sidebar-nav span, .sidebar-menu span,
        .sidebar div, .nav-sidebar div, .sidebar-nav div, .sidebar-menu div,
        .sidebar li, .nav-sidebar li, .sidebar-nav li, .sidebar-menu li,
        .sidebar .nav-link, .nav-sidebar .nav-link, .sidebar-nav .nav-link, .sidebar-menu .nav-link,
        .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
            color: ${textColor} !important;
        }
        .sidebar .active, .nav-sidebar .active, .sidebar-nav .active, .sidebar-menu .active,
        .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active {
            background-color: ${textColor === '#ffffff' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'} !important;
            color: ${textColor} !important;
        }
    `;
    
    // Remove existing dynamic styles
    const existingStyle = document.getElementById('dynamic-sidebar-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add new styles
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-sidebar-styles';
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    
    console.log(`✅ Applied complete color: ${color} with background: ${backgroundColor}, text: ${textColor}, icon: ${iconColor}`);
    
    // DIRECT DOM MANIPULATION - GUARANTEED TO WORK
    function forceIconColor() {
        console.log(`🔍 Looking for sidebar with icon color: ${iconColor}`);
        
        // Find sidebar container - try multiple selectors
        const sidebar = document.querySelector('.col-lg-2.layout-side-section') || 
                       document.querySelector('.desk-sidebar') || 
                       document.querySelector('.sidebar-menu') || 
                       document.querySelector('.list-sidebar') ||
                       document.querySelector('.sidebar') ||
                       document.querySelector('.nav-sidebar') ||
                       document.querySelector('.sidebar-nav');
        
        if (!sidebar) {
            console.log('❌ Sidebar not found with any selector');
            console.log('Available elements:', document.querySelectorAll('[class*="sidebar"]'));
            return;
        }
        
        console.log(`✅ Sidebar found:`, sidebar.className);
        
        // Find ALL elements inside sidebar
        const allElements = sidebar.querySelectorAll('*');
        console.log(`🔍 Found ${allElements.length} total elements in sidebar`);
        
        let iconCount = 0;
        
        allElements.forEach((element, index) => {
            const tagName = element.tagName.toLowerCase();
            const className = element.className || '';
            const id = element.id || '';
            
            // Check if it's an icon element - more comprehensive
            const isIcon = tagName === 'i' || 
                          tagName === 'svg' ||
                          tagName === 'use' ||
                          (typeof className === 'string' && className.includes('fa')) || 
                          (typeof className === 'string' && className.includes('icon')) || 
                          (typeof className === 'string' && className.includes('feather')) ||
                          (typeof className === 'string' && className.includes('sidebar-item-icon')) ||
                          element.classList.contains('sidebar-item-icon') ||
                          (typeof id === 'string' && id.includes('icon')) ||
                          element.getAttribute('data-icon') ||
                          element.getAttribute('data-feather') ||
                          element.getAttribute('href');
            
            if (isIcon) {
                const oldColor = element.style.color || getComputedStyle(element).color;
                
                // Force set color with multiple methods - MAXIMUM OVERRIDE
                element.style.setProperty('color', iconColor, 'important');
                element.style.color = iconColor + ' !important';
                element.setAttribute('style', (element.getAttribute('style') || '') + `; color: ${iconColor} !important;`);
                
                // Also set CSS custom property
                element.style.setProperty('--icon-color', iconColor, 'important');
                
                // Force remove any conflicting styles
                element.style.removeProperty('color');
                element.style.setProperty('color', iconColor, 'important');
                
                iconCount++;
                console.log(`🎯 Icon ${iconCount}: ${tagName}.${className} (${oldColor} → ${iconColor})`);
            }
        });
        
        console.log(`✅ Force updated ${iconCount} icons with color: ${iconColor}`);
        
        // Also try to find icons by looking for common patterns
        const iconPatterns = [
            'i[class*="fa"]',
            'i[class*="icon"]',
            'i[class*="feather"]',
            '[class*="sidebar-item-icon"]',
            'svg',
            '[data-icon]',
            '[data-feather]'
        ];
        
        iconPatterns.forEach(pattern => {
            const patternIcons = sidebar.querySelectorAll(pattern);
            patternIcons.forEach(icon => {
                icon.style.setProperty('color', iconColor, 'important');
                icon.style.color = iconColor + ' !important';
                console.log(`🎯 Pattern icon: ${pattern} → ${iconColor}`);
            });
        });
    }
    
    // Run immediately
    forceIconColor();
    
    // Run multiple times to catch all icons
    setTimeout(forceIconColor, 100);
    setTimeout(forceIconColor, 300);
    setTimeout(forceIconColor, 600);
    setTimeout(forceIconColor, 1000);
    
    // ULTIMATE FORCE - Try every possible approach
    setTimeout(() => {
        console.log('🚀 ULTIMATE FORCE - Trying all approaches...');
        
        // Method 1: Direct style injection
        const style = document.createElement('style');
        style.textContent = `
            .col-lg-2.layout-side-section i,
            .col-lg-2.layout-side-section .fa,
            .col-lg-2.layout-side-section .icon,
            .col-lg-2.layout-side-section .sidebar-item-icon,
            .col-lg-2.layout-side-section svg,
            .col-lg-2.layout-side-section use,
            .col-lg-2.layout-side-section [class*="icon"],
            .col-lg-2.layout-side-section [class*="fa-"],
            .col-lg-2.layout-side-section [class*="feather"],
            .desk-sidebar i,
            .desk-sidebar .fa,
            .desk-sidebar .icon,
            .desk-sidebar .sidebar-item-icon,
            .desk-sidebar svg,
            .desk-sidebar use,
            .desk-sidebar [class*="icon"],
            .desk-sidebar [class*="fa-"],
            .desk-sidebar [class*="feather"],
            .sidebar-menu i,
            .sidebar-menu .fa,
            .sidebar-menu .icon,
            .sidebar-menu .sidebar-item-icon,
            .sidebar-menu svg,
            .sidebar-menu use,
            .sidebar-menu [class*="icon"],
            .sidebar-menu [class*="fa-"],
            .sidebar-menu [class*="feather"],
            .list-sidebar i,
            .list-sidebar .fa,
            .list-sidebar .icon,
            .list-sidebar .sidebar-item-icon,
            .list-sidebar svg,
            .list-sidebar use,
            .list-sidebar [class*="icon"],
            .list-sidebar [class*="fa-"],
            .list-sidebar [class*="feather"] {
                color: ${iconColor} !important;
                fill: ${iconColor} !important;
            }
        `;
        document.head.appendChild(style);
        console.log('✅ Injected ultimate CSS with color:', iconColor);
        
        // Method 2: Query all icons and force set
        const allIcons = document.querySelectorAll('i, .fa, .icon, [class*="icon"], [class*="fa-"], [class*="feather"], svg, use');
        console.log('🔍 Found', allIcons.length, 'total icons on page');
        
        let sidebarIconCount = 0;
        allIcons.forEach(icon => {
            if (icon.closest('.col-lg-2.layout-side-section') || 
                icon.closest('.desk-sidebar') || 
                icon.closest('.sidebar-menu') || 
                icon.closest('.list-sidebar')) {
                
                icon.style.setProperty('color', iconColor, 'important');
                icon.style.setProperty('fill', iconColor, 'important');
                icon.style.color = iconColor + ' !important';
                icon.style.fill = iconColor + ' !important';
                
                sidebarIconCount++;
                console.log('🎯 Ultimate force icon', sidebarIconCount, ':', icon.tagName, icon.className, '→', iconColor);
            }
        });
        
        console.log('✅ Ultimate force updated', sidebarIconCount, 'sidebar icons');
    }, 1500);
}

// Override the existing applySidebarStyles function
function applySidebarStyles(color) {
    const colorMap = {
        'sidebar-white': { bg: '#ffffff', text: '#333333', icon: '#333333' },
        'sidebar-lightgreen': { bg: '#28a745', text: '#ffffff', icon: '#ffffff' },
        'sidebar-darkgray': { bg: '#343a40', text: '#ffffff', icon: '#ffffff' },
        'sidebar-black': { bg: '#000000', text: '#ffffff', icon: '#ffffff' },
        'sidebar-blue': { bg: '#007bff', text: '#ffffff', icon: '#ffffff' },
        'sidebar-purple': { bg: '#9C27B0', text: '#ffffff', icon: '#ffffff' },
        'sidebar-teal': { bg: '#20c997', text: '#ffffff', icon: '#ffffff' }
    };
    
    const colorConfig = colorMap[color];
    if (colorConfig) {
        applyCompleteSidebarColor(color, colorConfig.bg, colorConfig.text, colorConfig.icon);
    }
}

// APPLY DEFAULT SIDEBAR LAYOUT
function applyDefaultSidebarLayout() {
    const styles = `
        .col-lg-2.layout-side-section {
            width: 16.666667% !important;
            max-width: 250px !important;
            min-width: 200px !important;
        }
        .desk-sidebar, .sidebar-menu, .list-sidebar {
            padding: 0 !important;
        }
        .desk-sidebar-item, .standard-sidebar-item {
            margin: 0 !important;
            padding: 12px 16px !important;
            border-radius: 0 !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
        .desk-sidebar-item:last-child, .standard-sidebar-item:last-child {
            border-bottom: none !important;
        }
        .desk-sidebar-item.selected, .standard-sidebar-item.selected {
            background-color: rgba(255, 255, 255, 0.15) !important;
            border-left: 3px solid rgba(255, 255, 255, 0.8) !important;
        }
        .sidebar-item-label {
            font-size: 14px !important;
            font-weight: 500 !important;
        }
        .sidebar-item-icon {
            font-size: 16px !important;
            margin-right: 12px !important;
        }
    `;
    
    // Remove existing layout styles
    const existingStyle = document.getElementById('default-sidebar-layout');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add new styles
    const styleElement = document.createElement('style');
    styleElement.id = 'default-sidebar-layout';
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    
    console.log('✅ Default sidebar layout applied successfully');
}
