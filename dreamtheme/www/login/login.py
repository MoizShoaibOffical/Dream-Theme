import frappe
from frappe import _
from frappe.utils import cstr, flt, getdate, cint, get_datetime
from frappe.website.website_generator import WebsiteGenerator
from frappe.website.doctype.website_settings.website_settings import get_website_settings

def get_context(context):
    """Get context for login page"""
    context.title = _("Login")
    context.no_cache = 1
    
    # Get website settings
    context.website_settings = get_website_settings()
    
    # Add custom context
    context.app_name = "ERPNext"
    context.app_logo = "/assets/frappe/images/frappe-favicon.svg"
    
    return context

@frappe.whitelist(allow_guest=True)
def login_user():
    """Handle user login"""
    try:
        # Get form data
        email = frappe.form_dict.get('usr')
        password = frappe.form_dict.get('pwd')
        remember = frappe.form_dict.get('remember')
        
        if not email or not password:
            return {
                'success': False,
                'message': 'Please fill in all fields.'
            }
        
        # Authenticate user
        frappe.local.login_manager.authenticate(email, password)
        frappe.local.login_manager.post_login()
        
        # Set remember me cookie if requested
        if remember:
            frappe.local.response.cookies['remember'] = '1'
            frappe.local.response.cookies['remember']['expires'] = 30 * 24 * 60 * 60  # 30 days
        
        return {
            'success': True,
            'message': 'Login successful!',
            'redirect_url': '/app'
        }
        
    except Exception as e:
        frappe.log_error(frappe.get_traceback(), "Login Error")
        return {
            'success': False,
            'message': 'Invalid email or password. Please try again.'
        }

@frappe.whitelist(allow_guest=True)
def custom_login():
    """Custom login method that overrides frappe.auth.login"""
    try:
        # Get form data
        email = frappe.form_dict.get('usr')
        password = frappe.form_dict.get('pwd')
        remember = frappe.form_dict.get('remember')
        
        if not email or not password:
            frappe.throw("Please fill in all fields.")
        
        # Authenticate user using ERPNext's authentication
        frappe.local.login_manager.authenticate(email, password)
        frappe.local.login_manager.post_login()
        
        # Set remember me cookie if requested
        if remember:
            frappe.local.response.cookies['remember'] = '1'
            frappe.local.response.cookies['remember']['expires'] = 30 * 24 * 60 * 60  # 30 days
        
        # Redirect to app
        frappe.local.response["type"] = "redirect"
        frappe.local.response["location"] = "/app"
        
    except Exception as e:
        frappe.log_error(frappe.get_traceback(), "Custom Login Error")
        frappe.throw("Invalid email or password. Please try again.")