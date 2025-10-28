import PatchList from '../components/PatchList';
import { useBadges } from '../hooks/useBadges';

const PatchListPage = () => {
  const { badges } = useBadges();

  return (
    <div className="page page--list">
      <PatchList patches={badges} />
    </div>
  );
};

export default PatchListPage;
