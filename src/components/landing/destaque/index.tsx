import Slogan from "./Slogan"
import principal from "../../../../public/principal-3.jpg"
import Area from "../comum/Area"
import ImagemResponsiva from "../comum/ImagemResponsiva"

export default function Destaque() {
    return (
        <Area id="inicio">
            <div className={`
                flex p-9 md:p-0 h-[600px]
                justify-center items-center md:justify-around
            `}>
                <Slogan />
                <ImagemResponsiva
                    imagem={principal}
                    className={`
                        mix-blend-plus-lighter
                        hidden md:inline rotate-3
                    `}
                />
            </div>
        </Area>
    )
}