// async function getData(slug) {
//     const res = await fetch(`https://your-api.com/products?category=${slug}`);
//     return res.json();
// }

// export default async function ProductCategoryPage({ params }) {
//     const { slug } = params;
//     const data = await getData(slug);

//     return (
//         <div>
//             <h1>{slug.replace(/-/g, " ")}</h1>

//             {data.map((item) => (
//                 <div key={item.id}>
//                     <h2>{item.name}</h2>
//                 </div>
//             ))}
//         </div>
//     );
// }




export default function ProductCategoryPage({ params }) {
    const { slug } = params;

    // Optional: Convert slug to readable Title
    const title = slug.replace(/-/g, " ");

    return (
        <div className="max-w-5xl mx-auto py-16 px-4">
            <h1 className="text-3xl font-bold capitalize mb-6">
                {title}
            </h1>

            <p className="text-gray-600">
                This is the product category page for <b>{title}</b>.  
                Yaha tum apna data, images, description, products etc. show kar sakte ho.
            </p>
        </div>
    );
}
