import { Request, Response } from "express";
import { getStoreDetails } from "../../mocks/stores/storesMock";

export const getStoreDetail = (req: Request, res: Response) => {
    const storeId = req.params.storeId;

    const store = getStoreDetails.find(
        (store) => store.storeId === storeId
    );

    if (!store) {
        return res.status(404).json({
            message: "店舗が見つかりません"
        });
    }
    res.json(store);
};