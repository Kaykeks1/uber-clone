import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

interface NavState {
  origin: any
  destination: any
  travelTimeInformation: any
}

const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<number>) => {
      state.origin += action.payload
    },
    setDestination: (state, action: PayloadAction<number>) => {
      state.destination += action.payload
    },
    setTravelTimeInformation: (state, action: PayloadAction<number>) => {
      state.travelTimeInformation += action.payload
    },
  },
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

export const selectOrigin = (state: RootState) => state.nav.origin
export const selectDestination = (state: RootState) => state.nav.destination
export const selectTravelTimeInformation = (state: RootState) => state.nav.travelTimeInformation

export default navSlice.reducer


