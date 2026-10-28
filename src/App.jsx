import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResumeGenerate from "./pages/ResumeGenerate";
import ResumeDetails from "./pages/ResumeDetails";
import AllDownloads from "./pages/AllDownloads";
import SingleResume from "./pages/SingleResume";
import AllResumes from "./pages/AllResumes";
import PNF from "./pages/PNF";
import Home from "./pages/Home";
import { ToastContainer, Zoom } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeGenerate />} />
        <Route path="/resume-details" element={<ResumeDetails />} />
        <Route path="/all-resumes" element={<AllResumes />} />
        <Route path="/all-downloads" element={<AllDownloads />} />
        <Route path="/resumes/:id" element={<SingleResume />} />
        <Route path="/*" element={<PNF />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </>
  );
}

export default App;
