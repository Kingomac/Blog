import { type MarkdownInstance } from "astro";
import { type PostFrontmatter } from "../pages/posts/PostFrontmatter";

/**
 * Looks in Markdown posts files to list all the tags
 * @returns list of different tags in the posts
 */
export async function getTagsList() {
    const posts = import.meta.glob("../pages/posts/*.md") as Record<string, () => Promise<MarkdownInstance<PostFrontmatter>>>;
    const tags: Set<string> = new Set()
    for (const post in posts) {
        const val = await posts[post]()
        val.frontmatter.tags.flat().forEach(i => {
            tags.add(i)
        });
    }
    return [...tags]
}