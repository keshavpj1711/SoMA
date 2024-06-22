import NavigationCard from "@/components/NavigationCard";
import Image from "next/image";
import Card from "@/components/Card";
import PostFormCard from "@/components/PostFormCard";
import Avatar from "@/components/Avatar";

export default function Layout({children}) {
    return (
        <div className="flex mt-4 max-w-4xl mx-auto gap-6">

			<div className="w-1/4">
				<NavigationCard />
			</div>

			<div className="w-3/4">		
                {children}
			</div>
		</div>
    )
}