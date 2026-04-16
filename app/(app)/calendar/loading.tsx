export default function CalendarLoading() {
  return (
    <div className="flex flex-col h-full p-4 md:p-6 animate-pulse">
      {/* Header skeleton */}
      <div className="flex items-center justify-between mb-5">
        <div className="space-y-1.5">
          <div className="h-7 w-32 bg-white/5 rounded-md" />
          <div className="h-3 w-10 bg-white/3 rounded" />
        </div>
        <div className="flex gap-2">
          <div className="h-8 w-8 bg-white/5 rounded-md" />
          <div className="h-8 w-14 bg-white/5 rounded-md" />
          <div className="h-8 w-8 bg-white/5 rounded-md" />
        </div>
      </div>

      {/* Day header skeleton */}
      <div className="grid grid-cols-7 mb-1 gap-px">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="h-5 bg-white/3 rounded mx-1" />
        ))}
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-7 flex-1 border border-border rounded-lg overflow-hidden">
        {Array.from({ length: 35 }).map((_, i) => (
          <div key={i} className="border-r border-b border-border p-1.5 min-h-[5.5rem]">
            <div className="h-4 w-4 bg-white/5 rounded-full mb-1" />
            {i % 5 === 0 && <div className="h-3 bg-white/5 rounded-sm mt-1 w-full" />}
            {i % 7 === 0 && <div className="h-3 bg-white/3 rounded-sm mt-0.5 w-3/4" />}
          </div>
        ))}
      </div>

      {/* Input bar skeleton */}
      <div className="border-t border-border mt-0 px-4 py-4">
        <div className="max-w-3xl mx-auto h-12 bg-white/5 rounded-xl" />
      </div>
    </div>
  )
}
