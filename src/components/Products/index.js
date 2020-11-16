import React from 'react'
import { 
    ProductsContainer, 
    ProductsHeader, 
    ProductsWrapper, 
    ProductCard, 
    ProductImg, 
    ProductInfo, 
    ProductTitle, 
    ProductDesc, 
    ProductPrice, 
    ProductButton 
} from './ProductsElements'

const Products = ({heading, data}) => {
  return(
    <ProductsContainer>
        <ProductsHeader>{heading}</ProductsHeader>
        <ProductsWrapper>
            {
                data.map((product, index) => (
                    <ProductCard key={index}>
                        <ProductImg src={product.img} alt={product.alt} />
                        <ProductInfo>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ProductButton>{product.button}</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                ))
            }
        </ProductsWrapper>
    </ProductsContainer>
   )

 }

export default Products