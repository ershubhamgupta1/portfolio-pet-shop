import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import './ProductCarousel.scss';

const productOwlCarouselOptions = {
    autoplay: true,
    smartSpeed: 1000,
    margin: 45,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
}

const productData = [
    {img: 'img/product-1.png', title: 'Royal Canin Size', price : '$199.00'},
    {img: 'img/product-2.png', title: 'Pedigree Adult Nutrition', price : '$299.00'},
    {img: 'img/product-3.png', title: 'Natural Balance L.I.D', price : '$399.00'},
    {img: 'img/product-4.png', title: 'Wholesome Grains', price : '$499.00'},
    {img: 'img/product-2.png', title: 'Nutro Ultra Puppy', price : '$599.00'},

]

const ProductCarousel = () => {
  return (
    <OwlCarousel options={productOwlCarouselOptions}>
        {
            productData.map((product, index)=>{
                const {img, title, price} = product;
                return (
                    <div className="pb-5" key={index}>
                        <div className="product-item position-relative bg-light d-flex flex-column text-center">
                            <img className="img-fluid mb-4" src={img} alt="" />
                            <h6 className="text-uppercase">{title}</h6>
                            <h5 className="text-primary mb-0">{price}</h5>
                            <div className="btn-action d-flex justify-content-center">
                                <a className="btn btn-primary py-2 px-3" href=""><i className="bi bi-cart"></i></a>
                                <a className="btn btn-primary py-2 px-3" href=""><i className="bi bi-eye"></i></a>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </OwlCarousel>
)
}

export default ProductCarousel
