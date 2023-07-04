import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart , removeFromCart}  from '../store/module/shopStore'

const ShopContainer = () => {
    const cartItems = useSelector((state) => state.shop)
    const dispatch = useDispatch()

    const handleAddtoCart = (item) => {
        dispatch(addToCart(item))
    }

    const handleremoveCart = (itemId) => {
        dispatch(removeFromCart({cartItem:cartItems, id : itemId}))
    }

    return (
        <div>
            <h1>쇼핑 장바구니</h1>
            <ul>
                {
                    cartItems.map((item,index) => (
                        <li key={index}>
                            {item.name} - {item.price}원
                            <button onClick={() => handleremoveCart(index)}>삭제</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={() => handleAddtoCart({ name: "상품 1", price: 10000 })}>상품1추가</button>
            <button onClick={() => handleAddtoCart({name: '상품 2', price: 10000})}>상품2추가</button>
        </div>
    )
}

export default ShopContainer