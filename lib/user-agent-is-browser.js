function userAgentIsBrowser(ua) {
  function uaStartsWith(str) {
    return ua.slice(0,str.length) == str;
  }
  
  // Check the prefix used by 99% of browsers
  return ua.slice(0,8) == 'Mozilla/'
    // Older versions of Opera
    || uaStartsWith('Opera/')
    // Down the rabbit hole...
    || uaStartsWith('Lynx/')
    || uaStartsWith('Links ')
    || uaStartsWith('Elinks ') || uaStartsWith('ELinks ')
    || uaStartsWith('ELinks/')
    || uaStartsWith('Midori/')
    || uaStartsWith('w3m/')
    || uaStartsWith('Webkit/')
    || uaStartsWith('Vimprobable/')
    || uaStartsWith('Dooble/')
    || uaStartsWith('Dillo/')
    || uaStartsWith('Surf/')
    || uaStartsWith('NetSurf/')
    || uaStartsWith('Galaxy/')
    || uaStartsWith('Cyberdog/')
    || uaStartsWith('iCab/')
    || uaStartsWith('IBrowse/')
    || uaStartsWith('IBM WebExplorer /')
    || uaStartsWith('AmigaVoyager/')
    || uaStartsWith('HotJava/')
    || uaStartsWith('retawq/')
    || uaStartsWith('uzbl ') || uaStartsWith('Uzbl ')
    || uaStartsWith('NCSA Mosaic/') || uaStartsWith('NCSA_Mosaic/')
    // And, finally, we test to see if they're using *the first browser ever*.
    || ua == 'WorldWideweb (NEXT)';
}

if (typeof module != 'undefined') module.exports = userAgentIsBrowser;
