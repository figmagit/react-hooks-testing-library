// This file normally contains logic for selecting which renderer to use.
// This uses dynamic require statements, which are not supported by `figbuild`.
// Instead, I've hard-coded it to always use the DOM renderer, since we use Jasmine
// and run our unit tests in the browser.

export {
  renderHook,
  act,
  cleanup,
  addCleanup,
  removeCleanup,
  suppressErrorOutput
} from './dom/pure'

export * from './types/react'
