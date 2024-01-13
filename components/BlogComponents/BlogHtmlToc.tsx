'use client'
import React, { useEffect, useState } from 'react';

function extractHeadingsFromHtml(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const headings = Array.from(doc.querySelectorAll('h1, h2, h3,h4,h5,h6')).map(heading => ({
    level: parseInt(heading.tagName.substring(1), 10),
    text: heading.textContent,
    slug: heading.id || `${heading.textContent?.toLowerCase().replace(/\s/g, '-')}`
  }));
  return headings;
}

const BlogHtmlToc = ({ htmlContent }:{htmlContent:string}) => {
  const [headings, setHeadings] = useState<any>([]);
  useEffect(() => {
    const extractedHeadings = extractHeadingsFromHtml(htmlContent);
    setHeadings(extractedHeadings);
  }, [htmlContent]);

  return (
    <div className="table-of-contents">
      <h2>目录</h2>
      <ul>
        {headings.map((heading:any) => (
          <li key={heading.slug}>
            <a href={`#${heading.slug}`} className={`toc-level-${heading.level}`}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BlogHtmlToc