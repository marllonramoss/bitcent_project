import Transacao from "../../../../logic/core/financas/Transacao"
import TransacaoItem from "./TransacaoItem"

interface GradeDeTransacoesProps {
    transacoes: Transacao[]
    transacaoAlterada?: (transacao: Transacao) => Promise<void>
    transacaoExcluida?: (transacao: Transacao) => Promise<void>
}

export default function GradeDeTransacoes(props: GradeDeTransacoesProps) {
    function renderizarTransacoes() {
        return props.transacoes.map(transacao => {
            return (
                <TransacaoItem
                    key={transacao.id}
                    transacao={transacao}
                    transacaoAlterada={props.transacaoAlterada}
                    transacaoExcluida={props.transacaoExcluida}
                />
            )
        })
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-5">
            {renderizarTransacoes()}
        </div>
    )
}