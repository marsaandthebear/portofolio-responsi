import { createContext, useReducer } from 'react';

export const themeContext = createContext();

const initialState = { darkMode: false }; // Perbaikan: initialState

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'toggle':
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
};

export const ThemeProvider = (props) => { // Perbaikan: ThemeProvider
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return (
        <themeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </themeContext.Provider>
    );
};

