import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";
import axios from "axios";
const BookingForm = ({ t, lang }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      message: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("This field cannot be empty"),
      phone: Yup.string()
        .required("This field cannot be empty")
        .matches(/^\d+$/, "Phone must be a number"),
      message: Yup.string().required("This field cannot be empty"),
      email: Yup.string()
        .required("This field cannot be empty")
        .email("enter avalid email address"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      //   //   alert("Form submitted successfully!");
      await axios
        .post("/user/sentMessage", values)
        .then(() => {
          // alert("Message sent successfully!");
          formik.resetForm();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });

  return (
    <div
      id="message"
      className="section"
      style={{
        background: "url(/images/bookNow.jpg) center center /cover  no-repeat",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            backgroundSize: "cover",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              color: "rgb(16, 129, 147)",
              marginBottom: "0px",
              width: "100%",
              fontFamily: "Playfair Display SC serif",
              fontWeight: "400",
              fontSize: "39.6px",
            }}
            variant="h4"
            gutterBottom
          >
            {lang === "en" ? "BOOK NOW! " : "أحجز الان "}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",

              color: "rgb(8, 55, 77)",
              fontWeight: "300",
              fontSize: "17px",
              paddingTop: "20px",
              paddingBottom: "20px",
              fontFamily: "Lato",
            }}
            variant="body1"
            gutterBottom
          >
            {lang === "ar"
              ? "اتصل بنا لحجز التذاكر الخاصة بك الآن! فريق الدعم لدينا متاح 24/7."
              : "Contact us to book your tickets now! Our support team is available 24/7."}
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              {/* Name Field */}
              <Grid item xs={12}>
                <TextField
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.575)",
                    borderRadius: "10px",
                  }}
                  fullWidth
                  id="name"
                  required
                  name="name"
                  label="Enter your name"
                  variant="outlined"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>

              {/* Phone Field */}
              <Grid item xs={12}>
                <TextField
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.575)",
                    borderRadius: "10px",
                  }}
                  fullWidth
                  id="phone"
                  required
                  name="phone"
                  label="Enter your phone"
                  variant="outlined"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.575)",
                    borderRadius: "10px",
                  }}
                  fullWidth
                  id="email"
                  required
                  name="email"
                  label="Enter your email"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              {/* Message Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.575)",
                    borderRadius: "10px",
                  }}
                  required
                  id="message"
                  name="message"
                  label="Enter your message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#fcb900",
                    "&:hover": { backgroundColor: "#e0a800" },
                  }}
                >
                  {lang === "en" ? "SEND" : "ارسال"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default BookingForm;
