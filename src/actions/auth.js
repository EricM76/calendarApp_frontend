import {fetchWidthToken, fetchWithoutToken} from '../helpers/fetch';
import { types } from '../types/types';


export const startRegister = (nameReg, email, password) => {

    return async (dispatch) => {

        try {

            const response = await fetchWithoutToken('auth/new', {
                email,
                password,
                name : nameReg
            }, 'POST')

            const result = await response.json();
            console.log(result);

            const {ok,token,uid, name, msg, errors} = result;

            if(ok){

                localStorage.setItem('token',token);

                dispatch(login({
                    uid,
                    name
                }))
            }
            
        } catch (error) {
            console.error
        }
    };

}

const login = (user) => ({
    type : types.authLogin,
    payload : user
})