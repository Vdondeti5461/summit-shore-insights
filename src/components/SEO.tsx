import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = `${title} | UVM Summit to Shore`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    if (description) setMeta("description", description);

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', fullTitle);
    if (!ogTitle.parentNode) document.head.appendChild(ogTitle);

    if (description) {
      const ogDesc = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      ogDesc.setAttribute('content', description);
      if (!ogDesc.parentNode) document.head.appendChild(ogDesc);
    }

    const link = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', `${window.location.origin}${pathname}`);
    if (!link.parentNode) document.head.appendChild(link);
  }, [title, description, pathname]);

  return null;
};

export default SEO;
