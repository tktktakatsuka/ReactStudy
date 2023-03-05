# ReactStudy


//ジェネレータ（create-react-app）のインストール
npm install -g create-react-app

//ひな形アプリケーションの作成
create-react-app my-app

//Reactアプリの起動
cd my-app
npm start

//以下のアドレスでアクセス。
http://localhost:3000


//npmコマンドのリファレンス確認方法 
readme.md
//マークアップ形式に切り替える
[Ctrl] + [shift] + V


index.js

//コンポーネントのインポート方法
import {「コンポーネント名」} from "./「jsx名」"

//
ReactDom.render(<コンポーネント名 /> , 
document.getElementById("root"));

//.scss
 npm install node-sass

