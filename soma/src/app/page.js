import NavigationCard from "@/components/NavigationCard";
import Image from "next/image";
import Card from "@/components/Card";

export default function Home() {
  return (
    
    <div className="flex mt-4 max-w-3xl mx-auto gap-6">

      <div className="w-1/3">
        {/* 
        Our First Task is to create the side floating thing containing
        - Notification
        - Friends 
        and other different stuff
        */}
        <NavigationCard />
      </div>

      <div className="grow">
        <Card>form here</Card>
        <Card>first post</Card>
      </div>
    </div>
  );
}
