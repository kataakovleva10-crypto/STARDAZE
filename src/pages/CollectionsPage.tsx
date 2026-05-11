import { Link } from 'react-router-dom';
import { artists } from '../data/artists';
import ArtistCard from '../components/ArtistCard';

export default function CollectionsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-neon/60">Explore</span>
        <h1 className="section-heading mt-2">All <span className="text-gradient">Collections</span></h1>
        <p className="mt-3 text-white/40 text-sm max-w-xl">
          Each collection is curated with a unique aesthetic inspired by the artist's vibe. Find your perfect match.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
          {artists.map((artist, i) => (
            <ArtistCard key={artist.id} artist={artist} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
