import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { homeSection } from '../data/HomeSection'
import parse from 'html-react-parser'
import { coursesSection } from '../data/CoursesSection.Jsx'
import { tutorsSection } from '../data/TutorsSection'
import { listTools } from '../data'
import '../styles/Home.css'
import '../styles/Partners.css'
import axios from 'axios'

function Home() {
   const [formData, setFormData] = useState({
    nama: '',
    email: '',
    alamat: '',
    nim: '',
    prodi: '',
    notelpon: '',
    komen: ''
  })

  const [pengunjung, setPengunjung] = useState([])
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    fetchPengunjung()
  }, [])

  const fetchPengunjung = async () => {
    try {
      const response = await axios.get('https://dimas-backend.onrender.com/pengunjung')
      setPengunjung(response.data)
    } catch (error) {
      console.error('Gagal mengambil data:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editId) {
        await axios.put(`https://dimas-backend.onrender.com/pengunjung/${editId}`, formData)
      } else {
        await axios.post('https://dimas-backend.onrender.com/pengunjung', formData)
      }
      fetchPengunjung()
      setFormData({
        nama: '',
        email: '',
        alamat: '',
        nim: '',
        prodi: '',
        notelpon: '',
        komen: ''
      })
      setEditId(null)
    } catch (error) {
      console.error('Gagal menyimpan data:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://dimas-backend.onrender.com/pengunjung/${id}`)
      fetchPengunjung()
    } catch (error) {
      console.error('Gagal menghapus data:', error)
    }
  }


  const handleEdit = (data) => {
    setFormData(data)
    setEditId(data.id)
  }

  return (
    <>
      <Navbar/>

      {/* home */}
      <section id="home">
        <div className="image-wrapper">
          <img src={parse(homeSection.image)} />
        </div>  
        <div>..</div>
        <div className="kolom">
          {parse(homeSection.content)}
        </div>
      </section>

      {/* course */}
      <div className='saru'>.</div><div className='saru'>.</div><div className='saru'>.</div><div className='saru'>.</div>
      <section id="courses">
        <div className="kolom1">
          {parse(coursesSection.content)}
        </div>
      </section>
      <div className='saru'>.</div><div className='saru'>.</div><div className='saru'>.</div><div className='saru'>.</div>

      {/* Tutors */}
      <section id="tutors">
        <div className="tengah">
          <div className="kolom">
            {parse(tutorsSection.content)}
            <div className="tools-box">
              {listTools.map((tool) => (
                <div className="custom-box" key={tool.nama}>
                  <div className="group">
                    <img
                      src={tool.gambar}
                      alt="Tools Image"
                      className="tool-image"
                    />
                  </div>
                  <div>
                    <h4 className="tool-name">{tool.nama}</h4>
                    <p className="tool-desc">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className='saru'>.</div><div className='saru'>.</div><div className='saru'>.</div><div className='saru'>.</div>

      {/* Partners */}
      <section id="partners">
        <div className="tengah">
          <div className="kolom">
            <div className='saru'>.</div><div className='saru'>.</div><div className='saru'>.</div><div>.</div>
            <h2>Partners</h2>
            <p className="kamu">Disamping ini adalah beberapa partners dan contact saya</p>
          </div>
        </div>

        <div className="partner-list-wrapper">
          <div className="partner-list">
            {[
              "https://img.freepik.com/premium-vector/university-campus-logo_1447-1793.jpg",
              "https://image.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-63.jpg",
              "https://image.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-62.jpg",
              "https://img.freepik.com/premium-vector/university-campus-logo_1447-1790.jpg",
              "https://image.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-64.jpg",
              "https://img.freepik.com/free-icon/university_318-104428.jpg",
              "https://img.freepik.com/free-vector/college-logo-template_23-2147504982.jpg",
              "https://img.freepik.com/free-vector/college-university-logo-template_23-2147504996.jpg"
            ].map((src, index) => (
              <div className="kartu-partner" key={index}>
                <img src={src} alt={`Partner ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="tools">
          <div className="footer">
            <div className="footer-section">
              <h3>Nama Lengkap</h3>
              <p>Dimas Febri Maulana Ishaq</p>
            </div>
            <div className="footer-section">
              <h3>About</h3>
              <p>Saya membangun web berbasis teknologi masa kini.</p>
            </div>
            <div className="footer-section">
              <h3>Addres</h3>
              <p>Jl. Laksda Adisucipto Sleman Yogyakarta</p>
              <p>Kode Pos: 57365</p>
            </div>
            <div className="footer-section">
              <h3>Social</h3>
              <p><b>YouTube:</b> Programming di RumahDimas</p>
            </div>
          </div>
        </div>
      </section>

      {/* DataBase */}
      <div className="contact mt-32 py-10" id='contact'>
        <div className='tools mt-32'>
          <h1 className='text-5xl/snug font-bold mb-4'>Data Base Pengunjung Website</h1>
          <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50'>
            Halo guys, terimakasih sudah mau berkunjung ke website saya. Silahkan kalau berkenan bisa bantu isi data diri anda dan masukan komentar buat website ya...
          </p>
        </div>

        <div className="flex flex-col items-center gap-20 mt-10">
          <h3 className="text-4xl text-center font-bold mt-5">Data Riwayat Pengunjung</h3>

          <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
              {editId ? 'Edit Data Pengunjung' : 'Formulir Pengunjung'}
            </h2>

            <div className="flex flex-col gap-8">
              <input name="nama" value={formData.nama} onChange={handleChange} placeholder="Nama Lengkap" className="text-xl px-6 py-5 rounded-xl border border-blue-300 shadow-sm w-full" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Alamat Email" className="text-xl px-6 py-5 rounded-xl border border-blue-300 shadow-sm w-full" required />
              <input name="alamat" value={formData.alamat} onChange={handleChange} placeholder="Alamat Lengkap" className="text-xl px-6 py-5 rounded-xl border border-blue-300 shadow-sm w-full" required />
              <div className="flex flex-col sm:flex-row gap-6">
                <input name="nim" value={formData.nim} onChange={handleChange} placeholder="NIM" className="text-xl px-6 py-5 rounded-xl border border-blue-300 shadow-sm w-full" required />
                <input name="prodi" value={formData.prodi} onChange={handleChange} placeholder="Prodi" className="text-xl px-6 py-5 rounded-xl border border-blue-300 shadow-sm w-full" required />
              </div>
              <input name="notelpon" value={formData.notelpon} onChange={handleChange} placeholder="Nomor Telepon" className="text-xl px-6 py-5 rounded-xl border border-blue-300 shadow-sm w-full" required />
              <div className="flex flex-col gap-2">
                <label htmlFor="komen" className="text-lg font-medium text-gray-700">Komentar</label>
                <textarea name="komen" id="komen" value={formData.komen} onChange={handleChange} rows="5" placeholder="Silakan masukkan komentar Anda..." className="text-xl px-6 py-5 rounded-xl border border-blue-300 shadow-sm resize-none w-full" required />
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-4 rounded-xl shadow-md w-full transition duration-300">
                {editId ? 'Simpan Perubahan' : 'Kirim Data'}
              </button>
            </div>
          </form>

          <div className="data-pengguna text-3xl font-bold mb-2">
            <h3>Data Pengunjung Website</h3>
          </div>

          <div className="mt-6 w-full max-w-4xl mx-auto">
            {pengunjung.map((item) => (
              <div key={item.id} className="p-4 border rounded-lg shadow mb-4">
                <h4 className="text-xl font-semibold">{item.nama}</h4>
                <p><b>Email:</b> {item.email}</p>
                <p><b>Alamat:</b> {item.alamat}</p>
                <p><b>NIM:</b> {item.nim} | <b>Prodi:</b> {item.prodi}</p>
                <p><b>No Telp:</b> {item.notelpon}</p>
                <p><b>Komentar:</b> {item.komen}</p>

                <div className="flex gap-4 mt-4">
                  <button onClick={() => handleEdit(item)} className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Hapus</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Home
