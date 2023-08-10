import { configureStore } from '@reduxjs/toolkit';
//import {
//persistStore,
//persistReducer,
//FLUSH,
//REHYDRATE,
//PAUSE,
//PERSIST,
//PURGE,
//REGISTER,
//} from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filtr';
import { contactsReducer } from './contact';

//const contactsPersistConfig = {
//key: 'contact',
//storage,
//whitelist: ['contacts'],
//};

export const store = configureStore({
  reducer: {
    contactsState: contactsReducer,
    filterState: filterReducer,
  },
});

//middleware: getDefaultMiddleware =>
//getDefaultMiddleware({
//serializableCheck: {
//ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//},
//}),
//});

//export const persistor = persistStore(store);
