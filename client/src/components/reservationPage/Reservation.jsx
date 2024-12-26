import React from "react";
import Header from "../header/Header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  MenuItem,
  Container,
} from "@mui/material";
import axios from "axios";
import Footer from "../footer/Footer";
function reservation({ t, i18n, lang, setlang }) {
  console.log(i18n);
  const initialValues = {
    date: "",
    time: "",
    numberOfPeople: "",
    email: "",
    name: "",
    phone: "",
    notes: "",
  };
  const validationSchema = Yup.object({
    date: Yup.string().required("حقل التاريخ مطلوب"),
    time: Yup.string().required("حقل الوقت مطلوب"),
    numberOfPeople: Yup.number()
      .required("حقل عدد الأفراد مطلوب")
      .min(1, "يجب أن يكون على الأقل فرد واحد"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("حقل البريد الإلكتروني مطلوب"),
    name: Yup.string().required("حقل الاسم مطلوب"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "رقم الهاتف يجب أن يحتوي على أرقام فقط")
      .required("حقل رقم الهاتف مطلوب"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const { date, time, name, numberOfPeople, email, phone, notes } = values;

    // console.log("Form Values:", values);
    await axios
      .post("/user/sentreservation", {
        date: date.toString(),
        time: time.toString(),
        numPeople: numberOfPeople,
        fullName: name,
        email,
        phoneNumber: phone,
        notes,
      })
      .then(() => {
        resetForm();
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url('/images/reservation.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <Header
        sectionn={"true"}
        i18n={i18n}
        t={t}
        lang={lang}
        setlang={setlang}
      />
      <Container>
        <Box
          sx={{
            marginTop: "60px",

            height: "100vh",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              padding: 4,
              borderRadius: 2,
              boxShadow: 3,
              width: 400,
            }}
          >
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "rgb(16, 129, 147)",
                padding: "30px 10px",
                fontSize: "32px",
                textAlign: "center",
              }}
            >
              استمارة حجز
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange, handleBlur }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="date"
                        name="date"
                        label="تاريخ الرحلة *"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.date && Boolean(errors.date)}
                        helperText={touched.date && errors.date}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="time"
                        name="time"
                        label="الوقت *"
                        type="time"
                        InputLabelProps={{ shrink: true }}
                        value={values.time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.time && Boolean(errors.time)}
                        helperText={touched.time && errors.time}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="numberOfPeople"
                        name="numberOfPeople"
                        label="عدد الأفراد *"
                        select
                        value={values.numberOfPeople}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.numberOfPeople &&
                          Boolean(errors.numberOfPeople)
                        }
                        helperText={
                          touched.numberOfPeople && errors.numberOfPeople
                        }
                      >
                        {[1, 2, 3, 4, 5].map((number) => (
                          <MenuItem key={number} value={number}>
                            {number}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="البريد الإلكتروني *"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="الاسم *"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        label="رقم الهاتف *"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.phone && Boolean(errors.phone)}
                        helperText={touched.phone && errors.phone}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="notes"
                        name="notes"
                        label="ملاحظات"
                        multiline
                        rows={4}
                        value={values.notes}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ backgroundColor: "#FFA500", color: "white" }}
                      >
                        إرسال الطلب
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default reservation;
