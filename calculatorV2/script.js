const calculator = (element) => {
    const value = element.path[0].innerText
    const changeDisplay = (value) => {
        document.getElementById("display").innerHTML = value;
    }

    const getDisplay = () => {
        return document.getElementById("display").innerHTML;
    }

    const valueChecker = (value) => {
        if (value === "0" && getDisplay() === "0") return false;
        if (getDisplay().length < 10) return true;
    }

    const addNumber = (value) => {
        const displayValue = getDisplay();
        if (displayValue === "0") {
            changeDisplay(value);
        } else {
            changeDisplay(getDisplay() + value);
        }
    }

    const checkRegister = (registerFunction) => {
        const value = parseFloat(getDisplay());
        const registerValue = parseFloat(document.getElementById("display").getAttribute("data-register-value"));
        switch (document.getElementById("display").getAttribute("data-register-function")) {
            case "":
                loadRegister(registerFunction);
                changeDisplay("0");
                break;
            case "plus":
                changeDisplay((value + registerValue).toString());
                loadRegister("");
                break;
            case "minus":
                changeDisplay((registerValue - value).toString());
                loadRegister("");
                break;
            case "times":
                changeDisplay((value * registerValue).toString());
                loadRegister("");
                break;
            case "divide":
                changeDisplay((registerValue % value).toString());
                loadRegister("");
                break;
        }

    }

    const loadRegister = (registerFunction) => {
        document.getElementById("display").setAttribute("data-register-value", getDisplay());
        document.getElementById("display").setAttribute("data-register-function", registerFunction);
    }


    switch (value) {
        case "+":
            checkRegister("plus");
            break;
        case "−":
            checkRegister("minus");
            break;
        case "×":
            checkRegister("times");
            break;
        case "÷":
            checkRegister("divide");
            break;
        case "˙":
            break;
        case "=":
            checkRegister("")
            break;
        case "C":
            changeDisplay("0");
            loadRegister("");
            break;
        default:
            if (valueChecker(value)) {
                addNumber(value);
            }
            console.log(value);
            break;
    }
}

const keys = document.querySelectorAll(".key");

keys.forEach(element => {
    element.addEventListener("click", calculator)
})