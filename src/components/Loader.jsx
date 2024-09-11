export function Loader() {
  return (
    <div className={`fixed top-0 left-0 w-full h-full z-50 bg-slate-200 dark:bg-slate-950 grid place-items-center`}>
      <span className="w-12 h-12 rounded-full border-4 border-l-transparent dark:border-l-transparent border-slate-900 dark:border-slate-200 animate-spin"></span>
    </div>
  )
}