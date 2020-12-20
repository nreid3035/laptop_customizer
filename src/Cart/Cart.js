import React from 'react';
import CartChoice from '../CartChoice/CartChoice'

class Cart extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {


        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
      
            return (
                <CartChoice currencyFormat={this.props.currencyFormat}
                            feature={feature}
                            featureHash={featureHash}
                            selectedOption={selectedOption}/>
            );
          });

          const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );

        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.props.currencyFormat.format(total)}
              </div>
            </div>
          </section>
        )
    }
}


export default Cart;