import { createSlice } from '@reduxjs/toolkit'
import { getMachines, getSections, getSubSections } from '../../actions/machineActions'

const initialState = {
  machines: [],
  sections: [],
  subsections: [],
  listInfo: [],
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
    },
    [getSubSections.pending] : (state) => {
      state.isLoading = true
      state.subsections = []
    },
    [getSubSections.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.subsections = payload
    },
    [getSubSections.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.subsections = []
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

export const selectSections = (state) => state.machine.sections

export const selectSubSections = (state) => state.machine.subsections

export const selectInfo = (state) => state.machine.listInfo

export default machineSlice.reducer