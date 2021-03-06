import axios from 'axios';

export const applyJob = (data) => {
    return {
        type: "APPLY",
        payload: data
    }
}

export const apply_job = (data) => {
    return dispatch => {
        axios.post('http://localhost:8082/apply', data)
            .then((res) => {
                if (res.data.errors) {
                    window.alert(JSON.stringify(res.data.messaage));
                    console.log("applied success")
                }
                else {
                    dispatch(applyJob(res.data));
                }
            }).catch((err) => {
                return err;
            })
    }
}


export const getapply_data = (data) => {
    return {
        type: "GET_APPLY",
        payload: data
    }
}

export const get_applyjob = (user_id) => {
    console.log(user_id)
    var url = `http://localhost:8082/apply/findapply/${user_id}`;
    return dispatch => {
        axios.get(url)
            .then((res) => {
                console.log(res)

                dispatch(getapply_data(res.data));
            }).catch((err) => {
                return err;
            })

    }
}
export const getapply_data_company = (data) => {
    return {
        type: "GET_APPLY_COMPANY",
        payload: data
    }
}

export const get_applyjob_company = (company_name) => {
    var url = `http://localhost:8082/applyn/${company_name}`;
    return dispatch => {
        axios.get(url)
            .then((res) => {
                dispatch(getapply_data_company(res.data));
            }).catch((err) => {
                return err;
            })

    }
}

export const getapply_data_userid = (data) => {
    return {
        type: "CHECK_APPLY",
        payload: data
    }
}

export const get_applyjob_user = (user_id) => {
    var url = `http://localhost:8082/apply/findapply/${user_id}`;
    return dispatch => {
        axios.get(url)
            .then((res) => {
                console.log(res.data);
                dispatch(getapply_data_userid(res.data));
            }).catch((err) => {
                return err;
            })

    }
}