module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@views': './src/views',
        '@database': './src/database',
        '@helpers': './src/helpers',
        '@core': './src/core',
        '@routes': './src/routes',
        '@docs': './src/docs',
              '@covers': './src/covers',
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
