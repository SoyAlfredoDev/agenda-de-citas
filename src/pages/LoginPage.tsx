function LoginPage() {
    return (
        <form>
            <input type="email" required={true} placeholder="user email" />
            <input type="password" required={true} placeholder="password" />
        </form>
    )
}

export default LoginPage;