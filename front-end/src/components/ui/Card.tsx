import type { PropsCard, PropsCardBody } from "../../types/types-global"

export const Card = ({ children, className }: PropsCard) => {
    return (
        <div
            className={`rounded-2xl shadow-md p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${className} flex flex-row items-start justify-between`}
        >
            {children}
        </div>
    )
}

export const CardBody = ({ children }: PropsCardBody) => {
    return (
        <>
            {children}
        </>
    )
}