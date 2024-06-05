import React, { useState, useContext, createContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const BuyContext = createContext(null);

export const BuyProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    const [productCount, setProductCount] = useState(0);
    const [productTotal, setProductTotal] = useState(0);

    // const addProductHandler = async (myForm) => { 
    //     const index = product.findIndex((v) => {
    //         return v.id == myForm.id;
    //     });
    //     console.log(index)
    //     if (product.length > 0 && index >= 0) {
    //         const nextData = JSON.parse(JSON.stringify(product));
    //         nextData[index].count += myForm.add;
    //         setProduct(nextData);
    //         setProductCount(() => productCount + myForm.add);
    //         localStorage.setItem("buy", JSON.stringify(product));
    //         localStorage.setItem("count", productCount + myForm.add);
    //     } else {
    //         console.log( [...product, myForm]) 
    //         setProduct(() => [...product, myForm]) 

    //         setProductCount(() => productCount + myForm.add);
    //         console.log(product)
    //         localStorage.setItem("buy", JSON.stringify(product));
    //         localStorage.setItem("count", productCount + myForm.add);

    //     }


    // }
    const addProductHandler = async (myForm) => {
        if (product.length === 0) { 
            setProduct([myForm])
            setProductTotal(myForm.add*myForm.price);
            setProductCount(myForm.add);
            localStorage.setItem("count", myForm.add);
            localStorage.setItem("total", myForm.total);
            localStorage.setItem("buy", JSON.stringify([myForm]));
            return;
        }
        console.log( typeof product)
        const index = product.findIndex((v) => v.id === myForm.id); 

        if (product.length > 0 && index >= 0) {
            setProduct((prevProduct) => {
                const nextData = [...prevProduct];
                nextData[index].add = myForm.add + nextData[index].add;
                localStorage.setItem("buy", JSON.stringify(nextData));
                return nextData;
            });
            setProductCount((prevCount) => {
                const newCount = prevCount + myForm.add;
                localStorage.setItem("count", newCount);
                return newCount;
            });
            setProductTotal((prevCount) => {
                const newTotal = prevCount + (myForm.add*myForm.price);
                localStorage.setItem("total", newTotal);
                return newTotal ;
            });
        } else {

            setProduct((prevProduct) => {
                const nextData = [...prevProduct];
                nextData.push(myForm);
                localStorage.setItem("buy", JSON.stringify(nextData));
                return nextData;
            }); 
            setProductCount((prevCount) => {
                const newCount = prevCount + myForm.add;
                localStorage.setItem("count", newCount);
                return newCount;
            });
            setProductTotal((prevCount) => {
                const newTotal = prevCount + (myForm.add*myForm.price);
                localStorage.setItem("total", newTotal);
                return newTotal ;
            });
        }
    };


    useEffect(() => {
        if (!localStorage.getItem("buy") || !localStorage.getItem("count")|| !localStorage.getItem("total")) {
            localStorage.setItem("buy", JSON.stringify([]));
            localStorage.setItem("count", 0);
            localStorage.setItem("total", 0);
        } else{
            setProduct(JSON.parse(localStorage.getItem("buy")))
            setProductCount(JSON.parse(localStorage.getItem("count")));
            setProductTotal(JSON.parse(localStorage.getItem("total")));
            console.log(product)
            console.log(productCount)
        }
    }, []);

    return (
        <BuyContext.Provider
            value={{productTotal, setProductTotal, addProductHandler, product, setProductCount, productCount, setProduct }}
        >
            {children}
        </BuyContext.Provider>
    )
}

export const useBuy = () => useContext(BuyContext);
