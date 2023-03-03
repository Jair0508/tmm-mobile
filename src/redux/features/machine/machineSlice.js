import { createSlice } from '@reduxjs/toolkit'
import { getMachines, getSections } from '../../actions/machineActions'

const initialState = {
  machines: [],
  sections: [],
  isLoading: false,
  error: false,
  errorResponse: null
}

export const machineSlice = createSlice({
  name: 'machine',
  initialState,
  reducers: {},
  extraReducers: {
    [getMachines.pending] : (state) => {
      state.isLoading = true
      state.machines = []
    },
    [getMachines.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.machines = payload
    },
    [getMachines.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.machines = []
      state.error = true
      state.errorResponse = payload
    },
    [getSections.pending] : (state) => {
      state.isLoading = true
      state.sections = []
    },
    [getSections.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.sections = payload
    },
    [getSections.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.sections = []
      state.error = true
      state.errorResponse = payload
    }
  }
})

export const selectMachines = (state) => {
  let machines = []
  state.machine.machines.forEach(element => {
    machines.push({...element, visit: false})
  });
  return machines
}

export default machineSlice.reducer