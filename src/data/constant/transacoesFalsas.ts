import Transacao from "../../logic/core/financas/Transacao"
import { TipoTransacao } from "../../logic/core/financas/TipoTransacao"
import Transacoes from "../../logic/util/Transacoes"

const transacoesFalsas: Transacao[] = [
    {
        id: `${Math.random()}`,
        descricao: 'Luz',
        valor: 320.00,
        data: new Date(2022, 10, 3),
        tipo: TipoTransacao.DESPESA,
        consolidada: false,
    },
    {
        id: `${Math.random()}`,
        descricao: 'Aluguel',
        valor: 1817.59,
        data: new Date(2022, 11, 3),
        tipo: TipoTransacao.DESPESA,
        consolidada: false,
    },
    {
        id: `${Math.random()}`,
        descricao: 'Ane',
        valor: 2200.00,
        data: new Date(2022, 11, 1),
        tipo: TipoTransacao.DESPESA,
        consolidada: true,
    },
    {
        id: `${Math.random()}`,
        descricao: 'Tia Rute',
        valor: 2200.00,
        data: new Date(2022, 11, 1),
        tipo: TipoTransacao.DESPESA,
        consolidada: false,
    },
    {
        id: `${Math.random()}`,
        descricao: 'AT Manhã',
        valor: 1000.00,
        data: new Date(2022, 11, 2),
        tipo: TipoTransacao.DESPESA,
        consolidada: false,
    },
    {
        id: `${Math.random()}`,
        descricao: 'Salário Leo',
        data: new Date(2022, 11, 10),
        valor: 7123.34,
        tipo: TipoTransacao.RECEITA,
        consolidada: false,
    },
    {
        id: `${Math.random()}`,
        descricao: 'Salário Larisse',
        data: new Date(2022, 11, 1),
        valor: 7123.34,
        tipo: TipoTransacao.RECEITA,
        consolidada: true,
    },
].sort(Transacoes.ordenar)

export default transacoesFalsas