import React, {createContext, useContext, useReducer} from 'react';

// createContext: This is used to create a "Context", which lets us share data (state) across different components without passing props manually.
// useContext: This hook allows us to access the data stored in a context from any component.
// useReducer: This hook helps manage more complex state in React by using a reducer function (a function that updates the state based on actions).

export const StateContext = createContext();

// Here, created a new context called StateContext.
// A context is like a container where we can store global data that any component in the app can access.

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// reducer: A function that determines how the state should change based on an action.
// initialState: The starting state before any updates happen.
// children: This refers to the child components that will be wrapped by this provider.

// stateProvider is a component that wraps around other components (this is called a "provider"). 
// This means any component inside it can access the state provided by StateContext.

// useReducer(reducer, initialState): This hook is used to manage state. 
// It returns an array containing the current state and a function to update the state. 
// It uses the reducer function to update the state based on the given action.

export const useStateValue = () => useContext(StateContext);

// useStateValue is a custom hook that allows you to easily access the state stored in StateContext. 
// It uses the useContext hook to grab the current state and the dispatch function (which is used to update the state).
// Any component that wants to access the global state just calls this hook instead of manually using useContext(StateContext).