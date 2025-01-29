import type { CardProps } from '../types';

export function Card({ title, src, url }: CardProps) {
  return (
    <div className="m-1">
      <a target="_blank" href={url}>
        <img src={src} alt={title} width={440} height={132} />
      </a>
    </div>
  );
}

// Skeleton component
export function SkeletonCard() {
  return (
    <div className="m-1">
      <a href="#" className="block">
        <div className="w-[440px] h-[132px] bg-[#1e1e2e] rounded-md animate-pulse" />
      </a>
    </div>
  );
}
