import { useLogin } from "../hooks/index";
import { useDispatch } from "react-redux";
import { setLogin } from "../reducers/userReducer";

const Login = () => {
  const dispatch = useDispatch();
  const name = useLogin("text");
  const pass = useLogin("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      username: name.value,
      password: pass.value
    }
    dispatch(setLogin(payload));
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
            username
            <input {...name}/>
        </div>
        <div>
            password
            <input {...pass}/>
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}
  
export default Login;
  