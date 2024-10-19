interface Props {
    inputName: string,
    inputValue: number,
    type: string,
    inputId: string
    handleInputChange: () => void
    placeholder?: string
}

function InputForm(props: Props) {
    const { inputName, inputValue, type, inputId, placeholder, handleInputChange } = props;
    return (
        <div className="form-check me-4">
            <label htmlFor="inputId ">{inputName}
                <input
                    id={inputId}
                    value={inputValue}
                    className="form-control"
                    type={type}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                />
            </label>
        </div>
    )
}

export default InputForm;