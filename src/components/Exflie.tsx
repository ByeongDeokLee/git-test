import * as React from "react";

interface IText {
  text: string;
}

interface IProps {}

class Exfile extends React.Component<IProps, IText> {
  state: IText = {
    text: "",
  };
  Ins = () => {
    // for (var i = 0; i < 10; i++) {
    //   this.setState({ text: string(i) });
    //   this.setState(({ text }) => ({ text: i }));
    if (this.state.text == "") {
      this.setState({ text: "추가" });
    } else {
      this.setState(({ text }) => ({ text: text + "|" + "추가" }));
    }
    console.log("\n\n\n  text\n\n\n", this.state.text);
    // }
  };

  Del = () => {
    const ex = this.state.text.split("|");
    console.log("\n\n\n\n\n", ex.length);
    if (ex.length == 1) {
    } else {
    }
    //   if()
  };
  render() {
    return (
      <div>
        <h1>안녕</h1>
        <button onClick={this.Ins}>추가</button>
        <button onClick={this.Del}>삭제</button>
        <div>{this.state.text}</div>
      </div>
    );
  }
}

export default Exfile;
