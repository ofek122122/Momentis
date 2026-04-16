export default function SettingsLoading() {
  return (
    <div className="flex-1 overflow-auto p-4 md:p-6 max-w-2xl animate-pulse">
      <div className="mb-6 space-y-2">
        <div className="h-7 w-24 bg-muted rounded-md" />
        <div className="h-4 w-56 bg-muted/40 rounded" />
      </div>

      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="space-y-1">
              <div className="h-4 w-32 bg-muted rounded" />
              <div className="h-3 w-48 bg-muted/40 rounded" />
            </div>
            <div className="h-12 bg-muted/20 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}
