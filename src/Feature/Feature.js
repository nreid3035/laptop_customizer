import React from 'react';
import ChoosePart from '../ChoosePart/ChoosePart';

class Feature extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log(this.props)
        const parts = this.props.features.map((feature, idx) => {
            return <ChoosePart 
                       featureName={this.props.name}
                       name={feature.name}
                       key={idx}
                       featureObj={feature}
                       cost={feature.cost}
                       selected={this.props.selected}
                       currencyFormat={this.props.currencyFormat}
                       updateFeature={this.props.updateFeature}
                       />
        })
        return (
           <div className="feature">
             <h2>{this.props.name}</h2>
             {parts}
           </div>    
        )
    }
}

export default Feature