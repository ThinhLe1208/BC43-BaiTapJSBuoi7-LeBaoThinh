// ============ Các hàm căn bản ====================

/**
 * Hàm kiểm tra điều kiện của dữ liệu nhập vào input
 * @param {*} input DOM element input
 * @param {*} type 'soNguyen' chỉ cho phép nhập số nguyên
 * @returns true khi thỏa hết điều kiện và false không thỏa 1 điều kiện
 */
function kiemTraInput(input, type) {
    if (input.value === '') {
        alert(`Vui lòng nhập thông tin ô ${input.placeholder}`);
        return false;
    }

    if (type === 'soNguyen') {
        if (!Number.isInteger(+input.value)) {
            alert(`Vui lòng nhập số nguyên ô ${input.placeholder}`);
            return false;
        } else {
            return true;
        }
    }

    return true;
}

/**
 * Hàm trả về mảng các số nguyên dương trong mảng
 * @param {*} arr mảng các số nguyên
 * @returns mảng các số nguyên dương
 */
function taoMangCacSoDuong(arr) {
    var mangSoDuong = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            mangSoDuong.push(arr[i]);
        }
    }

    return mangSoDuong;
}

/**
 * Hàm trả về mảng các số nguyên dương chẵn trong mảng
 * @param {*} arr mảng các số nguyên
 * @returns mảng các số nguyên dương chẵn
 */
function taoMangCacSoChan(arr) {
    var mangSoChan = [];

    for (var i = 0; i < arr.length; i++) {
        if (!(arr[i] % 2)) {
            mangSoChan.push(arr[i]);
        }
    }

    return mangSoChan;
}

/**
 * Hàm trả về số nhỏ nhất trong mảng
 * @param {*} arr mảng các số nguyên
 * @returns số nhỏ nhất trong mảng
 */
function timSoNhoNhat(arr) {
    var soNhoNhat = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < soNhoNhat) {
            soNhoNhat = arr[i];
        }
    }

    return soNhoNhat;
}

/**
 * Hàn tạo ra mảng mới khác địa chỉ tham chiếu
 * @param {*} arr mảng bất kỳ
 * @returns mảng mới khác địa chỉ tham chiếu
 */
function saoChepMang(arr) {
    var mangTruoc = [];

    for (var i = 0; i < arr.length; i++) {
        mangTruoc.push(arr[i]);
    }

    return mangTruoc;
}

/**
 * Hàm kiểm tra xem có phải là số nguyên tố
 * @param {*} num sô nguyên
 * @returns true khi là số nguyên tố và ngược lại
 */
function timSoNguyenTo(num) {
    if (num < 2) {
        return false;
    } else {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if ((num % i) === 0) {
                return false;
            }
        }
    }

    return true;
}

// ===================== App ======================

// Xư lý nhập số nguyên và xuất mảng
var themSoNguyenBtn = document.getElementById('them-so-nguyen');
var outputMang = document.getElementById('output-mang');

var mangSo = [];

outputMang.innerText = mangSo;

function themSo() {
    var soNguyen = +document.getElementById('so-nguyen').value;

    var inputHopLe = kiemTraInput(document.getElementById('so-nguyen'), 'soNguyen');

    if (inputHopLe) {
        mangSo.push(soNguyen);
        outputMang.innerText = mangSo;
    }
}

themSoNguyenBtn.onclick = themSo;


// 1. Tổng số dương
var tongDuongBtn = document.getElementById('tong-duong-btn');
var outputTongDuong = document.getElementById('output-tong-duong');

function xuLyTinhTongDuong() {
    if (mangSo.length === 0) {
        return alert('Vui lòng thêm ít nhất 1 giá trị vào mảng');
    }

    var mangSoDuong = taoMangCacSoDuong(mangSo);
    var tongSoDuong = 0;

    for (var i = 0; i < mangSoDuong.length; i++) {
        tongSoDuong += mangSoDuong[i];
    }

    outputTongDuong.innerText = 'Tổng số dương: ' + tongSoDuong;
}

tongDuongBtn.onclick = xuLyTinhTongDuong;


// 2. Đếm số dương
var demSoDuongBtn = document.getElementById('dem-so-duong-btn');
var outputDemSoDuong = document.getElementById('output-dem-so-duong');

function xyLyDemSoDuong() {
    if (mangSo.length === 0) {
        return alert('Vui lòng thêm ít nhất 1 giá trị vào mảng');
    }

    var demSoDuong = taoMangCacSoDuong(mangSo).length;

    outputDemSoDuong.innerText = 'Số dương: ' + demSoDuong;
}

demSoDuongBtn.onclick = xyLyDemSoDuong;


// 3. Tìm số nhỏ nhất
var soNhoNhatBtn = document.getElementById('so-nho-nhat-btn');
var outputSoNhoNhatDuong = document.getElementById('output-so-nho-nhat-duong');

function xuLyTimSoNhoNhat() {
    if (mangSo.length === 0) {
        return alert('Vui lòng thêm ít nhất 1 giá trị vào mảng');
    }

    var soNhoNhat = timSoNhoNhat(mangSo);

    outputSoNhoNhatDuong.innerText = 'Số nhỏ nhất: ' + soNhoNhat;
}

soNhoNhatBtn.onclick = xuLyTimSoNhoNhat;


// 4. Tìm số dương nhỏ nhất
var soDuongNhoNhatBtn = document.getElementById('so-duong-nho-nhat-btn');
var outputSoDuongNhoNhatDuong = document.getElementById('output-so-duong-nho-nhat-duong');

function xuLyTimSoDuongNhoNhat() {
    if (mangSo.length === 0) {
        return alert('Vui lòng thêm ít nhất 1 giá trị vào mảng');
    }

    var mangSoDuong = taoMangCacSoDuong(mangSo);

    if (mangSoDuong.length === 0) {
        outputSoDuongNhoNhatDuong.innerText = 'Không có số dương trong mảng';
    } else {
        var soNhoNhat = timSoNhoNhat(mangSoDuong);
        console.log(soNhoNhat);
        outputSoDuongNhoNhatDuong.innerText = 'Số dương nhỏ nhất: ' + soNhoNhat;
    }
}

soDuongNhoNhatBtn.onclick = xuLyTimSoDuongNhoNhat;


// 5. Tìm số chẵn cuối cùng
var soChanCuoiBtn = document.getElementById('so-chan-cuoi-btn');
var outputSoChanCuoi = document.getElementById('output-so-chan-cuoi');

function xuLyTimSoChanCuoi() {
    if (mangSo.length === 0) {
        return alert('Vui lòng thêm ít nhất 1 giá trị vào mảng');
    }

    var mangSoChan = taoMangCacSoChan(mangSo);

    if (mangSoChan.length === 0) {
        outputSoChanCuoi.innerText = -1;
    } else {
        var soChanCuoi = mangSoChan[mangSoChan.length - 1];
        outputSoChanCuoi.innerText = 'Số chẵn cuối cùng : ' + soChanCuoi;
    }
}

soChanCuoiBtn.onclick = xuLyTimSoChanCuoi;


// 6. Đổi chỗ
var doiChoBtn = document.getElementById('doi-cho-btn');
var outputDoiCho = document.getElementById('output-doi-cho');

function xuLyDoiCho() {
    if (mangSo.length < 2) {
        return alert('Vui lòng thêm ít nhất 2 giá trị vào mảng');
    }

    var index1 = +document.getElementById('vi-tri-1').value;
    var index2 = +document.getElementById('vi-tri-2').value;

    var input1HopLe = kiemTraInput(document.getElementById('vi-tri-1'), 'soNguyen');
    var input2HopLe = kiemTraInput(document.getElementById('vi-tri-2'), 'soNguyen');

    var mangTruoc = saoChepMang(mangSo);

    if (input1HopLe && input2HopLe) {
        if (index1 < 0 || index2 < 0 || index1 >= mangSo.length || index2 >= mangSo.length) {
            alert('Vị trí không tồn tại');
        } else {
            var giaTriTam = mangSo[index1];

            mangSo[index1] = mangSo[index2];
            mangSo[index2] = giaTriTam;

            outputDoiCho.innerText = 'Mảng trước khi đổi : ' + mangTruoc + '\n' + '> Mảng sau khi đổi : ' + mangSo;
            outputMang.innerText = mangSo;
        }
    }
}

doiChoBtn.onclick = xuLyDoiCho;


// 7. Sắp xếp tăng dần
var nhoDenLonBtn = document.getElementById('nho-den-lon-btn');
var outputNhoDenLon = document.getElementById('output-nho-den-lon');

function xuLyNhoDenLon() {
    if (mangSo.length === 0) {
        return alert('Vui lòng thêm ít nhất 1 giá trị vào mảng');
    }

    var mangTruoc = saoChepMang(mangSo);

    for (var i = 0; i < mangSo.length; i++) {
        for (var j = 0; j < mangSo.length - 1 - i; j++) {
            if (mangSo[j] > mangSo[j + 1]) {
                var giaTriTam = mangSo[j + 1];

                mangSo[j + 1] = mangSo[j];
                mangSo[j] = giaTriTam;
            }
        }
    }

    outputNhoDenLon.innerText = 'Mảng trước khi đổi : ' + mangTruoc + '\n' + '> Mảng sau khi đổi : ' + mangSo;
    outputMang.innerText = mangSo;
}

nhoDenLonBtn.onclick = xuLyNhoDenLon;


// 8. Tìm số nguyên tố đầu tiên
var soNguyenToBtn = document.getElementById('so-nguyen-to-btn');
var outputSoNguyenTo = document.getElementById('output-so-nguyen-to');

function xuLySoNguyenTo() {
    if (mangSo.length === 0) {
        return alert('Vui lòng thêm ít nhất 1 giá trị vào mảng');
    }

    var soNguyenTo;

    for (var i = 0; i < mangSo.length; i++) {

        if (timSoNguyenTo(mangSo[i])) {
            soNguyenTo = mangSo[i];
            break;
        }
    }

    if (soNguyenTo) {
        outputSoNguyenTo.innerText = 'Số nguyên tố đầu tiên: ' + soNguyenTo;
    } else {
        outputSoNguyenTo.innerText = -1;
    }
}

soNguyenToBtn.onclick = xuLySoNguyenTo;


// 9. Đếm số nguyên
var themSoThucBtn = document.getElementById('them-so-thuc-btn');
var demSoNguyenBtn = document.getElementById('dem-so-nguyen-btn');
var outputMangSoThuc = document.getElementById('output-mang-so-thuc');
var outputDemSoNguyen = document.getElementById('output-dem-so-nguyen');

var mangSoThuc = [];

function xuLyThemSoThuc() {
    var soThuc = +document.getElementById('so-thuc').value;

    var inputHopLe = kiemTraInput(document.getElementById('so-thuc'));

    if (inputHopLe) {
        mangSoThuc.push(soThuc);

        outputMangSoThuc.innerText = mangSoThuc;
    }
}

themSoThucBtn.onclick = xuLyThemSoThuc;

function xuLyDemSoNguyen() {
    if (mangSoThuc.length === 0) {
        return alert('Vui lòng thêm ít nhất 1 giá trị vào mảng');
    }

    var demSoNguyen = 0;

    for (var i = 0; i < mangSoThuc.length; i++) {
        if (Number.isInteger(mangSoThuc[i])) {
            demSoNguyen++;
        }
    }

    outputDemSoNguyen.innerText = 'Số nguyên : ' + demSoNguyen;
}

demSoNguyenBtn.onclick = xuLyDemSoNguyen;


// 10. So sánh số lượng số âm và dương
var soSanhBtn = document.getElementById('so-sanh-btn');
var outputSoSanh = document.getElementById('output-so-sanh');

function xuLySoSanh() {
    if (mangSo.length === 0) {
        return alert('Vui lòng thêm ít nhất 1 giá trị vào mảng');
    }

    var demSoDuong = 0;
    var demSoAm = 0;

    for (var i = 0; i < mangSo.length; i++) {
        if (mangSo[i] > 0) {
            demSoDuong++;
        } else if (mangSo[i] < 0) {
            demSoAm++;
        }
    }

    if (demSoDuong > demSoAm) {
        outputSoSanh.innerText = 'Số dương > Số âm';
    } else if (demSoDuong < demSoAm) {
        outputSoSanh.innerText = 'Số dương < Số âm';
    } else {
        outputSoSanh.innerText = 'Số dương = Số âm';
    }
}

soSanhBtn.onclick = xuLySoSanh;