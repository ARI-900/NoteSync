import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";



const initialState = {
    pastes: localStorage.getItem('pastes') ?
        JSON.parse(localStorage.getItem('pastes'))
        :
        []
}



const pasteSlice = createSlice({
    name: "paste",
    initialState,

    reducers: {

        addToPastes: (state, action) => {
            const paste = action.payload;
            const index = state.pastes.findIndex((item) => item._id === paste._id);


            if (index >= 0) {
                toast.error("Paste already exists");
                return;
            }

            state.pastes.push(paste);

            localStorage.setItem('pastes', JSON.stringify(state.pastes));
            toast.success("Paste added");
        },


        updatePastes: (state, action) => {
            const paste = action.payload;

            const index = state.pastes.findIndex((item) => item._id === paste._id);

            if (index >= 0) {
                // Update the paste at the found index
                state.pastes[index] = paste;
                localStorage.setItem('pastes', JSON.stringify(state.pastes));
                toast.success("Paste updated");
            } 
            else {
                toast.error("Paste not found");
            }
        },


        removeFromPastes: (state, action) => {
            const pasteId = action.payload;
            const pasteIndex = state.pastes.findIndex((item) => item._id === pasteId)
            console.log("Hello", pasteId);
            if (pasteIndex >= 0) {
                // console.log("Paste does not exist", pasteIndex);
                state.pastes = state.pastes.filter((item) => item._id !== pasteId);
                localStorage.setItem('pastes', JSON.stringify(state.pastes));
                toast.success("Paste removed");
            }
        }
    }
})



export const { addToPastes, updatePastes, readPastes, removeFromPastes } = pasteSlice.actions;

export default pasteSlice.reducer;