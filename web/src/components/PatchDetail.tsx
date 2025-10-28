import type { Patch } from '../types';

interface PatchDetailProps {
  patch: Patch;
}

const PatchDetail = ({ patch }: PatchDetailProps) => {
  return (
    <article className="patch-detail">
      <header className="patch-detail__header">
        <img src={patch.image} alt={patch.name} className="patch-detail__image" />
        <div>
          <h2>{patch.name}</h2>
          <p className="patch-detail__awarded">
            Awarded on{' '}
            <time dateTime={patch.awardDate}>
              {new Date(patch.awardDate).toLocaleDateString(undefined, { dateStyle: 'long' })}
            </time>
          </p>
          <p className="patch-detail__placement">
            Uniform placement: {patch.uniformPlacement.area} — {patch.uniformPlacement.position}
          </p>
        </div>
      </header>
      <p className="patch-detail__description">{patch.description}</p>
      <section aria-labelledby="criteria-heading" className="patch-detail__criteria">
        <h3 id="criteria-heading">Award Criteria</h3>
        <ol>
          {patch.criteria.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </section>
    </article>
  );
};

export default PatchDetail;
