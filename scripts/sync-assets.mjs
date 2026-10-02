/**
 * 把仓库根目录的图片素材同步到 VitePress 的 public 目录。
 *
 * 为什么要这一步：
 *   仓库根目录的 icons/ covers/ features/ 同时承担两个角色——
 *   ① Notion 版 Wiki 的外链图床（https://raw.githubusercontent.com/Pau1am/lifescicraft-wiki/main/icons/...）
 *   ② VitePress 站点的图片素材
 *   为了不出现「同一张图存两份、改一处忘一处」，根目录保持为唯一源，
 *   构建/开发前由本脚本复制到 docs/public/（该目录已在 .gitignore 中忽略）。
 *
 * 若将来 Notion 版退役、不再需要根目录外链，可以把图片直接移入 docs/public/
 * 并删掉本脚本与对应的 npm 钩子。
 */
import { cp, mkdir, readdir, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIRS = ['icons', 'covers', 'features']

let failed = false

for (const dir of DIRS) {
  const src = join(repoRoot, dir)
  const dest = join(repoRoot, 'docs', 'public', dir)

  if (!existsSync(src)) {
    console.error(`[sync-assets] ✗ 找不到源目录：${src}`)
    failed = true
    continue
  }

  await rm(dest, { recursive: true, force: true })
  await mkdir(dest, { recursive: true })
  await cp(src, dest, { recursive: true })

  const count = (await readdir(dest)).length
  console.log(`[sync-assets] ✓ ${dir}/ → docs/public/${dir}/（${count} 个文件）`)
}

if (failed) {
  console.error('[sync-assets] 同步未完成，构建已中止。')
  process.exit(1)
}

console.log('[sync-assets] 全部完成。')
