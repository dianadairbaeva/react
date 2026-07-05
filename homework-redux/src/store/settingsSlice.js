import { createSlice } from "@reduxjs/toolkit";

const savedSettings = JSON.parse(localStorage.getItem("settings"));

const initialState = savedSettings || {
    theme: "Светлая",
    language: "Русский",
    notificationsEnabled: true
};

const settingsSlice = createSlice({
    name: "settings",

    initialState,

    reducers: {

        setTheme(state, action) {
            state.theme = action.payload;
        },

        setLanguage(state, action) {
            state.language = action.payload;
        },

        toggleNotifications(state) {
            state.notificationsEnabled = !state.notificationsEnabled;
        }

    }
});

export const {
    setTheme,
    setLanguage,
    toggleNotifications
} = settingsSlice.actions;

export default settingsSlice.reducer;