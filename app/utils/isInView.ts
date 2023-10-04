import { MutableRefObject, useEffect, useRef, useState } from "react";

export const useWasSeen = () => {
  // to prevents runtime crash in IE, let's mark it true right away
  const [wasSeen, setWasSeen] = useState(
    typeof IntersectionObserver !== "function"
  );

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && !wasSeen) {
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setWasSeen(true)
      );
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [wasSeen]);
  return [wasSeen, ref] as const;
};
