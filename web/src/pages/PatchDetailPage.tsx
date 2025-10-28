import { Link, useParams } from 'react-router-dom';
import PatchDetail from '../components/PatchDetail';
import { useBadges } from '../hooks/useBadges';

const PatchDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { getBadgeById } = useBadges();
  const patch = id ? getBadgeById(id) : undefined;

  if (!patch) {
    return (
      <div className="page page--detail">
        <p role="alert">We couldn't find that patch. It may have been renamed or removed.</p>
        <Link to="/patches" className="button">
          Back to patch list
        </Link>
      </div>
    );
  }

  return (
    <div className="page page--detail">
      <PatchDetail patch={patch} />
      <div className="page__actions">
        <Link to="/patches" className="button">
          Back to patch list
        </Link>
      </div>
    </div>
  );
};

export default PatchDetailPage;
