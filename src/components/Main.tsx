import { useEffect, useRef } from "react"
import { Button } from "./Button"
import { ManageCard } from "./ManageCard"
import { manages, comments } from "../utils/data"
import { CommentCard } from "./CommentCard"
import introMain from "../assets/intro.svg"

const moveList = ["-move-0", "-move-1", "-move-2", "-move-3", "-move-4"]

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
        <main className="mt-16 text-blue text-base">
            <section className="w-11/12 mx-auto mb-32">
                <img className="w-full" src={introMain} alt="picture of intro of the page" />
                <article className="text-center">
                    <h1 className="text-blue-100 text-4xl font-bold">Bring everyone together to build better products.</h1>
                    <p className="mt-4 mb-8 text-lg font-light">
                        Manage makes it simple for software teams to plan day-to-day tasks while
                        keeping the larger team goals in view.
                    </p>
                    <Button className="" children="Get Started" size="baseFull" color="red-100" />
                </article>
            </section>
            <article className="w-11/12 mx-auto mb-12 text-center">
                <h2 className="text-blue-100 text-4xl font-bold">What's different about Manage?</h2>
                <p className="mt-4 text-base font-light">
                    Manage provides all the functionality your team need, without the complexity. Out software is tailor-made 
                    for modern digital product teams.
                </p>
            </article>
            <section className="overflow-x-hidden">
                <section className="w-11/12 mx-auto grid gap-y-16">
                    {manages.map((manage, key) => (
                        <ManageCard key={key} manage={manage} />
                    ))}
                </section>
            </section>
            <section className="w-11/12 mx-auto mb-14 text-center">
                <h1 className="mt-24 mb-10 text-blue-100 text-4xl font-bold">What they've said</h1>
                <div className="w-full py-10 overflow-x-hidden">
                    <div className="flex transition-all duration-500" ref={carouselContainer}>
                        {comments.map((comment, key) => (                    
                            <CommentCard key={key} comment={comment} />
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center gap-x-2">
                    {comments.map((_, key) => <span className="p-1 block border border-red rounded-full" key={key} ref={node => mappingNodeRef(node, key)} onClick={() => handleComment(key)}></span>)}
                </div>
                <Button className="mt-10" children="Get Started" size="baseFull" color="red-100" />
            </section>
            <section className="w-full py-16 text-center bg-red">
                <article className="w-11/12 mx-auto">
                    <h2 className="mb-5 text-white text-4xl font-bold">Simplify how your team works today.</h2>
                    <Button children="Get Started" size="baseFull" color="white-100" />
                </article>
            </section>
        </main>
    )
}

export { Main }