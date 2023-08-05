import rss from '@astrojs/rss';
import { getCollection } from "astro:content";
import { SITE_META } from "@consts"
import { slugifyPostDate } from '@lib/utils';
export async function get(context) {
    const posts = await getCollection("blog");
    return rss({
        title: `Blog - ${SITE_META.title}`,
        description: 'My journey with Emacs and frontend development.',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${slugifyPostDate(post.data.pubDate)}/${post.slug}`
        }))
    });
}