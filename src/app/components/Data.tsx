import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";
import img5 from "../Assets/img5.png";
import img6 from "../Assets/img6.png";
import img11 from "../Assets/img11.png";
import img22 from "../Assets/img22.png";
import img33 from "../Assets/img33.png";
import img44 from "../Assets/img44.png";
import img55 from "../Assets/img55.png";
import img66 from "../Assets/img66.png";


interface Product {
    id: number;
    productName: string;
    price: number | string;
    imageUrl: string | any;
    boxImageUrl: string | any;
    description: string;
    specialOfferPercentage: string | number;
    exclusive: boolean;
    size: string;
}



const Data: Product[] = [
    {
        "id": 1,
        "productName": "Product 1",
        "price": 11.5,
        "imageUrl": img1,
        "boxImageUrl": img11,
        "description": "A 30ml paint can that comes in a range of colors, designed to test the color at home before purchasing.",
        "specialOfferPercentage": "10",
        "exclusive": false,
        "size": "1L"
    },
    {
        "id": 2,
        "productName": "Product 2",
        "price": 20.5,
        "imageUrl": img2,
        "boxImageUrl": img22,
        "description": "A 30ml paint can that comes in a range of colors, designed to test the color at home before purchasing.",
        "specialOfferPercentage": "20",
        "exclusive": true,
        "size": "2L"
    },
    {
        "id": 3,
        "productName": "Product 3",
        "price": "50",
        "imageUrl": img3,
        "boxImageUrl": img33,
        "description": "A 30ml paint can that comes in a range of colors, designed to test the color at home before purchasing.",
        "specialOfferPercentage": "special offer on checkout",
        "exclusive": true,
        "size": "0.5L"
    },
    {
        "id": 4,
        "productName": "Product 4",
        "price": 40.50,
        "imageUrl": img4,
        "boxImageUrl": img44,
        "description": "A 30ml paint can that comes in a range of colors, designed to test the color at home before purchasing.",
        "specialOfferPercentage": "10",
        "exclusive": true,
        "size": "1.5L"
    },
    {
        "id": 5,
        "productName": "Product 5",
        "price": 25,
        "imageUrl": img5,
        "boxImageUrl": img55,
        "description": "A 30ml paint can that comes in a range of colors, designed to test the color at home before purchasing.",
        "specialOfferPercentage": 10,
        "exclusive": false,
        "size": "3L"
    },
    {
        "id": 6,
        "productName": "Product 6",
        "price": 35,
        "imageUrl": img6,
        "boxImageUrl": img66,
        "description": "A 30ml paint can that comes in a range of colors, designed to test the color at home before purchasing.",
        "specialOfferPercentage": 10,
        "exclusive": true,
        "size": "2.5L"
    }
]

export default Data;