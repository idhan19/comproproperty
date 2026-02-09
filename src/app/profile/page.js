
import React from 'react';

export const metadata = {
    title: "Company Profile | PT PONCO MUNARO UTAMA",
    description: "Company Profile and Strategic Milestones of PT PONCO MUNARO UTAMA",
    icons: {
        icon: '/logo navbar.png', // Explicitly setting the favicon to the company logo
    },
};

const ProfilePage = () => {
    return (
        <div className="w-full h-screen flex flex-col bg-zinc-900">
            <iframe
                src="/profile-File.pdf"
                className="w-full h-full border-none"
                title="Company Profile"
            />
        </div>
    );
};

export default ProfilePage;
