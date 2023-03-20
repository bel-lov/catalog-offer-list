import React from "react";
import ListItem from "./ListItem";

export default function Listing(props) {
    const { items } = props;
    return (
        <div className="item-list">
            {items.map((item) => (
                <ListItem key={item.listing_id} item={item} />
            ))}
        </div>
    )
}

Listing.defaultProps = {
    items: [],
};