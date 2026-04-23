import logo from "../assets/logo.png";
export default function AuthLayout({ children }) {
  return (
    <div
      className="min-h-screen flex justify-center items-center relative"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-pink-50/80"></div>

      {/* content */}
      <div className="relative z-10 w-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
