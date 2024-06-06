"use client"

const Product = ({location}) => {
    console.log(location)
    return (
        <div>
            <button onClick={() => alert(location)}>Check Location</button>
        </div>
    );
};

export default Product;