import { combineReducers } from 'redux'
import { unsplashReducer } from './unsplashReducer/reducer'

export const rootReducer = combineReducers({
  unsplash: unsplashReducer
})

export type RootReducer = ReturnType<typeof rootReducer>
