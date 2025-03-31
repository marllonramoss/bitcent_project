import Transacao from "../core/financas/Transacao"
import Ordenar from "./Ordenar"

export default class Transacoes {
    static ordenar(t1: Transacao, t2: Transacao) {
        let resultado = Ordenar.porData(t1.data, t2.data)
        if(resultado !== 0) return resultado
        
        resultado = Ordenar.porString(t1.descricao, t2.descricao)
        if(resultado !== 0) return resultado
        
        resultado = Ordenar.porNumero(t1.valor, t2.valor)
        if(resultado !== 0) return resultado

        return 0
    }
}