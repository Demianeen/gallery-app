export enum unsplashActionTypes {
  GET_UNSPLASH_IMAGES = 'GET_UNSPLASH_IMAGES',
  GET_UNSPLASH_IMAGES_SUCCESS = 'GET_UNSPLASH_IMAGES_SUCCESS',
  GET_UNSPLASH_IMAGES_ERROR = 'GET_UNSPLASH_IMAGES_ERROR'
}

export interface IUnsplashState {
  data: Record<string, any>[];
  loading: boolean;
  error: string | null;
}

export interface IGetUnsplashImagesAction {
  type: unsplashActionTypes.GET_UNSPLASH_IMAGES;
}

export interface IGetUnsplashImagesSuccessAction {
  type: unsplashActionTypes.GET_UNSPLASH_IMAGES_SUCCESS;
  payload: IUnsplashState;
}

export interface IGetUnsplashImagesErrorAction {
  type: unsplashActionTypes.GET_UNSPLASH_IMAGES_ERROR;
  payload: string;
}

export type UnsplashAction =
  IGetUnsplashImagesAction
  | IGetUnsplashImagesSuccessAction
  | IGetUnsplashImagesErrorAction
