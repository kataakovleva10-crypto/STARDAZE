export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-brand-black z-[100] flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-gradient animate-pulse">STARDAZE</h1>
        <div className="mt-6 w-32 h-px bg-white/10 mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-transparent via-brand-neon to-transparent animate-shimmer bg-[length:200%_100%]" />
        </div>
        <p className="mt-4 text-xs text-white/20 uppercase tracking-[0.3em]">Loading</p>
      </div>
    </div>
  );
}
