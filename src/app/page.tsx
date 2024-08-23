import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top posts</h1>
      </div>
      <div className="border rounded-lg p-4">
        <TopicCreateForm />
        <Divider className="my-4" />
        <h3 className="text-lg font-semibold mb-4">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
