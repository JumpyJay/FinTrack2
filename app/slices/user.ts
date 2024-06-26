import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface userState {
  user: any,
  userLoading: boolean
}

// Define the initial state using that type
const initialState: userState = {
  user: null,
  userLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload;
    },
    setUserLoading: (state, action) => {
        state.userLoading = action.payload;
    }
  },
})

export const { setUser, setUserLoading } = userSlice.actions

export default userSlice.reducer;