import { useContext } from "react"
import CentralDeAcessoContext from "../context/CentralDeAcessoContext"

const useCentralDeAcesso = () => useContext(CentralDeAcessoContext)

export default useCentralDeAcesso