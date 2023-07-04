const Auth = ({handleLogin, handleLogout, authStore}) => {

    return (
        <div>
            {
                authStore ? (
                    <div>
                        <p>로그인 상태 입니다</p>
                        <button onClick={handleLogout}>logOut</button>
                    </div>
                ) : (
                    <div>
                        <p>로그아웃 상태 입니다</p>
                        <button onClick={handleLogin}>logIn</button>
                    </div>
                )
            }
        </div>
    )
}

export default Auth;