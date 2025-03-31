import { Divider } from "@mantine/core";
import { IconBrandGoogle, IconBrandYoutube } from "@tabler/icons";
import useCentralDeAcesso from "../../../data/hook/useCentralDeAcesso";
import MenuItem from "./MenuItem";

export default function Menu() {
    const { loginGoogle } = useCentralDeAcesso()
    return (
        <div className="flex gap-2">
            <MenuItem texto="Início" url="#inicio" className="hidden sm:flex" />
            <MenuItem texto="Vantagens" url="#vantagens" className="hidden sm:flex" />
            <MenuItem texto="Depoimentos" url="#depoimentos" className="hidden sm:flex" />
            <MenuItem
                onClick={loginGoogle}
                texto={(
                    <div className="flex items-center gap-2">
                        <span><IconBrandGoogle size={15} /></span>
                        <span>Login</span>
                    </div>
                )}
                className="bg-gradient-to-r from-indigo-600 to-cyan-600"
            />
        </div>
    )
}