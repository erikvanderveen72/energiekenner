interface Stat {
  label: string;
  value: string;
  subtext?: string;
  icon: React.ReactNode;
}

export function StatsBar({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center text-primary">
              {stat.icon}
            </div>
            <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
          <p className="text-2xl font-bold text-text-main">{stat.value}</p>
          {stat.subtext && (
            <p className="text-xs text-text-muted mt-1">{stat.subtext}</p>
          )}
        </div>
      ))}
    </div>
  );
}
