import App from './app';
import IndexRoute from './routes/index.route';
import UserRoute from './routes/user.route';
import WriteRoute from './routes/write.route';

const app: App = new App([new UserRoute(), new IndexRoute(), new WriteRoute()]);
app.listen();
