import frappe

def after_install():
    """Called after dreamtheme app is installed"""
    frappe.msgprint("Dream Theme with Floating Gear Button has been installed successfully!")
    frappe.msgprint("The floating gear button will appear on the top-right corner of your ERPNext interface.")
    frappe.msgprint("Click on it to access quick settings like Dark Mode, Compact View, Auto Refresh, and Notifications.")