export interface PostFrontmatter {
    layout: string
    title: string 
    pubDate: string 
    description: string 
    author: string
    tags: string[]
    language?: string
    image?: string
}