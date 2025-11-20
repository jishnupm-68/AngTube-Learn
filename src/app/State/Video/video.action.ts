import { createAction, props } from "@ngrx/store";

export const addVideos = createAction('[Video component] AddVideos',
    props<{videos:unknown }>()
)