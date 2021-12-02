import { useSession } from "next-auth/react"

function Main() {
    const {data: session } = useSession()

    return (
        <div className=" flex-grow flex text-white">
        <header>
            <div>
                <img src={session?.user.image} alt='' />
            </div>
        </header>
        </div>
    )
}

export default Main
