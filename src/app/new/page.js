"use client"
import {  useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const page = ({ params }) => {
  const router = useRouter();
  const {register, handleSubmit, setValue,formState:{
    errors
  }} = useForm();
  const { state, addTask, updateTask } = useContext(AppContext);
  const onSubmit = handleSubmit((data) => {
    if (params.id){
      updateTask(params.id, data) 
      toast.success("Task updated successfully");
    } else {
      data.id = uuid();
      addTask(data);
      toast.success("Task created successfully");
    }
    router.push("/");
  });
  useEffect(() => {
    if (params.id){
      const taskFound = state.tasks.find(task => task.id == params.id);
      if (taskFound) {
        setValue("title", taskFound.title);
        setValue("description", taskFound.description);
      }
    }
  }, [])
  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={onSubmit} className="bg-gray-700 p-10">
        { params.id ?
            <h2>Editing</h2>
        : <h2>New task</h2>
        }
        <input 
        placeholder="Title"
        className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
        type="text" 
        {...register("title", { required: true })}/>

        {errors.title && (
          <span className="block text-red-400 mb-2">This field is required</span>
        )}

        <textarea 
        placeholder="Description"
        className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full" 
        {...register("description", { required: true })}></textarea>

        {errors.description && (
          <span className="block text-red-400 mb-2">This field is required</span>
        )}

        <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disable:opacity-30">Save</button>
      </form>
    </div>
  )
}

export default page;
