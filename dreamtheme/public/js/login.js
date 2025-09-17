// Custom Login Page JavaScript

$(document).ready(function() {
    // Toggle password visibility
    $('.toggle-password').click(function() {
        const passwordInput = $('.pass-input');
        const icon = $(this);
        
        if (passwordInput.attr('type') === 'password') {
            passwordInput.attr('type', 'text');
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
        } else {
            passwordInput.attr('type', 'password');
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
        }
    });

    // Form submission
    $('#login-form').on('submit', function(e) {
        e.preventDefault();
        
        const form = $(this);
        const submitBtn = form.find('.btn-login');
        const email = form.find('input[name="usr"]').val();
        const password = form.find('input[name="pwd"]').val();
        const remember = form.find('input[name="remember"]').is(':checked');
        
        // Remove any existing error messages
        $('.error-message, .success-message').remove();
        
        // Basic validation
        if (!email || !password) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }
        
        // Check if it's an email or username (email contains @)
        if (email.includes('@') && !isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        form.addClass('loading');
        submitBtn.prop('disabled', true);
        
        // Make AJAX call to ERPNext login API
        $.ajax({
            url: '/api/method/login',
            type: 'POST',
            data: {
                usr: email,
                pwd: password,
                remember: remember
            },
            xhrFields: {
                withCredentials: true
            },
            success: function(response) {
                if (response.message === "Logged In") {
                    showMessage('Login successful! Redirecting...', 'success');
                    setTimeout(function() {
                        // Use the home_page from response or default to /app
                        const redirectUrl = response.home_page || '/app';
                        window.location.href = redirectUrl;
                    }, 1000);
                } else {
                    showMessage('Login failed. Please try again.', 'error');
                }
            },
            error: function(xhr) {
                let errorMessage = 'Login failed. Please try again.';
                try {
                    const response = JSON.parse(xhr.responseText);
                    errorMessage = response.message || errorMessage;
                } catch (e) {
                    // Use default error message
                }
                showMessage(errorMessage, 'error');
            },
            complete: function() {
                // Remove loading state
                form.removeClass('loading');
                submitBtn.prop('disabled', false);
            }
        });
    });

    // Social login handlers
    $('.facebook-logo').click(function(e) {
        e.preventDefault();
        showMessage('Facebook login integration coming soon!', 'info');
    });

    $('.google-logo').click(function(e) {
        e.preventDefault();
        showMessage('Google login integration coming soon!', 'info');
    });

    $('.apple-logo').click(function(e) {
        e.preventDefault();
        showMessage('Apple login integration coming soon!', 'info');
    });

    // Input focus effects
    $('.form-control').on('focus', function() {
        $(this).parent().addClass('focused');
    }).on('blur', function() {
        if (!$(this).val()) {
            $(this).parent().removeClass('focused');
        }
    });

    // Enter key handling
    $('.form-control').on('keypress', function(e) {
        if (e.which === 13) {
            $('#login-form').submit();
        }
    });

    // Auto-focus on email field
    $('input[name="usr"]').focus();
});

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    const messageClass = type === 'error' ? 'error-message' : 
                        type === 'success' ? 'success-message' : 'info-message';
    
    const messageHtml = `<div class="${messageClass}">${message}</div>`;
    
    // Insert message after the login heading
    $('.login-userheading').after(messageHtml);
    
    // Auto-hide info messages after 3 seconds
    if (type === 'info') {
        setTimeout(function() {
            $('.info-message').fadeOut();
        }, 3000);
    }
}

// Add info message styling
$('<style>')
    .prop('type', 'text/css')
    .html(`
        .info-message {
            background: #d1ecf1;
            color: #0c5460;
            padding: 10px 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            border: 1px solid #bee5eb;
            font-size: 0.9rem;
        }
        
        .form-addons.focused i,
        .pass-group.focused .toggle-password {
            color: #667eea;
        }
    `)
    .appendTo('head');