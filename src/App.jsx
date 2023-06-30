import { useState } from "react";
import Bodys from "./components/body/Body";
import Footers from "./components/footer/footer";
import Headers from "./components/header/Header";
import Logins from "./components/modal/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  console.log(name);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Headers showModal={showModal} name ={name}/>
      <Bodys />
      <Footers />
      <Logins
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        callback={(msg, value) => {toast(msg), setName(value)}}
      />
      <ToastContainer />
    </>
  );
}

export default App;
