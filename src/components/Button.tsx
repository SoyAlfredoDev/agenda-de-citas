interface Props {
    name: string;
    handleOnClick: () => void;

}
function Button(props: Props) {
    const { name, handleOnClick } = props
    return (
        <>
            <button
                className="btn btn-success"
                onClick={handleOnClick}>
                {name}
            </button>
        </>
    )
}
export default Button;