import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cmsApi from "./cms/cmsApis";
import { useSelector, useDispatch } from "react-redux";
import commonSlice from "./common/commonSlice";

const reducers = {
    [commonSlice.name]: commonSlice.reducer,
    [cmsApi.reducerPath]: cmsApi.reducer
};

const initialState = {};

const rootReducer = combineReducers(reducers);

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        }).concat([
            cmsApi.middleware
        ]);
    },
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
    enhancers: (defaultEnhancers) => [...defaultEnhancers]
});


export const useAppSelector = () => useSelector(rootReducer);
export const useAppDispatch = () => useDispatch(store.dispatch);

export default store;