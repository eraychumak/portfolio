import Link from "next/link";

export default function ExternalLink({ url, label }) {
  return (
    <Link href={url} rel="noopener noreferrer" target="_blank">{label}</Link>
  );
}