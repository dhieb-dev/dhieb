import { useEffect, useState } from "react";

export function BackTop() {
  const [top, setTop] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", backTop)
    function backTop() {
      if (window.scrollY > 350) {
        setTop(true)
      } else {
        setTop(false)
      }
    }
    return () => {
      window.removeEventListener("scroll", backTop)
    }
  }, [top])
  return (
    <>
      {top &&
        <button onClick={() => window.scrollTo({ top: 0 })} className="animate-bounce w-8">
          <svg className="dark:fill-slate-50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 11L12 8M12 8L9 11M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" className="fill-neutral-100 stroke-slate-800 dark:fill-neutral-800 dark:stroke-slate-100" strokeWidth="1.5" />
          </svg>
        </button>}
    </>
  );
};
