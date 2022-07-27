import axios from 'axios'
import { Dispatch } from 'redux'
import { UnsplashAction, IUnsplashState, unsplashActionTypes } from './types'

export const getUnsplashImages = () => {
  return async (dispatch: Dispatch<UnsplashAction>) => {
    try {
      dispatch({ type: unsplashActionTypes.GET_UNSPLASH_IMAGES })
      // FIXME: process.env
      const domain = 'https://api.unsplash.com/photos'
      const apiKey = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'

      const { data }: { data: Record<string, any>[] } =
        await axios.get(domain, {
          params: {
            client_id: apiKey
          }
        })

      const newState: IUnsplashState = {
        data,
        loading: false,
        error: null
      }
      console.log('data: ' + data)
      console.log('newState: ' + newState)
      dispatch({ type: unsplashActionTypes.GET_UNSPLASH_IMAGES_SUCCESS, payload: newState })
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: unsplashActionTypes.GET_UNSPLASH_IMAGES_ERROR, payload: error.message })
      }
    }
  }
}
