import { CommentCardProps } from "../types/props"

const CommentCard = ({ comment }: CommentCardProps) => {
    const { image, username, comment: textContent } = comment

    return (
        <article className="min-w-full p-4 pt-14 flex flex-col text-center relative rounded-md bg-gray">
            <img className="w-16 mx-auto absolute -top-8 inset-x-0" src={image} alt="image user" />
            <h3 className="mb-3 text-blue-100 text-lg font-bold">{username}</h3>
            <p>“{textContent}”</p>
        </article>
    )
}

export { CommentCard }