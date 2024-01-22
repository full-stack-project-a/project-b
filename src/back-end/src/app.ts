import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';
import personalInfoRoutes from './routes/personalInfoRoutes';
import applicationRoutes from './routes/applicationRoutes';
import visaRoutes from './routes/visaRoutes';
import hrRoutes from './routes/hrRoutes';
import cors from 'cors';
require('dotenv').config();
const CookieParser = require('cookie-parser');

const app = express();

// 连接到MongoDB
mongoose.connect(process.env.MONGODB_URL!)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// CORS配置
const corsOptions = {
  origin: '*', // 指定接受请求的源
  credentials: true // 允许跨源请求发送凭证
};

app.use(cors(corsOptions));
app.use(CookieParser());
app.use(express.json());

// 路由中间件
app.use('/user', userRoutes);
app.use('/personalInfo', personalInfoRoutes);
app.use('/application', applicationRoutes);
app.use('/visa', visaRoutes);
app.use('/hr', hrRoutes);

// 处理不存在的路由
app.use((req, res, next) => {
  res.status(404).send('Sorry, that route does not exist.');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
