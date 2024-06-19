import NavigationCard from "@/components/NavigationCard";
import Image from "next/image";
import Card from "@/components/Card";
import PostFormCard from "@/components/PostFormCard";

export default function Home() {
  return (
    
    <div className="flex mt-4 max-w-3xl mx-auto gap-6">

      <div className="w-1/3">
        {/* 
        Our First Task is to create the sidebar containing
        - Notification
        - Friends 
        and other different stuff
        */}
        <NavigationCard />
      </div>

      <div className="grow">

        {/* This PostFormCard gets us all the component 
        that we want, to create the post feature area */}
        <PostFormCard />
        
        {/*  */}
        <Card>first post</Card>

      </div>
    </div>
  );
}
