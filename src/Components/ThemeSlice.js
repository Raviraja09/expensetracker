import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = {theme: ''}

const ThemeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        darkMode(state) {
            state.theme = 'dark'
        },
        lightMode(state) {
            state.theme = ''
        }
    }
})

export const themeActions = ThemeSlice.actions

export default ThemeSlice.reducer