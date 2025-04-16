"use server";

import prisma from "@/lib/prisma";
import {revalidataPath} from "next/cache";

export default async function addTodo(formData){
    const title = formData.get("title");
    try{
        await prisma.todo.create({
            data:{title},
        });
        revalidataPath("/Todo");
    } catch (error){
        console.log(error);
    }
}