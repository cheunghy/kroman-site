import React from 'react';
import keys from 'lodash/keys';
import map from 'lodash/map';

export default class LanguageSelector extends React.Component {

  static propTypes = {
    languages: React.PropTypes.object.isRequired
  };

  render() {
    return <div className="language-selector">
      {
        map(keys(this.props.languages), (key) => {
          return <div className="language-item">
            {this.props.languages[key]['languages'][key]}
          </div>
        })
      }
    </div>
  }
}