import Avatar from "./Avatar"
import Card from "./Card"

export default function PostCard() {
    return (
        <Card>
          <div className="flex gap-3">

            <div>
              <Avatar />
            </div>

            <div>
              <p><a href="" className="font-semibold">John Doe</a> shared a <a href="" className="text-socialBlue">post</a></p>
              <p className="text-gray-500 text-sm">1 hour ago</p>
            </div>

          </div>
        </Card>
    )
}