import { Router } from "express";
import { getStoreDetail } from '../../controllers/stores/detailController';

const router = Router();

router.get("/:storeId", getStoreDetail);

export default router;