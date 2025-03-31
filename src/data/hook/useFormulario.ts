import { useState } from "react"

export default function useFormulario<T = any>(dadosIniciais?: T | null) {
    const [dados, setDados] = useState<T>(dadosIniciais ?? {} as T)

    function alterarDados(novosDados: any) {
        setDados(novosDados)
    }

    function alterarAtributo(atributo: string, fn?: Function) {
        return (valor: any) => {
            const v = _obterValor(valor)
            setDados({ ...dados, [atributo]: fn?.(v) ?? v } as any)
        }
    }

    function _obterValor(v: any) {
        const target = v?.currentTarget ?? v?.target
        const checkbox = target?.type === 'checkbox'
        const valor = checkbox ? target?.checked : target?.value
        return valor ?? v
    }

    return {
        dados,
        alterarDados,
        alterarAtributo
    }
}