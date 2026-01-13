import { Request, Response } from 'express';
import { featureData } from '../../mocks/home/homeMock';

const getFeatured = (req: Request, res: Response) => {
    try {
        // --- 1. 正常終了時の返信処理を追加 ---
        res.json(featureData);

    } catch (error) {
        // --- 2. エラー処理は維持 ---
        console.error('特集データ取得中にエラー:', error);
        res.status(500).json({
            status: 'error',
            message: 'データの取得中にサーバー内部エラーが発生しました。'
        });
    }
};

export default { getFeatured };