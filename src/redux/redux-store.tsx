import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

export type AppStateType = ReturnType<typeof rootReducer>;
// этой запись для типизации того, что возвращет функция rootReducer (state всего приложения)

const rootReducer = combineReducers({
// combineReducers - команда Redux для создания rootReducer
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer
});

const store = createStore(rootReducer);

export default store;

// @ts-ignore
window.store = store;