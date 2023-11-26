import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const Arrow = ({ isHovered }) => {
  return (
    <KeyboardArrowRightIcon
      sx={{
        transition: "0.3s ease",
        transform: isHovered && "translateX(5px)",
      }}
    />
  );
};
