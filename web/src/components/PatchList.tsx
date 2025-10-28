import { Link } from 'react-router-dom';
import type { Patch } from '../types';

interface PatchListProps {
  patches: Patch[];
}

const PatchList = ({ patches }: PatchListProps) => {
  return (
    <section aria-labelledby="patch-list-heading">
      <div className="section-heading">
        <h2 id="patch-list-heading">Earned Patches</h2>
        <p className="section-subtitle">
          Browse your scout's accomplishments and tap a patch to learn more about how it was earned.
        </p>
      </div>
      <ul className="patch-grid">
        {patches.map((patch) => (
          <li key={patch.id} className="patch-card">
            <Link to={`/patches/${patch.id}`} className="patch-card__link">
              <img src={patch.image} alt={patch.name} className="patch-card__image" loading="lazy" />
              <div className="patch-card__body">
                <h3 className="patch-card__title">{patch.name}</h3>
                <p className="patch-card__description">{patch.description}</p>
                <p className="patch-card__meta" aria-label={`Awarded on ${patch.awardDate}`}>
                  Awarded: {new Date(patch.awardDate).toLocaleDateString(undefined, { dateStyle: 'medium' })}
                </p>
                <p className="patch-card__meta">
                  Placement: {patch.uniformPlacement.area}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PatchList;
