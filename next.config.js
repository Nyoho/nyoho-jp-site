import { join } from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const distDir = 'build_dir'
export const sassOptions = {
  includePaths: [join(__dirname, 'styles')],
}
export async function exportPathMap(defaultPathMap,
  { dev, dir, outDir, distDir, buildId }) {
  return {
    '/': { page: '/' },
    // '/post/:id': { page: '/post/[id].tsx' },
    // '/about.md': { page: '/about' },
    // '/team.md': { page: '/team' },
    // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
  }
}
