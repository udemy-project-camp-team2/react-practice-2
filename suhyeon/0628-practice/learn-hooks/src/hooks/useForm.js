import { useState } from "react";

const UseForm = (initialValus) => {
    const [values,setValues] = useState(initialValus)

    const handleChange = (event) => {
        const {name,value} = event.target
        setValues ((preValues) => ({...preValues, [name] : value}))
    }
    const resetForm = () => {
        setValues(initialValus);
    }
    return {values,handleChange,resetForm};
}

export default UseForm;