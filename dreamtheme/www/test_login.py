import frappe
from frappe import _

@frappe.whitelist(allow_guest=True)
def test_administrator_login():
    """Test login with Administrator/123"""
    try:
        # Test with Administrator/123
        email = "Administrator"
        password = "123"
        
        # Authenticate user using ERPNext's authentication
        frappe.local.login_manager.authenticate(email, password)
        frappe.local.login_manager.post_login()
        
        return {
            'success': True,
            'message': 'Login successful with Administrator/123!',
            'redirect_url': '/app'
        }
        
    except Exception as e:
        frappe.log_error(frappe.get_traceback(), "Test Login Error")
        return {
            'success': False,
            'message': f'Login failed: {str(e)}'
        }

@frappe.whitelist(allow_guest=True)
def check_user_exists():
    """Check if Administrator user exists"""
    try:
        # Check if Administrator user exists
        user = frappe.get_doc("User", "Administrator")
        return {
            'success': True,
            'message': f'User exists: {user.email}',
            'user_data': {
                'name': user.name,
                'email': user.email,
                'enabled': user.enabled
            }
        }
        
    except Exception as e:
        return {
            'success': False,
            'message': f'User check failed: {str(e)}'
        }