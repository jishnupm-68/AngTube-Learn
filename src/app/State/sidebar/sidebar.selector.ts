import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectSidebarState = (state:AppState)=>state.sidebar

export const selectSidebar = createSelector(
    selectSidebarState,
    (state)=>state.toggleState
)