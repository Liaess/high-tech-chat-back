import { App } from "./config/app";

const port = process.env.PORT || 4000;

export const app = new App();

app.init().then(()=> {
    app.server.listen(port, ()=> {
        console.log(`Server running on port ${port}`);
    })
})