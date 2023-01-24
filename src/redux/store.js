import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getPlayerList, getPlayerDetails } from "./reducer/playerReducer";

const reducer = combineReducers({
  playerList: getPlayerList,
  playerDetails: getPlayerDetails,
  // searchMovie: getSearchMovie
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
