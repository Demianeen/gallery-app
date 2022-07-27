// TODO: Change files structure for redux
import { UnsplashAction, unsplashActionTypes, IUnsplashState } from './types'

const initialState: IUnsplashState = {
  data: [],
  loading: false,
  error: null
}

export const unsplashReducer = (state = initialState, action: UnsplashAction): IUnsplashState => {
  switch (action.type) {
    case unsplashActionTypes.GET_UNSPLASH_IMAGES:
      return { ...state, loading: true }
    case unsplashActionTypes.GET_UNSPLASH_IMAGES_SUCCESS:
      return { ...action.payload }
    case unsplashActionTypes.GET_UNSPLASH_IMAGES_ERROR:
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}
