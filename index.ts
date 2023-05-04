import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './src/components/router';
const PORT = 8092
const application = express();
application.use(express.json());
const corsConfig = {
  origin: '*',
  methods: '*',
};

application.use(cors(corsConfig));
application.use(helmet.xssFilter());

application.use('/', router);

application.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});