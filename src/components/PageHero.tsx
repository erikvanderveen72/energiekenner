interface PageHeroProps {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  accentColor?: "sky" | "emerald" | "amber" | "rose" | "purple" | "cyan";
}

const accentMap = {
  sky: { blob1: "bg-sky-600/30", blob2: "bg-emerald-500/20", blob3: "bg-amber-500/15", text: "from-sky-400 to-emerald-400" },
  emerald: { blob1: "bg-emerald-600/30", blob2: "bg-sky-500/20", blob3: "bg-teal-500/15", text: "from-emerald-400 to-teal-400" },
  amber: { blob1: "bg-amber-600/30", blob2: "bg-orange-500/20", blob3: "bg-yellow-500/15", text: "from-amber-400 to-yellow-300" },
  rose: { blob1: "bg-rose-600/30", blob2: "bg-pink-500/20", blob3: "bg-amber-500/15", text: "from-rose-400 to-pink-400" },
  purple: { blob1: "bg-purple-600/30", blob2: "bg-indigo-500/20", blob3: "bg-sky-500/15", text: "from-purple-400 to-indigo-400" },
  cyan: { blob1: "bg-cyan-600/30", blob2: "bg-blue-500/20", blob3: "bg-emerald-500/15", text: "from-cyan-400 to-blue-400" },
};

export function PageHero({ badge, title, highlight, description, accentColor = "sky" }: PageHeroProps) {
  const colors = accentMap[accentColor];

  return (
    <section className="relative overflow-hidden bg-stone-900 text-white">
      {/* Gradient blobs */}
      <div className="absolute inset-0">
        <div className={`absolute -top-24 -left-24 w-[500px] h-[500px] ${colors.blob1} rounded-full blur-[100px]`} />
        <div className={`absolute top-1/2 right-0 w-[600px] h-[400px] ${colors.blob2} rounded-full blur-[120px]`} />
        <div className={`absolute bottom-0 left-1/3 w-[300px] h-[300px] ${colors.blob3} rounded-full blur-[80px]`} />
      </div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium mb-6 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {badge}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
            {title}
            {highlight && (
              <>
                <br />
                <span className={`bg-gradient-to-r ${colors.text} bg-clip-text text-transparent`}>{highlight}</span>
              </>
            )}
          </h1>
          <p className="mt-5 text-lg md:text-xl text-stone-300 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
