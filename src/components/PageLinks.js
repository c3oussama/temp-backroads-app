import { pageLinks } from '../data';
import PageLink from './PageLink';
const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((pageLink) => {
        return (
          <PageLink {...pageLink} itemClass={childClass} key={pageLink.id} />
        );
      })}
    </ul>
  );
};
export default PageLinks;
