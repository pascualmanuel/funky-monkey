import Arrow from "@/assets/arrow.svg";

export default function LinkArrow({ className = "ml-2" }) {
  const mask = `url("${Arrow.src}") center / contain no-repeat`;
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-4 w-[15px] align-[-2px] bg-current ${className}`}
      style={{ mask, WebkitMask: mask }}
    />
  );
}
