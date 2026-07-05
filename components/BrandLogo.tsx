import Image from "next/image";

const assetBasePath = process.env.GITHUB_PAGES === "true" ? "/longtou-accounting-service-site" : "";

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
