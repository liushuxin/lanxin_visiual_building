import { Route, Link } from "react-router-dom";
import Home from "./page/Home";
import User from "./page/User";
// import PaiBan from "./page/Lianxi/paiban";
import SuanFa from "./page/SuanFa";
// import G6Page from "./page/G6Page";
import FormPage from "./page/Form";
import Dashboard from "./page/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Link to="/a" className="App-link">
          Home
        </Link>
        <Link to="/user" className="App-link">
          用户管理
        </Link>
        {/* <Link to="/paiban" className="App-link">
          paiban
        </Link> */}
        <Link to="/suanfa" className="App-link">
          算法动画
        </Link>
        {/* <Link to="/g6" className="App-link">
          G6 动画绘制
        </Link> */}
        <Link to="/form" className="App-link">
          表单测试
        </Link>
        <Link to="/dashboard" className="App-link">
          仪表盘
        </Link>
      </div>
      <div className="main">
        <div className="top">
          <h3>兰新可视化搭建平台</h3>
        </div>
        <div className="content">
          <Route exact path="/a" component={Home} />
          <Route exact path="/user" component={User} />
          {/* <Route exact path="/paiban" component={PaiBan} /> */}
          <Route exact path="/suanfa" component={SuanFa} />
          {/* <Route exact path="/g6" component={G6Page} /> */}
          <Route exact path="/form" component={FormPage} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </div>
    </div>
  );
}

export default App;
