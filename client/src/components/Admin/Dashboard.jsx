import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Typography } from "@mui/material";
import { Container } from "@mui/system";
function Dashboard({ token }) {
  const [ShowMessages, setShowmMssages] = useState(true);

  const [message, setMessages] = useState([]);
  const [reservation, setreservation] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/admin/getAllMessages", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setMessages(response.data.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/admin/getAllreservations", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setreservation(response.data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#3f51b5",
              color: "#fff",
              borderRadius: "5px",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => setShowmMssages(false)}
          >
            show all reservation
          </Button>
          <Button
            sx={{
              backgroundColor: "#3f51b5",
              color: "#fff",
              borderRadius: "5px",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => setShowmMssages(true)}
          >
            show all messages
          </Button>
        </div>
        {ShowMessages ? (
          <>
            <Typography
              sx={{
                fontSize: "25px",
                marginTop: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              messages
            </Typography>
            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "30px",
                alignItems: "center",
              }}
            >
              {message.map((item) => {
                return (
                  <div
                    style={{
                      width: "300px",
                      margin: "20px",
                      padding: "20px",
                      border: "1px solid #ccc",
                      borderRadius: "10px",
                    }}
                    key={item._id}
                  >
                    <h3
                      style={{
                        padding: "0",
                        margin: "0",
                      }}
                    >
                      name :{item.name}
                    </h3>
                    <p>email : {item.email}</p>
                    <p>phone :{item.phoneNumber}</p>
                    <p>message date : {item.createdAt}</p>
                    <h4
                      style={{
                        padding: "0",
                        margin: "0",
                      }}
                    >
                      message : {item.message}
                    </h4>
                  </div>
                );
              })}
            </Box>
          </>
        ) : (
          <>
            <Typography
              sx={{
                fontSize: "25px",
                marginTop: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              reservation
            </Typography>
            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "30px",
                alignItems: "center",
              }}
            >
              {reservation.map((item) => {
                return (
                  <div
                    style={{
                      width: "300px",
                      margin: "20px",
                      padding: "20px",
                      border: "1px solid #ccc",
                      borderRadius: "10px",
                    }}
                    key={item._id}
                  >
                    <h3
                      style={{
                        padding: "0",
                        margin: "0",
                      }}
                    >
                      fullName :{item.fullName}
                    </h3>
                    <p>email : {item.email}</p>
                    <p>phone :{item.phoneNumber}</p>
                    <p>date : {item.date}</p>
                    <p>time : {item.time}</p>
                    <h4
                      style={{
                        padding: "0",
                        margin: "0",
                      }}
                    >
                      notes : {item.notes}
                    </h4>
                  </div>
                );
              })}
            </Box>
          </>
        )}
        {/* {data.map((item) => (
        <div
          style={{
            width: "300px",
            margin: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
          key={item._id}
        >
          <h3
            style={{
              padding: "0",
              margin: "0",
            }}
          >
            name :{item.name}
          </h3>
          <p>email : {item.email}</p>
          <p>phone :{item.phoneNumber}</p>
          <p>date : {item.createdAt}</p>
          <h4
            style={{
              padding: "0",
              margin: "0",
            }}
          >
            message : {item.message}
          </h4>
        </div>
      )) || <p>Loading...</p>} */}{" "}
      </Container>
    </>
  );
}

export default Dashboard;
