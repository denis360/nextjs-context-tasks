import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(AppContext);
  const router = useRouter();
  return (
    <div className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2"
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <div className="flex justify-between">
      <h1>{ task.title }</h1>
        <button className="bg-red-700 hover:bg-red-500 px-3 py-1 inline-flex items-center"
          onClick={(e) => {
          e.stopPropagation();
          const conf = window.confirm();
          if (conf) deleteTask(task.id)
          toast.success("Task deleted successfully");
        }}>delete</button>
      </div>
      <p className="text-gray-300">{ task.description }</p>
      <p className="text-gray-500">{ task.id }</p>
    </div> 
  )
}
