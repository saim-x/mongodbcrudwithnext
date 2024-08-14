// This page is used to edit a topic. It fetches the topic data from the API and passes it to the EditTopicForm component.
import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        return res.json(); 
    } catch (error) {
        console.log("Error loading topic: ", error);
    }
};

export default async function EditTopic({ params }) {
    const { id } = params;
    const topic = await getTopicById(id); 

    if (!topic) {
        return <div>Error: Topic not found or failed to fetch.</div>;
    }

    const { title, description } = topic;

    return <EditTopicForm id={id} title={title} description={description} />;
}
