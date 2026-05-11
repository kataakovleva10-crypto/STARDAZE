import { Link } from 'react-router-dom';
import type { Artist } from '../data/artists';

interface Props {
  artist: Artist;
  index?: number;
}

export default function ArtistCard({ artist, index = 0 }: Props) {
  return (
    <Link
      to={`/collection/${artist.slug}`}
      className={`group relative overflow-hidden rounded-2xl aspect-[3/4] md:aspect-[4/5] opacity-0 animate-fade-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${artist.gradient}`} />
      <img
        src={artist.image}
        alt={artist.name}
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">{artist.mood}</span>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-gradient transition-all duration-500">
          {artist.name}
        </h3>
        <p className="text-sm text-white/50 mt-1 italic">{artist.tagline}</p>
        <div className="mt-4 overflow-hidden">
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-white/60 group-hover:text-white border-b border-white/20 group-hover:border-white pb-0.5 transition-all duration-300 translate-y-8 group-hover:translate-y-0">
            Explore Collection
          </span>
        </div>
      </div>

      <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-2xl transition-all duration-500" />
    </Link>
  );
}
