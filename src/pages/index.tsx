import Landing from "../components/landing"
import Financas from "../components/financas"
import useCentralDeAcesso from "../data/hook/useCentralDeAcesso"
import Carregando from "../components/template/Carregando"

export default function PaginaInicio() {
	const { usuario, pronto } = useCentralDeAcesso()
	if (!pronto) {
		return <Carregando />
	} else {
		return usuario ? <Financas /> : <Landing />
	}
}
