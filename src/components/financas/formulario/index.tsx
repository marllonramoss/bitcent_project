import 'dayjs/locale/pt-br'
import { Button, Modal, Radio, Switch, TextInput } from "@mantine/core"
import { DatePicker } from '@mantine/dates'
import { TipoTransacao } from "../../../logic/core/financas/TipoTransacao"
import { useEffect, useState } from "react"
import Data from "../../../logic/util/Data"
import Dinheiro from "../../../logic/util/Dinheiro"
import Transacao from "../../../logic/core/financas/Transacao"
import useFormulario from "../../../data/hook/useFormulario"

export interface FormularioTransacaoProps {
    transacao?: Transacao
    transacaoAlterada?: (transacao: Transacao) => Promise<void>
    transacaoExcluida?: (transacao: Transacao) => Promise<void>
    children: any
    className?: string
}

export default function FormularioTransacao(props: FormularioTransacaoProps) {
    const transacaoVazia = {
        descricao: '', valor: 0, data: new Date(),
        tipo: TipoTransacao.DESPESA,
        consolidada: false
    } as const

    const [aberto, setAberto] = useState<boolean>(false)
    const { dados, alterarAtributo, alterarDados } = useFormulario<Transacao>(
        props.transacao ?? transacaoVazia
    )

    useEffect(() => {
        alterarDados(props.transacao ?? transacaoVazia)
    }, [props.transacao])

    async function salvar() {
        await props.transacaoAlterada?.(dados)
        setAberto(false)
        alterarDados(transacaoVazia)
    }

    return (
        <>
            <Modal
                opened={aberto}
                onClose={() => setAberto(false)}
                title="Transação Financeira"
            >
                <div className="flex flex-col gap-3">
                    <Radio.Group
                        value={dados.tipo}
                        onChange={alterarAtributo('tipo')}
                    >
                        <Radio value={TipoTransacao.RECEITA} label="Receita" />
                        <Radio value={TipoTransacao.DESPESA} label="Despesa" />
                    </Radio.Group>
                    <TextInput
                        label="Descrição"
                        value={dados.descricao}
                        onChange={alterarAtributo('descricao')}
                    />
                    <TextInput
                        label="Valor"
                        value={Dinheiro.formatar(dados.valor)}
                        onChange={alterarAtributo('valor', Dinheiro.desformatar)}
                    />
                    <DatePicker
                        label="Data"
                        value={dados.data}
                        locale="pt-br"
                        inputFormat="DD/MM/YYYY"
                        labelFormat="DD/MM/YYYY"
                        allowFreeInput
                        dateParser={Data.completa.desformatar}
                        onChange={alterarAtributo('data')}
                    />
                    <Switch
                        label="Consolidado"
                        checked={dados.consolidada}
                        onChange={alterarAtributo('consolidada')}
                    />
                    <div className="flex justify-between mt-7">
                        <div className="flex gap-2">
                            <Button className="bg-blue-600" onClick={salvar}>
                                Salvar
                            </Button>
                            <Button className="bg-gray-700" color="gray" onClick={() => setAberto(false)}>
                                Cancelar
                            </Button>
                        </div>
                        {props.transacao && (
                            <Button className="bg-red-600" color="red" onClick={() => {
                                props.transacao && props.transacaoExcluida?.(props.transacao)
                            }}>
                                Excluir
                            </Button>
                        )}
                    </div>
                </div>
            </Modal>

            <div className={`
                cursor-pointer ${props.className ?? ''}
            `} onClick={() => setAberto(true)}>
                {props.children}
            </div>
        </>
    )
}