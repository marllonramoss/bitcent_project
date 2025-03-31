import Area from "../comum/Area";
import Logo from "../comum/Logo";
import Menu from "./Menu";

export default function Cabecalho() {
    return (
        <>
            <Area className="bg-black fixed z-50">
                <div className="flex justify-between items-center h-20">
                    <Logo />
                    <Menu />
                </div>
            </Area>
            <div className="h-20" />
        </>
    )
}