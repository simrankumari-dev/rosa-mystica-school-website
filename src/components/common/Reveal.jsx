import useReveal from "../../hooks/useReveal";
import "./Reveal.css";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}