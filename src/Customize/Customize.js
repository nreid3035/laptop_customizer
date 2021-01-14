import React from 'react';
import slugify from 'slugify';
import ChoosePart from '../ChoosePart/ChoosePart'
import Feature from '../Feature/Feature'


class Customize extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
      const features = Object.keys(this.props.features).map((feature, idx) => {
         console.log(feature)


        return <Feature 
                  key={idx}
                  name={feature} 
                  features={this.props.features[feature]}
                  selected={this.props.selected}
                  currencyFormat={this.props.currencyFormat}
                  updateFeature={this.props.updateFeature} />
      })  


      
        /*const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <ChoosePart itemHash={itemHash}
                selected={this.props.selected}
                feature={feature}
                item={item}
                }
                updateFeature={this.props.updateFeature}/>
                );
            });

            return (
                <fieldset className="feature" key={featureHash}>
                  <legend className="feature__name">
                    <h3>{feature}</h3>
                  </legend>
                  {options}
                </fieldset>
              );
            });*/

        return (
            <form className='main__form'>
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default Customize;