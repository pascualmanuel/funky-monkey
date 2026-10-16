import Image from "next/image";
import Link from "next/link";
import LinkArrow from "@/components/LinkArrow";

export default function RetreatActivityCard({ title, description, image, alt, href }) {
  return (
    <Link
      href={href}
      aria-label={`Explore ${title.toLowerCase()}`}
      className="group flex min-h-[400px] flex-col overflow-hidden rounded-[16px] bg-grey2 transition-shadow duration-200 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green motion-reduce:transition-none md:min-h-[450px] lg:min-h-[500px]"
    >
      <div className="relative h-[240px] shrink-0 md:h-[270px] lg:h-[300px]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) calc((100vw - 188px) / 3), (min-width: 768px) calc((100vw - 164px) / 2), calc(100vw - 32px)"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-6">
        <h4 className="subH1 mb-3 flex items-center justify-between gap-4">
          <span className="underline-offset-4 group-hover:underline group-focus-visible:underline">
            {title}
          </span>
          <LinkArrow className="shrink-0 text-green" />
        </h4>
        <p className="body1 text-darkGrey">{description}</p>
      </div>
    </Link>
  );
}
