import { useEffect, useRef } from "react";

function Stars() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // امسح النجوم القديمة لو اتعملت قبل كده
    container.innerHTML = "";

    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      // مكان عشوائي
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";

      // حجم عشوائي
      const size = Math.random() * 3 + 1 + "px";
      star.style.width = size;
      star.style.height = size;

      // تأخير عشوائي للـ animation
      star.style.animationDelay = Math.random() * 3 + "s";
      star.style.animationDuration = Math.random() * 2 + 1.5 + "s";

      container.appendChild(star);
    }
  }, []);

  return <div className="stars" ref={containerRef}></div>;
}

export default Stars;
