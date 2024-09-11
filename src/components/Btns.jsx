export function BtnPrimary({title}) {
  return (
    <button className="py-1 px-2 rounded-full text-lg bg-gradient-to-r to-red-200 from-sky-100 dark:to-slate-800 dark:from-zinc-700">
      {title}
    </button>
  );
};