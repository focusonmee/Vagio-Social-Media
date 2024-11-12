import { Card, Grid } from "@mui/material";
import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";

const Authentication = () => {
  return (
    <div>
      <Grid container>
        <Grid className="h-screen overflow-hidden" item xs={8}>
          <img
            className="h-full w-full"
            src="https://images.pexels.com/photos/1634275/pexels-photo-1634275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="login"
          />
        </Grid>
        <Grid item xs={4}>
          <div className="px-20 flex flex-col justify-center h-full">
            <Card className="card p-8">
              <div className="flex flex-col items-center mb-5 spay-y-1">
                <h1 className="logo text-center">Vagio Social</h1>
                <p className="text-center text-sm w-[70&]">
                  Kết nối với bạn bè và thế giới xung quanh bạn trên Vagio
                  Social.
                </p>
              </div>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
