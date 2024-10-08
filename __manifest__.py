# -*- coding: utf-8 -*-
# Copyright 2019-Present Lekhnath Rijal<inboxlekhnath@gmail.com>
# License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl.html).

{
    'name': 'Web Prestige',
    'summary': 'Backend theme Web Prestige v12',
    'version': '12.0.1.0',
    'author': 'Lekhnath Rijal',
    'category': 'Theme/Backend',
    'description': '''
Odoo theme
Backend theme
Odoo backend
Theme Prestige
backend
    ''',
    'depends': [
        'base',
        'web',
    ],
    'data': [
        'views/webclient_templates.xml',
        'views/login_layout.xml',
    ],
    'qweb': [
        'static/src/xml/base.xml',
    ],
    'images': [
        'static/description/main_screenshot.png',
    ],
    'license': 'LGPL-3',
    'auto_install': True,
    'installable': True,
    'application':False,
}
