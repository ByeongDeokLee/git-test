import * as React from "react";

interface ICount {
  count: number;
}

interface IProps {}
// class Counter extends React.Component< ICount> {
class Counter extends React.Component<IProps, ICount> {
  state: ICount = {
    count: 0,
  };
  CountUp = () => {
    if (this.state.count == 10) {
      alert("최대치 카운터를 했습니다. 0으로 초기화 합니다.");
      this.setState({ count: 0 });
      // this.setState(({ count }) => ({ count: 0 }));
      // this.state.count = 0;
      return;
    }
    this.setState(({ count }) => ({ count: count + 1 }));
    // this.setState(({ count }) => ({ count: count + 1 }));
  };
  CountDown = () => {
    if (this.state.count == 0) {
      alert("더이상 카운를 제거 할수 없습니다.");
      return;
    }
    this.setState(({ count }) => ({ count: count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>프로필</h1>
        <button onClick={this.CountUp}>+</button>
        <div>{this.state.count}</div>
        <button onClick={this.CountDown}>-</button>
      </div>
    );
  }
}

export default Counter;
