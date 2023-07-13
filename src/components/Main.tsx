import { useEffect, useRef } from "react"
import { Button } from "./Button"
import { ManageCard } from "./ManageCard"
import { manages, comments } from "../utils/data"
import { CommentCard } from "./CommentCard"
import introMain from "../assets/intro.svg"

const moveList = Array(comments.length).map((_, i) => `-move-${i}`)

const Main = () => {
    const indexCommentRef = useRef <number> (0)
    const carouselContainer = useRef <HTMLDivElement>  (null)
    const mapCommentRef = useRef <Map<number, HTMLSpanElement | null> | null> (null)

    const getMap = (): Map<number, HTMLSpanElement | null> => {
        if(!mapCommentRef.current)
            mapCommentRef.current = new Map <number, HTMLSpanElement | null> ()
        return mapCommentRef.current
    }

    const mappingNodeRef = (node: HTMLSpanElement | null, key: number) => {
        const map = getMap()
        map.set(key, node)
        return node
    }


    const handleComment = (nodeId: number) => {
        const index = indexCommentRef.current
        if(index === nodeId) return
        mapCommentRef.current?.get(nodeId)?.classList.add("bg-red")
        mapCommentRef.current?.get(index)?.classList.remove("bg-red")
        carouselContainer.current?.classList.remove(moveList[index])
        carouselContainer.current?.classList.add(moveList[nodeId])
        indexCommentRef.current = nodeId
    }

    useEffect(() => {
        mapCommentRef.current?.get(0)?.classList.add("bg-red")
        carouselContainer.current?.classList.add("-move-0")
    }, [])

    return (
        <main className="mt-16 text-blue text-base selection:text-red selection:bg-red-100">
            <section className="w-11/12 mx-auto mb-32 base:w-10/12 base:grid base:items-center base:grid-cols-2 base:gap-x-10">
                <img className="w-full order-1" src={introMain} alt="picture of intro of the page" />
                <article className="text-center base:text-start">
                    <h1 className="text-blue-100 text-4xl font-bold base:text-5xl">Bring everyone together to build better products.</h1>
                    <p className="mt-4 mb-8 text-lg font-light base:pr-10">
                        Manage makes it simple for software teams to plan day-to-day tasks while
                        keeping the larger team goals in view.
                    </p>
                    <Button className="hover:opacity-60" children="Get Started" size="baseFull" color="red-100" />
                </article>
            </section>
            <section className="base:w-10/12 base:mx-auto base:grid base:grid-cols-2 base:gap-x-10">
                <article className="w-11/12 mx-auto mb-12 text-center base:w-full base:text-start">
                    <h2 className="text-blue-100 text-4xl font-bold">What's different about Manage?</h2>
                    <p className="mt-4 text-base font-light base:pr-10">
                        Manage provides all the functionality your team need, without the complexity. Out software is tailor-made 
                        for modern digital product teams.
                    </p>
                </article>
                <div className="overflow-x-hidden">
                    <section className="w-11/12 mx-auto grid gap-y-16 base:w-full">
                        {manages.map((manage, key) => (
                            <ManageCard key={key} manage={manage} />
                        ))}
                    </section>
                </div>
            </section>
            <section className="w-11/12 mx-auto mb-14 text-center base:mb-28">
                <h1 className="mt-24 mb-10 text-blue-100 text-4xl font-bold">What they've said</h1>
                <div className="w-full py-10 overflow-x-hidden base:overflow-x-scroll base:snap-mandatory base:snap-x scroll-comment">
                    <div className="flex gap-x-[5%] transition-all duration-500" ref={carouselContainer}>
                        {comments.map((comment, key) => (                    
                            <CommentCard key={key} comment={comment} />
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center gap-x-2 base:hidden">
                    {comments.map((_, key) => <span className="p-1 block border border-red rounded-full" key={key} ref={node => mappingNodeRef(node, key)} onClick={() => handleComment(key)}></span>)}
                </div>
                <Button className="mt-10 base:mt-12 hover:opacity-60" children="Get Started" size="baseFull" color="red-100" />
            </section>
            <section className="w-full py-16 text-center bg-red sm:py-20">
                <article className="w-11/12 mx-auto base:w-10/12 base:flex base:items-center base:justify-between">
                    <h2 className="max-w-sm mx-auto mb-5 text-white text-4xl font-bold sm:mb-7 base:m-0 base:text-start">Simplify how your team works today.</h2>
                    <Button className="hover:opacity-90" children="Get Started" size="baseFull" color="white-100" />
                </article>
            </section>
        </main>
    )
}

export { Main }