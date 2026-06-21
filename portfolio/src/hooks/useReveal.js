
import { useEffect, useRef } from "react";
 
function useReveal() {
  const ref = useRef(null);
 
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // ظهر في الشاشة → اضيف active
          element.classList.add("active");
        } else {
          // اختفى من الشاشة → اشيل active عشان يتعمل تاني
          element.classList.remove("active");
        }
      },
      { threshold: 0.15 }
    );
 
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
 
  return ref;
}
 
export default useReveal;