// Creating our first ever component which can be reused

export default function Card({children}) {
    return (
        <div className="bg-white shadow-sm">
            {children}
        </div>
    )
}