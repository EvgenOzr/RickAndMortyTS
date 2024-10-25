import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { RaMApi} from "../service/RaMService";
import { UserApi } from "../service/UserService";

const rootReducer = combineReducers({
    // [RaMApi.reducerPath]: RaMApi.reducer
    [RaMApi.reducerPath]: RaMApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(RaMApi.middleware),
    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']