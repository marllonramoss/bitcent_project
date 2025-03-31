import { Button } from "@mantine/core"
import { IconPlus } from "@tabler/icons"
import Transacao from "../../../logic/core/financas/Transacao"
import Formulario from "../formulario"

interface NovaTransacaoProps {
    transacaoAlterada?: (transacao: Transacao) => Promise<void>
}

export default function NovaTransacao(props: NovaTransacaoProps) {
    return (
        <Formulario transacaoAlterada={props.transacaoAlterada}>
            <Button className={`
                bg-gradient-to-r from-indigo-600 to-cyan-600
                hover:from-indigo-700 hover:to-cyan-700
                px-1.5 sm:px-3
            `}>
                <IconPlus />
                <span className="hidden sm:inline ml-1">Nova Transação</span>
            </Button>
        </Formulario>
    )
}