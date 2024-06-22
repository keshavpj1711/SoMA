import Avatar from "@/components/Avatar";
import Card from "@/components/Card";

export default function ProfileHeader() {
    return (
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
                        <div className="text-gray-500">
                            Dragonstone, House Targaryen
                        </div>
                    </div>

                </div>
            </div>
        </Card>
    )
}