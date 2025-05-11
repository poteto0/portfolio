import { Hono } from "hono";
import { renderer } from "./renderer";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(
    <div style={{ textAlign: "center", marginTop: "5vh" }}>
      <h1>Mahiro Fukuda (@poteto0)</h1>
      <img
        src="https://avatars.githubusercontent.com/u/67512297"
        alt="icon"
        style={{
          borderRadius: "50%",
          width: "200px",
          height: "200px",
          margin: "20px 0",
        }}
      />
      <div>
        <h2>i.lab@FUJIFILM.inc</h2>
        <p> 1999.04.14 / web engineer / basketball</p>
      </div>
      <div>
        <h2> SNS </h2>
        <a href="https://github.com/poteto0">GitHub</a>
        <a href="https://jp.linkedin.com/in/%E7%9C%9F%E5%A4%A7-%E7%A6%8F%E7%94%B0-812129346">
          Linkdin
        </a>
        <a href="https://zenn.dev/poteto0">zenn</a>
      </div>
      <div>
        <h2> Service </h2>
        <a href="https://rc-thread.poteto-mahiro.com/">rip-city-thread</a>
        <h2> OSS </h2>
        <a href="https://github.com/poteto-go/poteto">Web Framework Poteto</a>
      </div>
    </div>
  );
});

export default app;
