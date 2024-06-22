"use client";
// This is to be used bcoz since next.js 15 if we are using use Ref we have to have a client for that
// And why is this here because ClickOutsideHandler is used by PostCard and PostCard is used by this page
import Layout from "../components/Layout";
import PostCard from "@/components/PostCard";
import PostFormCard from "../components/PostFormCard";

export default function Home() {
	return (
		<div>
			<Layout>
				<PostFormCard />
				<PostCard />
			</Layout>
		</div>
	);
}
