import { SidebarState } from "./sidebar/sidebar.reducer";
import { VideoState } from "./Video/video.reducer";

export interface AppState{
    sidebar:SidebarState,
    video:VideoState
}