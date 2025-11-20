export interface Snippet{
    categoryId:string,
    channelId:string,
    channelTitle:string,
    description:string,
    localized:Localized,
    publishedAt:string,
    thumbnails:{
        high:High,
        medium: High,
        default:High
    }

}
export interface Statistics{
    commentCount: string,
    favoriteCount: string,
    likeCount: string,
    viewCount: string

}
export interface Localized{
    description:  string,
    title: string
}

export interface High{
    height:number,
    url:string,
    width:number
}


export interface VideoItems {
    etag:string,
    id:string,
    kind:string,
    snippet: Snippet,
    statistics:Statistics,
}
