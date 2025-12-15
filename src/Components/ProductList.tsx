import Link from "next/link";
import Image from "next/image";


const ProductList = () => {
    return(
        <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="" className="relative">
                <Image src="/images/Hinges - Copy.png" alt="Hinges" width={200} height={200} className="rounded-md object-cover border border-gray-200" />
            </Link>

        </div>
    )
}
export default ProductList