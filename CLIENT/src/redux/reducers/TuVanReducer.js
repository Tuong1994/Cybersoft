const stateDefault = {
    thongTinLienHe: {}
}

export const TuVanReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "THONG_TIN_LIEN_HE": {
            let thongTin = { ...state.thongTinLienHe };
            thongTin = action.thongTinLienHe
            state.thongTinLienHe = thongTin;
            return { ...state }
        }
        default:
            return { ...state }
    }
}