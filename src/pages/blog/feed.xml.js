import rss from '~/astrojs/rss';
import { getCollection } from "astro:content";
import { SITE_META } from "~/consts"
import { slugifyPostDate } from '~/lib/utils';
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";


export async function GET(context) {
    const posts = (await getCollection("blog", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    })
    ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

    return rss({
        title: `Blog - ${SITE_META.title}`,
        description: 'My journey with Emacs and frontend development.',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${slugifyPostDate(post.data.pubDate)}/${post.slug}`,
            content: sanitizeHtml(marked.parse(post.body, { headerIds: false, mangle: false }))
        }))
    });
}