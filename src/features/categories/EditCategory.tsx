import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategoryById } from "./categorySlice";
import { CategoryForm } from "./components/CategoryForm";

export const CategoryEdit = () => {
  const id = useParams().id || "";
  const [isdisabled, setIsdisabled] = useState(false);

  const category = useAppSelector((state) => selectCategoryById(state, id));

  const handleChange = (e: any) => {};
  const handleToggle = (e: any) => {};

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Category Edit</Typography>
          </Box>
        </Box>

        <CategoryForm
          category={category}
          isdisabled={isdisabled}
          handleChange={handleChange}
          isLoading={false}
          onSubmit={() => {}}
          handleToggle={handleToggle}
        />
      </Paper>
    </Box>
  );
};
