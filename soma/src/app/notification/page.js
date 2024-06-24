import Link from "next/link"
import Avatar from "../../components/Avatar"
import Card from "../../components/Card"
import Layout from "../../components/Layout"

export default function Notifications() {
    return (
        <Layout>
            <h1 className="text-5xl text-gray-400 font-bold mt-2 mb-4 mx-2">
                Notifications
            </h1>

            <Card noPadding={true}>
                <div>
                    <div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
                        <Link href={'/profile'}>
                            <Avatar />
                        </Link>

                        <div>
                            <Link href={'/profile'} className="font-bold hover:underline mr-1">
                                Luke
                            </Link>
                            liked
                            <Link href={''} className="text-socialBlue ml-1 hover:underline">
                                your post
                            </Link>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
                        <Link href={'/profile'}>
                            <Avatar />
                        </Link>

                        <div>
                            <Link href={'/profile'} className="font-bold hover:underline mr-1">
                                Luke
                            </Link>
                            liked
                            <Link href={''} className="text-socialBlue ml-1 hover:underline">
                                your post
                            </Link>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
                        <Link href={'/profile'}>
                            <Avatar />
                        </Link>

                        <div>
                            <Link href={'/profile'} className="font-bold hover:underline mr-1">
                                Luke
                            </Link>
                            liked
                            <Link href={''} className="text-socialBlue ml-1 hover:underline">
                                your post
                            </Link>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
                        <Link href={'/profile'}>
                            <Avatar />
                        </Link>

                        <div>
                            <Link href={'/profile'} className="font-bold hover:underline mr-1">
                                Luke
                            </Link>
                            liked
                            <Link href={''} className="text-socialBlue ml-1 hover:underline">
                                your post
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
        </Layout>
    )
}