import React from 'react';
import CartChoice from '../CartChoice/CartChoice'
import Total from '../Total/Total'

class Cart extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        console.log(this.props)

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

          

        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
              <Total currencyFormat={this.props.currencyFormat}
                     selected={this.props.selected}/>

          </section>
        )
    }
}


export default Cart;