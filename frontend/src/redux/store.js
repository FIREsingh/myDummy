import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadingSlice from './loadingSlice.js';
import storage from 'redux-persist/lib/storage'
import  {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import educationSlice from './educationSlice.js';
import experienceSlice from './experienceSlice.js';
import projectSlice from './projectSlice.js';
import authSlice from './authSlice.js';
import requestSlice from './requestSlice.js';


const persistConfig = {
    key: 'root',
    version: 1,
    storage: storage
}

const rootReducer = combineReducers({
    loading: loadingSlice,
    education: educationSlice,
    experience: experienceSlice,
    project: projectSlice,
    auth: authSlice,
    request: requestSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

export const persistor = persistStore(store);
export default store;