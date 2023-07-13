import { useContext } from "react"
import { ManageCardProps } from "../types/props"
import { VariantContext } from "../contexts/VariantContext"

const ManageCard = ({ manage }: ManageCardProps) => {
    const { id, title, content } = manage
    const { colorVariants, sizeVariants } = useContext(VariantContext)
    const classId = `${sizeVariants["baseFull"]} ${colorVariants["red-100"]} grid place-content-center`

    return (
        <article className="flex flex-col relative">
            <div className="w-[110%] absolute rounded-l-full bg-red-100 base:bg-transparent">
                <div className="w-[90%] flex items-center justify-start gap-x-5">
                    <span className={classId}>{id}</span>
                    <h2 className="text-blue-100 text-lg font-bold line-clamp-1">{title}</h2>
                </div>
            </div>
            <p className="mt-14 font-extralight">{content}</p>
        </article>
    )
}

export { ManageCard }