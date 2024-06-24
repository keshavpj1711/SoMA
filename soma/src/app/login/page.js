import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function Login() {
    return (
        <Layout hideNavigation={true}>
            <div className="h-screen flex items-center">
                <div className="max-w-xs mx-auto grow -mt-36">
                    <h1 className="text-4xl text-gray-500 text-center font-semibold mb-4">
                        Login
                    </h1>
                    <Card noPadding={true}>
                        <div className="rounded-md overflow-hidden">
                            <a href="/" className="flex gap-4 p-4 items-center justify-center border-b border-b-gray-100 hover:bg-socialBlue hover:text-white transition-all hover:border-b-socialBlue hover:scale-110">
                                <svg className="h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                </svg>
                                Login with Google
                            </a>

                            <a href="/" className="flex gap-4 p-4 items-center justify-center border-b border-b-gray-100 hover:bg-socialBlue hover:text-white hover:border-b-socialBlue transition-all hover:scale-110">
                                <svg className="h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                </svg>
                                Login with Github
                            </a>

                            <a href="/" className="flex gap-4 p-4 items-center justify-center border-b border-b-gray-100 hover:bg-socialBlue hover:text-white hover:border-b-socialBlue transition-all hover:scale-110">
                                <svg className="h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                </svg>
                                Login with Google
                            </a>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    )
}