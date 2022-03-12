import Cliente from "../core/Cliente"
import { IconEdit, IconTrash } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

const Th = (props: any) => <th className="text-left p-4">{props.children}</th>
const Td = (props: any) => <td className="text-left p-4">{props.children}</td>
const IconButton = (props: any) => 
    <button
        className={`
            flex justify-center items-center
            ${props.color} rounded-full p-2 m-1
            hover:bg-purple-50
        `}
        onClick={props.handleClick}
    >
        {props.children}
    </button>

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado
    function renderizarCabecalho() {
        return (
            <tr>
                <Th>Código</Th>
                <Th>Nome</Th>
                <Th>Idade</Th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente: Cliente, i: number) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
                >
                    <Td>{cliente.id}</Td>
                    <Td>{cliente.nome}</Td>
                    <Td>{cliente.idade}</Td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <IconButton color="text-green-600" handleClick={() => props.clienteSelecionado?.(cliente)}>
                        {IconEdit}
                    </IconButton>
                ) : false}
                {props.clienteExcluido ? (
                    <IconButton color="text-red-500" handleClick={() => props.clienteExcluido?.(cliente)}>
                        {IconTrash}
                    </IconButton>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}
