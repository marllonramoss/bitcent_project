import { useState } from "react"
import { SegmentedControl } from "@mantine/core"
import { IconArrowsRightLeft, IconLayoutGrid, IconList } from "@tabler/icons"
import TituloSecao from "../../template/TituloSecao"
import GradeDeTransacoes from "./grade"
import Transacao from "../../../logic/core/financas/Transacao"
import ListaDeTransacoes from "./lista"
import NovaTransacao from "./NovaTransacao"
import NaoEncontrado from "../../template/NaoEncontrado"
import CampoMesAno from "../../template/CampoMesAno"

type TipoExibicao = "lista" | "grade"

interface TransacoesProps {
    data?: Date
    transacoes: Transacao[]
    dataMudou?: (data: Date) => void
    transacaoAlterada?: (transacao: Transacao) => Promise<void>
    transacaoExcluida?: (transacao: Transacao) => Promise<void>
}

export default function Transacoes(props: TransacoesProps) {
    const [exibicao, setExibicao] = useState<TipoExibicao>('lista')
    return (
        <>
            <TituloSecao
                icone={<IconArrowsRightLeft />}
                principal="Minhas Transações"
                sub="Suas transações organizadas por mês!"
                className="mb-5"
            />
            <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-3">
                    <CampoMesAno
                        data={props.data}
                        dataMudou={props.dataMudou}
                    />
                </div>
                <div className="flex items-center gap-1">
                    <NovaTransacao transacaoAlterada={props.transacaoAlterada} />
                    <SegmentedControl
                        data={[
                            { label: <IconList />, value: 'lista' },
                            { label: <IconLayoutGrid />, value: 'grade' }
                        ]}
                        onChange={tipo => setExibicao(tipo as TipoExibicao)}
                    />
                </div>
            </div>
            {props.transacoes.length === 0 ? (
                <NaoEncontrado>Nenhuma transação encontrada!</NaoEncontrado>
            ) : (exibicao === 'lista' ? (
                <ListaDeTransacoes
                    transacoes={props.transacoes}
                    transacaoAlterada={props.transacaoAlterada}
                    transacaoExcluida={props.transacaoExcluida}
                />
            ) : (
                <GradeDeTransacoes
                    transacoes={props.transacoes}
                    transacaoAlterada={props.transacaoAlterada}
                    transacaoExcluida={props.transacaoExcluida}
                />
            ))}
        </>
    )
}