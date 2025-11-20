import { createReducer, on } from "@ngrx/store"
import { addVideos } from "./video.action"

export interface VideoState  {
    videoData: unknown
}

export const initialVideoState:VideoState = {
    videoData :[]
}

export const VideoReducer = createReducer(
    initialVideoState,
    on(addVideos, (state,{videos})=>({...state, videoData:videos}))
)    