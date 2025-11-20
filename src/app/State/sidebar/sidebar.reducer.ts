import { createReducer, on } from "@ngrx/store"
import { closeSidebar, openSidebar, toggleSidebar } from "./sidebar.action"

export interface SidebarState {
    toggleState: boolean
}

export const initialSidebarState:SidebarState = {
    toggleState:true
}

export const ToggleSidebarReducer = createReducer(
    initialSidebarState,
    on(toggleSidebar, state=> ({...state, toggleState: !state.toggleState})),
    on(closeSidebar, state=>({...state, toggleState:false})),
    on(openSidebar,state=>({...state, toggleState:true}))
)