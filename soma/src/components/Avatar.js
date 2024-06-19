// We are placing this component seperately bcoz 
// Avatars will be be very common and will shown over every posts

export default function Avatar() {
    return (
        <div className="w-12 rounded-full overflow-hidden">
            <img src="https://avatarfiles.alphacoders.com/334/334259.jpg" alt="" />
        </div>
    )
}