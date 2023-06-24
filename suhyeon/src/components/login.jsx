import React,{useState , useEffect} from "react";


function Login (props) {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handeleInputId = (e) => {
        setInputId(e.target.value);
    }
    const handeleInputPw = (e) => {
        setInputPw(e.target.value);
    }

    const OnClickEvent = () => {
        if(handeleInputId == 'admin' && handeleInputPw == 'password') {
            alert('로그인 성공');
        } else {
            alert('로그인 실패');
        }
    }

    
    return (
    <>
        <div>
            아이디 :
            <input
                type='text'
                id="name"
                placeholder="name"
                value={inputId}
                onChange={handeleInputId}
            />
        </div>
        <div>
            아이디 :
            <input
                type='password'
                id="password"
                placeholder="password"
                value={inputPw}
                onChange={handeleInputPw}
            />
        </div>
        <div>
            <button type="button" onClick={OnClickEvent}>Login</button>
        </div>
    </>
    )
}

export default Login;