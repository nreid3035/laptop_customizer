import React from 'react';


class CartChoice extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="summary__option" key={this.props.featureHash}>
            <div className="summary__option__label">{this.props.feature} </div>
            <div className="summary__option__value">{this.props.selectedOption.name}</div>
            <div className="summary__option__cost">
              {this.props.currencyFormat.format(this.props.selectedOption.cost)}
            </div>
            </div>
        )
    }
}


export default CartChoice;


