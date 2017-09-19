const includes = require('lodash/includes');

const PLUGIN_CONST = require('./constants');

const self = {};

self.getTabName = (lang) => {
  if (includes(lang, PLUGIN_CONST.langSeperator)) {
    const split = lang.split(PLUGIN_CONST.langSeperator);
    return split[1];
  }
  return lang;
};

self.getLangName = (lang) => {
  if (includes(lang, PLUGIN_CONST.langSeperator)) {
    const split = lang.split(PLUGIN_CONST.langSeperator);
    return split[0];
  }
  return lang;
};

module.exports = self;
