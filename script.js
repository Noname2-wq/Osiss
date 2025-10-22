/* --- JAVASCRIPT FOR INTERACTIVITY & DATA --- */

// Data Anggota OSIS
const osisData = {
    inti: {
        title: "Inti OSIS (Ketua, Wakil, Sekretaris, Bendahara)",
        members: [
            "Ketua: Yamani",
            "Wakil Ketua 1 (Bidang kesiswaan, keagamaan dan spiritual): Muhammad Rafi'i",
            "Wakil Ketua 2 (Bidang pembinaan karakter, olahraga dan seni): Rusmawati",
            "Wakil Ketua 3 (Bidang humas, sosial masyarakat dan komunikasi): Annida",
            "Sekretaris 1: Misdah",
            "Sekretaris 2: Salamah",
            "Bendahara 1: Saniah",
            "Bendahara 2: Husnul Fatimah"
        ]
    },
    kesiswaan: {
        title: "Departemen Kesiswaan",
        members: ["Ketua: Muhammad ikhsan", "Anggota: Jumaidi", "Anggota: Ridani", "Anggota: Risa saputri", "Anggota: Nurma", "Anggota: Noor Khatimah", "Anggota: Nabela", "Anggota: Halisah"]
    },
    keagamaan: {
        title: "Departemen Keagamaan",
        members: ["Ketua: Nur Anisa", "Anggota: Ahmad ilmi", "Anggota: Rifa'i", "Anggota: Norbayati", "Anggota: Siti Khadijah", "Anggota: Fitri", "Anggota: Nurul aida", "Anggota: Nafis"]
    },
    pembinaan_karakter: {
        title: "Departemen Pembinaan Karakter",
        members: ["Ketua: Nor aina Azzahra", "Anggota: Hafis", "Anggota: Sarni", "Anggota: Auliya", "Anggota: Hilmah", "Anggota: Madina", "Anggota: Mahfuzatul aulia"]
    },
    olahraga_seni: {
        title: "Departemen Olahraga dan Seni",
        members: ["Ketua: Fahrul", "Anggota: Dayat", "Anggota: Erlina", "Anggota: Assyifa", "Anggota: Anisa fitri", "Anggota: Nor Aisya", "Anggota: Munawarah MP.B"]
    },
    humas_sosial: {
        title: "Departemen Humas Sosial Masyarakat dan Komunikasi",
        members: ["Ketua: Muhammad wafa", "Anggota: Rudi", "Anggota: Arbayu", "Anggota: Nazwa ameliya", "Anggota: Norhidayati", "Anggota: Raida", "Anggota: Nurin Shahifah", "Anggota: Saidah"]
    },
    sosial_kemasyarakatan: {
        title: "Departemen Kegiatan Sosial dan Kemasyarakatan",
         members: ["Ketua: Akhmad risky", "Anggota: Sauki", "Anggota: Netty Agustina", "Anggota: Abd.Kholiq", "Anggota: Rabiatul", "Anggota: Munawarah MP.A", "Anggota: Saidatul Kharimah"]
    },
     lingkungan: {
        title: "Departemen Lingkungan Hidup",
        members: ["Ketua: (Nama Ketua)", "Anggota: Proker dan Tugas Dikelola Oleh Departemen ini."]
    }
};

// Data Khusus untuk Kartu Dashboard
const dashboardData = {
    // Gabungan semua anggota (Termasuk anggota staf/biasa)
    all_members: {
        title: "Daftar Seluruh Anggota OSIS Aktif",
        get members() {
            let list = [];
            for (const key in osisData) {
                list.push(`--- ${osisData[key].title} ---`);
                list = list.concat(osisData[key].members);
            }
            // Membersihkan placeholder anggota/proker yang tidak valid
            return list.filter(m => m !== 'Anggota: Proker dan Tugas Dikelola Oleh Departemen ini.'); 
        }
    },
    // Hanya Pengurus Inti dan Ketua Departemen (Tanpa Anggota/Staf dan tanpa Pembina/BP Udin)
    inti_dan_ketua: {
        title: "Pengurus Inti OSIS & Kepala Departemen",
        get members() {
            const list = [];
            // 1. Inti OSIS (Ketua, Wakil, Sekretaris, Bendahara)
            list.push("--- Pengurus Inti & Administrasi ---");
            list.push(...osisData.inti.members);

            // 2. Ketua Departemen
            list.push("--- Kepala Departemen Teknis ---");
            // Ambil nama Ketua dari setiap departemen non-inti
            for (const key in osisData) {
                if (key !== 'inti' && osisData[key].members.length > 0) {
                    const ketua = osisData[key].members[0];
                    if (ketua.startsWith("Ketua:")) {
                        list.push(`${osisData[key].title}: ${ketua.replace("Ketua:", "").trim()}`);
                    }
                }
            }
            return list;
        }
    },
    // Hanya Nama Departemen (Untuk kartu Departemen di Dashboard)
    department_names: {
        title: "Nama Seluruh Bidang/Departemen OSIS",
        get members() {
            const list = [];
            list.push("--- Pengurus Inti & Administrasi ---");
            list.push(osisData.inti.title);
            list.push("--- Departemen Teknis ---");
            for (const key in osisData) {
                if (key !== 'inti') {
                    list.push(osisData[key].title);
                }
            }
            return list;
        }
    }
};

// Data Program Kerja (ProkerData)
const prokerData = {
    kesiswaan: {
        title: "Program Kerja Departemen Kesiswaan (Contoh)",
        content: "<h4>Detail Proker Kesiswaan (Contoh)</h4><p>Karena detail proker kesiswaan tidak terlampir, berikut adalah contoh yang bisa Anda ganti:</p><ul><li>**Program:** Penegakan Tata Tertib Harian (Harian)</li><li>**Program:** Sosialisasi Anti-Bullying (Bulanan)</li><li>**Program:** Latihan Baris Berbaris untuk Upacara (Mingguan)</li></ul>"
    },
    keagamaan: {
        title: "Tugas & Program Kerja Departemen Keagamaan",
        content: `
            <h4>Tugas Keagamaan:</h4>
            <p>Tugas-tugas utama meliputi: membuat jadwal literasi dan piket musholla (Siti Khadijah), membuat jadwal habsyi burdah (Nurul), membuat data tidak membaca literasi/tadarus per kelas (Rifa'i dan Jazuli), mengirim data tidak membaca Al-Qur'an dan data haid ke wali kelas (Laila), dan membuat data habsy burdah SMKS Shabit Hamsan.</p>
            <h4>Arahan Khusus:</h4>
            <ul>
                <li>**Siti Khadijah:** Membuat jadwal sesuai kondisi dan piket musholla pertanggal, harus sebelum tanggal 30 September.</li>
                <li>**Nurul:** Mengolah jadwal habsy sebelum tanggal jadwal yang lama habis. Kelas 12 tidak usah dibuat karena akan pra-PKL dan magang.</li>
                <li>**Rifa'i & Jazuli:** Mengolah data di Excel/Spreadsheet dan mencatat setiap hari.</li>
                <li>**Laila:** Data literasi dan Qur'an dikirim ke wali kelas 2 kali seminggu (Selasa & Kamis) per PDF, data haid cukup dikirim ke grup departemen.</li>
            </ul>
        `
    },
    pembinaan_karakter: {
        title: "Topoksi & Program Kerja Departemen Pembinaan Karakter (DPK)",
        content: `
            <h4>Tugas Pokok:</h4>
            <ol>
                <li>Membina dan mengembangkan karakter siswa di sekolah.</li>
                <li>Membangun budaya disiplin dalam kehidupan sehari-hari.</li>
                <li>Mengawasi pelaksanaan tata tertib sekolah.</li>
            </ol>
            <h4>Fungsi:</h4>
            <ul>
                <li>Merencanakan program pembinaan karakter.</li>
                <li>Melaksanakan kegiatan pembentukan karakter.</li>
                <li>Memantau kedisiplinan siswa.</li>
                <li>Mengevaluasi perkembangan karakter siswa.</li>
                <li>Melaporkan hasil program pembinaan karakter.</li>
            </ul>
            <h4>Program Kerja Harian:</h4>
            <p>Pembiasaan Disiplin: Datang tepat waktu, berpakaian rapi, dan menjaga kebersihan.</p>
            <h4>Indikator Keberhasilan:</h4>
            <p>Kedisiplinan, berkurangnya keterlambatan, menurunnya pelanggaran, meningkatnya kepedulian, dan berkurangnya konflik.</p>
        `
    },
    olahraga_seni: {
        title: "Program Kerja Departemen Olahraga dan Seni (Contoh)",
        content: "<h4>Detail Proker Olahraga dan Seni (Contoh)</h4><p>Karena detail proker olahraga dan seni tidak terlampir, berikut adalah contoh yang bisa Anda ganti:</p><ul><li>**Program:** Class Meeting (Semesteran)</li><li>**Program:** Pentas Seni Akhir Tahun (Tahunan)</li><li>**Program:** Latihan rutin ekstrakurikuler (Mingguan)</li></ul>"
    },
    humas_sosial: {
        title: "Tugas & Program Kerja Departemen Humas Sosial Masyarakat dan Komunikasi",
        content: `
            <h4>Tugas Humas:</h4>
            <ol>
                <li>Menyusun dan menyebarkan informasi tentang kegiatan sekolah.</li>
                <li>Melakukan dokumentasi dan publikasi di setiap kegiatan.</li>
                <li>Melakukan protokoler.</li>
                <li>Bertanggung jawab atas penyampaian informasi kepada publik.</li>
                <li>Melakukan monitoring, merekam, dan mengevaluasi tanggapan publik.</li>
                <li>Mengumpulkan dan mengolah data tentang kegiatan sekolah.</li>
                <li>Mengelola akun media sosial sekolah dan organisasi.</li>
                <li>Membuat pengumuman dan poster.</li>
                <li>Membantu mengembangkan sekolah.</li>
            </ol>
            <h4>Program Kerja:</h4>
            <ul>
                <li>**Harian:** Mendokumentasi dan publikasi kegiatan sekolah.</li>
                <li>**Bulanan:** Evaluasi program kerja bulanan.</li>
            </ul>
            <h4>Indikator Keberhasilan:</h4>
            <p>Terbitnya keberhasilan publikasi dan adanya laporan evaluasi bulanan.</p>
        `
    },
    lingkungan: {
        title: "Tugas & Program Kerja Departemen Lingkungan Hidup",
        content: `
            <h4>Tugas Pokok:</h4>
            <ol>
                <li>Memastikan lingkungan sekolah yang bersih dari sampah.</li>
                <li>Melaksanakan penghijauan dan perindangan lingkungan sekolah.</li>
                <li>Mengkoordinasikan kegiatan lingkungan hidup di sekolah.</li>
                <li>Meningkatkan kesadaran siswa akan pentingnya lingkungan hidup.</li>
            </ol>
            <h4>Program Kerja & Waktu:</h4>
            <ul>
                <li>Merawat taman di lingkungan sekolah (Harian).</li>
                <li>Mengumpulkan hasil pemilahan sampah dari setiap kelas (Mingguan).</li>
                <li>Mencacah hasil pemilahan sampah (Bulanan).</li>
                <li>Gotong royong membersihkan lingkungan sekolah (Bulanan).</li>
                <li>Membuat materi edukasi terkait isu-isu lingkungan terkini (Bulanan).</li>
                <li>Mengadakan kampanye lingkungan hidup (penyuluhan/seminar) (Semester).</li>
                <li>Penghijauan (Penanaman pohon) (Semester).</li>
                <li>Pengadaan event lingkungan hidup (pengolahan limbah; pembuatan kompos; desain poster lingkungan) (Semester).</li>
            </ul>
        `
    }
};

// Fungsi Navigasi Tab
function openTab(tabName, element) {
    const tabcontent = document.getElementsByClassName("content-section");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    const tablinks = document.getElementsByClassName("nav-button");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    element.classList.add("active");
}

// Fungsi untuk menghitung total anggota
function calculateTotalMembers() {
    let total = 0;
    for (const key in osisData) {
        let count = osisData[key].members.length;
        if (key === 'lingkungan' && osisData[key].members.includes("Anggota: Proker dan Tugas Dikelola Oleh Departemen ini.")) {
            count--; // Mengurangi Anggota placeholder
        }
        total += count;
    }
    return total;
}

// Fungsi untuk menghitung Pengurus Inti & Ketua Departemen
function calculateIntiAndKetuaCount() {
    // Inti (Ketua, 3 Wakil, 2 Sek, 2 Bend) = 8
    let count = osisData.inti.members.length; 
    // Tambah Ketua Departemen (Ada 7 Departemen non-inti, masing-masing 1 Ketua)
    count += 7; 
    return count;
}

// Fungsi yang menampilkan modal dengan animasi urutan (Digunakan oleh Dashboard Card & Struktur Card)
function openModalWithAnimation(key) {
    // Pilih data dari osisData (untuk Struktur) atau dashboardData (untuk Dashboard)
    const data = osisData[key] || dashboardData[key];
    if (!data) return;

    const modal = document.getElementById("memberModal");
    const modalTitle = document.getElementById("memberModalTitle");
    const modalMemberList = document.getElementById("modalMemberList");

    modalTitle.textContent = data.title;
    modalMemberList.innerHTML = ''; // Kosongkan daftar

    // Tampilkan modal terlebih dahulu
    modal.style.display = "block"; 

    // Isi daftar anggota dengan animasi berurutan
    data.members.forEach((member, index) => {
        const li = document.createElement('li');
        li.innerHTML = member; 
        li.style.animationDelay = `${index * 0.05}s`; // Jeda 50ms per item
        li.style.opacity = 0; // Pastikan opacity awal 0
        
        // Styling khusus untuk pemisah (judul departemen)
        if (member.startsWith("---")) {
            li.style.fontWeight = 'bold';
            li.style.marginTop = '15px';
            li.style.color = 'var(--primary-color)';
            li.style.borderBottom = '3px double var(--accent-color)';
        }
        
        modalMemberList.appendChild(li);
    });
}

// Fungsi untuk membuka modal Proker (Dibiarkan sama)
function openProkerModal(departmentKey) {
    const modal = document.getElementById("prokerModal");
    const modalTitle = document.getElementById("prokerModalTitle");
    const modalContent = document.getElementById("prokerDetailContent");
    
    const deptData = prokerData[departmentKey];
    if (!deptData) return;

    modalTitle.textContent = deptData.title;
    modalContent.innerHTML = deptData.content; 

    modal.style.display = "block";
}


function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    const memberModal = document.getElementById("memberModal");
    const prokerModal = document.getElementById("prokerModal");
    
    if (event.target == memberModal) { closeModal('memberModal'); }
    if (event.target == prokerModal) { closeModal('prokerModal'); }
}

// Initialize Function (Dipanggil saat dokumen selesai dimuat)
document.addEventListener('DOMContentLoaded', function() {
    // 1. Inisialisasi Dashboard Data
    const totalAnggota = calculateTotalMembers();
    document.getElementById('anggotaCount').textContent = totalAnggota;
    document.getElementById('intiCount').textContent = calculateIntiAndKetuaCount();
    document.getElementById('deptCount').textContent = Object.keys(osisData).length; // Total Inti + 7 Dept
    
    // 2. Generate 50 placeholder image items for documentation
    const docGrid = document.querySelector('#dokumentasi .documentation-grid');
    if (docGrid) {
        for (let i = 1; i <= 50; i++) {
            const item = document.createElement('div');
            item.className = 'doc-item';
            // PENTING: Menggunakan path 'images/placeholder-X.jpg'
            item.innerHTML = `
                <img src="images/placeholder-${i % 6 + 1}.jpg" alt="Kegiatan OSIS #${i}"> 
                <div class="doc-caption">Kegiatan OSIS #${i}</div>
            `;
            docGrid.appendChild(item);
        }
    }
    
    // 3. Set default tab (Dashboard)
    openTab('dashboard', document.querySelector('.nav-button.active'));
});
