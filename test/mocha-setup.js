// set node evn
process.env.NODE_ENV = 'test';

// register babel presets
require('babel-register')({
  presets: ['es2015', 'stage-0', 'react']
});

// mock resources loader
function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.less'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.md'] = noop;
require.extensions['.png'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.jpeg'] = noop;
require.extensions['.gif'] = noop;

require('./dom');
