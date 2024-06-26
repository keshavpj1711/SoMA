"use client";
import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";
import ProtectedRoute from "../../supabase/ProtectRoute";

export default function SavedPostPage() {
    return (
        <ProtectedRoute>
            <Layout>
                <h1 className="text-5xl text-gray-400 font-bold mt-2 mb-4 mx-2">
                    Saved Posts
                </h1>

                <PostCard />

                <PostCard />

            </Layout>
        </ProtectedRoute>
    )
}