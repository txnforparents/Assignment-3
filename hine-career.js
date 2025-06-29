// Ẩn hiện nội dung của phần thông tin sự nghiệp
// chọn tất cả các phần tử có class là .toggle-btn. lặp qua từng nút trong danh sách
document.querySelectorAll(".toggle-btn").forEach((button) => {
  // Gắn một trình lắng nghe sự kiện vào mỗi nút. Khi nút được click, hàm bên trong sẽ được gọi.
  button.addEventListener("click", function () {
    // tìm phần tử cha gần nhất có class là .career-box => tìm phần tử con có class .toggle-content
    const detail = this.closest(".career-box").querySelector(".toggle-content");
    // Kiểm tra xem detail có đang ẩn không
    const isHidden = detail.classList.contains("hidden");

    // Bật/tắt class "hidden" cho phần tử detail
    detail.classList.toggle("hidden");
    this.textContent = isHidden ? "View Less" : "View More";
  });
});
