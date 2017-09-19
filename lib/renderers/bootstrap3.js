const PLUGIN_CONST = require('../constants');
const utils = require('../utils');

module.exports = (md, options, parsedCodeBlocks) => {
  const navItems = [];
  const allSections = parsedCodeBlocks.map((item, i) => {
    const descriptor = item.lang;
    const tabId = `${descriptor.replace(PLUGIN_CONST.langSeperator, '-')}-${i}`;
    item.sanitizedBlock = item.block.replace(descriptor, utils.getLangName(descriptor));
    const render = md.render(item.sanitizedBlock);
    const active = i === 0 ? ' active' : '';
    const lang = `<!-- lang section -->
          <div role="tabpanel" class="tab-pane lang-section${active}" id="${tabId}">
              ${render}
          </div>  <!-- lang section end -->`;
    item.rendered = lang;
    const nav = `
          <li role="presentation" class="${active}">
              <a href="#${tabId}" aria-controls="${tabId}" 
              role="tab" data-toggle="tab">${utils.getTabName(descriptor)}</a>
          </li>`;
    item.nav = nav;
    navItems.push(nav);
    return item.rendered;
  });

  const group = `<!-- codegroup -->
      <div class="codegroup">
          <ul class="nav nav-tabs" role="tablist">
              ${navItems.join('')}
          </ul>
          <div class="tab-content">
              ${allSections.join('')}
          </div>
      </div>  <!-- codegroup end -->`;
  return group;
};
