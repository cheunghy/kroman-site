import React from 'react';
import LanguageSelector from './LanguageSelector';
import Title from './Title';

export default class Application extends React.Component {

  static propTypes = {
    defaultLanguage: React.PropTypes.string.isRequired,
    languages: React.PropTypes.object.isRequired
  };

  getLocalizedString(name) {
    let langObj = this.props.languages[this.props.defaultLanguage];
    return langObj[name];
  }

  render() {
    return <div className="application">
      <Title mainTitle={this.getLocalizedString('mainTitle')} subtitle={this.getLocalizedString('subtitle')}/>
      <LanguageSelector languages={this.props.languages} />
    </div>
  }
}