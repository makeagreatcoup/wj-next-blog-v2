import markdownItToc from 'markdown-it-toc-done-right';
import markdownItAnchor from "markdown-it-anchor";
import markdownIt from 'markdown-it';

const MarkdownTocHtml = ({ markdown }:{markdown:string}) => {
  const markdownAndToc = markdown
  const html = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.linkInsideHeader(),
      permalinkBefore: true,
      permalinkSymbol: "#"
    })
    .use(markdownItToc,{
      placeHolders: {
      },
      containerClass:'mt-4 font-in text-base',
      itemClass:'py-1',
      linkClass:'data-[level=two]:pl-0  data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-4 sm:data-[level=three]:pl-6 flex items-center justify-start',
    })
    .render(markdownAndToc);
  return html
};

export default MarkdownTocHtml;