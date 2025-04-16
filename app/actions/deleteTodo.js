"use server";

import prisma from "@/lib/prisma";
import {revalidataPath} from "next/cache";

export default async function deleteTodo(formData){
    const id = Number(formData.get("id"));
    try{
        await prisma.todo.delete({
            where:{id},
        });
        revalidataPath("/todo");
    } catch (error){
        console.log(error);
    }
}