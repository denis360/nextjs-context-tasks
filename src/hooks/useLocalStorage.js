"use client"
import { useState, useEffect } from "react";

export const useLocalStorage = (key, value) => {
  const [local, setLocal] = useState(value);

  useEffect(() => {
    const item = localStorage.getItem(key);
    console.log(item)
    if (item) setLocal({
      ...local,
      tasks: JSON.parse(item)
    });
  }, [])

  useEffect(() => {
    if (local.tasks.length > 0){
      localStorage.setItem(key, JSON.stringify(local.tasks));
    }
  }, [local.tasks]);

  return [local, setLocal];
}
