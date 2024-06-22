// Creating our first ever component which can be reused
export default function Card({children, noPadding}) {
    
    let classes = "bg-white shadow-md shadow-gray-200 rounded-md mb-5"

    if (!noPadding) {
        classes += " p-4";
    }

    return (
        // So basically whatever we put in <Card></Card> will, 
        // have all the benefits of this div layed out below
        <div className={classes}>
            {children}
        </div>
    )
}