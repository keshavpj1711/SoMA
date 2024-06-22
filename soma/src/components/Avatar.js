// We are placing this component seperately bcoz 
// Avatars will be be very common and will shown over every posts

export default function Avatar({size}) {
    
    let width = "w-12"

    if (size == "lg") {
        width = "w-28"
    }
    
    return (
        // The issue is with the string interpolation syntax. 
        // In JSX, you need to use backticks (`) for template literals instead of single quotes 
        <div className={`rounded-full overflow-hidden ${width}`}>
            <img src="https://avatarfiles.alphacoders.com/334/334259.jpg" alt="" />
        </div>
    )
}