export interface IProduct {
    title: string
    image: string
    price: number
}

export const cart: IProduct[] = [
    {
        title: "Lightweight Jacket",
        image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F116%2F512%2FMen-Jacket-Front-Black__15466.1603283963.png&w=1200&q=85",
        price: 249.99
    },
    {
        title: "Black Hat",
        image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F115%2F489%2FHat-front-black__72990.1603748583.png&w=3840&q=85",
        price: 80.00
    }
]