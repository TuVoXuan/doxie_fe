import './product-information.css';

import React from 'react';

export default function ProductInformation() {
    return (
        <div className="product__information">
            <h3>Product Information</h3>
            <hr />
            <div className="product__details">
                <h4>PRODUCT DETAILS</h4>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac bibendum
                        accumsan, pellentesque magna diam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim elementum nec
                        volutpat fusce nisl, adipiscing et sed egestas. Nec pulvinar leo posuere
                        gravida sed. Arcu, non tellus faucibus suscipit malesuada elementum nec cras
                        tristique. Lectus risus augue semper maecenas felis. Purus integer nulla id
                        elementum sed tristique faucibus tristique.
                    </p>
                </div>
            </div>
            <div className="product__care">
                <h4>PRODUCT CARE</h4>
                <ul>
                    <li>
                        <p>Hand wash using cold water.</p>
                    </li>
                    <li>
                        <p>Do not using bleach.</p>
                    </li>
                    <li>
                        <p>Hang it to dry.</p>
                    </li>
                    <li>
                        <p>Iron on low temperature.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
