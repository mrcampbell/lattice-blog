import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import inline from "lume/plugins/inline.ts";
import jsx from "lume/plugins/jsx.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import katex from "lume/plugins/katex.ts";
import mdx from "lume/plugins/mdx.ts";
import metas from "lume/plugins/metas.ts";
import minify_html from "lume/plugins/minify_html.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import nav from "lume/plugins/nav.ts";
import postcss from "lume/plugins/postcss.ts";
import prism from "lume/plugins/prism.ts";
import remark from "lume/plugins/remark.ts";
import sass from "lume/plugins/sass.ts";
import sitemap from "lume/plugins/sitemap.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";

const site = lume({
    src: "pages",
});

site.use(code_highlight());
site.use(inline());
site.use(jsx());
site.use(jsx_preact());
site.use(katex());
site.use(mdx());
site.use(metas());
site.use(minify_html());
site.use(multilanguage());
site.use(nav());
site.use(prism());
site.use(remark());
site.use(sass());
site.use(sitemap());
site.use(tailwindcss());
site.use(postcss());

export default site;
