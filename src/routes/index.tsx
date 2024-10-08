import { Button } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Button>Teste</Button>} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
