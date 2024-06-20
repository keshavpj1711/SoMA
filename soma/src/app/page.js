"use client";
// This is to be used bcoz since next.js 15 if we are using use Ref we have to have a client for that
// And why is this here because ClickOutsideHandler is used by PostCard and PostCard is used by this page

import NavigationCard from "@/components/NavigationCard";
import Image from "next/image";
import Card from "@/components/Card";
import PostFormCard from "@/components/PostFormCard";
import Avatar from "@/components/Avatar";
import PostCard from "@/components/PostCard";

export default function Home() {
	return (

		<div className="flex mt-4 max-w-4xl mx-auto gap-6">

			<div className="w-1/4">
				{/* Creating Sidebar */}
				<NavigationCard />
			</div>

			<div className="grow">

				{/* PostFormCard to "create the post" feature area */}
				<PostFormCard />

				{/* Creating a single post */}
				<PostCard />

			</div>
		</div>
	);
}
