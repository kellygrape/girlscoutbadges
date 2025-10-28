import uniformImage from '../assets/uniform.svg';
import { useBadges } from '../hooks/useBadges';

const UniformGuidePage = () => {
  const { badges } = useBadges();

  return (
    <div className="page page--uniform">
      <header className="section-heading">
        <h2>Uniform Placement Guide</h2>
        <p className="section-subtitle">
          Use this guide to double-check badge placement before pinning or sewing them onto your scout's uniform.
        </p>
      </header>
      <div className="uniform-guide">
        <div className="uniform-guide__visual" role="img" aria-label="Girl Scout uniform with badge placement markers">
          <img src={uniformImage} alt="Girl Scout uniform illustration" className="uniform-guide__image" />
          {badges.map((badge) => (
            <button
              key={badge.id}
              className="uniform-guide__marker"
              style={{ top: `${badge.uniformPlacement.coordinates.top}%`, left: `${badge.uniformPlacement.coordinates.left}%` }}
              aria-label={`${badge.name} on the ${badge.uniformPlacement.area}`}
              title={`${badge.name} — ${badge.uniformPlacement.area}`}
              type="button"
            >
              <span aria-hidden>●</span>
            </button>
          ))}
        </div>
        <dl className="uniform-guide__legend">
          {badges.map((badge) => (
            <div className="uniform-guide__legend-item" key={badge.id}>
              <dt>{badge.name}</dt>
              <dd>
                <p>{badge.uniformPlacement.area}</p>
                <p className="uniform-guide__legend-position">{badge.uniformPlacement.position}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default UniformGuidePage;
