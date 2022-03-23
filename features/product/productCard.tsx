import { NextPage } from 'next'
import Image from 'next/image'
export const ProductCard: NextPage = (): JSX.Element => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <Image src="https://via.placeholder.com/300x300" alt="product" />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__title">Product title</h3>
        <p className="product-card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="product-card__price">
          <span className="product-card__price-value">$100</span>
          <span className="product-card__price-currency">USD</span>
        </div>
      </div>
    </div>
  )
}
