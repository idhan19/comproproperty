
import React from 'react';
import { company, companyProfilePdf } from '@/data/site';

export const metadata = {
    title: "Company Profile | PT PONCO MUNARO UTAMA",
    description: "Company Profile and Strategic Milestones of PT PONCO MUNARO UTAMA",
    icons: {
        icon: company.logo,
    },
};

const ProfilePage = () => {
    return (
        <div className="w-full h-screen flex flex-col bg-zinc-900">
            <iframe
                src={companyProfilePdf}
                className="w-full h-full border-none"
                title="Company Profile"
            />
        </div>
    );
};

export default ProfilePage;
