import React from 'react';

class Discount extends React.Component {

    render () {
        var discountString = 'Нету Скидки';
        const discount = this.props.discount;
        if (typeof discount != 'undefined' && discount && discount.discount && discount.type) {
            discountString = discount.discount + ((discount.type == 'percent') ? '%' : '$');
        }

        return (
            <div>
                {discountString}
            </div>
        );
    }

}

export default Discount;
