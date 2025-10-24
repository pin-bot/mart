function tambahTugas() {
    // 1. Ambil nilai dari input
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    // Pastikan input tidak kosong
    if (taskText === "") {
        alert("Mohon masukkan nama tugas.");
        return;
    }

    // 2. Buat elemen <li> baru
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // 3. Tambahkan ke daftar (<ul>)
    const taskList = document.getElementById('taskList');
    taskList.appendChild(listItem);

    // 4. Kosongkan input
    input.value = '';

    // Bonus: Tambahkan fungsi hapus/selesai saat diklik
    listItem.addEventListener('click', function() {
        // Toggle class 'done' atau hapus elemen
        listItem.classList.toggle('done'); 
        // Anda juga bisa menggantinya dengan: listItem.remove();
    });
}
// Catatan: Anda perlu menambahkan sedikit CSS untuk style 'done'
