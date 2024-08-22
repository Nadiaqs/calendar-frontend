
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false
    },
    reducers: {
        onOpenDateModal: ( state ) => {
            state.isDateModalOpen = true;// este codigo es un codigo mutante y lo puedo hacer porq estoy trabajandoi con redux toolkit que permite este tipo de codigo
            //si estuviera trabajando solo con redux tendria que ser asi el cogigo
            //return{
            //...state,
            //isDataModalOpen: true
            //}
        },
        onCloseDateModal: ( state ) => {
            state.isDateModalOpen = false;
            
        },
    }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;