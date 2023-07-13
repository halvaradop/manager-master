
export interface Contextable {
    children: React.ReactNode
}

export interface Manage {
    id: string,
    title: string,
    content: string
}

export interface Comment {
    image: string,
    username: string,
    comment: string
}
