import authReducer from '../features/auth/authSlice'
import machineReducer from '../features/machine/machineSlice'
import formReducer from '../features/form/formSlice'
import personalReducer from '../features/personal/personalSlice'

const rootReducer = {
    auth: authReducer,
    personal: personalReducer,
    form: formReducer,
    machine: machineReducer,
}

export default rootReducer;