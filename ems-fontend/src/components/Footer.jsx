const Footer = () => {
    return (
      <footer
        style={{
          backgroundColor: "#121212",
          color: "white",
          textAlign: "center",
          padding: "20px",
          fontSize: "16px",
          fontFamily: "Arial, sans-serif",
          width: "100%",
          position: "fixed", // Stays at the bottom
          bottom: "0",
          left: "0",
        }}
      >
        <p style={{ margin: "0" }}>&copy; 2025 Your Website. All Rights Reserved.</p>
        <div style={{ marginTop: "10px" }}>
          <a href="#" style={{ color: "#00bcd4", textDecoration: "none", margin: "0 10px" }}>
            Privacy Policy
          </a>
          {" | "}
          <a href="#" style={{ color: "#00bcd4", textDecoration: "none", margin: "0 10px" }}>
            Terms of Service
          </a>
          {" | "}
          <a href="#" style={{ color: "#00bcd4", textDecoration: "none", margin: "0 10px" }}>
            Contact Us
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  