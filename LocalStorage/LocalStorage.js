

let buttonData = document.getElementById('buttonBlock')
buttonData.addEventListener('click', function () {
    let NameVal = document.getElementById('NameData').value
    let AgeVal = document.getElementById('AgeValidation').value
    let passVal = document.getElementById('PasswordVal').value
    let emailVal = document.getElementById('emailvalidInp').value
    let genderValidMale = document.getElementById('maleRadio').checked
    let genderValidFemale = document.getElementById('femaleRadio').checked
    let agreeValidationVal = document.getElementById('agreeCheck').checked
    let EducationSSLC = document.getElementById('sslcInput').checked
    let EducationPUC = document.getElementById('PUCInput').checked
    let EducationBE = document.getElementById('BEInput').checked
    let statesValueSelect = document.getElementById('selectNameValue').value

    {
        let usernameValid = toValidBlankUserName(NameVal)
        let ageVal = toValidBlankAge(AgeVal)
        let passwVal = toValidBlankPass(passVal)
        let emailValidation = toValidBlankEmail(emailVal)
        let genderValidationGender = toValidBlankGender(genderValidMale, genderValidFemale)
        let checkBoxValidation = toValidBlankAgreeCheckbox(agreeValidationVal)
        let educationValidationVerify = toValidEducation(EducationSSLC, EducationPUC, EducationBE)
        let statesValidationVerify = toValidStates(statesValueSelect)
        function toValidBlankUserName(val) {
            const empty = /^$/
            const ele = document.getElementById('toShowError')
            if (empty.test(val)) {
                ele.innerText = '**Username cannot be blank'
                ele.style.color = 'red'
                return false
            }
            else {
                validUser(val)
                return true
            }
        }

        function toValidBlankAge(val) {
            const empty = /^$/
            const innerValueOfAge = document.getElementById('ageShowError')
            if (empty.test(val)) {
                innerValueOfAge.innerText = '**Age cannot be Empty'
                innerValueOfAge.style.color = 'red'
                return false
            }
            else {
                validAge(val)

                return true
            }
        }
        function toValidBlankPass(val) {
            const empty = /^$/
            const innerValueOfpass = document.getElementById('toShowpassError')

            if (empty.test(val)) {
                innerValueOfpass.innerText = '**password cannot be Empty'
                innerValueOfpass.style.color = 'red'
                return false

            }
            else {
                validPass(val)
                return true

            }

        }
        function toValidBlankEmail(val) {
            const empty = /^$/
            const innerValueOfEmail = document.getElementById('toShowEmailError')
            if (empty.test(val)) {
                innerValueOfEmail.innerText = '**Email cannot be Empty'
                innerValueOfEmail.style.color = 'red'
                return false

            }
            else {
                toValidEmail(val)

                return true
            }

        }
        function toValidBlankGender(val, val1) {
            const toPrintInnerVal = document.getElementById('toShowRadioError')
            if (val === false && val1 === false) {
                toPrintInnerVal.innerText = '**selection is mandatory'
                toPrintInnerVal.style.color = 'red'
                toPrintInnerVal.style.display = 'block'
                return false

            }
            else {
                toPrintInnerVal.innerText = ''

                return true

            }

        }
        function toValidBlankAgreeCheckbox(val) {
            const eleDisplay = document.getElementById('toShowCheckBoxError')
            if (val === false) {
                eleDisplay.innerText = '**Kindly agree through the terms and conditions'
                eleDisplay.style.color = 'red'
                return false
            }
            else {
                eleDisplay.innerText = ''
                return true
            }

        }
        //final alert
        if (usernameValid && ageVal && passwVal && emailValidation && genderValidationGender && checkBoxValidation && educationValidationVerify && statesValidationVerify) {

            toCreateDynamicTables()
        }
        else {
            alert('datas are invalid')

        }

    }
    function toCreateDynamicTables() {
        let EducationSSLCdisp = document.getElementById('sslcInput').checked
        let EducationPUCdisp = document.getElementById('PUCInput').checked
        const selectStateValue = document.getElementById('selectNameValue').value
        let MaleOrFemale;
        if (genderValidMale === true || genderValidFemale === false) {
            
            MaleOrFemale = 'Male'
        }
        else {
            MaleOrFemale = 'Female'
        }
        
        let EducationValue
        if (EducationSSLCdisp === true) {
            EducationValue = 'SSLC'
        } else if (EducationPUCdisp === true) {
            EducationValue = 'PUC'
        } else {
            EducationValue = 'BE'
        }
        const localStorObj={
            NameValues:`${NameVal}`,
            passwordValues:`${passVal}`,
            AgeValues:`${AgeVal}`,
            emailValues:`${emailVal}`,
            genderValues:`${MaleOrFemale}`,
            statesValues:`${selectStateValue}`,
            educationValues:`${EducationValue}`
        }
        const converted=JSON.stringify(localStorObj)
        setItem(converted)
        function setItem(val) {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount)+ 1;
            } else {
                localStorage.clickcount = 1;
            }
            localStorage.setItem("storingValue",val)
            const reterivedVal=localStorage.getItem('storingValue')
            console.log(reterivedVal);
            const gotValueJS=JSON.parse(reterivedVal)
            myDynamicValues(gotValueJS)
        }
    }
})
function myDynamicValues(gotValueJS) {
    
    const displayTable = document.getElementById('dynamicTable')
    const insertRowtr = displayTable.insertRow(1)
    insertRowtr.innerHTML = `<td>${gotValueJS.NameValues}</td><td>${gotValueJS.passwordValues}</td><td>${gotValueJS.AgeValues}</td><td>${gotValueJS.emailValues}</td><td>${gotValueJS.genderValues}</td><td>${gotValueJS.statesValues}</td><td>${gotValueJS.educationValues}</td>`
}

function validUser(input) {
    const letters = /^[A-Za-z]+$/

    if (letters.test(input)) {
        showError(true)

        return true
    } else {
        showError(false)
        return false
    }
}

function showError(bool) {
    const ele = document.getElementById('toShowError')
    const toShowInnerele = document.getElementById('NameData')
    if (bool === false) {
        ele.innerText = 'only characters are allowed'
        ele.style.color = 'red'
        toShowInnerele.style.border = '2px solid red'
        toShowInnerele.style.display = 'block'
        return false
    }

    else {
        ele.innerText = ''
        toShowInnerele.style.border = '1px solid black'
        return true
    }
}
function validAge(input) {

    if ((input > 0 && input < 120)) {

        ageShowError(true)
        return true
    }
    else {
        ageShowError(false)
        return false
    }
}
function ageShowError(ageRes) {
    const innerValueOfAge = document.getElementById('ageShowError')
    const toShowBorderOfAge = document.getElementById('AgeValidation')
    if (ageRes === false) {
        innerValueOfAge.innerText = 'please enter valid age between 0-150'
        innerValueOfAge.style.color = 'red'
        toShowBorderOfAge.style.border = '2px solid red'
        toShowBorderOfAge.style.display = 'block'
        return false
    }
    else {
        innerValueOfAge.innerText = ''
        toShowBorderOfAge.style.border = '1px solid black'
        return true
    }
}
//password
function validPass(inpval) {
    const valid = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/

    if (valid.test(inpval)) {

        PassShowError(true)
        return true
    }
    else {
        PassShowError(false)
        return false
    }
}

function PassShowError(passErrorVal) {
    const innerValueOfpass = document.getElementById('toShowpassError')
    let toShowBorderOfPass = document.getElementById('PasswordVal')
    if (passErrorVal === false) {
        innerValueOfpass.innerText = 'please enter password in valid format'
        innerValueOfpass.style.color = 'red'
        toShowBorderOfPass.style.border = '2px solid red'
        toShowBorderOfPass.style.display = 'block'
        return false
    }
    else {

        innerValueOfpass.innerText = ''
        toShowBorderOfPass.style.border = '1px solid black'
        return true
    }
}

//email
function toValidEmail(inp) {
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (valid.test(inp)) {
        emailShowError(true)
        return true
    }
    else {
        emailShowError(false)
        return false
    }

}
function emailShowError(boolVal) {
    const innerValueOfEmail = document.getElementById('toShowEmailError')
    const emailBorder = document.getElementById('emailvalidInp')
    if (boolVal === false) {
        innerValueOfEmail.innerText = 'please enter valid email'
        innerValueOfEmail.style.color = 'red'
        emailBorder.style.border = '2px solid red'
        emailBorder.style.display = 'block'
        return false

    }
    else {
        innerValueOfEmail.innerText = ''
        emailBorder.style.border = '1px solid black'
        return true

    }
}

function toValidEducation(sslc, puc, BE) {
    let spanEduError = document.getElementById('toShowEducationDetailsError')
    if (sslc === false && puc === false && BE === false) {
        spanEduError.innerHTML = '**Education Details are Mandatory'
        spanEduError.style.color = 'red'
        return false
    }
    else {
        spanEduError.innerHTML = ''
        spanEduError.style.display = 'none'
        return true
    }
}

function toValidStates(value) {
    let statesSpanErr = document.getElementById('toShowStatesError')
    if (value === 'empty') {
        statesSpanErr.innerHTML = '**State Selection is Mandatory'
        statesSpanErr.style.color = 'red'
        return false

    } else {
        statesSpanErr.innerHTML = ''
        statesSpanErr.style.display = 'none'
        return true

    }
}
function resetButton() {
    const spanValue = document.getElementsByTagName('span')
    for (i = 0; i < spanValue.length; i++) {
        spanValue[i].innerText = ''
    }

}