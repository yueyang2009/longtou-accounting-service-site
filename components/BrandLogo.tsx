import Image from "next/image";

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function BrandLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Image
      src={`${assetBasePath}/images/longtou-group-logo.png`}
      alt="龙头集团"
      width={2192}
      height={820}
      priority
      className={className}
    />
  );
}
