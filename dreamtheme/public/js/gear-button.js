// Floating Gear Button JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for page to fully load
    setTimeout(function() {
        createFloatingGearButton();
    }, 1000);
});

function createFloatingGearButton() {
    console.log('Creating floating gear button...');
    
    // Remove existing button if any
    const existingButton = document.querySelector('.floating-gear-button');
    if (existingButton) {
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
            <h5>Theme Customizer</h5>
            <p>Choose your themes & layouts etc.</p>
        </div>
        <div class="settings-panel-body">
            <div class="theme-section">
                <h6>Top Bar Color</h6>
                <div class="color-section">
                    <label>Solid Colors</label>
                    <div class="color-swatches solid-colors">
                        <div class="color-swatch white" data-color="white" onclick="changeTopBarColor('white')"></div>
                        <div class="color-swatch light-green active" data-color="lightgreen" onclick="changeTopBarColor('lightgreen')"></div>
                        <div class="color-swatch dark-gray" data-color="darkgray" onclick="changeTopBarColor('darkgray')"></div>
                        <div class="color-swatch black" data-color="black" onclick="changeTopBarColor('black')"></div>
                        <div class="color-swatch blue" data-color="blue" onclick="changeTopBarColor('blue')"></div>
                        <div class="color-swatch purple" data-color="purple" onclick="changeTopBarColor('purple')"></div>
                        <div class="color-swatch teal" data-color="teal" onclick="changeTopBarColor('teal')"></div>
                    </div>
                </div>
                <div class="color-section">
                    <label>Gradient Colors</label>
                    <div class="color-swatches gradient-colors">
                        <div class="color-swatch gradient dark-blue" data-color="darkblue-gradient" onclick="changeTopBarColor('darkblue-gradient')"></div>
                        <div class="color-swatch gradient light-blue" data-color="lightblue-gradient" onclick="changeTopBarColor('lightblue-gradient')"></div>
                        <div class="color-swatch gradient purple" data-color="purple-gradient" onclick="changeTopBarColor('purple-gradient')"></div>
                        <div class="color-swatch gradient teal" data-color="teal-gradient" onclick="changeTopBarColor('teal-gradient')"></div>
                        <div class="color-swatch gradient orange" data-color="orange-gradient" onclick="changeTopBarColor('orange-gradient')"></div>
                        <div class="color-swatch gradient red" data-color="red-gradient" onclick="changeTopBarColor('red-gradient')"></div>
                    </div>
                </div>
            </div>
            
            <div class="theme-section">
                <h6>Page Header Color</h6>
                <div class="color-section">
                    <label>Solid Colors</label>
                    <div class="color-swatches solid-colors">
                        <div class="color-swatch white" data-color="white" onclick="changePageHeaderColor('white')"></div>
                        <div class="color-swatch light-green" data-color="lightgreen" onclick="changePageHeaderColor('lightgreen')"></div>
                        <div class="color-swatch dark-gray" data-color="darkgray" onclick="changePageHeaderColor('darkgray')"></div>
                        <div class="color-swatch black" data-color="black" onclick="changePageHeaderColor('black')"></div>
                        <div class="color-swatch blue" data-color="blue" onclick="changePageHeaderColor('blue')"></div>
                        <div class="color-swatch purple" data-color="purple" onclick="changePageHeaderColor('purple')"></div>
                        <div class="color-swatch teal" data-color="teal" onclick="changePageHeaderColor('teal')"></div>
                    </div>
                </div>
                <div class="color-section">
                    <label>Gradient Colors</label>
                    <div class="color-swatches gradient-colors">
                        <div class="color-swatch gradient dark-blue" data-color="darkblue-gradient" onclick="changePageHeaderColor('darkblue-gradient')"></div>
                        <div class="color-swatch gradient light-blue" data-color="lightblue-gradient" onclick="changePageHeaderColor('lightblue-gradient')"></div>
                        <div class="color-swatch gradient purple" data-color="purple-gradient" onclick="changePageHeaderColor('purple-gradient')"></div>
                        <div class="color-swatch gradient teal" data-color="teal-gradient" onclick="changePageHeaderColor('teal-gradient')"></div>
                        <div class="color-swatch gradient orange" data-color="orange-gradient" onclick="changePageHeaderColor('orange-gradient')"></div>
                        <div class="color-swatch gradient red" data-color="red-gradient" onclick="changePageHeaderColor('red-gradient')"></div>
                    </div>
                </div>
            </div>
            
            <div class="theme-section">
                <h6>Navbar Layout</h6>
                <div class="layout-section">
                    <label>Choose Style</label>
                    <div class="layout-options">
                        <div class="layout-option active" data-layout="default" onclick="changeNavbarLayout('default')">
                            <div class="layout-preview default-preview"></div>
                            <span>Default</span>
                        </div>
                        <div class="layout-option" data-layout="compact" onclick="changeNavbarLayout('compact')">
                            <div class="layout-preview compact-preview"></div>
                            <span>Compact</span>
                        </div>
                        <div class="layout-option" data-layout="glass" onclick="changeNavbarLayout('glass')">
                            <div class="layout-preview glass-preview"></div>
                            <span>Glass</span>
                        </div>
                        <div class="layout-option" data-layout="minimal" onclick="changeNavbarLayout('minimal')">
                            <div class="layout-preview minimal-preview"></div>
                            <span>Minimal</span>
                        </div>
                        <div class="layout-option" data-layout="modern" onclick="changeNavbarLayout('modern')">
                            <div class="layout-preview modern-preview"></div>
                            <span>Modern</span>
                        </div>
                        <div class="layout-option" data-layout="dashboard" onclick="changeNavbarLayout('dashboard')">
                            <div class="layout-preview dashboard-preview"></div>
                            <span>Dashboard</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="theme-section">
                <h6>Main Content Color</h6>
                <div class="color-section">
                    <label>Choose Color</label>
                    <div class="color-swatches solid-colors">
                        <div class="color-swatch white" data-color="white" onclick="changeMainContentColor('white')"></div>
                        <div class="color-swatch light-green" data-color="lightgreen" onclick="changeMainContentColor('lightgreen')"></div>
                        <div class="color-swatch dark-gray" data-color="darkgray" onclick="changeMainContentColor('darkgray')"></div>
                        <div class="color-swatch black" data-color="black" onclick="changeMainContentColor('black')"></div>
                        <div class="color-swatch blue" data-color="blue" onclick="changeMainContentColor('blue')"></div>
                        <div class="color-swatch purple" data-color="purple" onclick="changeMainContentColor('purple')"></div>
                        <div class="color-swatch teal" data-color="teal" onclick="changeMainContentColor('teal')"></div>
                    </div>
                </div>
            </div>
            
            <div class="theme-section">
                <h6>Main Content Text Color</h6>
                <div class="color-section">
                    <label>Choose Text Color</label>
                    <div class="color-swatches text-colors">
                        <div class="color-swatch text-white" data-color="white-text" onclick="changeMainContentTextColor('white')"></div>
                        <div class="color-swatch text-black" data-color="black-text" onclick="changeMainContentTextColor('black')"></div>
                        <div class="color-swatch text-blue" data-color="blue-text" onclick="changeMainContentTextColor('blue')"></div>
                        <div class="color-swatch text-green" data-color="green-text" onclick="changeMainContentTextColor('green')"></div>
                        <div class="color-swatch text-purple" data-color="purple-text" onclick="changeMainContentTextColor('purple')"></div>
                        <div class="color-swatch text-red" data-color="red-text" onclick="changeMainContentTextColor('red')"></div>
                    </div>
                </div>
            </div>
            
            <div class="theme-section">
                <h6>Form Content Style</h6>
                <div class="color-section">
                    <label>Background Color</label>
                    <div class="color-swatches solid-colors">
                        <div class="color-swatch white" data-color="white" onclick="changeFormContentStyle('white', 'background')"></div>
                        <div class="color-swatch light-green" data-color="lightgreen" onclick="changeFormContentStyle('lightgreen', 'background')"></div>
                        <div class="color-swatch dark-gray" data-color="darkgray" onclick="changeFormContentStyle('darkgray', 'background')"></div>
                        <div class="color-swatch black" data-color="black" onclick="changeFormContentStyle('black', 'background')"></div>
                        <div class="color-swatch blue" data-color="blue" onclick="changeFormContentStyle('blue', 'background')"></div>
                        <div class="color-swatch purple" data-color="purple" onclick="changeFormContentStyle('purple', 'background')"></div>
                        <div class="color-swatch teal" data-color="teal" onclick="changeFormContentStyle('teal', 'background')"></div>
                    </div>
                </div>
                <div class="color-section">
                    <label>Border Color</label>
                    <div class="color-swatches solid-colors">
                        <div class="color-swatch white" data-color="white" onclick="changeFormContentStyle('white', 'border')"></div>
                        <div class="color-swatch light-green" data-color="lightgreen" onclick="changeFormContentStyle('lightgreen', 'border')"></div>
                        <div class="color-swatch dark-gray" data-color="darkgray" onclick="changeFormContentStyle('darkgray', 'border')"></div>
                        <div class="color-swatch black" data-color="black" onclick="changeFormContentStyle('black', 'border')"></div>
                        <div class="color-swatch blue" data-color="blue" onclick="changeFormContentStyle('blue', 'border')"></div>
                        <div class="color-swatch purple" data-color="purple" onclick="changeFormContentStyle('purple', 'border')"></div>
                        <div class="color-swatch teal" data-color="teal" onclick="changeFormContentStyle('teal', 'border')"></div>
                    </div>
                </div>
                <div class="color-section">
                    <label>Font Color</label>
                    <div class="color-swatches text-colors">
                        <div class="color-swatch text-white" data-color="white-text" onclick="changeFormContentStyle('white', 'font')"></div>
                        <div class="color-swatch text-black" data-color="black-text" onclick="changeFormContentStyle('black', 'font')"></div>
                        <div class="color-swatch text-blue" data-color="blue-text" onclick="changeFormContentStyle('blue', 'font')"></div>
                        <div class="color-swatch text-green" data-color="green-text" onclick="changeFormContentStyle('green', 'font')"></div>
                        <div class="color-swatch text-purple" data-color="purple-text" onclick="changeFormContentStyle('purple', 'font')"></div>
                        <div class="color-swatch text-red" data-color="red-text" onclick="changeFormContentStyle('red', 'font')"></div>
                    </div>
                </div>
            </div>
            
            <div class="theme-section">
                <h6>Sidebar Color</h6>
                <div class="color-section">
                    <label>Solid Colors</label>
                    <div class="color-swatches solid-colors">
                        <div class="color-swatch white" data-color="sidebar-white" onclick="changeSidebarColor('sidebar-white')"></div>
                        <div class="color-swatch light-green active" data-color="sidebar-lightgreen" onclick="changeSidebarColor('sidebar-lightgreen')"></div>
                        <div class="color-swatch dark-gray" data-color="sidebar-darkgray" onclick="changeSidebarColor('sidebar-darkgray')"></div>
                        <div class="color-swatch black" data-color="sidebar-black" onclick="changeSidebarColor('sidebar-black')"></div>
                        <div class="color-swatch blue" data-color="sidebar-blue" onclick="changeSidebarColor('sidebar-blue')"></div>
                        <div class="color-swatch purple" data-color="sidebar-purple" onclick="changeSidebarColor('sidebar-purple')"></div>
                        <div class="color-swatch teal" data-color="sidebar-teal" onclick="changeSidebarColor('sidebar-teal')"></div>
                    </div>
                </div>
                <div class="color-section">
                    <label>Gradient Colors</label>
                    <div class="color-swatches gradient-colors">
                        <div class="color-swatch gradient dark-blue" data-color="sidebar-darkblue-gradient" onclick="changeSidebarColor('sidebar-darkblue-gradient')"></div>
                        <div class="color-swatch gradient light-blue" data-color="sidebar-lightblue-gradient" onclick="changeSidebarColor('sidebar-lightblue-gradient')"></div>
                        <div class="color-swatch gradient purple" data-color="sidebar-purple-gradient" onclick="changeSidebarColor('sidebar-purple-gradient')"></div>
                        <div class="color-swatch gradient teal" data-color="sidebar-teal-gradient" onclick="changeSidebarColor('sidebar-teal-gradient')"></div>
                        <div class="color-swatch gradient orange" data-color="sidebar-orange-gradient" onclick="changeSidebarColor('sidebar-orange-gradient')"></div>
                        <div class="color-swatch gradient red" data-color="sidebar-red-gradient" onclick="changeSidebarColor('sidebar-red-gradient')"></div>
                    </div>
                </div>
            </div>
            
            <div class="theme-section">
                <h6>Sidebar Background</h6>
                <div class="background-section">
                    <label>Background Images</label>
                    <div class="background-thumbnails">
                        <div class="background-thumb active" data-bg="dark-forest" onclick="changeSidebarBackground('dark-forest')">
                            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=150&h=100&fit=crop" alt="Dark Forest">
                            <div class="checkmark">✓</div>
                        </div>
                        <div class="background-thumb" data-bg="city-skyline" onclick="changeSidebarBackground('city-skyline')">
                            <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=150&h=100&fit=crop" alt="City Skyline">
                            <div class="checkmark">✓</div>
                        </div>
                        <div class="background-thumb" data-bg="abstract-dark" onclick="changeSidebarBackground('abstract-dark')">
                            <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=150&h=100&fit=crop" alt="Abstract Dark">
                            <div class="checkmark">✓</div>
                        </div>
                        <div class="background-thumb" data-bg="mountain-night" onclick="changeSidebarBackground('mountain-night')">
                            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=100&fit=crop" alt="Mountain Night">
                            <div class="checkmark">✓</div>
                        </div>
                        <div class="background-thumb" data-bg="ocean-dark" onclick="changeSidebarBackground('ocean-dark')">
                            <img src="https://images.unsplash.com/photo-1514894743437-4c2a81c6c041?w=150&h=100&fit=crop" alt="Ocean Dark">
                            <div class="checkmark">✓</div>
                        </div>
                        <div class="background-thumb" data-bg="space-dark" onclick="changeSidebarBackground('space-dark')">
                            <img src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=150&h=100&fit=crop" alt="Space Dark">
                            <div class="checkmark">✓</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="theme-section">
                <h6>Sidebar Text & Icon Colors</h6>
                <div class="text-color-section">
                    <label>Text Color</label>
                    <div class="text-color-options">
                        <div class="text-color-option active" data-text-color="white" onclick="changeSidebarTextColor('white')">
                            <div class="text-color-preview white-text"></div>
                            <span>White</span>
                        </div>
                        <div class="text-color-option" data-text-color="black" onclick="changeSidebarTextColor('black')">
                            <div class="text-color-preview black-text"></div>
                            <span>Black</span>
                        </div>
                        <div class="text-color-option" data-text-color="blue" onclick="changeSidebarTextColor('blue')">
                            <div class="text-color-preview blue-text"></div>
                            <span>Blue</span>
                        </div>
                        <div class="text-color-option" data-text-color="green" onclick="changeSidebarTextColor('green')">
                            <div class="text-color-preview green-text"></div>
                            <span>Green</span>
                        </div>
                        <div class="text-color-option" data-text-color="purple" onclick="changeSidebarTextColor('purple')">
                            <div class="text-color-preview purple-text"></div>
                            <span>Purple</span>
                        </div>
                        <div class="text-color-option" data-text-color="orange" onclick="changeSidebarTextColor('orange')">
                            <div class="text-color-preview orange-text"></div>
                            <span>Orange</span>
                        </div>
                    </div>
                </div>
                <div class="icon-color-section">
                    <label>Icon Color</label>
                    <div class="icon-color-options">
                        <div class="icon-color-option active" data-icon-color="white" onclick="changeSidebarIconColor('white')">
                            <div class="icon-color-preview white-icon"></div>
                            <span>White</span>
                        </div>
                        <div class="icon-color-option" data-icon-color="black" onclick="changeSidebarIconColor('black')">
                            <div class="icon-color-preview black-icon"></div>
                            <span>Black</span>
                        </div>
                        <div class="icon-color-option" data-icon-color="blue" onclick="changeSidebarIconColor('blue')">
                            <div class="icon-color-preview blue-icon"></div>
                            <span>Blue</span>
                        </div>
                        <div class="icon-color-option" data-icon-color="green" onclick="changeSidebarIconColor('green')">
                            <div class="icon-color-preview green-icon"></div>
                            <span>Green</span>
                        </div>
                        <div class="icon-color-option" data-icon-color="purple" onclick="changeSidebarIconColor('purple')">
                            <div class="icon-color-preview purple-icon"></div>
                            <span>Purple</span>
                        </div>
                        <div class="icon-color-option" data-icon-color="orange" onclick="changeSidebarIconColor('orange')">
                            <div class="icon-color-preview orange-icon"></div>
                            <span>Orange</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="theme-section">
                <h6>Sidebar Font & Layout</h6>
                <div class="font-section">
                    <label>Font Family</label>
                    <div class="font-options">
                        <div class="font-option active" data-font="default" onclick="changeSidebarFont('default')">
                            <div class="font-preview default-font">Aa</div>
                            <span>Default</span>
                        </div>
                        <div class="font-option" data-font="roboto" onclick="changeSidebarFont('roboto')">
                            <div class="font-preview roboto-font">Aa</div>
                            <span>Roboto</span>
                        </div>
                        <div class="font-option" data-font="opensans" onclick="changeSidebarFont('opensans')">
                            <div class="font-preview opensans-font">Aa</div>
                            <span>Open Sans</span>
                        </div>
                        <div class="font-option" data-font="lato" onclick="changeSidebarFont('lato')">
                            <div class="font-preview lato-font">Aa</div>
                            <span>Lato</span>
                        </div>
                        <div class="font-option" data-font="montserrat" onclick="changeSidebarFont('montserrat')">
                            <div class="font-preview montserrat-font">Aa</div>
                            <span>Montserrat</span>
                        </div>
                        <div class="font-option" data-font="poppins" onclick="changeSidebarFont('poppins')">
                            <div class="font-preview poppins-font">Aa</div>
                            <span>Poppins</span>
                        </div>
                    </div>
                </div>
                <div class="layout-section">
                    <label>Layout Style</label>
                    <div class="layout-options">
                        <div class="layout-option active" data-layout="default" onclick="changeSidebarLayout('default')">
                            <div class="layout-preview default-layout"></div>
                            <span>Default</span>
                        </div>
                        <div class="layout-option" data-layout="modern" onclick="changeSidebarLayout('modern')">
                            <div class="layout-preview modern-layout"></div>
                            <span>Modern</span>
                        </div>
                        <div class="layout-option" data-layout="compact" onclick="changeSidebarLayout('compact')">
                            <div class="layout-preview compact-layout"></div>
                            <span>Compact</span>
                        </div>
                        <div class="layout-option" data-layout="spacious" onclick="changeSidebarLayout('spacious')">
                            <div class="layout-preview spacious-layout"></div>
                            <span>Spacious</span>
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
function changeTopBarColor(color) {
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
function applyTopBarStyles(color) {
    let styles = '';
    
    switch(color) {
        case 'white':
            styles = `
                .navbar, .top-bar, .header, .layout-top-section, .layout-top-section *,
                .layout-top-section .navbar, .layout-top-section .navbar *,
                .layout-top-section .navbar-brand, .layout-top-section .navbar-nav,
                .layout-top-section .navbar-toggler, .layout-top-section .navbar-nav a,
                .layout-top-section .navbar-nav span, .layout-top-section .navbar-nav div {
                    background-color: #ffffff !important; 
                    color: #333333 !important; 
                }
            `;
            break;
        case 'lightgreen':
            styles = '.navbar, .top-bar, .header { background-color: #28a745 !important; color: #ffffff !important; }';
            break;
        case 'darkgray':
            styles = '.navbar, .top-bar, .header { background-color: #343a40 !important; color: #ffffff !important; }';
            break;
        case 'black':
            styles = '.navbar, .top-bar, .header { background-color: #000000 !important; color: #ffffff !important; }';
            break;
        case 'blue':
            styles = '.navbar, .top-bar, .header { background-color: #007bff !important; color: #ffffff !important; }';
            break;
        case 'purple':
            styles = `
                .navbar, .top-bar, .header, .layout-top-section, .layout-top-section *,
                .layout-top-section .navbar, .layout-top-section .navbar *,
                .layout-top-section .navbar-brand, .layout-top-section .navbar-nav,
                .layout-top-section .navbar-toggler, .layout-top-section .navbar-nav a,
                .layout-top-section .navbar-nav span, .layout-top-section .navbar-nav div {
                    background-color: #6f42c1 !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'teal':
            styles = '.navbar, .top-bar, .header { background-color: #20c997 !important; color: #ffffff !important; }';
            break;
        case 'darkblue-gradient':
            styles = '.navbar, .top-bar, .header { background: linear-gradient(135deg, #1e3c72, #2a5298) !important; color: #ffffff !important; }';
            break;
        case 'lightblue-gradient':
            styles = '.navbar, .top-bar, .header { background: linear-gradient(135deg, #74b9ff, #0984e3) !important; color: #ffffff !important; }';
            break;
        case 'purple-gradient':
            styles = `
                .navbar, .top-bar, .header, .layout-top-section, .layout-top-section *,
                .layout-top-section .navbar, .layout-top-section .navbar *,
                .layout-top-section .navbar-brand, .layout-top-section .navbar-nav,
                .layout-top-section .navbar-toggler, .layout-top-section .navbar-nav a,
                .layout-top-section .navbar-nav span, .layout-top-section .navbar-nav div {
                    background: linear-gradient(135deg, #a29bfe, #6c5ce7) !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'teal-gradient':
            styles = '.navbar, .top-bar, .header { background: linear-gradient(135deg, #00b894, #00cec9) !important; color: #ffffff !important; }';
            break;
        case 'orange-gradient':
            styles = '.navbar, .top-bar, .header { background: linear-gradient(135deg, #fdcb6e, #e17055) !important; color: #ffffff !important; }';
            break;
        case 'red-gradient':
            styles = '.navbar, .top-bar, .header { background: linear-gradient(135deg, #fd79a8, #e84393) !important; color: #ffffff !important; }';
            break;
    }
    
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
}

// Change page header color function
function changePageHeaderColor(color) {
    // Remove active class from all page header color swatches
    document.querySelectorAll('.theme-section:nth-child(2) .color-swatch').forEach(swatch => {
        swatch.classList.remove('active');
    });
    
    // Add active class to clicked swatch
    event.target.classList.add('active');
    
    // Apply color to page header
    applyPageHeaderStyles(color);
    
    // Save to localStorage
    localStorage.setItem('pageHeaderColor', color);
}

// Apply CSS styles for page header colors
function applyPageHeaderStyles(color) {
    let styles = '';
    
    switch(color) {
        case 'white':
            styles = `
                .page-head, .page-head *, .page-head .container,
                .page-head .row, .page-head .page-head-content,
                .page-head .page-title, .page-head .title-area,
                .page-head .title-text, .page-head .page-actions,
                .page-head .standard-actions, .page-head .btn {
                    background-color: #ffffff !important; 
                    color: #333333 !important; 
                }
            `;
            break;
        case 'lightgreen':
            styles = `
                .page-head, .page-head *, .page-head .container,
                .page-head .row, .page-head .page-head-content,
                .page-head .page-title, .page-head .title-area,
                .page-head .title-text, .page-head .page-actions,
                .page-head .standard-actions, .page-head .btn {
                    background-color: #28a745 !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'darkgray':
            styles = `
                .page-head, .page-head *, .page-head .container,
                .page-head .row, .page-head .page-head-content,
                .page-head .page-title, .page-head .title-area,
                .page-head .title-text, .page-head .page-actions,
                .page-head .standard-actions, .page-head .btn {
                    background-color: #343a40 !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'black':
            styles = `
                .page-head, .page-head *, .page-head .container,
                .page-head .row, .page-head .page-head-content,
                .page-head .page-title, .page-head .title-area,
                .page-head .title-text, .page-head .page-actions,
                .page-head .standard-actions, .page-head .btn {
                    background-color: #000000 !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'blue':
            styles = `
                .page-head, .page-head *, .page-head .container,
                .page-head .row, .page-head .page-head-content,
                .page-head .page-title, .page-head .title-area,
                .page-head .title-text, .page-head .page-actions,
                .page-head .standard-actions, .page-head .btn {
                    background-color: #007bff !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'purple':
            styles = `
                .page-head, .page-head *, .page-head .container,
                .page-head .row, .page-head .page-head-content,
                .page-head .page-title, .page-head .title-area,
                .page-head .title-text, .page-head .page-actions,
                .page-head .standard-actions, .page-head .btn {
                    background-color: #6f42c1 !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'teal':
            styles = `
                .page-head, .page-head *, .page-head .container,
                .page-head .row, .page-head .page-head-content,
                .page-head .page-title, .page-head .title-area,
                .page-head .title-text, .page-head .page-actions,
                .page-head .standard-actions, .page-head .btn {
                    background-color: #20c997 !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'darkblue-gradient':
            styles = `
                .page-head, .page-head *, .page-head .container,
                .page-head .row, .page-head .page-head-content,
                .page-head .page-title, .page-head .title-area,
                .page-head .title-text, .page-head .page-actions,
                .page-head .standard-actions, .page-head .btn {
                    background: linear-gradient(135deg, #1e3c72, #2a5298) !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'lightblue-gradient':
            styles = `
                .page-head, .page-head *, .page-head .container,
                .page-head .row, .page-head .page-head-content,
                .page-head .page-title, .page-head .title-area,
                .page-head .title-text, .page-head .page-actions,
                .page-head .standard-actions, .page-head .btn {
                    background: linear-gradient(135deg, #74b9ff, #0984e3) !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'purple-gradient':
            styles = `
                .page-head, .page-head *, .page-head .container,
                .page-head .row, .page-head .page-head-content,
                .page-head .page-title, .page-head .title-area,
                .page-head .title-text, .page-head .page-actions,
                .page-head .standard-actions, .page-head .btn {
                    background: linear-gradient(135deg, #a29bfe, #6c5ce7) !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'teal-gradient':
            styles = `
                .page-head, .page-head *, .page-head .container,
                .page-head .row, .page-head .page-head-content,
                .page-head .page-title, .page-head .title-area,
                .page-head .title-text, .page-head .page-actions,
                .page-head .standard-actions, .page-head .btn {
                    background: linear-gradient(135deg, #00b894, #00cec9) !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'orange-gradient':
            styles = `
                .page-head, .page-head *, .page-head .container,
                .page-head .row, .page-head .page-head-content,
                .page-head .page-title, .page-head .title-area,
                .page-head .title-text, .page-head .page-actions,
                .page-head .standard-actions, .page-head .btn {
                    background: linear-gradient(135deg, #fdcb6e, #e17055) !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
        case 'red-gradient':
            styles = `
                .page-head, .page-head *, .page-head .container,
                .page-head .row, .page-head .page-head-content,
                .page-head .page-title, .page-head .title-area,
                .page-head .title-text, .page-head .page-actions,
                .page-head .standard-actions, .page-head .btn {
                    background: linear-gradient(135deg, #fd79a8, #e84393) !important; 
                    color: #ffffff !important; 
                }
            `;
            break;
    }
    
    // Remove existing dynamic styles
    const existingStyle = document.getElementById('dynamic-pageheader-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add new styles
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-pageheader-styles';
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

// Change navbar layout function
function changeNavbarLayout(layout) {
    // Remove active class from all layout options
    document.querySelectorAll('.layout-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Add active class to clicked option
    event.target.closest('.layout-option').classList.add('active');
    
    // Apply layout to navbar
    applyNavbarLayout(layout);
    
    // Save to localStorage
    localStorage.setItem('navbarLayout', layout);
}

// Apply CSS styles for navbar layouts
function applyNavbarLayout(layout) {
    let styles = '';
    
    switch(layout) {
        case 'default':
            styles = `
                .navbar, .layout-top-section, .layout-top-section * {
                    height: auto !important;
                    padding: 0.5rem 1rem !important;
                    border-radius: 0 !important;
                    box-shadow: none !important;
                    backdrop-filter: none !important;
                }
            `;
            break;
        case 'compact':
            styles = `
                .navbar, .layout-top-section, .layout-top-section * {
                    height: 40px !important;
                    padding: 0.25rem 0.75rem !important;
                    border-radius: 0 !important;
                    box-shadow: none !important;
                    backdrop-filter: none !important;
                }
                .navbar-brand, .navbar-nav, .navbar-toggler {
                    font-size: 0.875rem !important;
                }
            `;
            break;
        case 'glass':
            styles = `
                .navbar, .layout-top-section, .layout-top-section * {
                    background: rgba(255, 255, 255, 0.1) !important;
                    backdrop-filter: blur(20px) !important;
                    border: 1px solid rgba(255, 255, 255, 0.2) !important;
                    border-radius: 12px !important;
                    margin: 8px !important;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
                }
                .navbar-brand, .navbar-nav, .navbar-toggler {
                    color: rgba(255, 255, 255, 0.9) !important;
                }
            `;
            break;
        case 'minimal':
            styles = `
                .navbar, .layout-top-section, .layout-top-section * {
                    background: #ffffff !important;
                    border: 1px solid #e9ecef !important;
                    border-radius: 0 !important;
                    box-shadow: none !important;
                    backdrop-filter: none !important;
                    padding: 0.75rem 1rem !important;
                }
                .navbar-brand, .navbar-nav, .navbar-toggler {
                    color: #495057 !important;
                    font-weight: 400 !important;
                }
            `;
            break;
        case 'modern':
            styles = `
                .navbar, .layout-top-section, .layout-top-section * {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
                    border-radius: 16px !important;
                    margin: 12px !important;
                    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3) !important;
                    padding: 1rem 1.5rem !important;
                }
                .navbar-brand, .navbar-nav, .navbar-toggler {
                    color: #ffffff !important;
                    font-weight: 500 !important;
                }
            `;
            break;
        case 'dashboard':
            styles = `
                .navbar, .layout-top-section, .layout-top-section * {
                    background: #f8f9fa !important;
                    border: 1px solid #dee2e6 !important;
                    border-radius: 8px !important;
                    margin: 8px !important;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
                    padding: 0.75rem 1rem !important;
                }
                .navbar-brand, .navbar-nav, .navbar-toggler {
                    color: #495057 !important;
                    font-weight: 500 !important;
                }
            `;
            break;
    }
    
    // Remove existing dynamic styles
    const existingStyle = document.getElementById('dynamic-navbar-layout-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add new styles
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-navbar-layout-styles';
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

// Change main content color function
function changeMainContentColor(color) {
    // Remove active class from all main content color swatches
    document.querySelectorAll('.theme-section:nth-child(4) .color-swatch').forEach(swatch => {
        swatch.classList.remove('active');
    });
    
    // Add active class to clicked swatch
    event.target.classList.add('active');
    
    // Apply color to main content
    applyMainContentStyles(color);
    
    // Save to localStorage
    localStorage.setItem('mainContentColor', color);
}

// Apply CSS styles for main content colors
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

// Change main content text color function
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

// Apply CSS styles for main content text colors
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

        function changeFormContentStyle(color, type) {
            // Remove active class from all swatches in the form content section
            const formSection = document.querySelector('.theme-section:nth-child(5)');
            if (formSection) {
                formSection.querySelectorAll('.color-swatch').forEach(swatch => {
                    swatch.classList.remove('active');
                });
            }
            
            // Add active class to clicked swatch
            event.target.classList.add('active');
            
            // Apply form content style
            applyFormContentStyles(color, type);
            
            // Save to localStorage
            localStorage.setItem(`formContent${type.charAt(0).toUpperCase() + type.slice(1)}`, color);
        }

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
            
            // Apply styles based on type
            if (type === 'background') {
                styles = `
                    .page-body, .page-wrapper, .page-content, .layout-main,
                    .layout-main-section-wrapper, .layout-main-section,
                    .form-layout, .form-page, .form-tabs-list, .form-tab-content,
                    .form-section, .card-section, .section-body, .section-head,
                    .form-column, .form-group, .frappe-control,
                    .control-input-wrapper, .control-input,
                    .input-with-feedback, .form-control,
                    .tab-pane, .nav-link, .nav-item,
                    .grid-field, .form-grid-container, .form-grid,
                    .grid-heading-row, .grid-body, .grid-footer,
                    .timeline-item, .timeline-content,
                    .comment-box, .comment-input-wrapper {
                        background-color: ${colorValue} !important;
                    }
                `;
            } else if (type === 'border') {
                styles = `
                    .page-body, .page-wrapper, .page-content, .layout-main,
                    .layout-main-section-wrapper, .layout-main-section,
                    .form-layout, .form-page, .form-tabs-list, .form-tab-content,
                    .form-section, .card-section, .section-body, .section-head,
                    .form-column, .form-group, .frappe-control,
                    .control-input-wrapper, .control-input,
                    .input-with-feedback, .form-control,
                    .tab-pane, .nav-link, .nav-item,
                    .grid-field, .form-grid-container, .form-grid,
                    .grid-heading-row, .grid-body, .grid-footer,
                    .timeline-item, .timeline-content,
                    .comment-box, .comment-input-wrapper {
                        border: 1px solid ${colorValue} !important;
                    }
                `;
            } else if (type === 'font') {
                styles = `
                    .page-body, .page-wrapper, .page-content, .layout-main,
                    .layout-main-section-wrapper, .layout-main-section,
                    .form-layout, .form-page, .form-tabs-list, .form-tab-content,
                    .form-section, .card-section, .section-body, .section-head,
                    .form-column, .form-group, .frappe-control,
                    .control-input-wrapper, .control-input,
                    .input-with-feedback, .form-control,
                    .tab-pane, .nav-link, .nav-item,
                    .grid-field, .form-grid-container, .form-grid,
                    .grid-heading-row, .grid-body, .grid-footer,
                    .timeline-item, .timeline-content,
                    .comment-box, .comment-input-wrapper,
                    .page-body *, .page-wrapper *, .page-content *, .layout-main *,
                    .layout-main-section-wrapper *, .layout-main-section *,
                    .form-layout *, .form-page *, .form-tabs-list *, .form-tab-content *,
                    .form-section *, .card-section *, .section-body *, .section-head *,
                    .form-column *, .form-group *, .frappe-control *,
                    .control-input-wrapper *, .control-input *,
                    .input-with-feedback *, .form-control *,
                    .tab-pane *, .nav-link *, .nav-item *,
                    .grid-field *, .form-grid-container *, .form-grid *,
                    .grid-heading-row *, .grid-body *, .grid-footer *,
                    .timeline-item *, .timeline-content *,
                    .comment-box *, .comment-input-wrapper * {
                        color: ${colorValue} !important;
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
function changeSidebarColor(color) {
    // Remove active class from all sidebar color swatches
    document.querySelectorAll('.theme-section:nth-child(2) .color-swatch').forEach(swatch => {
        swatch.classList.remove('active');
    });
    
    // Add active class to clicked swatch
    event.target.classList.add('active');
    
    // Apply color to sidebar
    const sidebar = document.querySelector('.sidebar') || document.querySelector('.nav-sidebar') || document.querySelector('.sidebar-nav') || document.querySelector('.sidebar-menu');
    
    if (sidebar) {
        // Remove existing color classes
        sidebar.classList.remove('sidebar-white', 'sidebar-lightgreen', 'sidebar-darkgray', 'sidebar-black', 'sidebar-blue', 'sidebar-purple', 'sidebar-teal', 'sidebar-darkblue-gradient', 'sidebar-lightblue-gradient', 'sidebar-purple-gradient', 'sidebar-teal-gradient', 'sidebar-orange-gradient', 'sidebar-red-gradient');
        
        // Add new color class
        sidebar.classList.add(color);
        
        // Save to localStorage
        localStorage.setItem('sidebarColor', color);
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
                    background-color: rgba(255, 255, 255, 0.4) !important; 
                    color: #333333 !important; 
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
                    background-color: rgba(255, 255, 255, 0.1) !important;
                    z-index: 1 !important;
                }
                .col-lg-2.layout-side-section * {
                    color: #333333 !important;
                }
                .desk-sidebar, .sidebar-menu, .list-sidebar { 
                    background-color: rgba(255, 255, 255, 0.4) !important; 
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
                    color: #333333 !important;
                }
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background-color: rgba(255, 255, 255, 0.4) !important; 
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
                    background-color: rgba(40, 167, 69, 0.4) !important; 
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
                    background-color: rgba(40, 167, 69, 0.1) !important;
                    z-index: 1 !important;
                }
                .col-lg-2.layout-side-section * {
                    color: #ffffff !important;
                }
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background-color: rgba(40, 167, 69, 0.4) !important; 
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
        case 'sidebar-darkgray':
            styles = `
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background-color: rgba(52, 58, 64, 0.4) !important; 
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
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background-color: rgba(0, 123, 255, 0.4) !important; 
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
        case 'sidebar-purple':
            styles = `
                .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu { 
                    background-color: rgba(111, 66, 193, 0.4) !important; 
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

// Change sidebar background function
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

// Apply CSS styles for sidebar backgrounds
function applySidebarBackgroundStyles(bgType) {
    let bgImage = '';
    
    switch(bgType) {
        case 'dark-forest':
            bgImage = 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop")';
            break;
        case 'city-skyline':
            bgImage = 'url("https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=600&fit=crop")';
            break;
        case 'abstract-dark':
            bgImage = 'url("https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop")';
            break;
        case 'mountain-night':
            bgImage = 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop")';
            break;
        case 'ocean-dark':
            bgImage = 'url("https://images.unsplash.com/photo-1514894743437-4c2a81c6c041?w=800&h=600&fit=crop")';
            break;
        case 'space-dark':
            bgImage = 'url("https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=600&fit=crop")';
            break;
    }
    
    const styles = `
        .col-lg-2.layout-side-section {
            background-image: ${bgImage} !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
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
            background-color: rgba(0, 0, 0, 0.1) !important;
            z-index: 1 !important;
        }
        
        .col-lg-2.layout-side-section::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background-color: rgba(0, 0, 0, 0.6) !important;
            z-index: 1 !important;
        }
        
        .desk-sidebar, .sidebar-menu, .list-sidebar {
            background-image: ${bgImage} !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            position: relative !important;
            width: 100% !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        
        .sidebar, .nav-sidebar, .sidebar-nav, .sidebar-menu {
            background-image: ${bgImage} !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            position: relative !important;
            width: 100% !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        
        .desk-sidebar::before, .sidebar-menu::before, .list-sidebar::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background-color: rgba(0, 0, 0, 0.6) !important;
            z-index: 1 !important;
        }
        
        .sidebar::before, .nav-sidebar::before, .sidebar-nav::before, .sidebar-menu::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background-color: rgba(0, 0, 0, 0.6) !important;
            z-index: 1 !important;
        }
        
        .desk-sidebar > *, .sidebar-menu > *, .list-sidebar > * {
            position: relative !important;
            z-index: 2 !important;
            color: #ffffff !important;
        }
        
        .sidebar > *, .nav-sidebar > *, .sidebar-nav > *, .sidebar-menu > * {
            position: relative !important;
            z-index: 2 !important;
            color: #ffffff !important;
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
        
        .sidebar *, .nav-sidebar *, .sidebar-nav *, .sidebar-menu *,
        .sidebar a, .nav-sidebar a, .sidebar-nav a, .sidebar-menu a,
        .sidebar span, .nav-sidebar span, .sidebar-nav span, .sidebar-menu span,
        .sidebar div, .nav-sidebar div, .sidebar-nav div, .sidebar-menu div,
        .sidebar li, .nav-sidebar li, .sidebar-nav li, .sidebar-menu li,
        .sidebar .nav-link, .nav-sidebar .nav-link, .sidebar-nav .nav-link, .sidebar-menu .nav-link,
        .sidebar .nav-item, .nav-sidebar .nav-item, .sidebar-nav .nav-item, .sidebar-menu .nav-item {
            color: #ffffff !important;
        }
        
        .desk-sidebar-item.selected, .standard-sidebar-item.selected {
            background-color: rgba(255, 255, 255, 0.9) !important;
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
            color: #333333 !important;
        }
        
        .sidebar .nav-item.active, .nav-sidebar .nav-item.active, .sidebar-nav .nav-item.active, .sidebar-menu .nav-item.active,
        .sidebar .nav-link.active, .nav-sidebar .nav-link.active, .sidebar-nav .nav-link.active, .sidebar-menu .nav-link.active {
            background-color: rgba(255, 255, 255, 0.9) !important;
            color: #333333 !important;
        }
        .sidebar .nav-item.active .nav-link, .nav-sidebar .nav-item.active .nav-link, .sidebar-nav .nav-item.active .nav-link, .sidebar-menu .nav-item.active .nav-link,
        .sidebar .nav-item.active .nav-link span, .nav-sidebar .nav-item.active .nav-link span, .sidebar-nav .nav-item.active .nav-link span, .sidebar-menu .nav-item.active .nav-link span {
            color: #333333 !important;
        }
    `;
    
    // Remove existing dynamic styles
    const existingStyle = document.getElementById('dynamic-sidebar-bg-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add new styles
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-sidebar-bg-styles';
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

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
    const savedNavbarLayout = localStorage.getItem('navbarLayout');
    if (savedNavbarLayout) {
        applyNavbarLayout(savedNavbarLayout);
        
        // Mark the corresponding option as active
        const activeNavbarLayoutOption = document.querySelector(`[data-layout="${savedNavbarLayout}"]`);
        if (activeNavbarLayoutOption) {
            activeNavbarLayoutOption.classList.add('active');
        }
    }
    
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

        const savedFormContentBorder = localStorage.getItem('formContentBorder');
        if (savedFormContentBorder) {
            applyFormContentStyles(savedFormContentBorder, 'border');
            
            // Mark the corresponding swatch as active
            const activeFormBorderSwatch = document.querySelector(`[onclick="changeFormContentStyle('${savedFormContentBorder}', 'border')"]`);
            if (activeFormBorderSwatch) {
                activeFormBorderSwatch.classList.add('active');
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

// Change sidebar font function
function changeSidebarFont(font) {
    // Remove active class from all font options
    document.querySelectorAll('.font-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Add active class to clicked option
    event.target.closest('.font-option').classList.add('active');
    
    // Save to localStorage
    localStorage.setItem('sidebarFont', font);
    
    // Apply CSS styles for font
    applySidebarFontStyles(font);
}

// Change sidebar layout function
function changeSidebarLayout(layout) {
    // Remove active class from all layout options
    document.querySelectorAll('.layout-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Add active class to clicked option
    event.target.closest('.layout-option').classList.add('active');
    
    // Save to localStorage
    localStorage.setItem('sidebarLayout', layout);
    
    // Apply CSS styles for layout
    applySidebarLayoutStyles(layout);
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

// Apply CSS styles for sidebar fonts
function applySidebarFontStyles(font) {
    let fontFamily = '';
    
    switch(font) {
        case 'default':
            fontFamily = 'inherit';
            break;
        case 'roboto':
            fontFamily = "'Roboto', sans-serif";
            break;
        case 'opensans':
            fontFamily = "'Open Sans', sans-serif";
            break;
        case 'lato':
            fontFamily = "'Lato', sans-serif";
            break;
        case 'montserrat':
            fontFamily = "'Montserrat', sans-serif";
            break;
        case 'poppins':
            fontFamily = "'Poppins', sans-serif";
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
            font-family: ${fontFamily} !important;
        }
    `;
    
    // Remove existing dynamic styles
    const existingStyle = document.getElementById('dynamic-sidebar-font-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add new styles
    const styleElement = document.createElement('style');
    styleElement.id = 'dynamic-sidebar-font-styles';
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

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
    
    if (savedLayout) {
        applySidebarLayoutStyles(savedLayout);
        
        const activeLayout = document.querySelector(`[data-layout="${savedLayout}"]`);
        if (activeLayout) {
            activeLayout.classList.add('active');
        }
    }
}

// Load saved color when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        loadSavedColor();
        loadSavedSidebarSettings();
    }, 1000); // Delay to ensure elements are loaded
});