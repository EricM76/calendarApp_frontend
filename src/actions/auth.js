import {fetchWidthToken, fetchWithoutToken} from '../helpers/fetch';


export const startRegister = (email, password, nameReg) => {

    return async (dispatch) => {

        try {

            const response = await fetchWithoutToken('auth/new', {
                email,
                password,
                name : nameReg
            }, 'POST')

            const result = await response.json();
            console.log(result)
            
        } catch (error) {
            
        }
    }

}