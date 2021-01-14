import React from 'react'              
import slugify from 'slugify'    
                
class ChoosePart extends React.Component {
    constructor(props) {
        super(props)
    }
    
    
    
    
    
    render() {
      console.log(this.props)
      const name = this.props.name
        return (
        <div key={this.props.key} className="feature__item">
                <input
                    type="radio"
                    id={this.props.name}
                    className="feature__option"
                    name={this.props.name}
                    checked={this.props.name === this.props.selected[this.props.featureName].name}
                    onChange={e => this.props.updateFeature(this.props.featureName, this.props.featureObj)}
                  />
                  <label htmlFor={this.props.name} className="feature__label">
                    {this.props.name} ({this.props.currencyFormat.format(this.props.cost)})
                  </label>
                </div>
    )
} 
}              
            

export default ChoosePart
                