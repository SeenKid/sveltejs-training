/*
export async function load({fetch}) {
    //Pour un appel API OK, si plusieurs attend cque chaque appel soit terminé (waterfall)
    const res = await fetch('https://dummyjson.com/products?limit=10');
    const products = await res.json();

    return {
        products : products.products
    }
}
*/
export async function load({fetch}) {
    const fetchProducts = async () => {
        const res = await fetch('https://dummyjson.com/products?limit=10');
        const productsData = await res.json();
        return productsData.products  
    }
    const fetchUsers = async () => {
        const res = await fetch('https://dummyjson.com/users?limit=10');
        const usersData = await res.json();
        return usersData.users   
    }

    return {
        products : fetchProducts(),
        users : fetchUsers()
    }
}