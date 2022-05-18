import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormScreen from "./screens/fromScreen";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<FormScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router