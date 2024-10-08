odoo.define('web_prestige.Dialog', function (require) {
  "use strict";

  var core = require('web.core');
  var Dialog = require('web.Dialog');
  var extraSessionInfo = require('web_prestige.extraSessionInfo');

  var _t = core._t;
  var currentCompany = extraSessionInfo['current_company'] || 'Prestige';

  Dialog.include({
    init: function (parent, options) {
      var title;
      this._super(parent, options);

      switch (options.title) {
        case _t('Odoo'): {
          title = _(currentCompany)
          break;
        }

        case _t('Odoo Error'): {
          title = _(currentCompany + ': Error')
          break;
        }

        case _t('Odoo Warning'): {
          title = _(currentCompany + ': Warning')
          break;
        }

        default: {
          title = currentCompany + ' : ' + options.title
        }
      }

      this.title = title;
    }
  });

  return Dialog;
});

odoo.define('web_prestige.AbstractWebClient', function (require) {
  'use strict';

  const AbstractWebClient = require('web.AbstractWebClient');
  var extraSessionInfo = require('web_prestige.extraSessionInfo');

  var currentCompany = extraSessionInfo['current_company'] || 'Prestige';
  AbstractWebClient.include({
    init: function () {
      this._super.apply(this, arguments);
      this.set('title_part', { 'zopenerp': currentCompany });
    }
  });

  return AbstractWebClient;
});

odoo.define('web_prestige.AppsMenu', function (require) {
  "use strict";
  var AppsMenu = require('web.AppsMenu');

  AppsMenu.include({
    /**
     * @override
     * @param {web.Widget} parent
     * @param {Object} menuData
     * @param {Object[]} menuData.children
     */
    init: function (parent, menuData) {
      this._super.apply(this, arguments);
      this._apps = _.map(menuData.children, function (appMenuData) {
        var [moduleName, webIcon=false] = (appMenuData.web_icon || '').split(',');
        return {
          actionID: parseInt(appMenuData.action.split(',')[1]),
          menuID: appMenuData.id,
          name: appMenuData.name,
          xmlID: appMenuData.xmlid,
          module: moduleName,
          webIcon: webIcon &&  moduleName ?  moduleName + '/' + webIcon : false,
        };
      });
    },
  });

  return AppsMenu;
});
