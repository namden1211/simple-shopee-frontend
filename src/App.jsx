import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './shoppe.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dangky from './dangky'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='top'>
          <i className="fa-brands fa-shopify icontop"></i>
          <div className='chusobetop'>Sobe</div>
        </div>
        <div>
          <BrowserRouter>
          <Routes>
          <Route index element={<Dangky ></Dangky>} />
            <Route path="dangky" element={<Dangky />}/>
          </Routes>
          </BrowserRouter>
        </div>
        <div className='bottom'>
          <div className='chusobebottom'>Công ty TNHH Sobe</div>
          <div className='chugioithieubottom'>Địa chỉ: Tầng 4-5-6, Tòa nhà Màu cam, Xóm 1 Thôn Yên Nội, Xã Đồng Quang, Huyện Quốc Oai, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 0964043796 - Email: namden.1@gmail.com</div>
          <div className='chugioithieubottom'>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Phú Nam</div>
          <div className='chugioithieubottom'>Mã số doanh nghiệp: 02035431365 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 23/12/2024</div>
          <div className='chugioithieubottom'>© 2024 - Bản quyền thuộc về Công ty TNHH Sobe</div>
        </div>
      </div>
    </>
  )
}

export default App
