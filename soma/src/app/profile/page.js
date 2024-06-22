// One thing to note is how we created this profile page and another is how we linked it
// We created it in a seperate dir in /soma/src/app/profile/page.js
// Then only it was accessible using <Link href={'/profile'}></Link>
// This is bcoz of how the pages are handled using next js

import Avatar from "../../components/Avatar";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function ProfilePages() {

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
                            <h1 className="text-xl font-bold">
                                Rhaenyra Targaryen
                            </h1>
                            <div>
                                Dragonstone, House Targaryen
                            </div>
                        </div>

                    </div>
                </div>
            </Card>
        </Layout>
    );
}