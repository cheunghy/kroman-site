import React from 'react';

export default class Title extends React.Component {

  static propTypes = {
    mainTitle: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string.isRequired,
    altMainTitle: React.PropTypes.string,
    altSubtitle: React.PropTypes.string
  };

  render() {
    return <div className="title">
      <div className="main-title">{this.props.mainTitle}</div>
      <div className="subtitle">{this.props.subtitle}</div>
      {this.props.altMainTitle ? <div className="alt-main-title">{this.props.altMainTitle}</div> : null}
      {this.props.altSubtitle ? <div className="alt-subtitle">{this.props.altSubtitle}</div> : null}
    </div>
  }
}