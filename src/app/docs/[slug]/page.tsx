'use client'
import ChildPage from "@/app/Components/ChildPage";
import Navbar from "@/app/Components/Navbar";

interface Props {
    params: { slug: string; }
}

export default function docPage({ params }: Props) {
    return (
        <>
            <div className="flex flex-col h-screen ">
                <Navbar />
                <ChildPage />
            </div>
        </>
    )
}