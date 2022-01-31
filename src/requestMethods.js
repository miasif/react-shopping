import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjE1NDllNWRjMTU2OTkzMzc2ZjAwZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzYyMDI0MCwiZXhwIjoxNjQzODc5NDQwfQ.Deyougw940C4HkurekIFs0VxJObe2PWXrO_HYcoWG3w";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
