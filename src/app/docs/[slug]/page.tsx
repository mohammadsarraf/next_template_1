'use client'
import ChildPage from "@/app/Components/ChildPage";
import Navbar from "@/app/Components/Navbar";
import jsonData from '../../../../data.json';

interface Props {
    params: { slug: string; }
}

const modifiedTopics = jsonData.map((topic) => ({
    ...topic,
    Children: topic.Children.map(({ key, value, content }) => ({ key, value, content })),
}));

function getContentByChildName(childName: string) {
    for (const topic of jsonData) {
        for (const child of topic.Children) {
            if (child.key === childName) {
                return child.content;
            }
        }
    }
    return "Child not found"
}

export default function docPage({ params }: Props) {
    return (
        <>
            {console.log(params.slug)}
            <div className="flex flex-col h-screen ">
                <Navbar />
                <ChildPage
                    topics={modifiedTopics}
                    content={getContentByChildName(params.slug)} />
            </div>
        </>
    )
}
