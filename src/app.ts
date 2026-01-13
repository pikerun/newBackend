import express, { Request, Response } from 'express';
import homeRoutes from './routes/home/home';
import detailRoutes from './routes/stores/detail';

const app = express();
const port = 3000;

// トップページ (http://localhost:3000) にアクセスしたときの処理
app.get('/api', (req: Request, res: Response) => {
    res.send('Express is working!');
});

app.use(homeRoutes);
app.use('/stores', detailRoutes);


// サーバーを起動して待機する
app.listen(port, () => {
    console.log(`サーバーが起動しました: http://localhost:${port}`);
});

