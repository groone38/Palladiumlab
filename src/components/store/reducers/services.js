import {HOVER_NOT_SERVICES, HOVER_SERVICES} from "../action/actionTypes";

const initialState = {
    service: [
        {id: 1, text: 'Услуги по ремонту', open: false},
        {id: 2, text: 'Виды работ', open: false},
        {id: 3, text: 'Дизайн интерьера', open: false},
        {id: 4, text: 'Ремонт помещений', open: false},
    ]
}

export default function servicesReducer(state = initialState, action) {
    switch (action.type){
        case HOVER_SERVICES:
            return {
               ...state,
                service: state.service.map(item => {
                    if(item.id === action.id) {
                        return {...item, open: true}
                    }
                    return {...item}
                })
            }
        case HOVER_NOT_SERVICES:
            return {
                ...state,
                service: state.service.map(item => {
                    if(item.id === action.id) {
                        return {...item, open: false}
                    }
                    return {...item}
                })
            }
        default:
            return state
    }
}