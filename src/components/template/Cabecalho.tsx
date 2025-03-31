import MenuUsuario from "./MenuUsuario"
import BoasVindas from "./BoasVindas"

export default function Cabecalho() {
    return (
        <div className={`
            flex justify-between items-center
            p-7 border-b border-zinc-900
        `}>
            <BoasVindas />
            <MenuUsuario />
        </div>
    )
}