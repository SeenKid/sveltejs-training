export async function load({fetch, params}) {
    console.log(params)
//TODO modifier en fonction paramétrée
    const fetchProduct = async () => {
        const res = await fetch('https://dummyjson.com/products/'+params.productID)
        const productData = await res.json()
        return productData
    }

    return {
        product : fetchProduct()
    }
}