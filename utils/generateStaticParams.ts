
import { staticData } from "@public/data/data";

export async function generateStaticParams() {
    return staticData.map(product => ({
        productId: product.id.toString(),
      }));
}
