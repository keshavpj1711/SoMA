// Creating our first ever component which can be reused
export default function Card({children}) {
    return (
        // So basically whatever we put in <Card></Card> will, 
        // have all the benefits of this div layed out below
        <div className="bg-white shadow-md p-4 rounded-sm">
            {children}
        </div>
    )
}