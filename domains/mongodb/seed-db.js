
const SeedDB = {
  user: {
    email: "admin@invitation.com",
    username: "admin",
    password: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2", //123qwe
    password_confirm: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2",
    role: "admin"
  },
  dataConfig: {
    male: {
      name: "Nguyễn Doãn Hiện",
      parent: {
        father: "Nguyễn Văn Hiền",
        mother: "Doãn Thị Thanh Thảo"
      },
      location: {
        text: "Lê Trọng Tấn - Sơn Kỳ - Tân Phú",
        map: "https://maps.app.goo.gl/ucAkG27UmvnXgPxT6"
      },
      time_start: {
        date: {
          lunar: {
            day: "26",
            month: "11",
            year: "2023"
          },
          day_of_week: "5",
          solar: {
            day: "17",
            month: "12",
            year: "2020"
          }
        },
        time: {
          hour: "10",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "Vietcombank",
        provider_number: "0171003465942",
        holder_name: "NGUYEN DOAN HIEN"
      }, {
        provider_name: "Techcombank",
        provider_number: "19037414507011",
        holder_name: "NGUYEN DOAN HIEN"
      }, {
        provider_name: "Momo",
        provider_number: "0967513425",
        holder_name: "NGUYEN DOAN HIEN"
      }, {
        provider_name: "Zalopay",
        provider_number: "0967513425",
        holder_name: "NGUYEN DOAN HIEN"
      }],
      email: "toilati123vn@gmail.com",
      phone: "0967513425",
      bg: '/assets/images/bg.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    female: {
      name: "Phan Anh Trúc",
      parent: {
        father: "Phan Văn Giàu (Cố phụ)",
        mother: "Phan Ngọc Hà"
      },
      location: {
        text: "Phạm Văn Chí - Phường 7 - Quận 6",
        map: "https://maps.app.goo.gl/w4pEKXi2TMAsKZnZA"
      },
      time_start: {
        date: {
          lunar: {
            day: "17",
            month: "12",
            year: "2020"
          },
          day_of_week: "5",
          solar: {
            day: "17",
            month: "12",
            year: "2020"
          }
        },
        time: {
          hour: "10",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "Techcombank",
        provider_number: "0171003457413",
        holder_name: "Phan Anh Truc"
      }, {
        provider_name: "Zalopay",
        provider_number: "0704569020",
        holder_name: "PHAN ANH TRUC"
      }, {
        provider_name: "Momo",
        provider_number: "0704569020",
        holder_name: "PHAN ANH TRUC"
      }],
      email: "anhtruc.phan.370@gmail.com",
      phone: "0704569020",
      bg: '/assets/images/bg.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    default: true
  }
};

module.exports = SeedDB;
