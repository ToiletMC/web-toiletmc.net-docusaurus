import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
export default function FooterLinkItem({item}) {
  const {to, href, label, prependBaseUrlToHref, ...props} = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  let title = '';

  switch (label) {
    case 'qq':
      title = '加入QQ群';
      break;
    case 'bilibili':
      title = "哔哩哔哩";
      break;
    case 'afdian':
      title = "爱发电";
      break;
    case 'broadcast':
      title = "宣传";
      break;
    case 'github':
      title = 'Github';
      break;
    default:
      title = '未知超链接';
      break;
  }

  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {<span title={title} className={"icon-" + label + " footer-icons"}></span>}
      {/* {href && !isInternalUrl(href) && <IconExternalLink />} */}
    </Link>
  );
}
