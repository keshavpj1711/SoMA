"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../supabase/AuthContext';
import { supabase } from '../../supabase/supabaseClient';
import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function Login() {
    const { user } = useAuth();
    const router = useRouter()

    useEffect(() => {
        if (user) {
            router.push('/profile');
        }
    }, [user]);

    const handleGoogleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
        if (error) console.log('Error logging in with Google:', error.message);
    };

    const buttonClasses = "flex gap-4 p-4 items-center w-full justify-center border-b border-b-gray-100 hover:bg-socialBlue hover:text-white hover:border-b-socialBlue transition-all hover:scale-110"

    return (
        <Layout hideNavigation={true}>
            <div className="h-screen flex items-center">
                <div className="max-w-xs mx-auto grow -mt-36">
                    <h1 className="text-4xl text-gray-500 text-center font-semibold mb-4">
                        Login
                    </h1>
                    <Card noPadding={true}>
                        <div className="rounded-md overflow-hidden">
                            <button onClick={handleGoogleLogin} className={buttonClasses}>
                                <svg className="h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                </svg>
                                Login with Google
                            </button>

                            {/* <button onClick={''} className={buttonClasses}>
                                <svg className="h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                </svg>
                                Login with Github
                            </button>

                            <button onClick={''} className={buttonClasses}>
                                <svg className="h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                </svg>
                                Login with Google
                            </button> */}
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    )
}