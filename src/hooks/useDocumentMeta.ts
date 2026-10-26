import { useEffect } from 'react';

type DocumentMeta = {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
};

const SOCIAL_IMAGE =
  'https://desotoelectricpros.online/De_Soto_Electric_Pros_Logo_(1)-Photoroom.png';
const SITE_NAME = 'De Soto Electric Pros';

const OG_KEYS = [
  'og:title',
  'og:description',
  'og:url',
  'og:site_name',
  'og:type',
  'og:image',
] as const;

const TWITTER_KEYS = [
  'twitter:card',
  'twitter:title',
  'twitter:description',
  'twitter:image',
] as const;

function getMeta(key: string, attr: 'name' | 'property'): HTMLMetaElement | null {
  return document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
}

function setMeta(key: string, content: string, attr: 'name' | 'property') {
  let el = getMeta(key, attr);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function restoreMeta(
  key: string,
  attr: 'name' | 'property',
  prevContent: string | null,
) {
  const el = getMeta(key, attr);
  if (prevContent !== null) {
    if (el) {
      el.content = prevContent;
    } else {
      setMeta(key, prevContent, attr);
    }
  } else if (el) {
    el.remove();
  }
}

export function useDocumentMeta({
  title,
  description,
  canonical,
  noindex,
}: DocumentMeta) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let desc = getMeta('description', 'name');
    if (!desc) {
      desc = document.createElement('meta');
      desc.name = 'description';
      document.head.appendChild(desc);
    }
    const prevDesc = desc.content;
    desc.content = description;

    const canonicalEl = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    const prevCanonical = canonicalEl?.getAttribute('href') ?? null;
    if (canonical) {
      if (!canonicalEl) {
        const el = document.createElement('link');
        el.rel = 'canonical';
        el.href = canonical;
        document.head.appendChild(el);
      } else {
        canonicalEl.href = canonical;
      }
    } else if (canonicalEl) {
      canonicalEl.remove();
    }

    const robotsEl = getMeta('robots', 'name');
    const prevRobots = robotsEl?.content ?? null;
    if (noindex) {
      if (!robotsEl) {
        const el = document.createElement('meta');
        el.name = 'robots';
        el.content = 'noindex, nofollow';
        document.head.appendChild(el);
      } else {
        robotsEl.content = 'noindex, nofollow';
      }
    } else if (robotsEl) {
      robotsEl.remove();
    }

    const prevOg: Record<string, string | null> = {};
    OG_KEYS.forEach((key) => {
      prevOg[key] = getMeta(key, 'property')?.content ?? null;
    });
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonical ?? '', 'property');
    setMeta('og:site_name', SITE_NAME, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:image', SOCIAL_IMAGE, 'property');

    const prevTwitter: Record<string, string | null> = {};
    TWITTER_KEYS.forEach((key) => {
      prevTwitter[key] = getMeta(key, 'name')?.content ?? null;
    });
    setMeta('twitter:card', 'summary', 'name');
    setMeta('twitter:title', title, 'name');
    setMeta('twitter:description', description, 'name');
    setMeta('twitter:image', SOCIAL_IMAGE, 'name');

    return () => {
      document.title = prevTitle;
      desc!.content = prevDesc;

      const currentCanonical = document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]',
      );
      if (prevCanonical !== null) {
        if (!currentCanonical) {
          const el = document.createElement('link');
          el.rel = 'canonical';
          el.href = prevCanonical;
          document.head.appendChild(el);
        } else {
          currentCanonical.href = prevCanonical;
        }
      } else if (currentCanonical) {
        currentCanonical.remove();
      }

      const currentRobots = getMeta('robots', 'name');
      if (prevRobots !== null) {
        if (!currentRobots) {
          const el = document.createElement('meta');
          el.name = 'robots';
          el.content = prevRobots;
          document.head.appendChild(el);
        } else {
          currentRobots.content = prevRobots;
        }
      } else if (currentRobots) {
        currentRobots.remove();
      }

      OG_KEYS.forEach((key) => restoreMeta(key, 'property', prevOg[key]));
      TWITTER_KEYS.forEach((key) =>
        restoreMeta(key, 'name', prevTwitter[key]),
      );
    };
  }, [title, description, canonical, noindex]);
}
