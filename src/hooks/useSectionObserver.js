import { useEffect, useState } from "react";
export function useSectionObserver(target) {
  const [view, setView] = useState(false);
  useEffect(() => {
    const el = target.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setView(true)
        el.classList.remove("hideElement")
      } else {
        el.classList.add("hideElement")
      };
    })
    observer.observe(el)
    return () =>  observer.disconnect();
  }, [view, target]);
  return view;
};