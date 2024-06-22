import Avatar from "./Avatar"

export default function FriendInfo() {
    return (
        <div className="flex items-center gap-2">
            <Avatar />
            <div>
                <h3 className="font-semibold">Daemon Targaryen</h3>
                <div className="text-gray-500 leading-4">
                    5 mutual friends
                </div>
            </div>
        </div>
    )
}