import React from "react"

export default class DateRange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 400,
      height: 22
    }

    this.updateSize = this.updateSize.bind(this);
  }

  updateSize() {
    let element = document.getElementById(this.props.id);
    this.setState({
      width: element.clientWidth,
      height: element.clientHeight
    });
  }

  componentDidMount() {
    if ('matchMedia' in window) {
      window.matchMedia('print').addListener(this.updateSize);
    } else {
      window.addEventListener("beforeprint", this.updateSize);
    }
    window.addEventListener("resize", this.updateSize);
    this.updateSize();
  }

  render() {
    let start = this.props.earliestDate.getTime();
    let end = this.props.latestDate.getTime();
    let from = this.props.from.getTime();
    let to = this.props.to.getTime();

    let scale = (end - start) / this.state.width;
    let x = (from - start) / scale;
    let width = (to - from) / scale;

    let tickBottom = (this.state.height - 2) / 2;
    let tickMid = (this.state.height - 2) / 4;

    let showStart = x > 30;
    let showEnd = x + width < this.state.width - 30;

    let fromAnchor = x < 15 ? "start" : (width > 40 ? "middle" : "end");
    let toAnchor = x + width > this.state.width - 15 ? "end" : (width > 40 ? "middle" : "start");

    return (
      <svg 
        id={this.props.id} 
        className={this.props.className} 
        viewBox={"0 0 " + this.state.width + " " + this.state.height} 
        preserveAspectRatio="none" 
        xmlns="http://www.w3.org/2000/svg">
        <line x1={0} y1={0} x2={0} y2={tickBottom} stroke="black" />
        <line x1={this.state.width} y1={0} x2={this.state.width} y2={tickBottom} stroke="black" />
        <line x1={0} y1={tickMid} x2={this.state.width} y2={tickMid} stroke="black" />
        <rect x={x} y={0} width={width} height={tickBottom} strokeLinejoin="round" />
        {showStart ? <text x={0} y={this.state.height - 1} textAnchor="start" className={this.props.textModifier}>{this.props.earliestDate.getFullYear()}</text> : ""}
        <text x={x} y={this.state.height} textAnchor={fromAnchor}>{this.props.from.getFullYear()}</text>
        <text x={x + width} y={this.state.height} textAnchor={toAnchor}>{this.props.to.getFullYear()}</text>
        {showEnd ? <text x={this.state.width} y={this.state.height - 1} textAnchor="end" className={this.props.textModifier}>{this.props.latestDate.getFullYear()}</text> : ""}
      </svg>
    )
  }
}