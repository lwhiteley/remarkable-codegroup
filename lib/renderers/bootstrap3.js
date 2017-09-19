
module.exports = (md, options, parsedCodeBlocks) => {
  const navItems = [];
  const allSections = parsedCodeBlocks.map((item, i) => {
    const active = i === 0 ? ' active' : '';
    item.renderedSection = `<!-- lang section -->
          <div role="tabpanel" class="tab-pane lang-section${active}" id="${item.tabId}">
              ${item.render}
          </div>  <!-- lang section end -->`;
    item.nav = `
          <li role="presentation" class="${active}">
              <a href="#${item.tabId}" aria-controls="${item.tabId}" 
              role="tab" data-toggle="tab">${item.tabName}</a>
          </li>`;
    navItems.push(item.nav);
    return item.renderedSection;
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
