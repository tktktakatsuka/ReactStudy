import { ColoredMessage } from "./components/ColoredMessage";

    export const App = () => {
        return (
            <>
            {console.log("こんにちは")}
                <h1>こんにちは！</h1>
                <p>お元気ですか</p>
            </>);

    }

    export const Click = () => {
        //ボタンを押した時に実行する関数を定義
        const onClickButton = () => {
            alert("alertの表示確認");
        };

        return(
            <>
            <h1> こんにちは！</h1>
            {/* コンポーネントへメッセージを送信 */}
            <ColoredMessage color = "red"> "お元気ですか" </ColoredMessage>
            <ColoredMessage color = "blue" message=  "元気です!" />

            <button onClick = {onClickButton}>ボタン</button>
            </>
        );
    };