import { CommentCardProps } from "../types/props"

const CommentCard = ({ comment }: CommentCardProps) => {
    const { image, username, comment: textContent } = comment

    return (
        <article className="min-w-full p-4 pt-14 flex flex-col text-center relative rounded-md bg-gray base:min-w-[30%] base:p-6 base:pt-14 base:snap-always base:snap-center base:cursor-pointer">
            <img className="w-16 mx-auto absolute -top-8 inset-x-0" src={image} alt="image user" draggable="false" loading="lazy" />
            <h3 className="mb-3 text-blue-100 text-lg font-bold">{username}</h3>
            <p>“{textContent}”</p>
        </article>
    )
}

export { CommentCard }