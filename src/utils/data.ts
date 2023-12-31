import { Comment, Manage } from "../types/types";

const manages: Manage [] = [
    { id: "01", title: "Track company-wide progress", content: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again." },
    { id: "02", title: "Advanced built-in reports", content: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed." },
    { id: "03", title: "Everything you need in one place", content: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution." }
]

const comments: Comment [] = [
    { image: "/src/assets/anisha.png", username: "Anisha Li", comment: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."  },
    { image: "/src/assets/ali.png", username: "Ali Bravo", comment: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."  },
    { image: "/src/assets/richard.png", username: "Richard Watts", comment: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!"  },
    { image: "/src/assets/shanai.png", username: "Shanai Gough", comment: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."  },
]

export { manages, comments }