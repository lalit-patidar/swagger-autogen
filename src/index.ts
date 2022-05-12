import express from "express";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc, {SwaggerDefinition, Options} from "swagger-jsdoc";
import routes from "./routes"

const app = express();
app.use(express.json());

const swaggerOptions:Options = {
    swaggerDefinions:<SwaggerDefinition> {
        info: {
            title: "startup api",
            version: "1.0.0"
        }
    },
    apis: ["./routes*.ts"]
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.use(routes)


app.listen(1000, () => console.log("server is running at port 1000"))