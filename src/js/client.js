import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
// Reduxをインストールしたらまずはトップコンポーネントでインストールをする

import Layout from "./components/Layout";
import store from "./store";
// storeとreactを結びつける記述

ReactDom.render(
// Reduxを全てのコンポーネントで適用させる
  <Provider store={store}>
    {/* Procvider componentへpropsでstoreを渡す */}
    <Layout />
  </Provider>
,app);
