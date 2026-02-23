import type { BurgersModel } from '../../../../models/BurgersModel';

export function ProductCard({ product }: { product: BurgersModel }) {
  return (
    <div>
      {product.images.map(image => (
        <img key={image.id} src={image.url} alt={image.name} />
      ))}
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
