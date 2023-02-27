import { prisma } from "$lib/server/prisma";
import { error, fail } from "@sveltejs/kit";

export const load = async () => {
    return {
        articles : prisma.article.findMany()
    }
    
};

export const actions = {
    createArticle: async ({request}) => {
        const {title, content} = Object.fromEntries(await request.formData())

        try {
            await prisma.article.create({
                data: {
                    title,
                    content
                }
            }) 
        } catch(err) {
            console.log(err)
           //throw error(404, "could not create article")
             throw fail(500, {message: "Could not create article"})
        }

        return {
            status: 200
        }
    },

    deleteArticle:async({url}) => {
        
        const id = url.searchParams.get("id")

        console.log(id)

        try {
            await prisma.article.delete({
                where:{
                    id: Number(id)
                }
            })
        } catch (err) {
            console.log(err)
            return fail(500, {message: "Could not delete your article"})
        }

        return {
            status: 200
        }
    }
}
