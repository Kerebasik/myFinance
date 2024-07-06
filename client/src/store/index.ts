import {combineReducers, configureStore} from "@reduxjs/toolkit";
import bankReducers from "@/store/bankStore/slice.ts"


const rootReducer = combineReducers({
    bankReducers
})

export const setupStore = ()=>{
    return configureStore({
        reducer:rootReducer,
        devTools: true,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];