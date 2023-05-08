import React from "react";
import { Route } from "react-router-dom";


import "./Home.scss";
import Message from "../../components/Message";

const Home = () => (
    <section className="home">
       <Message avatar='https://sun1-91.userapi.com/s/v1/if1/_yG_-GfCa_xNkaP86xGfbgFQt_oVOmwwyUWsJyritSNMjvPQdFYr8rovRlpiquS8zRQwdCKF.jpg?size=50x50&quality=96&crop=0,227,978,978&ava=1'
                text='Здарова, лохи' date='7 мая 2023 г. 18:02:33' />
    </section>
);

export default Home;