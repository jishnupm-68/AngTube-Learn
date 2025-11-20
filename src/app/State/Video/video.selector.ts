import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectVideoState  =(state:AppState)=>state.video


export const selectVideo = createSelector(
    selectVideoState,
    (state)=>state.videoData
)