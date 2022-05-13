function incrementCartProductAmount(cartProducts, product) {
    const existProduct = cartProducts.find(curProduct => curProduct.id === product.id);
    let newCartProducts;

    if(existProduct) {
        newCartProducts = cartProducts.reduce((result, curProduct) => {
            if(product.id === curProduct.id)
                return [...result, {...curProduct, amount: curProduct.amount + 1}];
    
            return [...result, curProduct];
        }, []);
    } else {
        newCartProducts = [...cartProducts, {...product, amount: 1}];
    }
    
    return newCartProducts;
}
function decrementCartProductAmount(cartProducts, productId) {
    const newCartProducts = cartProducts.reduce((result, curProduct) => {
        if(productId === curProduct.id) {
            if(curProduct.amount - 1 > 0)
                return [...result, {...curProduct, amount: curProduct.amount - 1}]
            else 
                return [...result];
        }

        return [...result, curProduct];
    }, []);

    return newCartProducts;
}

function deleteProduct(cartProducts, productId) {
    return cartProducts.filter((curProduct) => {
        return curProduct.id !== productId;
    });
}

export const incrementProductAmountDispatch = ({cartProducts, product, cartProductsAmount, totalProductsCost}) => {
    const newCartProducts = incrementCartProductAmount(cartProducts, product);
    const newCartProductsAmount = cartProductsAmount + 1;
    const newTotalProductsCost = totalProductsCost + product.price;

    return {newCartProducts, newCartProductsAmount, newTotalProductsCost};
}

export const decrementProductAmountDispatch = ({cartProducts, product, cartProductsAmount, totalProductsCost}) => {
    const newCartProducts = decrementCartProductAmount(cartProducts, product.id);
    const newCartProductsAmount = cartProductsAmount - 1;
    const newTotalProductsCost = totalProductsCost - product.price;

    return {newCartProducts, newCartProductsAmount, newTotalProductsCost};
}

export const deleteProductDispatch = ({cartProducts, product, cartProductsAmount, totalProductsCost}) => {
    const newCartProducts = deleteProduct(cartProducts, product.id);
    const newCartProductsAmount = cartProductsAmount - product.amount;
    const newTotalProductsCost = totalProductsCost - product.price * product.amount;

    return {newCartProducts, newCartProductsAmount, newTotalProductsCost};
}