import { createSlice } from '@reduxjs/toolkit'
import { getInfo, getMachines, getSections, getSubSections, getIncidents } from '../../actions/machineActions'

const initialState = {
  machines: [],
  sections: [],
  subsections: [],
  listInfo: [],
  listIncidents: [],
  isLoading: false,
  error: false,
  errorResponse: null
}

export const machineSlice = createSlice({
  name: 'machine',
  initialState,
  reducers: {},
  extraReducers: {
    //Get Machines
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
    //Get Sections
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
    //Get Subsections
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
    },
    //Get Infos
    [getInfo.pending] : (state) => {
      state.isLoading = true
      state.listInfo = []
    },
    [getInfo.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.listInfo = payload
    },
    [getInfo.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.listInfo = []
      state.error = true
      state.errorResponse = payload
    },
    //Get Incidents
    [getIncidents.pending] : (state) => {
      state.isLoading = true
      state.listIncidents = []
    },
    [getIncidents.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.listIncidents = payload
    },
    [getIncidents.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.listIncidents = []
      state.error = true
      state.errorResponse = payload
    },
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

export const selectIncidents = (state) => state.machine.listIncidents

export default machineSlice.reducer