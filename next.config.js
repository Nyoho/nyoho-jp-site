const path = require('path')

module.exports = {
  distDir: 'build_dir',
  assetPrefix: './',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  future: {
    webpack5: true,
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // '/post/:id': { page: '/post/[id].tsx' },
      // '/about.md': { page: '/about' },
      // '/team.md': { page: '/team' },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
    }
  },
}
