import { add, sub, mul, div } from "./calculator";

function App() {
    return <>
    <ul>
        <li>{add(1, 2)}</li>
        <li>{sub(1, 2)}</li>
        <li>{mul(1, 2)}</li>
        <li>{div(1, 2)}</li>
        </ul>
    </>
}

export default App;