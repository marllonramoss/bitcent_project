import Link from "next/link";

interface LinkExternoProps {
  texto: string | React.ReactNode;
  url: string;
  className?: string;
}

export default function LinkExterno(props: LinkExternoProps) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-zinc-400 hover:text-white transition-colors ${
        props.className ?? ""
      }`}
    >
      {props.texto}
    </a>
  );
}
