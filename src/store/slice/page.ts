import { Menus } from '../../types/common'
import { Slice } from '../store'

export interface PageSlice {
  now: Menus
  setNow: (now: Menus) => void
}

export const createPageSlice: Slice<PageSlice> = (set) => ({
  now: 'PROFILE',
  setNow: (now) => set({ now }),
})
