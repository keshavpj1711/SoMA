import NavigationCard from "@/components/NavigationCard";
import Image from "next/image";
import Card from "@/components/Card";
import PostFormCard from "@/components/PostFormCard";
import Avatar from "@/components/Avatar";

export default function Layout({ children, hideNavigation }) {
    let rightColumnClasses = ''
    if (hideNavigation) {
        rightColumnClasses += 'w-full'
    } else {
        // Below line basically means that for medium and above screen width that is for desktop
        // make x-margin to be zero and width to 3/4
        // But for smaller screen make x-margin 4
        rightColumnClasses += 'mx-4 md:mx-0 md:w-3/4'
    }
    
    return (
        <div className="md:flex mt-4 max-w-4xl mx-auto gap-6">

            {!hideNavigation && (
                <div className="fixed md:static bottom-0 w-full md:w-1/4 -mb-5">
                    <NavigationCard />
                </div>
            )}

            <div className={rightColumnClasses}>
                {children}
            </div>
        </div>
    )
}