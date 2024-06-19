// Creating our first ever component which can be reused
export default function Card({children}) {
    return (
        // So basically whatever we put in <Card></Card> will, 
        // have all the benefits of this div layed out below
        <div className="bg-white shadow-md shadow-gray-200 p-4 rounded-md mb-5">
            {children}
        </div>
    )
}