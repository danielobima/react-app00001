import { configureStore } from '@reduxjs/toolkit'
import vehicleReducer from './pages/reducers/vehicleReducer'

export default configureStore({
  reducer: {
      vehicles:vehicleReducer
  }
});

