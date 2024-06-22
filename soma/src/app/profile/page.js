// One thing to note is how we created this profile page and another is how we linked it
// We created it in a seperate dir in /soma/src/app/profile/page.js
// Then only it was accessible using <Link href={'/profile'}></Link>
// This is bcoz of how the pages are handled using next js

import Layout from "../../components/Layout";
import ProfileHeader from "../../components/ProfileHeader";

export default function ProfilePages() {

    return (
        <Layout>
            <ProfileHeader />
        </Layout>
    );
}