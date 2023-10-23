import { create, StateCreator } from 'zustand'
import { persist, devtools, createJSONStorage } from 'zustand/middleware'
import { PageSlice, createPageSlice } from './slice/page'

export type StoreState = PageSlice
export type Slice<T> = StateCreator<StoreState, [], [], T>

const middleWare = (store: Slice<StoreState>) =>
  devtools(
    persist(store, {
      name: 'zustand Props',
      storage: createJSONStorage(() => sessionStorage),
    })
  )

const useStore = create<StoreState>()(
  middleWare((...a) => ({
    ...createPageSlice(...a),
  }))
)

export default useStore
