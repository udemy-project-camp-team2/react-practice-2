import useForm from "../hooks/useForm";

const LoginForm = () => {
    const {values, handleChange,resetForm} = useForm({
        name : '',
        pw : '',
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('로그인 데이터',values);
        resetForm();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    id : <input type="text" onChange={handleChange} value={values.name} name='name'/>
                </p>
                <p>
                    pw : <input type="password" onChange={handleChange} value={values.pw} name="pw"/>
                </p>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;

