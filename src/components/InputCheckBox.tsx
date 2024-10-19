interface Props {
    day: string,
    value: number,
    handleCheckboxChange: () => void
    checked: boolean;
}

function InputCheckBox(props: Props) {
    const { day, value, checked, handleCheckboxChange } = props;
    return (
        <div className="form-check me-4">
            <label htmlFor={day}>{day}
                <input
                    id={day}
                    value={value}
                    className="form-check-input"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={checked}
                />
            </label>
        </div>
    )
}

export default InputCheckBox;