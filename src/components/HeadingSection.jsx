export function HeadingSection({titleSection}) {
  return (
    <div className="pb-12 pt-6 font-[cursive] text-4xl font-semibold pointer-events-none">
      <h2 className="relative w-fit before:content-[''] before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-full before:bg-teal-300">{titleSection}</h2>
    </div>
  );
};