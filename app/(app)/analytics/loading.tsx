export default function AnalyticsLoading() {
  return (
    <div className="flex-1 overflow-auto p-4 md:p-6 max-w-4xl animate-pulse">
      <div className="mb-6 space-y-2">
        <div className="h-7 w-28 bg-muted rounded-md" />
        <div className="h-4 w-48 bg-muted/40 rounded" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-3 space-y-2">
            <div className="h-4 w-4 bg-muted rounded" />
            <div className="h-6 w-16 bg-muted rounded" />
            <div className="h-3 w-20 bg-muted/40 rounded" />
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card p-4 mb-4">
        <div className="h-4 w-32 bg-muted rounded mb-4" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="mb-3">
            <div className="h-3 w-20 bg-muted/40 rounded mb-1" />
            <div className="h-1.5 rounded-full bg-muted" />
          </div>
        ))}
      </div>
    </div>
  )
}
