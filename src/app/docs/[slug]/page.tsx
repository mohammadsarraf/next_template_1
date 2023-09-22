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
    // Loop through the jsonData to find the child with the matching name
    for (const topic of jsonData) {
        for (const child of topic.Children) {
            if (child.value === childName) {
                // Return the content of the matching child
                return child.content;
            }
        }
    }

    // Return a message if the child name is not found
    return 'Child not found';
}

export default function docPage({ params }: Props) {
    return (
        <>
            <div className="flex flex-col h-screen ">
                <Navbar />
                <ChildPage
                    topics={modifiedTopics}
                    content={getContentByChildName(params.slug)} />
            </div>
        </>
    )
}
