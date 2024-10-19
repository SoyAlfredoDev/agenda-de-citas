import '../styles/userPorfile.css'
function UserPorfile() {
    return (
        <>
            <div className='boxImageUserProfile'>
                <img src="src/assets/images/photo-alfredo-hurtado.jpg" alt="foto de perfil" />
            </div>
            <div className='boxNameUserProfile'>
                <span className='nameUserProfile'>Alfredo Hurtado</span>
            </div>
            <div className='text-center'>
                <span className='text-end boxNameUserProfileSpan'>Administrador </span>
            </div>
        </>
    )
}

export default UserPorfile;