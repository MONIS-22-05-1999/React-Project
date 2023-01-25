import Input from "./Input";
function Login(){
    return (
        <form className="form">
       <Input type="text" placeholder="Name"/>
       <Input type="password" placeholder="Password"/>
       <button type="submit">Login</button>
        </form>
    )
}

export default Login;