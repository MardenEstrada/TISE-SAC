export default function Logo({ className = "" }) {
  return (
    <span className={`text-xl font-extrabold tracking-tight sm:text-2xl ${className}`}>
      <span className="text-primary">TISE </span>
      <span className="text-brand-500">SAC</span>
    </span>
  );
}
