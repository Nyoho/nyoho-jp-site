import fs from 'fs'
import path from 'path'
import { join } from 'path'
import reorg from '@orgajs/reorg'
import mutate from '@orgajs/reorg-rehype'
import html from 'rehype-stringify'
import { unified } from 'unified'
// import { parse, ParseOptions } from 'orga'
import parsePlugin from '@orgajs/reorg-parse'

const directory = join(process.cwd(), 'components')

export async function getData() {
  const fullPath = join(directory, `favorites.org`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const result = await unified().use(parsePlugin).use(mutate).use(html).process(fileContents)
  const content = result.toString()

  return content
}
