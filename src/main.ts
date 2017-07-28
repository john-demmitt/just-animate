import { timeline } from './lib/timeline'
import { forEach, list } from './lib/lists'
import * as types from './lib/types'

/** 
 * Returns a new timeline of animation(s) using the options provided
 * @param options Animtion options or an array of options
 */
export function animate(options?: types.AddAnimationOptions | types.AddAnimationOptions[]) {
  const t1 = timeline()
  if (options) {
    forEach(list(options), opt => {
      opt.from = opt.from || 0
      t1.add(opt)
    })
  }
  return t1
}

/**s
 * Returns a new sequence of animations in a timeline
 * @param seqOptions an array of animations options
 */
export function sequence(seqOptions: types.AddAnimationOptions[]) {
  const t1 = timeline()
  forEach(seqOptions, opt => t1.add(opt))
  return t1
}

// export utils and types
export { timeline }
export { addPlugin, removePlugin } from './lib/plugins'
