import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const Arrow = ({ isHovered }) => {
  return (
    <KeyboardArrowRightIcon
      sx={{
        transform: isHovered && "translateX(5px)",
        transition: "0.3s ease",
      }}
    />
  );
};
