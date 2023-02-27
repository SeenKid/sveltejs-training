import { prisma } from "$lib/server/prisma";
import { error, fail } from "@sveltejs/kit";

export const load = async ({params}) => {
    const getArticle = async (id) => {
        const article = await prisma.article.findUnique({
            where: {
                id //id: id
            }
        });

        if(!article) throw error(404, "Article not found");
        

        return article;
    } 

    return {
        article : getArticle(Number(params.articleID))
    }
    
};

export const actions = {
    updateArticle: async ({request, params}) => {
        //console.log({request, params})

        const {title, content} = Object.fromEntries(await request.formData())

        //console.log(content)

        try {
            await prisma.article.update({
                where : {
                    id: Number(params.articleID)
                },
                data: {
                    title,
                    content
                }
            }) 
        } catch(err) {
            console.log(err)
           //throw error(404, "could not update article")
             throw fail(500, {message: "Could not update article"})
        }

        return {
            status: 200
        }
    }
}