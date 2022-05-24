import { createSlice } from '@reduxjs/toolkit';
import faker from '@faker-js/faker';

const vehicle=()=>{
    return{
        noPlate:faker.vehicle.vrm(),
    make:faker.vehicle.manufacturer(),
    model:faker.vehicle.model()
    }

}
const vehicleSlice = createSlice({
    name:'vehicles',
    initialState:[vehicle(),vehicle(),vehicle()],
    reducers:{
        addVehicle:(state,action)=>{
            state.push({
                noPlate:action.payload.noPlate,
                make:action.payload.make,
                model:action.payload.model
            });
        },
        removeVehicle:(state,action)=>{
            state.splice(action.payload-1,1);
        }
    }
});

export const {addVehicle,removeVehicle} = vehicleSlice.actions;
export default vehicleSlice.reducer;