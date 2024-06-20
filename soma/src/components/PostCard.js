import Avatar from "./Avatar"
import Card from "./Card"

export default function PostCard() {
    return (
        <Card>

            {/* This is for header kind of thing for our post */}
            <div className="flex gap-3">
            <div>
                <Avatar />
            </div>

            <div>
                <p><a href="" className="font-semibold">Rhaenyra Targaryen</a> shared a <a href="" className="text-socialBlue">post</a></p>
                <p className="text-gray-500 text-sm">1 hour ago</p>
            </div>
            </div>

            {/* Actual thing for our post */}
            <div className="">
                <p className="my-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis aut fuga exercitationem nulla similique, ex a optio quis modi fugiat, beatae eius incidunt possimus. Fugit nihil molestias illo cumque!
                </p>

                <div className="rounded-md overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1592335829159-3630b01803f7?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </Card>
    )
}