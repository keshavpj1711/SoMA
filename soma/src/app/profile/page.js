"use client";
// One thing to note is how we created this profile page and another is how we linked it
// We created it in a seperate dir in /soma/src/app/profile/page.js
// Then only it was accessible using <Link href={'/profile'}></Link>
// This is bcoz of how the pages are handled using next js

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import PostCard from "../../components/PostCard";
import Link from "next/link";
import Avatar from "../../components/Avatar";
import { usePathname } from "next/navigation";
import FriendInfo from "../../components/FriendsInfo";

export default function ProfilePages() {
    const pathName = usePathname()
    // When we open the profile page by default it should display the posts section only
    const isPosts = pathName.includes('posts') || pathName == "/profile"
    const isFriends = pathName.includes('friends')
    const isPhotos = pathName.includes('photos')

    const tabClasses = "flex gap-1 py-2 border-b-4 border-b-white px-4"
    const activeTabClasses = "flex gap-1 border-b-4 border-socialBlue text-socialBlue px-4 py-2 font-bold"

    return (
        <Layout>
            <Card noPadding={true}>
                <div className="relative overflow-hidden rounded-md ">
                    <div className="h-48 overflow-hidden flex justify-center items-center">
                        <img className="" src="https://images.unsplash.com/photo-1573667575521-68b5f991e069?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                    <div className="absolute top-28 left-6 rounded-full border-white border-4">
                        <Avatar size={"lg"} />
                    </div>

                    <div className="p-4">

                        <div className="mt-8">
                            {/* Name and Username */}
                            <h1 className="text-xl font-bold">
                                Rhaenyra Targaryen
                            </h1>
                            <div className="text-gray-500">
                                @theQueen
                            </div>
                        </div>

                        <div className="mt-4">
                            {/* Bio Seciton */}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto facilis ratione quia enim suscipit ipsa soluta accusantium similique.
                        </div>

                        <div className="block my-4">
                            {/* Personal Info */}
                            <a href="" className="flex gap-1 text-gray-500 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>
                                The Queen of Seven Kingdoms
                            </a>
                            <a href="" className="flex gap-1 text-gray-500 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                Dragon Stone
                            </a>
                            <a href="https://www.youtube.com/watch?v=7TsVh7yBLoQ" className="flex gap-1 text-blue-500 py-1" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg>
                                https://www.rhaenyrataragaryen/queen/cond=firstlook
                            </a>
                        </div>

                        <div className="flex gap-5 justify-around">
                            {/* Social Info */}
                            <Link href={'/profile/posts'} className={isPosts ? activeTabClasses : tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                                </svg>
                                <span className="hidden sm:block">
                                    Posts
                                </span>
                            </Link>

                            <Link href={'/profile/friends'} className={isFriends ? activeTabClasses : tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                                <span className="hidden sm:block">
                                    Friends
                                </span>
                            </Link>

                            <Link href={'/profile/photos'} className={isPhotos ? activeTabClasses : tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <span className="hidden sm:block">
                                    Photos
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>
            </Card>

            {/* Getting the PostCard when on Posts */}
            {isPosts && (
                <div>
                    <PostCard />
                </div>
            )}

            {isFriends && (
                <div>
                    <Card>
                        <div className="m-4">
                            <h1 className="text-2xl font-bold mb-4">
                                Friends
                            </h1>

                            <div className="">
                                <div className="border-b border-b-gray-100 p-4 -mx-4 ">
                                    <FriendInfo />
                                </div>
                                <div className="border-b border-b-gray-100 p-4 -mx-4 ">
                                    <FriendInfo />
                                </div>
                                <div className="border-b border-b-gray-100 p-4 -mx-4 ">
                                    <FriendInfo />
                                </div>
                                <div className="border-b border-b-gray-100 p-4 -mx-4 ">
                                    <FriendInfo />
                                </div>
                                <div className="border-b border-b-gray-100 p-4 -mx-4 ">
                                    <FriendInfo />
                                </div>
                                <div className="border-b border-b-gray-100 p-4 -mx-4 ">
                                    <FriendInfo />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            )}

            {isPhotos && (
                <Card>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-md overflow-hidden w-full h-48 shadow-md">
                            <img className="h-full object-cover w-full" src="https://w0.peakpx.com/wallpaper/842/729/HD-wallpaper-tv-show-house-of-the-dragon.jpg" alt="" />
                        </div>

                        <div className="rounded-md h-48 w-full overflow-hidden shadow-md">
                            <img className="h-full object-cover w-full" src="https://w0.peakpx.com/wallpaper/628/947/HD-wallpaper-tv-show-house-of-the-dragon.jpg" alt="" />
                        </div>

                        <div className="rounded-md h-48 w-full overflow-hidden shadow-md">
                            <img className="h-full object-cover w-full" src="https://w0.peakpx.com/wallpaper/720/962/HD-wallpaper-house-of-the-dragon-house-of-the-dragon-tv-shows-dragon.jpg" alt="" />
                        </div>

                        <div className="rounded-md h-48 w-full overflow-hidden shadow-md">
                            <img className="h-full object-cover w-full" src="https://w0.peakpx.com/wallpaper/572/953/HD-wallpaper-game-of-thrones-daenerys-targaryen-house-westeros-queen-khaleesi-dragon-emilia-clarke-dragons-daenerys-targaryen-show-fantasy-tv-show-tv-series-skyphoenixx1-george-r-r-martin-essos-hbo.jpg" alt="" />
                        </div>
                    </div>
                </Card>
            )}
        </Layout>
    );
}