import { Menus } from '../../types/common'
import { Slice } from '../store'

export interface PageSlice {
  now: Menus
  mbMode: boolean
  setNow: (now: Menus) => void
  setMbMode: (mbMode: boolean) => void
}

export const createPageSlice: Slice<PageSlice> = (set) => ({
  now: 'PROFILE',
  mbMode: true,
  setNow: (now) => set({ now }),
  setMbMode: (mbMode) => set({ mbMode }),
})
