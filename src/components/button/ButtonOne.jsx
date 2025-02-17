import React from "react";
import Swal from "sweetalert2";
import "./button.scss";

const ButtonOne = () => {
  const contactAddress = "contact@example.com"; // Replace with your actual contact address

  const handleClick = () => {
    navigator.clipboard
      .writeText(contactAddress)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Contact address copied to clipboard!",
          icon: "success",
          background: "#0f0f0f", // Optional: dark background for cyberpunk style
          color: "#00ff99", // Optional: bright neon text color
          confirmButtonColor: "#543a9c", // Optional: matching cyberpunk color
          customClass: {
            title: "swal-title", // Optional: Add custom styles if needed
          },
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Failed to copy address: " + err,
          icon: "error",
          background: "#0f0f0f",
          color: "#ff0066", // Error color
          confirmButtonColor: "#543a9c",
        });
      });
  };

  return (
    <button className="btn-action" onClick={handleClick}>
      Copy Contact Address
    </button>
  );
};

export default ButtonOne;
