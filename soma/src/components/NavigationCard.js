"use client";
import { useAuth } from '../supabase/AuthContext';
import { usePathname, useRouter } from "next/navigation";
// Faced an error when using next/router for using useRouter
// The problem was due to changes in nextjs 13
import Card from "../components/Card";
import Link from "next/link";

// This component is basically all the things for the sidebar we see on the page

export default function NavigationCard() {

    // Here we are using usePathName instead of useRouter bcoz useRouter was modified to only route to urls 
    // Also since Nextjs 13 useRouter was shifted to next/navigation instead of use/Router 
    const pathName = usePathname();
    console.log({ pathName });

    const { logOut } = useAuth()

    const activeElement = 'flex gap-1 md:gap-3 py-3 my-1 bg-socialBlue text-white -mx-4 md:-mx-8 rounded-md px-6 md:px-10 transition-all hover:shadow-md shadow-gray-300'
    const nonActiveElement = 'flex gap-1 md:gap-3 py-2 my-2 px-6 hover:bg-blue-500 hover:bg-opacity-20 -mx-4 hover:mx-0 md:px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300'

    return (
        <Card noPadding={true}>
            <div className="px-4 py-2 flex justify-around md:block shadow-md md:shadow-none rounded-md">
                <h2 className="text-gray-400 mb-3 hidden md:block">
                    Navigation
                </h2>

                {/* Conditions to only trigger the activeElement class when the pathName is the required one */}
                <Link href="/" className={pathName == "/" ? activeElement : nonActiveElement}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span className="hidden md:block">Home</span>
                </Link>

                <Link href="/profile/friends" className={pathName == "/profile/friends" ? activeElement : nonActiveElement}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                    <span className="hidden md:block">Friends</span>
                </Link>

                <Link href="/saved" className={pathName == "/saved" ? activeElement : nonActiveElement}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                    <span className="hidden md:block">Saved Posts</span>
                </Link>

                <Link href="/notification" className={pathName == "/notification" ? activeElement : nonActiveElement}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>
                    <span className="hidden md:block">Navigation</span>
                </Link>

                <button onClick={logOut} className={nonActiveElement}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>
                    <span className="hidden md:block">Logout</span>
                </button>
            </div>
        </Card>
    )
}