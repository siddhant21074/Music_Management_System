import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import loginVideo from "D:/Siddhant/React/Music Management/Images and video/video1.mp4";
import img5 from "D:/Siddhant/React/Music Management/Images and video/img5.jpg";

export default function Login() {
    const navigate1 = useNavigate();
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            {/* Background image */}
            <img
                src={img5}

                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",

                }}
            ></img>

            {/* Overlay Box */}
            <div
                style={{
                    position: "absolute",
                    height: "600px",
                    width: "550px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#1D3557",
                    fontSize: "25px",
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                <h1 style={{ fontSize: 50, marginBottom: '5px', lineHeight: '1.2' }}>Welcome to </h1>
                <h1 style={{ fontSize: 75, marginTop: '0px' }}>RizMusic</h1>

                <form >

                    <label>Enter Email: </label>
                    <br />
                    <input
                        type="email"
                        name="email"

                        required
                        style={{ width: "70%", padding: "8px", margin: "5px 0", borderRadius: 10 }}
                    />
                    <br />
                    <label>Enter Password: </label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        required
                        style={{ width: "60%", padding: "8px", margin: "5px 0", borderRadius: 10 }}
                    />
                    <br />
                    <label>Confirm Password: </label>
                    <input
                        type="password"
                        name="password"
                        required
                        style={{ width: "60%", padding: "8px", margin: "5px 0", borderRadius: 10 }}
                    />
                    <br />
                    <button
                        type="submit"
                        style={{
                            backgroundColor: "#ff6600",
                            color: "white",
                            padding: "10px 20px",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "16px",
                            marginTop: "10px",
                            borderRadius: "5px"
                        }}
                    >
                        Login
                    </button>
                    <br />
                    <button type="submit"
                        style={{
                            backgroundColor: "#ff6600",
                            color: "white",
                            padding: "10px 20px",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "16px",
                            marginTop: "10px",
                            borderRadius: "5px"
                        }} onClick={() => { navigate1("/") }}>Back to Home</button>
                </form>
            </div>
        </div>
    );
}
