interface LinksProps {
    titulo: string
    children: any
}

export default function Links(props: LinksProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold mb-7">{props.titulo}</div>
            {props.children}
        </div>
    )
}