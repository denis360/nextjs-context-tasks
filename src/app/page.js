"use client"
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { TaskCard } from "@/components/TaskCard";

const Home = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="flex justify-center">
      <div className="w-7/12">
        { state.tasks.map(task => (
          <TaskCard task={task} key={task.id} />
        )) } 
      </div>
    </div>
  )
}

export default Home;
