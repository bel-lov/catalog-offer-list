import React from "react";


export default function ListItem({ item }) {
    const { listing_id, url, MainImage, title, currency_code, price, quantity } = item;
    console.log(item);

    if (item.state !== 'active') {
        return null;
    }
    let name = title.length > 50 ? `${title.slice(0, 50)}...` : title;
    let levelClass;
    let priceCurrency;

    if (currency_code === 'USD') {
        priceCurrency = `$${price}`;
    } else if (currency_code === 'EUR') {
        priceCurrency = `€${price}`;
    } else {
        priceCurrency = `${price} ${currency_code}`;
    }

    if (quantity <= 10) {
        levelClass = 'level-low';
    } else if (quantity <= 20) {
        levelClass = 'level-medium';
    } else {
        levelClass = 'level-high';
    }

    return (
        <>
            <div className='item' key={listing_id} >
                <div className="item-image">
                    <a href={url}>
                        <img src={MainImage.url_570xN} alt='картинка' />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{name}</p>
                    <p className="item-price">{priceCurrency}</p>
                    <p className={`item-quantity ${levelClass}`}>{quantity}</p>
                </div>
            </div>
        </>
    );
}