import { useState } from "react";
import InputCheckBox from "./InputCheckBox";

function InputDays({ enviarValor }) {
    const [valor, setValor] = useState([]);

    const handleCheckboxChange = (e) => {
        const valueDay = e.target.value;
        let newListDays;

        if (!valor.includes(valueDay)) {
            newListDays = [...valor, valueDay]
        } else {
            newListDays = valor.filter(element => element !== valueDay)
        }

        newListDays.sort();
        setValor(newListDays);
        enviarValor(newListDays);
    }

    return (
        <div>
            <InputCheckBox
                day={'Lunes'}
                value={0}
                handleCheckboxChange={handleCheckboxChange}
            />

            <InputCheckBox
                day={'Martes'}
                value={1}
                handleCheckboxChange={handleCheckboxChange}
            />

            <InputCheckBox
                day={'Miércoles'}
                value={2}
                handleCheckboxChange={handleCheckboxChange}
            />

            <InputCheckBox
                day={'Jueves'}
                value={3}
                handleCheckboxChange={handleCheckboxChange}
            />

            <InputCheckBox
                day={'Viernes'}
                value={4}
                handleCheckboxChange={handleCheckboxChange}
            />

            <InputCheckBox
                day={'Sábado'}
                value={5}
                handleCheckboxChange={handleCheckboxChange}
            />

            <InputCheckBox
                day={'Domingo'}
                value={6}
                handleCheckboxChange={handleCheckboxChange}
            />
        </div>
    )

}

export default InputDays;
