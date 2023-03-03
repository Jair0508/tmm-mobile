import authReducer from '../features/auth/authSlice'
import machineReducer from '../features/machine/machineSlice'

const rootReducer = {
    auth: authReducer,
    machine: machineReducer,
}

export default rootReducer;