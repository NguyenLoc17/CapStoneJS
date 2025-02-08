import { getEleId } from "./../controllers/main.js";

class Validation {
    checkEmpty(value, divId, mess) {
        if (value === "") {
            getEleId(divId).innerHTML = mess;
            getEleId(divId).style.display = "block";
            return false;
        }

        getEleId(divId).innerHTML = "";
        getEleId(divId).style.display = "none";
        return true;
    }

    checkEmptyNumber(value, divId, mess) {
        if (value === 0) {
            getEleId(divId).innerHTML = mess;
            getEleId(divId).style.display = "block";
            return false;
        }

        getEleId(divId).innerHTML = "";
        getEleId(divId).style.display = "none";
        return true;
    }

    checkNumberPrice(value, divId, mess) {
        const letter = /^[0-9]+$/;
        if (value.match(letter)) {
            getEleId(divId).innerHTML = "";
            getEleId(divId).style.display = "none";
            return true;
        }

        getEleId(divId).innerHTML = mess;
        getEleId(divId).style.display = "block";
        return false;
    }

    checkSelect(idSelect, divId, mess) {
        if (getEleId(idSelect).selectedIndex === 0) {
            getEleId(divId).innerHTML = mess;
            getEleId(divId).style.display = "block";
            return false;
        }

        getEleId(divId).innerHTML = "";
        getEleId(divId).style.display = "none";
        return true;
    }
}

export default Validation;
