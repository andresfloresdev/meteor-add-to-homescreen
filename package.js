Package.describe({
  name: '2associes:a2h',
  version: '1.0.0',
  summary: 'A basic, client side "Add to Home Screen" solution for iOS devices.',
  git: 'https://github.com/2Associes/meteor-add-to-homescreen',
  documentation: 'README.md'
})

Package.onUse((api) => {
  api.versionsFrom('1.6.1')

  api.use([
    'ecmascript',
    'templating@1.0.9',
    'jquery',
    'fourseven:scss@4.5.4'
  ], 'client')

  api.addFiles([
    'client/a2h.html',
    'client/a2h.scss',
    'client/a2h.js',
    'client/body.html',
    'a2h.js'
  ], 'client')

  api.export('AddToHomeScreen')
})

Package.onTest((api) => {
  api.use([
    'ecmascript',
    'tinytest',
    '2associes:a2h'
  ])

  api.mainModule('a2h-tests.js')
})
