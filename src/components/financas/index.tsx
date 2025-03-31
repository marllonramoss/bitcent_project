import Resumo from "./resumo"
import Cabecalho from "../template/Cabecalho"
import Conteudo from "../template/Conteudo"
import Pagina from "../template/Pagina"
import useTransacoes from "../../data/hook/useTransacoes"
import Transacoes from "./transacoes"

export default function Financas() {
    const {
        data,
        transacoes,
        salvarTransacao,
        excluirTransacao,
        atualizarData,
    } = useTransacoes()

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo>
                <Resumo
                    transacoes={transacoes}
                    className="mb-7"
                />
                <Transacoes
                    data={data}
                    transacoes={transacoes}
                    dataMudou={atualizarData}
                    transacaoAlterada={salvarTransacao}
                    transacaoExcluida={excluirTransacao}
                />
            </Conteudo>
        </Pagina>
    )
}
